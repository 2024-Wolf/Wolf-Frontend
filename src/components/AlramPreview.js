import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 350px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;
  z-index: 1000;
`;

const AlramTitle = styled.div`
  font-weight: bold;
  font-size: 15px;
  margin-bottom: 20px;
  text-align: left; 
`;

const AlramHeader = styled.div`
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 15px;
  text-align: left; 
`;

const AlramItem = styled.div`
  padding: 10px;
  border-bottom: 1px solid #eee;
  font-size: 14px;
  line-height: 1.6;
  display: flex;
  flex-direction: column; 
`;

const AlramContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px; 
`;

const AlramImg = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  gap: 5px; 
`;

const AlramText = styled.div`
  font-size: 12px;
  margin-top: 5px; 
  margin-left: 25px;
`;

const AlramDate = styled.div`
  font-size: 10px;
  color: #999;
`;

const AlramFooter = styled.div`
  margin-top: 15px;
  text-align: right;
  font-size: 10px;
  color: #666;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;


const AlramPreview = ({ notifications, userId }) => {
  const [unreadCount, setUnreadCount] = useState(0);

// 읽지 않은 알림의 ()안에 숫자 카운트 , 모든 알림을 읽지 않은 것으로 가정
  useEffect(() => {
    const unread = notifications.length; 
    setUnreadCount(unread);
  }, [notifications]);

  const calculateDaysAgo = (notificationDate) => {
    const currentDate = new Date();
    const dateDiff = Math.floor((currentDate - new Date(notificationDate)) / (1000 * 60 * 60 * 24)); 
    return dateDiff === 0 ? '오늘' : `${dateDiff}일 전`;
  };

  return (
    <ModalContainer>
      {/* Alram 제목 */}
      <AlramTitle>알림</AlramTitle>
      
      {/* Alram 상당 */}
      <AlramHeader>읽지 않은 알림 ({unreadCount})</AlramHeader>
      {notifications.map((notification, index) => (
        <AlramItem key={index}>

          {/* 아이콘, Wolf 알림, 날짜 */}
          <AlramContent>
            <AlramImg>
              <span role="img" aria-label="notification">🔔</span>
              <strong>Wolf 알림</strong>
            </AlramImg>
            <AlramDate>{calculateDaysAgo(notification.date)}</AlramDate>
          </AlramContent>

          {/* Alram 텍스트 */}
          <AlramText>
            {userId} 님, 만나서 반가워요 👋🏻 <br />
            ??명의 ??들이 {userId}님에 대해 알고 싶대요! <br />
            지금 프로필을 작성하고 팀 매칭률을 올려볼까요?
          </AlramText>
        </AlramItem>
      ))}

      {/* 전체 알림 상세 페이지 이동 */}
      <AlramFooter onClick={() => alert('전체 알림 페이지로 이동합니다.')}>
        전체 알림 보기
      </AlramFooter>
    </ModalContainer>
  );
};

export default AlramPreview;



// 테스트

/* import React from 'react';
import AlramPreview from './Components/AlramPreview';

const notifications = [
  { id: 1, date: '2024-09-18' }, 
  { id: 2, date: '2024-09-15' },
  { id: 3, date: '2024-09-10' },
];

function App() {
  return (
    <div>
      <h1>테스트 페이지</h1>
      <AlramPreview notifications={notifications} userId="gahyun00" />
    </div>
  );
}

export default App; */