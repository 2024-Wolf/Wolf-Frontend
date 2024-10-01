import styled from 'styled-components';
import { FooterContainer, FooterContent, FooterText, FooterLinks, NoBackgroundButton, LogoS } from "./GlobalStyledComponents";

import React from 'react';


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