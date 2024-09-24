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
`;

const TextInput = styled.input`
    width: 100%;
    background-color: var(--black200);
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
`;

const WhiteInputBox = ({ isActive, value, onChange }) => {
    return (
        isActive ? (
            <ActiveTextInput value={value} onChange={onChange} />
        ) : (
            <TextInput value={value} readOnly/>
        )
    );
}

export default WhiteInputBox;
