import styled from "styled-components";
import { Square, Violet500Line } from "../GlobalStyledComponents";

import React from "react";

// components/Input/InputNumber.jsx
const InputNumberWrapper = styled.input`
    ${Square}
    ${Violet500Line}
    width: 45px;
    padding: 5px 10px;
    text-align: center;
`;

const InputNumber = ({ ...props }) => {
    return (
        <InputNumberWrapper {...props} type="number" />
    );
}

export default InputNumber;
