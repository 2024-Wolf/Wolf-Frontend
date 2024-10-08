import styled from "styled-components";
import { PageTitle } from "../components/GlobalStyledComponents";

import React, { useState } from "react";
import UserInfoContent from "../components/MyPageComponents/UserInfoContent";
import NotificationContent from "../components/MyPageComponents/NotificationContent";
import ActivitiesContent from "../components/MyPageComponents/ActivitiesContent";

import FAQTab from "../components/Tab/FAQTab";

// pages/MyPage.js
const MyPageContainer = styled.div`
    display: flex;
    width: 100%;
    padding: 40px 30px;
    flex-direction: column;
    gap: 50px;

    justify-content: center;
    align-items: flex-start;
    height: auto;
`;

const MyPage = () => {
    const [activeTab, setActiveTab] = useState("계정");

    const renderTabContent = () => {
        switch (activeTab) {
            case "계정":
                return <UserInfoContent />;
            case "알림":
                return <NotificationContent />
            case "활동":
                return <ActivitiesContent />
            default:
                return null;
        }
    };

    const changeTab = (tab) => {
        setActiveTab(tab);
    };


    return (
        <>
            <MyPageContainer>
                <PageTitle>MyPage</PageTitle>
                <FAQTab tab={["계정", "알림", "활동"]} activeTab={activeTab} changeTab={changeTab} />
                {renderTabContent()}
            </MyPageContainer>
        </>
    );
}

export default MyPage;