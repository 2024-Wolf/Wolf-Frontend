import React from "react";
import styled, {css} from "styled-components";

const responsivePadding = css`
    @media (max-width: 768px) {
        padding: 15px;
    }

    @media (max-width: 480px) {
        padding: 10px;
    }
`;


const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 50px 35px;
    background-color: var(--violet000);
    border: 1px solid var(--violet300);
    ${responsivePadding}
`;

const TabContentsWrapper = ({ children }) => {
    return <Wrapper>{children}</Wrapper>;
}

export default TabContentsWrapper;