import styled from "styled-components";
import { CommonButton, NoBackground, fontColorHover } from "../GlobalStyledComponents";

const ArrowLeftIconWrapper = styled.button`
    ${CommonButton}
    ${NoBackground}
    
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
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
            </svg>
        </ArrowLeftIconWrapper>
    );
}

export default ArrowLeftIcon;


