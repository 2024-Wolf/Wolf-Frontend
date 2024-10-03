import React, { useState, useEffect, useRef } from 'react';

const WebSocketClient = () => {
  const [message, setMessage] = useState('');
  const [chatLog, setChatLog] = useState([]);
  const webSocketRef = useRef(null);

  // WebSocket 서버와 연결 설정
  useEffect(() => {
    // WebSocket 연결
    webSocketRef.current = new WebSocket('ws://localhost:8080');

    webSocketRef.current.onopen = () => {
      console.log('WebSocket 연결 성공');
    };

    webSocketRef.current.onmessage = (event) => {
      // 서버에서 메시지를 받을 때마다 chatLog에 추가
      setChatLog((prevLog) => [...prevLog, event.data]);
    };

    webSocketRef.current.onclose = () => {
      console.log('WebSocket 연결 종료');
    };

    return () => {
      if (webSocketRef.current) {
        webSocketRef.current.close();
      }
    };
  }, []);

  // 메시지 전송 함수 _  메시지 전송 후 input 초기화
  const sendMessage = () => {
    if (message.trim() !== '') {
      webSocketRef.current.send(message);
      setMessage('');
    }
  };

  return (
    <div>
      <h1>WebSocket 채팅</h1>
      <div>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="메시지를 입력하세요"
        />
        <button onClick={sendMessage}>전송</button>
      </div>
      <div>
        <h2>채팅 로그</h2>
        <ul>
          {chatLog.map((chatMessage, index) => (
            <li key={index}>{chatMessage}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WebSocketClient;
