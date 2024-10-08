
import styled from "styled-components";
import { Square, Violet500Line, Violet600BackgroundHover } from "../GlobalStyledComponents";

const CancelButtonWrapper = styled.button`
    ${Square}
    ${Violet500Line}
    ${Violet600BackgroundHover}
`;

const CancelButton = ({ children, onClick }) => {

    return (
        <CancelButtonWrapper type="button" onClick={onClick}>
            취소
            {children}
        </CancelButtonWrapper>
    );
}

export default CancelButton;


