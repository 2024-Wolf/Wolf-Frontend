import styled from "styled-components";
import { PageTitle } from "../components/GlobalStyledComponents";

import React, { useEffect, useState } from "react";
import UserInfoContent from "../components/MyPageComponents/UserInfoContent";
import NotificationContent from "../components/MyPageComponents/NotificationContent";
import ActivitiesContent from "../components/MyPageComponents/ActivitiesContent";
import FAQTab from "../components/Tab/FAQTab";
import MyPageProfile from "../components/MyPageComponents/MyPageProfile";

import { getMyProfile, getAlarms } from '../components/Apis/UserApi';
import LoadingSpiner from "../components/Loading/LoadingSpinner";
import ErrorUI from "../components/Error/ErrorUI";
import { useParams } from 'react-router-dom';

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
`;

const MyPage = ({ contentType, whatTab = "계정", profileData }) => {
    const [activeTab, setActiveTab] = useState(whatTab);
    const [contentsType, setContentsType] = useState(contentType);
    // contentsType 상태 ('myselfEditing', 'strangerViewing', 'myselfViewing' 중 하나)
    const [alarmData, setAlarmData] = useState(null);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { userId } = useParams(); // URL에서 userId를 가져옴

    useEffect(() => {
        const fetchAlarm = async () => {
            try {
                setLoading(true);  // 로딩 상태 시작
                setError(null);    // 에러 초기화

                const dataAlarm = await getAlarms(); // getAlarms 함수 호출
                setAlarmData(dataAlarm.data); // 알람 데이터 설정
            } catch (err) {
                setError('데이터를 불러오는 데 실패했습니다.');
                console.error(err);
            } finally {
                setLoading(false);  // 로딩 상태 종료
            }
        };

        fetchAlarm(); // 알람 데이터 가져오기
    }, []);

    // 로딩 중 UI
    if (loading) {
        return <LoadingSpiner />;
    }

    // 에러 발생 UI
    if (error) {
        return <ErrorUI error={error} />;
    }

    const renderTabContent = () => {
        switch (activeTab) {
            case "계정":
                return <UserInfoContent contentsType={contentsType} setContentsType={setContentsType} profileData={profileData} />;
            case "알림":
                return <NotificationContent alarmData={alarmData} />
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
                {/* 제목 */}
                {contentsType === 'strangerViewing' ? (<>
                    <PageTitle>유저 정보</PageTitle>
                </>) : (<>
                    <PageTitle>마이페이지</PageTitle>
                </>)}

                {/* 프로필 사진 */}
                <MyPageProfile contentsType={contentsType} profileData={profileData} />
                {/* 컨텐츠 */}
                <MyPageContent>
                    {contentsType === 'strangerViewing' ? (<></>) : (<>
                        <FAQTab tab={["계정", "알림", "활동"]} activeTab={activeTab} changeTab={changeTab} />
                    </>)}
                    {renderTabContent()}
                </MyPageContent>
            </MyPageContainer >
        </>
    );
}

export default MyPage;