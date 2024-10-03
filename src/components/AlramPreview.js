import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Styled Components
export const AlramFooter = styled.div`
  margin-top: 15px;
  text-align: right;
  font-size: 10px;
  color: #666;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const AlarmModalContainer = styled.div`
  display: ${props => (props.isAlarmOpen ? 'fixed' : 'none')};
  position: absolute;
  min-width: 350px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  right: 0px;
  top: calc(100% + 10px);
  background-color: #fff;
  border-radius: 12px;
  padding: 20px;
`;

export const AlramDate = styled.div`
  font-size: 10px;
  color: #999;
`;

export const AlramTitle = styled.div`
  font-weight: bold;
  font-size: 15px;
  margin-bottom: 20px;
  text-align: left; 
`;

export const AlramText = styled.div`
  font-size: 12px;
  margin-top: 5px; 
  margin-left: 25px;
`;

export const AlramHeader = styled.div`
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 15px;
  text-align: left; 
`;

export const AlramItem = styled.div`
  padding: 10px;
  border-bottom: 1px solid #eee;
  font-size: 14px;
  line-height: 1.6;
  display: flex;
  flex-direction: column; 

  &:hover {
    background-color: #f5f5f5; /* hover 시 배경색 변경 */
    transform: scale(1.02); /* hover 시 약간 확대 */
    transition: background-color 0.3s, transform 0.3s; /* 부드러운 전환 효과 */
  }
`;

export const AlramImg = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  gap: 5px; 
`;

export const AlramContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px; 
`;

const AlramPreview = ({ notifications, setNotifications, isAlarmOpen, onNotificationClick }) => {
  const [unreadCount, setUnreadCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const unread = notifications.filter(notification => notification.is_read === '0').length;
    setUnreadCount(unread);
  }, [notifications]);

  const calculateDaysAgo = (notificationDate) => {
    const currentDate = new Date();
    const dateDiff = Math.floor((currentDate - new Date(notificationDate)) / (1000 * 60 * 60 * 24));
    return dateDiff === 0 ? '오늘' : `${dateDiff}일 전`;
  };

  const unreadNotifications = notifications.filter(notification => notification.is_read === '0');

  const getFormattedAlertContent = (content, nickname) => {
    return content.replace(/{nickname}/g, nickname).replace(/<br\s*\/?>/g, '\n');
  };

  const handleNotificationClick = (alertId) => {
    onNotificationClick(alertId); // 부모 컴포넌트의 핸들러 호출
  };

  if (!Array.isArray(unreadNotifications) || unreadNotifications.length === 0) {
    return (
      <AlarmModalContainer isAlarmOpen={isAlarmOpen}>
        <AlramTitle>알림</AlramTitle>
        <AlramContent>
          <div>새로운 알림이 없습니다.</div>
        </AlramContent>
        <AlramFooter onClick={() => alert('전체 알림 페이지로 이동합니다.')}>
          전체 알림 보기
        </AlramFooter>
      </AlarmModalContainer>
    );
  }

  return (
    <AlarmModalContainer isAlarmOpen={isAlarmOpen}>
      <AlramTitle>알림</AlramTitle>
      <AlramHeader>읽지 않은 알림 ({unreadCount})</AlramHeader>
      {unreadNotifications.map((notification) => (
        <AlramItem key={notification.alert_id} onClick={() => handleNotificationClick(notification.alert_id)}>
          <AlramContent>
            <AlramImg>
              <span role="img" aria-label="notification">🔔</span>
              <strong>{notification.group_post_id ? '그룹 알림' : '회원 알림'}</strong>
            </AlramImg>
            <AlramDate>{calculateDaysAgo(notification.alert_date)}</AlramDate>
          </AlramContent>
          <AlramText>
            {getFormattedAlertContent(notification.alert_content, notification.nickname)}
          </AlramText>
        </AlramItem>
      ))}
      <AlramFooter onClick={() => navigate('/mypage')}>
        전체 알림 보기
      </AlramFooter>
    </AlarmModalContainer>
  );
};

export default AlramPreview;
