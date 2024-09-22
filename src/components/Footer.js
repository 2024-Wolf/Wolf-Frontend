import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 35px;
  padding: 30px 35px;
  background: var(--violet100);
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  gap: 10px;
  @media (max-width: 768px) {
    font-size: 10px;
    flex-direction: column;
  }
`;

const FooterText = styled.div`
  font-size: 14px;
  color: var(--black500);
  line-height: 150%;
  @media (max-width: 768px) {
    font-size: 130%;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
  color: var(--black700);
`;

const NoBackgroundButton = styled.button`
  background: none;
  color: var(--black500);
  border: none;
  cursor: pointer;
  font-weight: 700;


  margin-right: 20px; // 모든 버튼의 오른쪽에 간격 설정
  &:last-child {
    margin-right: 0; // 마지막 버튼의 오른쪽 여백 제거
  }
  
  // Hover effect
  &:hover {
    color: var(--black600);
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  // Active (마우스 클릭 또는 모바일 터치) effect
  &:active {
    color: var(--black800);
    background-color: rgba(0, 0, 0, 0.2);
    transition: background-color 0.1s ease, color 0.1s ease;
  }

  @media (max-width: 768px) {
    font-size: 80%;
  }
`;

const LogoS = styled.div`
    font-family: "Kavoon";
    font-size: 24px;
    color: var(--black700);

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;


function Footer(props) {
  return (
    <FooterContainer>

      <LogoS>WOLF</LogoS>
      <FooterContent>
        <FooterText>
          지금2조 : 정명주, 강태현, 김한수, 박가현, 이정연, 허준혁<br />
          Contact team.wolf.official@gmail.com<br />
          Copyright
        </FooterText>
        <FooterLinks>
          <NoBackgroundButton onClick={() => alert('공지사항')}>공지사항</NoBackgroundButton>
          <NoBackgroundButton onClick={() => alert('FAQ 게시판')}>FAQ 게시판</NoBackgroundButton>
          <NoBackgroundButton onClick={() => alert('이용약관')}>이용약관</NoBackgroundButton>
        </FooterLinks>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;