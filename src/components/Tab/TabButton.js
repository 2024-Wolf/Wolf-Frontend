import styled from "styled-components";
import { TabButtonContainer, ActiveTabButtonContainer } from "../GlobalStyledComponents";

import React from "react";

const TabButton = ({ children, isActive, onClick }) => {
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