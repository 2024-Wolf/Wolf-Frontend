import styled from "styled-components";
import { Square, NoBackground } from "../GlobalStyledComponents";

import React from "react";

// components/Input/InputText.jsx
const InputTextNoCssWrapper = styled.input`
    ${Square}
    ${NoBackground}
    width: 100%;
    padding: 10px;
    white-space: nowrap;
    text-overflow: ellipsis;

    caret-color: transparent; 
    cursor: default;

    &:focus {
        outline: none;
    }
`;

const InputTextNoCss = ({ ...props }) => {
    return (
        <InputTextNoCssWrapper {...props} />
    );
}

export default InputTextNoCss;
