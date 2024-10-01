import styled from "styled-components";
import { MyPageContainer, Title } from "../components/GlobalStyledComponents";

import React, { useState } from "react";
import UserInfoContent from "../components/MyPageComponents/UserInfoContent";
import MyPageTabs from "../components/MyPageComponents/MyPageTabs";
import NotificationContent from "../components/MyPageComponents/NotificationContent";
import ActivitiesContent from "../components/MyPageComponents/ActivitiesContent";


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

    return (
        <>
            <MyPageContainer>
                <Title>MyPage</Title>
                <MyPageTabs tab={activeTab} setActiveTab={setActiveTab} />
                {renderTabContent()}
            </MyPageContainer>
        </>
    );
}

export default MyPage;