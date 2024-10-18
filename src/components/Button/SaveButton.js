
import styled from "styled-components";
import { Square, Violet500Background, Violet600BackgroundHover } from "../GlobalStyledComponents";

const SaveButtonWrapper = styled.button`
    ${Square}  
    ${Violet500Background}
    ${Violet600BackgroundHover}
`;

const SaveButton = ({ style, children, onClick }) => {

    return (
        <SaveButtonWrapper type="submit" onClick={onClick} style={style}>
            저장
            {children}
        </SaveButtonWrapper>
    );
}

export default SaveButton;


