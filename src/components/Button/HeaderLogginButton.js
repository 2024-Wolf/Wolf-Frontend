import styled from "styled-components";
import { HeaderButton, NoBackgroundButton, Black200BackgroundHover } from "../GlobalStyledComponents";

const HeaderLogginButtonWrapper = styled(NoBackgroundButton)`
  ${HeaderButton}
  ${Black200BackgroundHover}

    @media (max-width: 320px) {
        padding: 10px;
        border: 1px solid var(--black300);
    }


    span:nth-child(1) {
        @media (max-width: 320px) {
            display: none;
        }
    }

    span:nth-child(2) {
        display: none;

        @media (max-width: 320px) {
            display: flex;
        }
    }
`;

const HeaderLogginButton = ({ onClick, children }) => {
  return (
    <HeaderLogginButtonWrapper type="button" onClick={onClick}>
      <span>로그인/회원가입</span>
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-door-open-fill"
          viewBox="0 0 16 16"
        >
          <path d="M1.5 15a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H13V2.5A1.5 1.5 0 0 0 11.5 1H11V.5a.5.5 0 0 0-.57-.495l-7 1A.5.5 0 0 0 3 1.5V15zM11 2h.5a.5.5 0 0 1 .5.5V15h-1zm-2.5 8c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1" />
        </svg>
      </span>
      {children}
    </HeaderLogginButtonWrapper>
  );
}

export default HeaderLogginButton;
