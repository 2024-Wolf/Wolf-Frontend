import React, { useState } from "react";
import styled from "styled-components";
import TodoContent from "../components/Group/TodoContent";
import ChallengeTab from "../components/Group/ChallengeTab";
import MeetingContent from "../components/Group/MeetingContent";
import GroupInfoContent from "../components/Group/GroupInfoContent";
import GroupTabs from "../components/Group/GroupTabs";
import GroupManageContent from "../components/Group/GroupManageContent";
import Declaration from "../components/Declaration";

// 상수로 카테고리 선언
const TAB = {
  INFO: "정보",
  TODO: "할일",
  CHALLENGE: "챌린지",
  MEETING: "회의",
  MANAGE: "관리",
};

// 공통 스타일들 분리
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: auto;
  flex-direction: column;
  margin: 80px auto;
  max-width: 1340px; /* 최대 너비를 1340px  설정 (변경 가능성 O)*/
  padding: 0 20px;
`;

const StudyInfoContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const CategoryButton = styled.div`
  background-color: #9787ff;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  font-size: 12px;
  width: 140px;
  position: relative;
`;

const StudyTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
`;

const Button = styled.button`
  padding: 10px 15px;
  background-color: var(--violet500);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-left: auto;

  &:hover {
    background-color: var(--violet300);
  }

  @media (max-width: 768px) {
    padding: 8px 12px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    padding: 5px 10px;
  }
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
  color: #a0a0a0;
`;

const StudyPage = () => {
  const [activeTab, setActiveTab] = useState(TAB.INFO);
  const [isMeetingStarted, setIsMeetingStarted] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const componentsMap = {
    [TAB.INFO]: GroupInfoContent, // StudyInfo 컴포넌트 렌더링
    [TAB.TODO]: TodoContent,
    [TAB.CHALLENGE]: ChallengeTab,
    [TAB.MEETING]: MeetingContent,
    [TAB.MANAGE]: GroupManageContent,
  };

  const SelectedComponent = componentsMap[activeTab];

  const handleMeetingStart = () => setIsMeetingStarted(true);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Container>
        {/* 그룹 정보 영역 */}
        <StudyInfoContent>
          <CategoryButton>스터디</CategoryButton>
          <Button onClick={openModal}>신고하기</Button>
          {isModalOpen && <Declaration onClose={closeModal} />}
          <StudyTitle>파이널 스터디 - 지금2조</StudyTitle>
          <StudyDetails>
            <ProfileIcon
              src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
              alt="Profile"
            />
            <LeaderInfo>
              <span>myeongju</span>
              <LeaderText>평가점수지표 요약</LeaderText>
            </LeaderInfo>
          </StudyDetails>
        </StudyInfoContent>

        {/* 탭 영역 */}
        <GroupTabs tab={activeTab} setActiveTab={setActiveTab} />
        {/* */}
        {/*<div className="study-content">*/}
        {activeTab === TAB.MEETING ? (
          <MeetingContent isMeetingStarted={isMeetingStarted} />
        ) : (
          <SelectedComponent />
        )}
        {/*</div>*/}
      </Container>
    </>
  );
};

export default StudyPage;
