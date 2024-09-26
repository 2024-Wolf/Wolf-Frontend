import React from "react";
import styled from "styled-components";

const ActiveTextInput = styled.input`
    width: 100%;
    border: 1px solid var(--violet500);
    border-radius: 5px;
    padding: 8px 15px;
    font-size: 16px;

    @media (max-width: 768px) {
        font-size: 14px;
        padding: 5px 10px;
    }

    @media (max-width: 480px) {
        font-size: 12px;
        padding: 5px 10px;
    }
    
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

const WhiteInputBox = ({ value, onChange, disabled=false}) => {
    return (
        <ActiveTextInput value={value} onChange={onChange} disabled={disabled}/>
    );
}

export default WhiteInputBox;
