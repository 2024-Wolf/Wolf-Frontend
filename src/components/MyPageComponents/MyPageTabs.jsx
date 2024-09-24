import React from "react";
import styled from "styled-components";
import TabButton from "../Tab/TabButton";

const TabContainer = styled.div`
    display: flex;
    width: 100%;
`;

const TabList = [
    "계정",
    "알림",
    "활동"
]

const MyPageTabs = ({tab, setActiveTab}) => {
    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    }
    return(
        <TabContainer>
            {TabList.map((tabName) => (
                <TabButton
                    key={tabName}
                    isActive={tabName === tab}
                    onClick={()=> handleTabClick(tabName)}
                >
                    {tabName}
                </TabButton>
            ))}
        </TabContainer>
    )
}

export default MyPageTabs;