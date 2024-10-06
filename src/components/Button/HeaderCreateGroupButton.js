import styled from "styled-components";
import { HeaderButton, Violet600BackgroundButton } from "../GlobalStyledComponents";

const HeaderCreateGroupButtonWrapper = styled(Violet600BackgroundButton)`
  ${HeaderButton}
`;

// props를 구조 분해 할당하여 사용
const HeaderCreateGroupButton = ({ onClick, children }) => {
  return (
    <HeaderCreateGroupButtonWrapper type="button" onClick={onClick}>
      {children}
    </HeaderCreateGroupButtonWrapper>
  );
}

export default HeaderCreateGroupButton;
