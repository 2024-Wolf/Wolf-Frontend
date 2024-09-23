import React, {useState} from 'react';
import styled from 'styled-components';
import ModalContainer from "./Modal/ModalContainer";
import LoginContent from "./SignInContent/LoginContent";

const HeaderContainer = styled.header`
  margin: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 30px 35px;
  background: var(--black000);
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
`;

const HeaderContent = styled.header`
  display: flex;
  flex-direction: row;
  gap: 10px;
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

const NoBackgroundButton = styled(Button)`
    background: none;
    color: var(--black500);
    
    // Hover effect
    &:hover {
        color: var(--black600);
        background-color: rgba(0, 0, 0, 0.1);
        transition: background-color 0.3s ease, color 0.3s ease;
    }
    
    // Active (마우스 클릭 또는 모바일 터치) effect
    &:active {
        color: var(--black800);
        background-color: rgba(0, 0, 0, 0.2);
        transition: background-color 0.1s ease, color 0.1s ease;
    }
    
    @media (max-width: 768px) {
        // 가로길이가 768px 되었을 때 요소가 사라지거나 생김!
    }
`;

const LogoM = styled.div`
  font-family: "Kavoon";
  font-size: 32px;
  color: var(--black900);
  cursor: pointer;
`;

function Header(props) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    return (
        <HeaderContainer>
            <LogoM onClick={() => alert('메인화면 이동')}>WOLF</LogoM>
            <HeaderContent>
            <DarkBackgroundButton onClick={() => alert('팀원 모집하기')}>팀원 모집하기</DarkBackgroundButton>
            <LightBackgroundButton onClick={() => alert('FAQ')}>FAQ</LightBackgroundButton>
            <NoBackgroundButton onClick={() => {
                openModal();
            }}>로그인/회원가입</NoBackgroundButton>
            </HeaderContent>

            {isModalOpen && (
                <ModalContainer onClose={closeModal}>
                    <LoginContent/>
                </ModalContainer>
            )}
        </HeaderContainer>
    );
}


export default Header;