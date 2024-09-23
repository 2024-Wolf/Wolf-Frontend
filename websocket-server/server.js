// 서버 시작 : node server.js

const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
  console.log('New client connected');

  ws.on('message', (message) => {
    try {
      const parsedMessage = JSON.parse(message);  // JSON으로 메시지 파싱
      console.log('Received message:', parsedMessage);

      // 받은 메시지를 모든 클라이언트에 브로드캐스트
      wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify(parsedMessage));  // 메시지를 JSON으로 변환하여 보냄
        }
      });
    } catch (error) {
      console.error('Error parsing message:', error);
    }
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

console.log('WebSocket server is running on ws://localhost:8080');
