import styled from "styled-components";
import { Square, Violet500Line } from "../GlobalStyledComponents";

import React from "react";

// components/Input/InputText.jsx
const InputTextWrapper = styled.input`
    ${Square}
    ${Violet500Line}
    width: 100%;
    padding: 10px;
`;

const InputText = ({ ...props }) => {
    return (
        <InputTextWrapper {...props} />
    );
}

export default InputText;
