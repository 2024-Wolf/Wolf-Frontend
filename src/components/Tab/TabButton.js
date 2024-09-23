import React from "react";
import styled from "styled-components";


const TabButtonContainer = styled.button`
    width: calc(100% / 3);
    background-color: var(--black000);
    border: 1px solid var(--black100);
    font-weight: 500;
    padding: 15px;
`;

const ActiveTabButtonContainer = styled.button`
    width: calc(100% / 3);
    font-weight: 500;
    padding: 15px;
    background-color: var(--violet100);
    border: 1px solid var(--violet200);
`;


const TabButton = ({ children, onClick, isActive }) => {
    console.log(typeof isActive)
    console.log(isActive)
    return (
        isActive ? (
            <ActiveTabButtonContainer onClick={onClick}>
                {children}
            </ActiveTabButtonContainer>
            ) : (
            <TabButtonContainer onClick={onClick}>
                {children}
            </TabButtonContainer>
        )
    );
}

export default TabButton;