import styled from 'styled-components';
import { ModalContainer3, AlramTitle, AlramHeader, AlramItem, AlramContent, AlramImg, AlramText, AlramDate, AlramFooter } from "./GlobalStyledComponents";

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const AlramPreview = ({ notifications, userId, isAlarmOpen }) => {
  const [unreadCount, setUnreadCount] = useState(0);
  const navigate = useNavigate();

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

  if (notifications == null | !Array.isArray(notifications)) {
    // notifications이 null이거나 배열이 아니라면
    return (
      <ModalContainer3>
        {/* Alram 제목 */}
        <AlramTitle>알림</AlramTitle>

        < div > 알림이 없습니다.</div >

        {/* 전체 알림 상세 페이지 이동 */}
        <AlramFooter onClick={() => alert('전체 알림 페이지로 이동합니다.')}>
          전체 알림 보기
        </AlramFooter>
      </ModalContainer3>
    )
  }

  return (
    <ModalContainer3 isAlarmOpen={isAlarmOpen}>
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
      <AlramFooter onClick={() => navigate('/mypage')}>
        전체 알림 보기
      </AlramFooter>
    </ModalContainer3>
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