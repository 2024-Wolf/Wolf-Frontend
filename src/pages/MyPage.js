import React, { useState } from "react";

import UserInfoContent from "../components/MyPageComponents/UserInfoContent";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MyPageTabs from "../components/MyPageComponents/MyPageTabs";
import NotificationContent from "../components/MyPageComponents/NotificationContent";
import ActivitiesContent from "../components/MyPageComponents/ActivitiesContent";

const MyPageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: auto;
    flex-direction: column;
    margin: 50px auto;
    max-width: 1340px; /* 최대 너비를 1340px  설정 (변경 가능성 O)*/
    padding: 0 20px;

    @media (max-width: 768px) {
        padding: 0 15px;
        margin: 50px auto;
    }

    @media (max-width: 480px) {
        padding: 0 10px;
        margin: 30px auto;
    }
`;

const Title = styled.h1`
  text-align: left;
  font-weight: bold;
  font-size: 2.5rem;
  color: var(--black800);
  margin: 30px 0;
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