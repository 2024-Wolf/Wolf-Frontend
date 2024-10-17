import styled from "styled-components";
import { Square, Violet500Line } from "../GlobalStyledComponents";

import React from "react";

const ALinkTextWrapper = styled.a`
    ${Square}
    ${Violet500Line}
    display: block; /* 블록 요소로 설정하여 width가 100%로 동작하도록 */
    width: 100%;
    padding: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-decoration: none;

    font-size: 14px;
    color: var(--blueViolet500);
    
    &:hover {
        color: blue;
        text-decoration: underline;
    }

    ${({ hasChildren }) => (hasChildren ? `
        pointer-events: auto;
    ` : `
        pointer-events: none;
        color: var(--black400);
    `)}
`;

const ALinkText = ({ children, ...props }) => {
    const hasChildren = !!children && children.trim() !== ''; // children이 존재하면 true

    return (
        <ALinkTextWrapper {...props} $hasChildren={hasChildren}>
            {hasChildren ? children : '링크가 없습니다'}
        </ALinkTextWrapper>
    );
}

export default ALinkText;
