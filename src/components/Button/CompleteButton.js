
import styled from "styled-components";
import { Square, Violet400Background, Violet600BackgroundHover } from "../GlobalStyledComponents";

const CompleteButtonWrapper = styled.button`
    ${Square}  
    ${Violet400Background}
    ${Violet600BackgroundHover}
`;

const CompleteButton = ({ style, children, onClick }) => {

    return (
        <CompleteButtonWrapper type="submit" onClick={onClick} style={style}>
            등록
            {children}
        </CompleteButtonWrapper>
    );
}

export default CompleteButton;


