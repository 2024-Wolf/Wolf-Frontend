import React from "react";
import styled from "styled-components";
import TabButton from "../Tab/TabButton";

const TabContainer = styled.div`
    display: flex;
    width: 100%;
`;

const TabList = [
    "정보",
    "할일",
    "챌린지",
    "회의",
    "관리"
]

const GroupTabs = ({tab, setActiveTab}) => {
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

export default GroupTabs;