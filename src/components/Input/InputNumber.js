import styled from "styled-components";
import { Square, Violet500Line } from "../GlobalStyledComponents";

import React from "react";

// components/Input/InputNumber.jsx
const InputNumberWrapper = styled.input`
    ${Square}
    ${Violet500Line}
    width: 55px;
    
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

const InputNumber = ({ ...props }) => {
    return (
        <InputNumberWrapper {...props} />
    );
}

export default InputNumber;
