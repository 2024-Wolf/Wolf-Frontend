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
  line-height: 1.7;
    text-overflow: ellipsis;
    white-space: pre-wrap;  // 줄바꿈 및 공백 유지
    overflow-wrap: break-word;  // 브라우저 호환성 용어
`;

const TextAreaBlackLine = ({ value, readOnly, ...props }) => {
    return (
        <TextAreaBlackLineWrapper
            value={value}
            wrap="soft"  // 줄바꿈 설정 (HTML 속성으로 전달)
            rows="4"
            readOnly={readOnly}
            {...props}
        />
    );
}

export default TextAreaBlackLine;
