import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  // CSS 초기화 코드 시작
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
  }

  html, body {
    line-height: 1;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  table {
    border-collapse: collapse;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
    display: block;
  }
  // CSS 초기화 코드 종료


  // 기본 폰트 설정
  html * {
    font-family: "Pretendard", serif;
    font-weight: 400;
    font-style: normal;
  }

  // 부트스트랩 컨테이너 패딩 삭제
  .container {
    padding: 0px;
  }

`;

export default GlobalStyle;