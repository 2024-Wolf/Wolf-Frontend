import styled from 'styled-components';
import { NoBackgroundButton } from "./GlobalStyledComponents";

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
export const LogoS = styled.div`
  font-family: "Kavoon";
  font-size: 24px;
  color: var(--black700);

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
  @media (max-width: 768px) {
    font-size: 10px;
    flex-direction: column;
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