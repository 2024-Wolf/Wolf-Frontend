import React from "react";
import styled from "styled-components";

const Button = styled.button`
    width: 100%;
    background: var(--violet500);
    color: var(--black000);
    font-weight: 600;
    font-size: 16px;
    text-align: center;
    border-radius: 5px;
    padding: 13px 0;
    margin-top: 5px;

    &:hover {
        background-color: var(--violet600);
    }

    &:active {
        background-color: var(--violet700);
    }

    @media (max-width: 768px) {
        padding: 10px 0;
        font-size: 14px;
    }

    @media (max-width: 480px) {
        padding: 8px 0;
        font-size: 12px;
    }
`;

const NextButton = ({ onClick, children }) => {
    return (
        <Button onClick={onClick}>
            {children}
        </Button>
    );
}

export default NextButton;