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
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
        </ArrowLeftIconWrapper>
    );
}

export default ArrowLeftIcon;


