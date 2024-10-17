import styled from "styled-components";
import { PageTitle } from "../components/GlobalStyledComponents";

import React, { useEffect, useState } from "react";
import UserInfoContent from "../components/MyPageComponents/UserInfoContent";
import NotificationContent from "../components/MyPageComponents/NotificationContent";
import ActivitiesContent from "../components/MyPageComponents/ActivitiesContent";
import FAQTab from "../components/Tab/FAQTab";
import MyPageProfile from "../components/MyPageComponents/MyPageProfile";

import { getMyProfile } from '../components/Apis/UserApi';


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
    const [profileData, setProfileData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const data = await getMyProfile(); // getMyProfile 함수 호출
                setProfileData(data.data); // 프로필 데이터 설정
            } catch (err) {
                setError('프로필을 불러오는 데 실패했습니다.');
                console.error(err);
            }
        };

        fetchProfile(); // 프로필 데이터 가져오기
    }, []);


    const renderTabContent = () => {
        switch (activeTab) {
            case "계정":
                return <UserInfoContent contentsType={contentsType} setContentsType={setContentsType} profileData={profileData} />;
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
                    {error && <p>{error}</p>}
                    {profileData ? (
                        <div>
                            <h1>{profileData.name}</h1>
                            <p>{profileData.email}</p>
                            {/* 추가 프로필 정보 표시 */}
                        </div>
                    ) : (
                        <p>로딩 중...</p>
                    )}
                </div>
                <PageTitle>마이페이지</PageTitle>
                <MyPageProfile contentsType={contentsType} profileData={profileData} />
                <MyPageContent>
                    <FAQTab tab={["계정", "알림", "활동"]} activeTab={activeTab} changeTab={changeTab} />
                    {renderTabContent()}
                </MyPageContent>
            </MyPageContainer>
        </>
    );
}

export default MyPage;