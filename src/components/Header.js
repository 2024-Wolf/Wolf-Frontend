import styled from 'styled-components';
import { HeaderButton, DarkBackgroundButton, LightBackgroundButton, MainLogo, ProfileIcon, UserProfileContainer, StyledHeaderIcon, DropdownContainer, DropdownContent, DropdownItem, UserWrapper, DisplayNoneDropdownItem, NoBackground, NoBackgroundButton } from "./GlobalStyledComponents";

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AlramPreview from './AlramPreview';
import ModalContainer from "./Modal/ModalContainer";
import LoginContent from "./SignInContent/LoginContent";
import FirstProcessContent from "./SignInContent/FirstProcessContent";
import SecondProcessContext from "./SignInContent/SecondProcessContext";
import ThirdProcessContent from "./SignInContent/ThirdProcessContent";
import FourthProcessContent from "./SignInContent/FourthProcessContent";


const CreateGroupButton = styled(DarkBackgroundButton)`
  ${HeaderButton}
  @media (max-width: 768px) {
    display: none;
  }
`;

const FaqButton = styled(LightBackgroundButton)`
  ${HeaderButton}
  @media (max-width: 768px) {
    display: none;
  }
`;

// components/Header.js
const LogginButton = styled(NoBackgroundButton)`
    ${HeaderButton}

  @media (max-width: 320px) {
      padding: 10px;
      border: 1px solid var(--black300);
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

    span:nth-child(1) {
        @media (max-width: 320px) {
            display: none;
        }
    }

    span:nth-child(2) {
        display:none;

        @media (max-width: 320px) {
            display: flex;
        }
    }

`;

// components/Header.js
export const HeaderContainer = styled.header`
  margin: auto;
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  padding: 30px 35px;
  background: var(--black000);
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.07);
  max-width: 1500px;
  width: 100%;
`;

function BellIcon({ hasNotifications, onClick, dataAction }) {

  return (
    <>
      {hasNotifications ? (
        // 알림이 있다면 true, 채워진 종모양 아이콘
        <StyledHeaderIcon onClick={onClick} dataAction="bell" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-bell-fill" viewBox="0 0 16 16">
          <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
        </StyledHeaderIcon>
      ) : (
        // 알림이 없다면 false, 빈 종모양 아이콘
        < StyledHeaderIcon onClick={onClick} dataAction="bell" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-bell" viewBox="0 0 16 16">
          <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
        </StyledHeaderIcon >
      )
      }
    </>
  );
}

function Login({ isLoggedIn, openModal, offLogin, notifications }) {
  const [hasNotifications, setHasNotifications] = useState(notifications.length > 0);
  const [isAlarmOpen, setIsAlarmOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (!isLoggedIn) {
      openModal();
    } else {
      const action = e.currentTarget.getAttribute('dataAction');
      if (action === 'bell') {
        // 벨모양 아이콘
        setIsDropdownOpen(false); // 드롭다운 목록이 열려 있으면 닫기
        setIsAlarmOpen(prev => !prev);
        if (hasNotifications) setHasNotifications(false);
      } else if (action === 'profile') {
        // 프로필 아이콘
        navigate('/user');
      } else if (action === 'dropdown') {
        // 드롭다운 아이콘
        setIsAlarmOpen(false); // 알람 목록이 열려 있으면 닫기
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
        <UserProfileContainer>
          <DropdownContainer>
            <BellIcon dataAction="bell" onClick={handleClick} hasNotifications={hasNotifications} />
            <AlramPreview isAlarmOpen={isAlarmOpen} notifications={notifications} userId={"늑대"} />
          </DropdownContainer>
          <UserWrapper>
            <ProfileIcon
              dataAction="profile"
              onClick={handleClick}
              src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
              alt="Profile"
            />
            <DropdownContainer>
              <StyledHeaderIcon
                onClick={handleClick}
                dataAction="dropdown"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-caret-down-fill"
                viewBox="0 0 16 16"
              >
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
              </StyledHeaderIcon>
              <DropdownContent isDropdownOpen={isDropdownOpen}>
                <DropdownItem onClick={() => handleItemClick('/mypage')}>내 정보</DropdownItem>
                <DropdownItem onClick={() => handleItemClick('/study')}>챌린지 보기</DropdownItem>
                <DisplayNoneDropdownItem onClick={() => handleItemClick('/write')}>팀원 모집하기</DisplayNoneDropdownItem>
                <DisplayNoneDropdownItem onClick={() => handleItemClick('/faq')}>FAQ</DisplayNoneDropdownItem>
                <DropdownItem onClick={offLogin}>로그아웃</DropdownItem>
              </DropdownContent>
            </DropdownContainer>
          </UserWrapper>
        </UserProfileContainer>
      ) : (
        <LogginButton onClick={handleClick}>
          <span>로그인/회원가입</span>
          <span>
            {/* 로그인 아이콘 */}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-door-open-fill" viewBox="0 0 16 16">
              <path d="M1.5 15a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H13V2.5A1.5 1.5 0 0 0 11.5 1H11V.5a.5.5 0 0 0-.57-.495l-7 1A.5.5 0 0 0 3 1.5V15zM11 2h.5a.5.5 0 0 1 .5.5V15h-1zm-2.5 8c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1" />
            </svg>
          </span>
        </LogginButton>
      )}
    </>
  );
}

function Header() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const sampleData = [
    { id: 1, date: '2024-09-25T12:00:00Z', message: '사용자가 프로필을 업데이트했습니다.', type: 'update' },
    { id: 2, date: '2024-09-26T08:30:00Z', message: '새로운 메시지가 도착했습니다.', type: 'message' },
    { id: 3, date: '2024-09-26T09:00:00Z', message: '사용자가 친구 요청을 보냈습니다.', type: 'request' }
  ];

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentStep(1);
  };

  const nextStep = () => setCurrentStep(prev => prev + 1);
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));
  const onLogin = () => setIsLoggedIn(true);
  const offLogin = () => setIsLoggedIn(false);

  const steps = [
    <LoginContent onNext={nextStep} />,
    <FirstProcessContent onNext={nextStep} onPrev={prevStep} />,
    <SecondProcessContext onNext={nextStep} onPrev={prevStep} />,
    <ThirdProcessContent onNext={nextStep} onPrev={prevStep} />,
    <FourthProcessContent onPrev={prevStep} onClose={closeModal} onLogin={onLogin} />
  ];

  return (
    <HeaderContainer>
      <MainLogo href="/">WOLF</MainLogo>
      <div style={{ display: 'flex', gap: '10px' }}>
        <CreateGroupButton onClick={() => navigate('/write')}>팀원 모집하기</CreateGroupButton>
        <FaqButton onClick={() => navigate('/faq')}>FAQ</FaqButton>
        <Login isLoggedIn={isLoggedIn} openModal={openModal} offLogin={offLogin} notifications={sampleData} />
      </div>
      {isModalOpen && <ModalContainer onClose={closeModal}>{steps[currentStep - 1]}</ModalContainer>}
    </HeaderContainer>
  );
}

export default Header;
