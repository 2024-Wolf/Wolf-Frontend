

import styled from "styled-components";
import { CommonButton, NoBackground, fontColorHover } from "../GlobalStyledComponents";

const RefreshIconWrapper = styled.button`
    ${CommonButton}
    ${NoBackground}
    ${fontColorHover}
    
    font-weight: 700;
    padding: 0px;
    height: auto;
`;

const RefreshIcon = ({ style, size, onClick, ...props }) => {
    return (
        <div
            onClick={onClick}
            style={{
                fontSize: '12px', display: 'flex',
                flexDirection: 'column', textWrap: 'nowrap', height: '100%', gap: '2px',
                cursor: 'pointer', marginRight: '5px'
            }}>
            <RefreshIconWrapper type="button" style={style} {...props}>
                <svg xmlns="http://www.w3.org/2000/svg"
                    width={size || "16"}
                    height={size || "16"}
                    fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z" />
                    <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466" />
                </svg>
            </RefreshIconWrapper>
            초기화
        </div>

    );
}

export default RefreshIcon;
