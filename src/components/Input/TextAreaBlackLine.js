import styled from "styled-components";
import { Square, Black500Line } from "../GlobalStyledComponents";
import React from "react";

// components/Input/TextAreaWrapper.jsx
const TextAreaBlackLineWrapper = styled.textarea`
    ${Square}
    ${Black500Line}
    padding: 10px;
    width: 100%;
    min-height: 150px;
    resize: none;
    line-height: 1.5;
    text-overflow: ellipsis;
`;

const TextAreaBlackLine = ({ ...props }, children) => {
    return (
        <TextAreaBlackLineWrapper {...props} rows="4">
            {children}
        </TextAreaBlackLineWrapper>
    );
}

export default TextAreaBlackLine;
