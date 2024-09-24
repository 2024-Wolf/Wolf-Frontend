import React, { useState } from 'react';
import styled from 'styled-components';
import TodoTab from '../components/TodoTab';
import ChallengeTab from '../components/ChallengeTab';
import MeetingContent from '../components/Group/MeetingContent';
import GroupInfoContent from "../components/Group/GroupInfoContent";
import GroupTabs from "../components/Group/GroupTabs";
import GroupManageContent from "../components/Group/GroupManageContent";
import Header from "../components/Header";
import Footer from "../components/Footer";

// 상수로 카테고리 선언
const TAB = {
    INFO: '정보',
    TODO: '할일',
    CHALLENGE: '챌린지',
    MEETING: '회의',
    MANAGE: '관리',
};

// 공통 스타일들 분리
const Container = styled.div`
    max-width: 1300px; /* 최대 너비를 1300px로 설정 (변경 가능성 O)*/
    margin: 80px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const StudyInfoContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
`;

const CategoryButton = styled.div`
    background-color: #9787FF;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
    font-size: 12px;
    width: 140px;
`;

const StudyTitle = styled.h2`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 15px;
`;

const StudyDetails = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #666;
`;

const ProfileIcon = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 10px;
`;

const LeaderInfo = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #000000;
`;

const LeaderText = styled.span`
    margin-left: 10px;
    color: #A0A0A0;
`;

const StudyPage = () => {
    const [activeTab, setActiveTab] = useState(TAB.INFO);
    const [isMeetingStarted, setIsMeetingStarted] = useState(false);

    const componentsMap = {
        [TAB.INFO]: GroupInfoContent, // StudyInfo 컴포넌트 렌더링
        [TAB.TODO]: TodoTab,
        [TAB.CHALLENGE]: ChallengeTab,
        [TAB.MEETING]: MeetingContent,
        [TAB.MANAGE]: GroupManageContent,
    };

    const SelectedComponent = componentsMap[activeTab];

    const handleMeetingStart = () => setIsMeetingStarted(true);

    return (
        <>
            <Header/>
            <Container>
                {/* 그룹 정보 영역 */}
                <StudyInfoContent>
                    <CategoryButton>스터디</CategoryButton>
                    <StudyTitle>파이널 스터디 - 지금2조</StudyTitle>
                    <StudyDetails>
                        <ProfileIcon src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" alt="Profile" />
                        <LeaderInfo>
                            <span>myeongju</span>
                            <LeaderText>평가점수지표 요약</LeaderText>
                        </LeaderInfo>
                    </StudyDetails>
                </StudyInfoContent>

                {/* 탭 영역 */}
                <GroupTabs
                    tab={activeTab}
                    setActiveTab={setActiveTab}
                />
                {/*이부분은 모르겠음 */}
                <div className="study-content">
                    {activeTab === TAB.MEETING ? (
                        <MeetingContent isMeetingStarted={isMeetingStarted} />
                    ) : (
                        <SelectedComponent />
                    )}
                </div>
            </Container>
            <Footer/>
        </>
    );
};

export default StudyPage;
