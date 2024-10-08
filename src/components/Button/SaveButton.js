
import styled from "styled-components";
import { Square, Violet400Background, Violet600BackgroundHover } from "../GlobalStyledComponents";

const SaveButtonWrapper = styled.button`
    ${Square}  
    ${Violet400Background}
    ${Violet600BackgroundHover}
`;

const SaveButton = ({ children, onClick }) => {

    return (
        <SaveButtonWrapper type="submit" onClick={onClick}>
            저장
            {children}
        </SaveButtonWrapper>
    );
}

export default SaveButton;


