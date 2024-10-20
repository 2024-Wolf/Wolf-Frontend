import styled from 'styled-components';
import { UserWrapper, DropdownContent, DropdownItem, DisplayNoneDropdownItem } from "../GlobalStyledComponents";
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BellIcon from '../Icon/BellIcon';
import DropdownIcon from '../Icon/DropdownIcon';
import AlramPreview from '../AlramPreview';
import HeaderLogginButton from "../Button/HeaderLogginButton";
import { getMyProfile, getAlarmsPreview } from '../Apis/UserApi';
import { removeAccessToken, removeRefreshToken } from '../Apis/Common';


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



const AlarmData = [
    {
        alert_id: 1,
        user_id: 1,
        nickname: '늑대',
        group_post_id: null, // 회원 관련 알림
        alert_content: '{nickname} 님, 만나서 반가워요 👋🏻 <br />' +
            '여러 명이 {nickname}님에 대해 알고 싶어 하네요! <br />' +
            '지금 프로필을 작성하고 팀 매칭률을 높여볼까요?',
        alert_date: '2024-09-25T12:00:00Z',
        is_read: '0',
        alert_link: null,


        alertContent: '{nickname} 님, 만나서 반가워요 👋🏻 <br />' +
            '여러 명이 {nickname}님에 대해 알고 싶어 하네요! <br />' +
            '지금 프로필을 작성하고 팀 매칭률을 높여볼까요?',
        alertLink: '/post',
        alertTime: '2024-09-25T12:00:00Z',
    },
    {
        alert_id: 2,
        user_id: 2,
        nickname: '사슴',
        group_post_id: null, // 회원 관련 알림
        alert_content: '{nickname} 님에게 새로운 메시지가 도착했습니다!',
        alert_date: '2024-09-26T08:30:00Z',
        is_read: '0',
        alert_link: null
    },
    {
        alert_id: 3,
        user_id: 3,
        nickname: '여우',
        group_post_id: null, // 회원 관련 알림
        alert_content: '{nickname} 님, 친구 요청이 도착했습니다! <br />' +
            '친구 요청을 수락하시겠어요?',
        alert_date: '2024-09-26T09:00:00Z',
        is_read: '0',
        alert_link: null
    },
    {
        alert_id: 4,
        user_id: 4,
        nickname: '토끼',
        group_post_id: 1, // 그룹 관련 알림
        alert_content: '팀 매칭이 성공적으로 완료되었습니다!',
        alert_date: '2024-09-18T12:00:00Z',
        is_read: '0',
        alert_link: null
    },
    {
        alert_id: 5,
        user_id: 5,
        nickname: '곰',
        group_post_id: 1, // 그룹 관련 알림
        alert_content: '새로운 스터디 요청이 도착했습니다!',
        alert_date: '2024-09-15T15:00:00Z',
        is_read: '0',
        alert_link: null
    },
    {
        alert_id: 6,
        user_id: 6,
        nickname: '올빼미',
        group_post_id: 1, // 그룹 관련 알림
        alert_content: '자격증 챌린지가 개최되었습니다! <br />' +
            '이벤트에 참여해 보세요!',
        alert_date: '2024-09-10T10:00:00Z',
        is_read: '0',
        alert_link: null
    }
];


