import styled from "styled-components";
import { HeaderButton, Violet100BackgroundButton } from "../GlobalStyledComponents";

const HeaderFaqButtonWrapper = styled(Violet100BackgroundButton)`
  ${HeaderButton}
  @media (max-width: 768px) {
    display: none;
  }
`;

// props를 구조 분해 할당하여 사용
const HeaderFaqButton = ({ onClick, children }) => {
  return (
    <HeaderFaqButtonWrapper onClick={onClick}>
      {children}
    </HeaderFaqButtonWrapper>
  );
}

export default HeaderFaqButton;
