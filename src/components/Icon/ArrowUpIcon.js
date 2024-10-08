import styled from "styled-components";
import { CommonButton, NoBackground, fontColorHover } from "../GlobalStyledComponents";

const ArrowUpIconWrapper = styled.button`
    ${CommonButton}
    ${NoBackground}
    ${fontColorHover}
    padding: 10px;
    display: flex;
    justify-content: center;
    elignt-items: center;
    gap: 5px;
    font-size: 13px;

    svg {
        width: 13px;
        height: 13px;
    }
`;

const ArrowUpIcon = ({ children, ...props }) => {

    return (
        <ArrowUpIconWrapper type="button" {...props}>
            {children && <span>{children}</span>}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z" />
            </svg>
        </ArrowUpIconWrapper>
    );
}

export default ArrowUpIcon;


