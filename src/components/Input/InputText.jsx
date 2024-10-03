import styled from "styled-components";
import { Square, Purpleline } from "../GlobalStyledComponents";

import React from "react";

// components/Input/WhiteInputBox.jsx
const InputTextWrapper = styled.input`
    ${Square}
    ${Purpleline}
    width: 100%;
    
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

const InputText = ({ value, onChange, disabled = false }) => {
    return (
        <InputTextWrapper value={value} onChange={onChange} disabled={disabled} />
    );
}

export default InputText;
