
import styled from "styled-components";
import { Square, Violet500Line, Violet200BackgroundHover } from "../GlobalStyledComponents";

const CancelButtonWrapper = styled.button`
      ${Square}
  ${Violet500Line}
    ${Violet200BackgroundHover}
`;

const CancelButton = ({ style, children, onClick }) => {

    return (
        <CancelButtonWrapper type="button" onClick={onClick} style={style}>
            취소
            {children}
        </CancelButtonWrapper>
    );
}

export default CancelButton;


