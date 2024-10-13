import styled from "styled-components";
import { Square, Violet500Line } from "../GlobalStyledComponents";

import React, { forwardRef } from "react";

// components/Input/InputText.jsx
const InputTextWrapper = styled.input`
    ${Square}
    ${Violet500Line}
    width: 100%;
    padding: 10px;
    white-space: nowrap;       // 줄 바꿈 방지
    text-overflow: ellipsis;
`;

const InputText = forwardRef(({ ...props }, ref) => {
    return (
        <InputTextWrapper ref={ref} {...props} />
    );
});

export default InputText;