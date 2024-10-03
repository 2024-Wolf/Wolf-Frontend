import styled, { css } from "styled-components";


// components/Header.js
export const MainLogo = styled.a`
  color: var(--black900);
  font: 32px Kavoon, sans-serif;
  text-decoration: none;
`;


// components/Header.js
export const DropdownItem = styled.a`
  width: 100%;
  color: var(--black600);
  padding: 5px;
  text-decoration: none;
  text-align: center;
  border-radius: 10px;
  &:hover {
    background-color: var(--black100);
  }
`;


// a
// components/Group/GroupComponent/GroupWritingContent.jsx
export const TextArea2 = styled.textarea`
    width: 100%;
    min-height: 200px;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid var(--violet500);
    border-radius: 5px;
    resize: none;
    font-size: 16px;
    line-height: 1.5;

    &:disabled {
        background-color: var(--black000);
    }

    @media (max-width: 768px) {
        font-size: 14px;
        padding: 8px;
    }

    @media (max-width: 480px) {
        font-size: 13px;
        padding: 6px;
    }
`;