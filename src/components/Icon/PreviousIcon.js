import styled from "styled-components";
import {
  CommonButton,
  NoBackground,
  fontColorHover,
} from "../GlobalStyledComponents";
import { Children } from "react";

const PreviousIconWrapper = styled.button`
  ${CommonButton}
  ${NoBackground}
    ${fontColorHover}
    
  font-weight: 400;
  padding: 0px;
  width: auto;
  display: flex;
  align-items: center;

  svg {
    width:16px;
    height: 16px;
  }
`;

const PreviousIcon = ({ children, style, size, ...props }) => {
  return (
    <PreviousIconWrapper style={style} size={size} type="button" {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
      </svg>
      이전
    </PreviousIconWrapper>
  );
};

export default PreviousIcon;
