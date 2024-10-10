import styled from "styled-components";
import { Square, Black500Line } from "../GlobalStyledComponents";

import React from "react";

// components/Input/InputText.jsx
const InputTextWrapper = styled.input`
    ${Square}
    ${Black500Line}
    width: 100%;
    padding: 10px;
    white-space: nowrap;       // 줄 바꿈 방지
    text-overflow: ellipsis;
`;

const InputText = ({ ...props }) => {
    return (
        <InputTextWrapper {...props} />
    );
}

export default InputText;
