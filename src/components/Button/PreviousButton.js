
import styled from "styled-components";
import { Square, Violet500Line, Violet200BackgroundHover, IconButton, IconInnerText } from "../GlobalStyledComponents";

const PreviousButtonWrapper = styled.button`
    ${Square}
    ${Violet500Line}
    ${Violet200BackgroundHover}
    ${IconButton}
`;

const PreviousButton = ({ children, prevClick }) => {

    return (
        <PreviousButtonWrapper type="button" onClick={prevClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
            </svg>
            <IconInnerText>이전</IconInnerText>
            {children}
        </PreviousButtonWrapper>
    );
}

export default PreviousButton;


