import styled from 'styled-components';
import { UserWrapper, DropdownContent, DropdownItem, DisplayNoneDropdownItem } from "../GlobalStyledComponents";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BellIcon from '../Icon/BellIcon';
import DropdownIcon from '../Icon/DropdownIcon';
import AlramPreview from '../AlramPreview';
import HeaderLogginButton from "../Button/HeaderLogginButton";

export const UserProfileContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 4px 15px;
  gap: 10px;
  border-radius: 20px;
  width: 166.15px;
  height: 35px;
`;

export const ProfileIcon = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
`;

export const DropdownContainer = styled.div`
  position: relative;
`;

function HeaderLogin({ isLoggedIn, openModal, offLogin, notifications, setNotifications }) {
    const [isAlarmOpen, setIsAlarmOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navigate = useNavigate();

    // 알림 클릭 시 처리하는 함수
    const handleNotificationClick = (alertId) => {
        // 알림 상태를 업데이트 (is_read를 1로 변경하고 목록에서 삭제)
        setNotifications(prevNotifications =>
            prevNotifications.filter(notification => notification.alert_id !== alertId)
        );
        // 알림 클릭 시 특정 페이지로 이동 (예시)
        navigate(`/user/${alertId}`);
    };

    const handleClick = (e) => {
        if (!isLoggedIn) {
            openModal();
        } else {
            const action = e.currentTarget.getAttribute('dataAction');
            if (action === 'bell') {
                setIsDropdownOpen(false);
                setIsAlarmOpen(prev => !prev);
            } else if (action === 'profile') {
                navigate('/user');
            } else if (action === 'dropdown') {
                setIsAlarmOpen(false);
                setIsDropdownOpen(prev => !prev);
            }
        }
    };

    const handleItemClick = (item) => {
        navigate(item);
        setIsDropdownOpen(false);
    };

    return (
        <>
            {isLoggedIn ? (
                <>
                    <UserProfileContainer>
                        <DropdownContainer>
                            {/* 벨 아이콘 */}
                            <BellIcon onClick={handleClick} hasNotifications={notifications.length > 0} />
                            {/* 알림창 */}
                            <AlramPreview
                                notifications={notifications}
                                isAlarmOpen={isAlarmOpen}
                                onNotificationClick={handleNotificationClick} // 알림 클릭 시 함수 전달
                            />
                        </DropdownContainer>
                        <UserWrapper>
                            {/* 유저 프로필 */}
                            <ProfileIcon
                                dataAction="profile"
                                onClick={handleClick}
                                src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                                alt="Profile"
                            />
                            <DropdownContainer>
                                {/* 아래 드롭다운 화살표 아이콘 */}
                                <DropdownIcon
                                    onClick={handleClick}
                                    dataAction="dropdown"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-caret-down-fill"
                                >
                                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                </DropdownIcon>
                                {/* 드롭다운 목록 */}
                                <DropdownContent isDropdownOpen={isDropdownOpen}>
                                    <DropdownItem onClick={() => handleItemClick('/mypage')}>내 정보</DropdownItem>
                                    <DisplayNoneDropdownItem onClick={() => handleItemClick('/write')}>팀원 모집하기</DisplayNoneDropdownItem>
                                    <DisplayNoneDropdownItem onClick={() => handleItemClick('/faq')}>FAQ</DisplayNoneDropdownItem>
                                    <DropdownItem onClick={() => handleItemClick('/study')}>챌린지 보기</DropdownItem>
                                    <DropdownItem onClick={offLogin}>로그아웃</DropdownItem>
                                </DropdownContent>
                            </DropdownContainer>
                        </UserWrapper>
                    </UserProfileContainer>
                </>
            ) : (
                <HeaderLogginButton onClick={handleClick} />
            )}
        </>
    );
}

export default HeaderLogin;
