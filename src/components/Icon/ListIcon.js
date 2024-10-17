

import styled from "styled-components";
import { CommonButton, NoBackground, fontColorHover } from "../GlobalStyledComponents";

const ListIconWrapper = styled.button`
    ${CommonButton}
    ${NoBackground}
    ${fontColorHover}
    
    font-weight: 700;
    padding: 0px;
`;

const ListIcon = ({ style, size, ...props }) => {
    return (
        <ListIconWrapper type="button" style={style} {...props}>
            <svg xmlns="http://www.w3.org/2000/svg"
                width={size || "16"}
                height={size || "16"}
                fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
            </svg>
        </ListIconWrapper>
    );
}

export default ListIcon;


