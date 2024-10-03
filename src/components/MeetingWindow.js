/* 
웹소켓 서버 설치 
 1) node.js 설치 확인
 2) websocket-server 디렉토리 생성 (react 상위 디렉토리에 따로 생성)
 3) npm init -y  이후 npm install ws (websocket-server 해당 경로에서 웹소켓 라이브러리 설치)
 4) server.js 작성 or pull
*/

import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

const MeetingContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: row;
  justify-content: space-between;
`;

const VideoContainer = styled.div`
  flex: 3;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 10px;
  background-color: #f0f0f0;
  justify-content: center;
  align-items: center;
`;

const VideoWrapper = styled.div`
  width: 100%;
  height: 200px;
  background-color: #333;
  position: relative;
`;

const ParticipantList = styled.div`
  flex: 1;
  padding: 10px;
  background-color: #f9f9f9;
  border-left: 2px solid #ddd;
`;

const ParticipantItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const ControlBar = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 20px;
  background-color: #fff;
`;

const ControlButton = styled.button`
  padding: 10px 20px;
  background-color: ${(props) => (props.active ? '#6c63ff' : '#ccc')};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #574dff;
  }
    
`;

const MeetingWindow = () => {
  const localVideoRef = useRef(null);
  const socket = useRef(null);
  const [stream, setStream] = useState(null);
  const [isCameraOn, setIsCameraOn] = useState(true);
  const [isMicOn, setIsMicOn] = useState(true);
  const [participants, setParticipants] = useState([]);
  const [chatMessages, setChatMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const userId = useRef(uuidv4());  // 사용자 고유ID

// WebSocket 연결 
  useEffect(() => {
    socket.current = new WebSocket('ws://localhost:8080');

    socket.current.onopen = () => {
      console.log('Connected to WebSocket server');
    };

    socket.current.onmessage = (event) => {
      try {
        const message = JSON.parse(event.data);

// 참가자 목록 업데이트
        if (message.type === 'participant-update') {
          setParticipants(message.participants);
        }

// 채팅 메시지 업데이트
        if (message.type === 'chat') {
          setChatMessages((prevMessages) => [...prevMessages, message]);
        }
      } catch (error) {
        console.error('Error parsing message:', error);
      }
    };

    return () => {
      socket.current.close();
    };
  }, []);

  useEffect(() => {
    const startVideoCall = async () => {
      try {
        const localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        setStream(localStream);
        if (localVideoRef.current) {
          localVideoRef.current.srcObject = localStream;
        }

// 서버에 참가자 추가 메시지 보내기
      const joinMessage = { type: 'participant-update', participants: [{ id: userId.current, isMicOn, isCameraOn }] };
      socket.current.send(JSON.stringify(joinMessage));
    } catch (err) {
      console.error('Error accessing media devices:', err);
    }
  };
    startVideoCall();

    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [isMicOn, isCameraOn]);

// 카메라 켜기/끄기
  const toggleCamera = () => {
    if (stream) {
      const videoTrack = stream.getVideoTracks()[0];
      videoTrack.enabled = !videoTrack.enabled;
      setIsCameraOn(videoTrack.enabled);

      const updateMessage = { type: 'participant-update', participants: [{ id: userId.current, isMicOn, isCameraOn: videoTrack.enabled }] };
      socket.current.send(JSON.stringify(updateMessage));
    }
  };

// 마이크 켜기/끄기
  const toggleMic = () => {
    if (stream) {
      const audioTrack = stream.getAudioTracks()[0];
      audioTrack.enabled = !audioTrack.enabled;
      setIsMicOn(audioTrack.enabled);

      const updateMessage = { type: 'participant-update', participants: [{ id: userId.current, isMicOn: audioTrack.enabled, isCameraOn }] };
      socket.current.send(JSON.stringify(updateMessage));
    }
  };

// 채팅 메시지 보내기
  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const chatMessage = { type: 'chat', author: '나', message: newMessage };
      socket.current.send(JSON.stringify(chatMessage));
      setNewMessage('');
    }
  };

  return (
    <div>
      {/* 화상회의 화면 */}
      <div>
        <video ref={localVideoRef} autoPlay playsInline style={{ width: '100%', height: 'auto' }} />
      </div>

      {/* 카메라 및 마이크 컨트롤 */}
      <div>
        <button onClick={toggleCamera}>{isCameraOn ? '카메라 끄기' : '카메라 켜기'}</button>
        <button onClick={toggleMic}>{isMicOn ? '마이크 끄기' : '마이크 켜기'}</button>
      </div>

      {/* 참가자 목록 */}
      <div>
        <h3>참가자 목록</h3>
        {participants.map((participant) => (
          <div key={participant.id}>
            <span>{participant.id}</span>
            <span>{participant.isMicOn ? '🔊' : '🔇'}</span>
            <span>{participant.isCameraOn ? '🎥' : '📷'}</span>
          </div>
        ))}
      </div>

      {/* 채팅 영역 */}
      <div>
        <h3>채팅</h3>
        <div style={{ maxHeight: '300px', overflowY: 'auto', border: '1px solid #ccc', padding: '10px' }}>
          {chatMessages.map((msg, index) => (
            <div key={index}>
              <strong>{msg.author}</strong>: {msg.message}
            </div>
          ))}
        </div>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="메시지를 입력하세요"
        />
        <button onClick={handleSendMessage}>전송</button>
      </div>
    </div>
  );
};

export default MeetingWindow;