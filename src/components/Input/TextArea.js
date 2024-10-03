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

    &:disabled {
        background-color: var(--black000);
        border-radius: 5px;

        @media (max-width: 768px) {
            font-size: 14px;
            padding: 5px 10px;
        }

        @media (max-width: 480px) {
            font-size: 12px;
            padding: 5px 10px;
        }
    }
`;

const TextArea = ({ ...props }, children) => {
    return (
        <TextAreaWrapper {...props}>
            {children}
        </TextAreaWrapper>
    );
}

export default TextArea;
