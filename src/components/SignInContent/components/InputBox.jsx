import React from "react";
import styled from "styled-components";

const TextInput = styled.input`
    width: 100%;
    border: 1px solid var(--violet500);
    border-radius: 5px;
    padding: 8px 15px;
    font-size: 20px;
    
    @media (max-width: 768px) {
        font-size: 18px;
        padding: 5px 10px;
    }

    @media (max-width: 480px) {
        font-size: 16px;
        padding: 5px 10px;
    }
`;


const InputBox = () => {
    return (
        <TextInput/>
    )
}

export default InputBox;