import styled from 'styled-components';
import { UserWrapper, DropdownContent, DropdownItem, DisplayNoneDropdownItem } from "../GlobalStyledComponents";
import React, { useState, useRef, useEffect } from 'react';
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
    const alarmRef = useRef(null); // 알림창 참조 생성
    const dropdownRef = useRef(null); // 드롭다운 참조 생성

    // 클릭 시 알림 상태를 업데이트
    const handleNotificationClick = (alertId) => {
        setNotifications(prevNotifications =>
            prevNotifications.filter(notification => notification.alert_id !== alertId)
        );
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

    // 클릭 이벤트 리스너 추가
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                alarmRef.current && !alarmRef.current.contains(event.target) &&
                dropdownRef.current && !dropdownRef.current.contains(event.target)
            ) {
                setIsAlarmOpen(false); // 알림창 닫기
                setIsDropdownOpen(false); // 드롭다운 닫기
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
            {isLoggedIn ? (
                <>
                    <UserProfileContainer>
                        <DropdownContainer>
                            <BellIcon onClick={handleClick} hasNotifications={notifications.length > 0} />
                            <div ref={alarmRef}>
                                {/* 알림창 */}
                                <AlramPreview
                                    notifications={notifications}
                                    isAlarmOpen={isAlarmOpen}
                                    onNotificationClick={handleNotificationClick}
                                />
                            </div>
                        </DropdownContainer>
                        <UserWrapper>
                            <ProfileIcon
                                dataAction="profile"
                                onClick={handleClick}
                                src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                                alt="Profile"
                            />
                            <DropdownContainer ref={dropdownRef}>
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
