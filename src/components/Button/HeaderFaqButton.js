import styled from "styled-components";
import { HeaderButton, Violet100BackgroundButton } from "../GlobalStyledComponents";

const HeaderFaqButtonWrapper = styled(Violet100BackgroundButton)`
  ${HeaderButton}
`;

// props를 구조 분해 할당하여 사용
const HeaderFaqButton = ({ onClick, children }) => {
  return (
    <HeaderFaqButtonWrapper type="button" onClick={onClick}>
      {children}
    </HeaderFaqButtonWrapper>
  );
}

export default HeaderFaqButton;
