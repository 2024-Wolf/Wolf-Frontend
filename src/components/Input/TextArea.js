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
    text-overflow: ellipsis;
    white-space: pre-wrap;  // 줄바꿈 및 공백 유지
    overflow-wrap: break-word;  // 브라우저 호환성 용어
`;

const TextArea = ({ value, ...props }) => {
    return (
        <TextAreaWrapper
            value={value}
            wrap="soft"  // 줄바꿈 설정 (HTML 속성으로 전달)
            rows="4"
            {...props}
        />
    );
}

export default TextArea;
