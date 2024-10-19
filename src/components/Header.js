import styled from 'styled-components';
import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderLogin from './HeaderComponents/HeaderLogin';
import ModalContainer from './Modal/ModalContainer';
import HeaderCreateGroupButton from './Button/HeaderCreateGroupButton';
import HeaderFaqButton from './Button/HeaderFaqButton';
import SignInSteps from './SignInContent/SignInSteps';
import Cookies from "js-cookie";
import {googleLogin} from "./Apis/AuthApi";

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

export const HeaderLogo = styled.a`
  color: var(--black900);
  font: 32px Kavoon, sans-serif;
  text-decoration: none;
`;

function Header({ isLoggedIn, onLogin, offLogin, notifications, setNotifications }) {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [redirectUrl, setRedirectUrl] = useState(null);

  const openModal = () => {
    // 현재 URL을 저장해둠
    setRedirectUrl(window.location.href);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentStep(1);
  };

  const nextStep = () => setCurrentStep(prev => prev + 1);
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  useEffect(() => {
    // Google 로그인 후 결과를 처리하는 리스너 등록
    window.addEventListener('message', (event) => {
      if (event.origin === window.origin && event.data.type === 'id-token') {
        const { idToken } = event.data;

        // ID 토큰을 가지고 로그인 작업 수행
        googleLogin(idToken)
          .then((response) => {
            const { accessToken, refreshToken } = response.data.tokenResponse;

            // 토큰 저장
            localStorage.setItem('accessToken', accessToken);
            Cookies.set('refreshToken', refreshToken);

            if (response.data.loginFlag === "LOGIN") {
              console.log("로그인 성공");
              // 로그인 성공 후 추가 작업
            }
          })
          .catch((error) => {
            console.error('로그인 실패:', error);
          });
      }
    });

    return () => {
      window.removeEventListener('message', () => {});
    };
  }, []);

  return (
    <HeaderContainer>
      <HeaderLogo href="/">WOLF</HeaderLogo>
      <div style={{ display: 'flex', gap: '10px' }}>
        <HeaderCreateGroupButton onClick={() => navigate('/write')}>팀원 모집하기</HeaderCreateGroupButton>
        <HeaderFaqButton onClick={() => navigate('/faq')}>FAQ</HeaderFaqButton>
        <HeaderLogin
          isLoggedIn={isLoggedIn}
          openModal={openModal}
          offLogin={offLogin}
          notifications={notifications}
          setNotifications={setNotifications} // setNotifications 전달
        />
      </div>
      {/* 로그인/회원가입 모달 */}
      {isModalOpen && (
        <ModalContainer onClose={closeModal}>
          <SignInSteps
            redirectUrl={redirectUrl}
            currentStep={currentStep}
            nextStep={nextStep}
            prevStep={prevStep}
            onLogin={onLogin}
            closeModal={closeModal} // closeModal 함수 전달
          />
        </ModalContainer>
      )}
    </HeaderContainer>
  );
}

export default Header;
