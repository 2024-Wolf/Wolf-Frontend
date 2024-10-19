import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderLogin from './HeaderComponents/HeaderLogin';
import ModalContainer from './Modal/ModalContainer';
import HeaderCreateGroupButton from './Button/HeaderCreateGroupButton';
import HeaderFaqButton from './Button/HeaderFaqButton';
import SignInSteps from './SignInContent/SignInSteps';

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

function Header({ isLoggedIn, onLogin, offLogin }) {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);


  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentStep(1);
  };

  const nextStep = () => setCurrentStep(prev => prev + 1);
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

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
        />
      </div>
      {/* 로그인/회원가입 모달 */}
      {isModalOpen && (
        <ModalContainer onClose={closeModal}>
          <SignInSteps
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
