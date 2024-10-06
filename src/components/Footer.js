import styled from 'styled-components';
import { CommonButton, NoBackground, NoBackgroundHover2 } from "./GlobalStyledComponents";

import React from 'react';

// components/Footer.js
export const FooterContainer = styled.footer`
  margin: auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 30px 35px;
  background: var(--violet100);
  width: 100%;
  gap: 10px;
`;

// components/Footer.js
export const FooterLogo = styled.div`
  font-family: "Kavoon";
  font-size: 24px;
  color: var(--black700);
  width: 100%;
  max-width: 1300px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

// components/Footer.js
export const FooterText = styled.div`
  font-size: 14px;
  color: var(--black500);
  line-height: 150%;
  @media (max-width: 768px) {
    font-size: 130%;
  }
`;

// components/Footer.js
export const FooterLinks = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
  color: var(--black700);
`;

// components/Footer.js
export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  gap: 10px;
  width: 100%;
  max-width: 1300px;
  @media (max-width: 768px) {
    font-size: 10px;
    flex-direction: column;
  }
`;


// components/Footer.js
export const FooterButton = styled.button`
  ${CommonButton}
  ${NoBackground}
  ${NoBackgroundHover2}
  
  font-weight: 700;
  padding: 0px;
  
  margin-right: 20px; // 모든 버튼의 오른쪽에 간격 설정
  &:last-child {
    margin-right: 0; // 마지막 버튼의 오른쪽 여백 제거
  }

  @media (max-width: 768px) {
    font-size: 80%;
  }
`;

function Footer(props) {
  return (
    <FooterContainer>
      <FooterLogo>WOLF</FooterLogo>
      <FooterContent>
        <FooterText>
          지금2조 : 정명주, 강태현, 김한수, 박가현, 이정연, 허준혁<br />
          Contact team.wolf.official@gmail.com<br />
          Copyright
        </FooterText>
        <FooterLinks>
          <FooterButton onClick={() => alert('공지사항')}>공지사항</FooterButton>
          <FooterButton onClick={() => alert('FAQ 게시판')}>FAQ 게시판</FooterButton>
          <FooterButton onClick={() => alert('이용약관')}>이용약관</FooterButton>
        </FooterLinks>

      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;