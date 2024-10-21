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

export const AlarmModalContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isAlarmOpen',
})`
  display: ${({ isAlarmOpen }) => (isAlarmOpen ? 'fixed' : 'none')};
  position: absolute;
  min-width: 350px;
  max-width: 90vw; /* 최대 너비 조정 */
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  right: 0px;
  top: calc(100% + 10px);
  background-color: #fff;
  border-radius: 12px;
  padding: 20px;
  overflow-y: auto; /* 내용이 길어질 경우 스크롤 가능 */

  @media (max-width: 768px) {
    min-width: 330px;
  }

  @media (max-width: 576px) {
    min-width: 270px;
    right: -50px;
  }

  @media (max-width: 376px) {
    min-width: 200px;
  }
  
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

export const OtherAlramItem = styled(AlramItem)`
  &:hover {
    background-color: transparent; 
    transform: none; 
  }
`;

const AlramPreview = ({ notifications, isAlarmOpen, onNotificationClick, onAllNotificationClick, profileData }) => {
  const [unreadCount, setUnreadCount] = useState(notifications.length);
  const navigate = useNavigate();


  // const [newAlarmsPreview, setNewAlarmsPreview] = useState(
  //   alarmsPreviewData ? alarmsPreviewData.map(data => ({
  //     alertContent: data?.alertContent || '',
  //     alertLink: data?.alertLink || '',
  //     alertTime: data?.alertTime || '',
  //   })) : [{
  //     alertContent: '',
  //     alertLink: '',
  //     alertTime: '',
  //   }]);
  useEffect(() => {
  }, [notifications]);
  const calculateDaysAgo = (notificationDate) => {
    const currentDate = new Date();
    const dateDiff = Math.floor((currentDate - new Date(notificationDate)) / (1000 * 60 * 60 * 24));
    return dateDiff === 0 ? '오늘' : `${dateDiff}일 전`;
  };

  const getFormattedAlertContent = (content, nickname) => {
    return content.replace(/{nickname}/g, nickname).replace(/<br\s*\/?>/g, '\n');
  };

  const handleNotificationClick = (alertId, alertLink) => {
    onNotificationClick(alertId, alertLink);
  };

  const handleAllNotificationClick = () => {
    onAllNotificationClick();
  }

  if (!notifications || notifications.length === 0) {
    return (
      <AlarmModalContainer isAlarmOpen={isAlarmOpen}>
        <AlramTitle>알림</AlramTitle>
        <AlramContent>
          <div>새로운 알림이 없습니다.</div>
        </AlramContent>
        <AlramFooter onClick={() => navigate('/user')}>
          전체 알림 보기
        </AlramFooter>
      </AlarmModalContainer>
    );
  }

  const displayedNotifications = Array.isArray(notifications) && notifications.length > 0
    ? notifications.slice(0, 5)
    : []; // 최대 5개 알림 표시
  const hasMoreNotifications = notifications.length > 5;

  return (
    <AlarmModalContainer isAlarmOpen={isAlarmOpen}>
      <AlramTitle>알림</AlramTitle>
      <AlramHeader>읽지 않은 알림 ({notifications.length})</AlramHeader>
      {displayedNotifications.map((notification) => (
        <AlramItem key={notification.alertId} onClick={() => handleNotificationClick(notification.alertId, notification.alertLink)}>
          <AlramContent>
            <AlramImg>
              <span role="img" aria-label="notification">🔔</span>
              <strong>{notification.alertType + '알림'}</strong>
            </AlramImg>
            <AlramDate>{calculateDaysAgo(notification.alertTime)}</AlramDate>
          </AlramContent>
          <AlramText>
            {getFormattedAlertContent(notification.alertContent, profileData.nickname)}
          </AlramText>
        </AlramItem>
      ))}
      {hasMoreNotifications && (
        <OtherAlramItem>
          <AlramText>{notifications.length - 5}개의 기타 알림이 있습니다.</AlramText>
        </OtherAlramItem>
      )}
      <AlramFooter onClick={() => handleAllNotificationClick()}>
        전체 알림 보기
      </AlramFooter>
    </AlarmModalContainer>
  );
};

export default AlramPreview;
