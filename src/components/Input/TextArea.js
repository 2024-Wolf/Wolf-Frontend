import styled from "styled-components";
import { Square, Violet500Line } from "../GlobalStyledComponents";

import React from "react";

// components/Input/TextAreaWrapper.jsx
const TextAreaWrapper = styled.textarea`
    ${Square}
    ${Violet500Line}
    padding: 10px;
    width: 100%;
    min-height: 200px;
    resize: none;
    line-height: 1.5;
`;

const TextArea = ({ ...props }, children) => {
    return (
        <TextAreaWrapper {...props}>
            {children}
        </TextAreaWrapper>
    );
}

export default TextArea;
