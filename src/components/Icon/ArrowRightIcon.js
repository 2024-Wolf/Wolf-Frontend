import styled from "styled-components";
import { CommonButton, NoBackground, fontColorHover } from "../GlobalStyledComponents";

const ArrowLeftIconWrapper = styled.button`
    ${CommonButton}
    ${NoBackground}
    ${fontColorHover}
    
    font-weight: 700;
    padding: 0px;
    height: auto;
    display: flex;
    align-items: center;
    
    svg {
        width: 16px;
        height: 16px;
    }
`;

const ArrowLeftIcon = ({ ...props }) => {

    return (
        <ArrowLeftIconWrapper type="button" {...props}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
            </svg>
        </ArrowLeftIconWrapper>
    );
}

export default ArrowLeftIcon;


