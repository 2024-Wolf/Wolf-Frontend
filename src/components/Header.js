import React, { useState } from 'react';
import styled from 'styled-components';
import ModalContainer from "./Modal/ModalContainer";
import LoginContent from "./SignInContent/LoginContent";
import { useNavigate } from 'react-router-dom';

const HeaderContainer = styled.header`
  margin: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 30px 35px;
  background: var(--black000);
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.07);
  max-width: 1500px;
  width: 100%;
`;

const HeaderContent = styled.header`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
`;

const Button = styled.button`
  font-weight: 500;
  font-size: 14px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 10px 32px;
`;

const DarkBackgroundButton = styled(Button)`
  background: var(--violet600);
  color: var(--violet000);

  // Hover effect
  &:hover {
    background-color: var(--violet700);
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  // Active (마우스 클릭 또는 모바일 터치) effect
  &:active {
    background-color: var(--violet700);
    transition: background-color 0.1s ease, color 0.1s ease;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const LightBackgroundButton = styled(Button)`
  background: var(--violet100);
  color: var(--black500);

  // Hover effect
  &:hover {
    color: var(--violet700);
    background-color: var(--violet200);
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  // Active (마우스 클릭 또는 모바일 터치) effect
  &:active {
    color: var(--violet700);
    background-color: var(--violet200);
    transition: background-color 0.1s ease, color 0.1s ease;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const MainLogo = styled.a`
  color: var(--black900);
  text-align: center;
  font: 32px Kavoon, sans-serif;
  font-weight: lighter;
  cursor: pointer;
  text-decoration: none;
`;

const ProfileIcon = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
`;

const UserProfileContainer = styled.div`
  width: 153.55px;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 4px 9px;
  gap: 10px;
  border-radius: 20px;
`;

const StyledHeaderIcon = styled.svg`
  width: 20px;
  height: 20px;
  color: var(--violet600);
  cursor: pointer;
`;

const UserWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  gap: 2px;
  width: 48px;
  height: 30px;

  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
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

const LogginButton = styled(Button)`
    background: none;
    color: var(--black500);
    
    /* Hover effect */
    &:hover {
        color: var(--black600);
        background-color: rgba(0, 0, 0, 0.1);
        transition: background-color 0.3s ease, color 0.3s ease;
    }
    
    /* Active (마우스 클릭 또는 모바일 터치) effect */
    &:active {
        color: var(--black800);
        background-color: rgba(0, 0, 0, 0.2);
        transition: background-color 0.1s ease, color 0.1s ease;
    }
`;

function IsLoggedIn({ isLoggedIn, openModal }) {
  const [hasNotifications, setHasNotifications] = useState(true); // 알림 상태
  const [isDropdownVisible, setIsDropdownVisible] = useState(false); // 드롭다운 표시 여부
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (!isLoggedIn) {
      openModal(); // 로그인/회원가입 모달 열기
    } else {
      const action = e.currentTarget.getAttribute('dataAction');
      if (action) {
        switch (action) {
          case 'bell':
            // 벨모양 클릭
            if (hasNotifications) {
              setHasNotifications(false); // 알림 상태 변경
            }
            alert('벨모양(비워진 벨로 변경됨)');
            break;
          case 'profile':
            navigate('/mypage'); // 프로필 화면으로 이동
            break;
          case 'dropdown':
            setIsDropdownVisible((prev) => !prev); // 드롭다운 표시 토글
            alert('드롭다운');
            break;
          default:
            break;
        }
      }
    }
  };

  const Div = styled.div`
  cursor: default;
  width: 360px;
  min-height: 480px;
  max-height: 480px;
  overflow-y: scroll;
  padding: 0;
  position: absolute;
  z-index: 1000;
  background: #fff;
  border-radius: 15px;
  border: 1px solid #d1d1d1;
  margin-top: 16px;
  right: 12px;
  top: 100%;
  color: #333;
`

  return (
    <>
      {isLoggedIn ? (
        <UserProfileContainer>
          <BellIcon
            dataAction="bell"
            onClick={handleClick}
            hasNotifications={hasNotifications}
          />
          <UserWrapper>
            <ProfileIcon
              dataAction="profile"
              onClick={handleClick}
              src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
              alt="Profile"
            />
            <StyledHeaderIcon
              dataAction="dropdown"
              onClick={handleClick}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-caret-down-fill"
              viewBox="0 0 16 16"
            >
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </StyledHeaderIcon>
          </UserWrapper>
          {isDropdownVisible && (
            <Div>
              <ul>
                <li onClick={() => navigate('/myinfo')}>내 정보</li>
                <li onClick={() => navigate('/challenges')}>챌린지 보기</li>
                <li onClick={() => navigate('/team-recruit')}>팀원 모집하기</li>
                <li onClick={() => { /* 로그아웃 처리 */ }}>로그아웃</li>
              </ul>
            </Div>
          )}
        </UserProfileContainer>
      ) : (
        <LogginButton onClick={handleClick}>로그인/회원가입</LogginButton>
      )}
    </>
  );
}

function Header(props) {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <HeaderContainer>
      <MainLogo href="/" onClick={() => alert('메인화면 이동')}>WOLF</MainLogo>
      <HeaderContent>
        <DarkBackgroundButton onClick={() => navigate('/write')}>팀원 모집하기</DarkBackgroundButton>
        <LightBackgroundButton onClick={() => navigate('/faq')}>FAQ</LightBackgroundButton>
        <IsLoggedIn isLoggedIn={true} openModal={openModal} /> {/* 로그인 했다면 true, 로그인 하지 않았다면 false */}
      </HeaderContent>
      {
        isModalOpen && (
          <ModalContainer onClose={closeModal}>
            <LoginContent />
          </ModalContainer>
        )
      }
    </HeaderContainer >
  );
}


export default Header;