function HeaderLogin({ isLoggedIn, openModal, offLogin }) {
    const [isAlarmOpen, setIsAlarmOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const alarmRef = useRef(null); // 알림창 참조 생성
    const dropdownRef = useRef(null); // 드롭다운 참조 생성
    const [profileData, setProfileData] = useState(null);
    const [alarmsPreviewData, setAlarmsPreviewData] = useState(null);
    const [newProfilePicture, setNewProfilePicture] = useState("");

    const [notifications, setNotifications] = useState(AlarmData);

    const navigate = useNavigate();

    //profileData.profilePicture || 

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const dataProfile = await getMyProfile(); // getMyProfile 함수 호출
                setProfileData(dataProfile.data); // 프로필 데이터 설정
                setNewProfilePicture(dataProfile.data.profilePicture || "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png")

                const dataAlarmsPreview = await getAlarmsPreview(); // getMyProfile 함수 호출
                setAlarmsPreviewData(dataAlarmsPreview.data); // 프로필 데이터 설정
            } catch (err) {
                console.error(err);
            } finally {
            }
        };

        fetchProfile(); // 프로필 데이터 가져오기
    }, []);


    // 클릭 시 알림 상태를 업데이트
    const handleNotificationClick = (alertId) => {
        setNotifications(prevNotifications =>
            prevNotifications.filter(notification => notification.alert_id !== alertId)
        );
        navigate(`/user`); // navigate(`/user/${alertId}`) 등으로 경로 바꿀 것
        setIsAlarmOpen(false); // 알림 클릭 시 알림창 닫기
    };

    const handleClick = (e) => {
        if (!isLoggedIn) {
            openModal();
        } else {
            const action = e.currentTarget.getAttribute('data-action');
            if (action === 'bell') {
                setIsDropdownOpen(false); // 드롭다운을 닫습니다.
                setIsAlarmOpen(prev => !prev); // 알림창을 토글합니다.
            } else if (action === 'profile') {
                navigate(`/user/my`)
            } else if (action === 'dropdown') {
                setIsAlarmOpen(false); // 알림창 닫기
                setIsDropdownOpen(prev => !prev); // 드롭다운 상태 토글
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
            if (alarmRef.current && !alarmRef.current.contains(event.target)) {
                setIsAlarmOpen(false); // 알림창 닫기
            }
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false); // 드롭다운 닫기
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleLogout = () => {
        removeAccessToken();
        removeRefreshToken();
        offLogin()
    };

    return (
        <>
            {isLoggedIn ? (
                <UserProfileContainer>
                    <DropdownContainer ref={alarmRef}>
                        {/* 벨 모양 아이콘 */}
                        <BellIcon onClick={handleClick} hasNotifications={notifications.length > 0} />
                        {/* 알림창 */}
                        <AlramPreview
                            notifications={notifications}
                            isAlarmOpen={isAlarmOpen}
                            onNotificationClick={handleNotificationClick}
                            alarmsPreviewData={alarmsPreviewData}
                            profileData={profileData}
                        />
                    </DropdownContainer>
                    <UserWrapper>
                        {/* 프로필 아이콘 */}
                        <ProfileIcon
                            data-action="profile"
                            onClick={handleClick}
                            src={newProfilePicture}
                            alt="Profile Preview"
                        />
                        <DropdownContainer ref={dropdownRef}>
                            {/* 드롭다운 아이콘 */}
                            <DropdownIcon
                                onClick={handleClick}
                                data-action="dropdown"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-caret-down-fill"
                            >
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                            </DropdownIcon>
                            {/* 드롭다운창 */}
                            <DropdownContent isDropdownOpen={isDropdownOpen}>
                                <DropdownItem onClick={() => handleItemClick('/user')}>내 정보</DropdownItem>
                                <DisplayNoneDropdownItem onClick={() => handleItemClick('/write')}>팀원 모집하기</DisplayNoneDropdownItem>
                                <DisplayNoneDropdownItem onClick={() => handleItemClick('/faq')}>FAQ</DisplayNoneDropdownItem>
                                <DropdownItem onClick={() => handleItemClick('/user')}>챌린지 보기</DropdownItem>
                                <DropdownItem onClick={handleLogout}>로그아웃</DropdownItem>
                            </DropdownContent>
                        </DropdownContainer>
                    </UserWrapper>
                </UserProfileContainer>
            ) : (
                // 로그인&회원가입 버튼
                <HeaderLogginButton onClick={handleClick} />
            )}
        </>
    );
}

export default HeaderLogin;
