import styled, { css } from "styled-components";

// components/SignInContent/FirstProcessContent.jsx
export const RadioButton = styled.input.attrs({ type: "radio" })`
    cursor: pointer;
    appearance: none;
    border: 2px solid var(--violet500);
    border-radius: 50%;
    width: 16px;
    height: 16px;
    background-color: var(--black000);

    &:checked {
        background-color: var(--violet500);
    }

    @media (max-width: 768px) {
        width: 14px;
        height: 14px;
    }

    @media (max-width: 480px) {
        width: 12px;
        height: 12px;
    }
`;