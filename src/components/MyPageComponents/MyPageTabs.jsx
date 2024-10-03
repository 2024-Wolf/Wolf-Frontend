import styled from "styled-components";
import { TabContainer } from "../GlobalStyledComponents";

import React from "react";
import TabButton from "../Tab/TabButton";

const TabList = [
    "계정",
    "알림",
    "활동"
]

const MyPageTabs = ({ tab, setActiveTab }) => {
    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    }
    return (
        <TabContainer>
            {TabList.map((tabName) => (
                <TabButton
                    key={tabName}
                    isActive={tabName === tab}
                    onClick={() => handleTabClick(tabName)}
                >
                    {tabName}
                </TabButton>
            ))}
        </TabContainer>
    )
}

export default MyPageTabs;