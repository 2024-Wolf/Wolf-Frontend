import styled from 'styled-components';
import { MeetingContainer3, VideoContainer, VideoWrapper, ParticipantList, ParticipantItem, ControlBar, ControlButton } from "../../GlobalStyledComponents";

import React, { useState, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

const MeetingWindowView = styled.div`
  width: 100%;
  max-height: 400px;
  video {
    border-radius: 10px;
  }
`;

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const MessageList = styled.div`
  border: 1px solid #ccc;
  padding: 5px;
  height: 100px;
  overflow-y: auto;
  margin-bottom: 10px;
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
  const userId = useRef(uuidv4());

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

        // 참가자 추가 메시지 전송
        const joinMessage = {
          type: 'participant-update',
          participants: [{ id: userId.current, isMicOn, isCameraOn }]
        };
        socket.current.send(JSON.stringify(joinMessage));
      } catch (err) {
        console.error('Error accessing media devices:', err);
      }
    };
    startVideoCall();

    return () => {
      // 스트림 종료
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [isMicOn, isCameraOn]);

  // 카메라 전환
  const toggleCamera = () => {
    if (stream) {
      const videoTrack = stream.getVideoTracks()[0];
      videoTrack.enabled = !videoTrack.enabled;
      setIsCameraOn(videoTrack.enabled);

      const updateMessage = {
        type: 'participant-update',
        participants: [{ id: userId.current, isMicOn, isCameraOn: videoTrack.enabled }]
      };
      socket.current.send(JSON.stringify(updateMessage));
    }
  };

  // 마이크 전환
  const toggleMic = () => {
    if (stream) {
      const audioTracks = stream.getAudioTracks();

      if (audioTracks.length > 0) {
        const audioTrack = audioTracks[0];
        audioTrack.enabled = !audioTrack.enabled;
        setIsMicOn(audioTrack.enabled);

        const updateMessage = {
          type: 'participant-update',
          participants: [{ id: userId.current, isMicOn: audioTrack.enabled, isCameraOn }]
        };
        socket.current.send(JSON.stringify(updateMessage));
      } else {
        console.error('No audio track found');
      }
    }
  };

  // 채팅 메시지 전송
  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const chatMessage = {
        type: 'chat',
        author: userId.current, // 사용자 ID로 전송
        message: newMessage.trim()
      };
      socket.current.send(JSON.stringify(chatMessage));
      setChatMessages((prevMessages) => [...prevMessages, chatMessage]); // 메시지 목록에 추가
      setNewMessage(''); // 입력란 초기화
    }
  };

  return (
    <div>
      {/* 화상회의 화면 */}
      <MeetingWindowView>
        <video ref={localVideoRef} autoPlay playsInline style={{ width: '100%', height: 'auto' }} />
      </MeetingWindowView>

      {/* 카메라 및 마이크 컨트롤 */}
      <div>
        <button onClick={toggleCamera}>
          {isCameraOn ? (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-camera-video-fill" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2z" />
              </svg>
              카메라 켜기
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-camera-video-off-fill" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M10.961 12.365a2 2 0 0 0 .522-1.103l3.11 1.382A1 1 0 0 0 16 11.731V4.269a1 1 0 0 0-1.406-.913l-3.111 1.382A2 2 0 0 0 9.5 3H4.272zm-10.114-9A2 2 0 0 0 0 5v6a2 2 0 0 0 2 2h5.728zm9.746 11.925-10-14 .814-.58 10 14z" />
              </svg>
              카메라 끄기
            </>
          )}
        </button>
        <button onClick={toggleMic}>
          {isMicOn ? (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mic-fill" viewBox="0 0 16 16">
                <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0z" />
                <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5" />
              </svg>
              마이크 켜기
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mic-mute-fill" viewBox="0 0 16 16">
                <path d="M13 8c0 .564-.094 1.107-.266 1.613l-.814-.814A4 4 0 0 0 12 8V7a.5.5 0 0 1 1 0zm-5 4c.818 0 1.578-.245 2.212-.667l.718.719a5 5 0 0 1-2.43.923V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 1 0v1a4 4 0 0 0 4 4m3-9v4.879L5.158 2.037A3.001 3.001 0 0 1 11 3" />
                <path d="M9.486 10.607 5 6.12V8a3 3 0 0 0 4.486 2.607m-7.84-9.253 12 12 .708-.708-12-12z" />
              </svg>
              마이크 끄기
            </>
          )}
        </button>
      </div>

      {/* 참가자 목록 */}
      <ParticipantList>
        {participants.map((participant) => (
          <ParticipantItem key={participant.id}>
            {participant.id} {participant.isCameraOn ? '(카메라 켜짐)' : '(카메라 꺼짐)'} {participant.isMicOn ? '(마이크 켜짐)' : '(마이크 꺼짐)'}
          </ParticipantItem>
        ))}
      </ParticipantList>

      {/* 채팅 기능 */}
      <ChatContainer>
        <MessageList>
          {chatMessages.map((chatMessage, index) => (
            <div key={index}>
              <strong>{chatMessage.author}: </strong>{chatMessage.message}
            </div>
          ))}
        </MessageList>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="메시지 입력..."
        />
        <button onClick={handleSendMessage}>전송</button>
      </ChatContainer>
    </div>
  );
};

export default MeetingWindow;
