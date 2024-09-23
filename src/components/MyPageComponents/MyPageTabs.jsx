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

const MyPageTabs = ({tab}) => {

    return(
        <TabContainer>
            {TabList.map((tabName) => (
                <TabButton isActive={tabName === tab}>
                    {tabName}
                </TabButton>
            ))}
        </TabContainer>
    )
}

export default MyPageTabs;