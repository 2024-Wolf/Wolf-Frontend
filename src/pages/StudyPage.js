import styled from "styled-components";
import {
  StudyTitle,
  Button3, StudyDetails, LeaderInfo, LeaderText
} from "../components/GlobalStyledComponents";

import React, { useState } from "react";
import TodoContent from "../components/Group/TodoContent";
import ChallengeTab from "../components/Group/ChallengeTab";
import MeetingContent from "../components/Group/MeetingContent";
import GroupInfoContent from "../components/Group/GroupInfoContent";
import GroupManageContent from "../components/Group/GroupManageContent";
import Declaration from "../components/Declaration";
import ProfileIcon from "../components/Icon/ProfileIcon";
import FAQTab from "../components/Tab/FAQTab";

// pages/StudyPage.js
export const GroupCategory = styled.div`
  background-color: var(--violet500);
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

// pages/StudyPage.js
export const GroupHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

// 상수로 카테고리 선언
const TAB = {
  INFO: "정보",
  TODO: "할일",
  CHALLENGE: "챌린지",
  MEETING: "회의",
  MANAGE: "관리",
};

const StudyPage = () => {
  const [activeTab, setActiveTab] = useState(TAB.INFO);
  const [isMeetingStarted, setIsMeetingStarted] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const changeTab = (tab) => {
    setActiveTab(tab);
  };

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
      {/* 그룹 정보 영역 */}
      <GroupHeader>
        <GroupCategory>스터디</GroupCategory>
        <Button3 onClick={openModal}>신고하기</Button3>
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
      </GroupHeader>

      {/* 탭 영역 */}
      <FAQTab
        tab={[TAB.INFO, TAB.TODO, TAB.CHALLENGE, TAB.MEETING, TAB.MANAGE]}
        activeTab={activeTab}
        changeTab={changeTab} />
      {/* */}

      {/*<div className="study-content">*/}
      {activeTab === TAB.MEETING ? (
        <MeetingContent isMeetingStarted={isMeetingStarted} />
      ) : (
        <SelectedComponent />
      )}
      {/*</div>*/}
    </>
  );
};

export default StudyPage;
