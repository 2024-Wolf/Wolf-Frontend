import styled from "styled-components";
import { Square, NoBackground } from "../GlobalStyledComponents";

import React from "react";

// components/Input/TextAreaWrapper.jsx
const TextAreaNoCssWrapper = styled.textarea`
    ${Square}
    ${NoBackground}
    padding: 10px;
    width: 100%;
    min-height: 200px;
    resize: none;
    line-height: 1.5;
    text-overflow: ellipsis;

    &:focus {
        outline: none;
    }
`;

const TextAreaNoCss = ({ ...props }, children) => {
    return (
        <TextAreaNoCssWrapper {...props} rows="4">
            {children}
        </TextAreaNoCssWrapper>
    );
}

export default TextAreaNoCss;
