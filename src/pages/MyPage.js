import styled from "styled-components";
import { PageTitle } from "../components/GlobalStyledComponents";

import React, { useState, useEffect } from "react";
import UserInfoContent from "../components/MyPageComponents/UserInfoContent";
import NotificationContent from "../components/MyPageComponents/NotificationContent";
import ActivitiesContent from "../components/MyPageComponents/ActivitiesContent";
import FAQTab from "../components/Tab/FAQTab";
import MyPageProfile from "../components/MyPageComponents/MyPageProfile";
import ProfileImage from "../components/MyPageComponents/ProfileImage";


import { isLoggedIn } from "../components/Apis/Common"

// pages/MyPage.js
const MyPageContainer = styled.div`
    display: flex;
    width: 100%;
    padding: 40px 30px;
    flex-direction: column;
    gap: 20px;

    justify-content: center;
    align-items: flex-start;
    height: auto;
`;

const MyPageContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const MyPage = ({ contentType, whatTab = "계정" }) => {
    const [activeTab, setActiveTab] = useState(whatTab);
    const [contentsType, setContentsType] = useState(contentType);
    // contentsType 상태 ('myselfEditing', 'strangerViewing', 'myselfViewing' 중 하나)

    useEffect(() => {
        const loggedIn = isLoggedIn(); // 로그인 상태 확인
        console.log("로그인중이냐?: ", loggedIn); // 결과 출력
    }, []);


    const renderTabContent = () => {
        switch (activeTab) {
            case "계정":
                return <UserInfoContent contentsType={contentsType} setContentsType={setContentsType} />;
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
                <div>
                    <h1>로그인 상태 확인</h1>
                </div>
                <PageTitle>마이페이지</PageTitle>
                <MyPageProfile contentsType={contentsType} />
                <ProfileImage />

                <MyPageContent>
                    <FAQTab tab={["계정", "알림", "활동"]} activeTab={activeTab} changeTab={changeTab} />
                    {renderTabContent()}
                </MyPageContent>
            </MyPageContainer>
        </>
    );
}

export default MyPage;