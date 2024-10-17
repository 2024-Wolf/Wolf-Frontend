import styled from "styled-components";
import {
  StudyTitle, StudyDetails, LeaderText, CategoryMainTitle
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
import ReportButton from "../components/Button/ReportButton";



// pages/StudyPage.js
const GroupHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

// pages/StudyPage.js
const GroupHeaderTop = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  justify-content: space-between;

  .hiddenSpan {
    width: 116.65px;
    @media (max-width: 768px) {
        width: 113.2px;
    }
    @media (max-width: 480px) {
        width: 36.33px;
    }
  }
`;

const GroupBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;


// 상수로 카테고리 선언
const TAB = {
  INFO: "정보",
  TODO: "할 일",
  CHALLENGE: "챌린지",
  MEETING: "회의",
  MANAGE: "관리",
};

const StudyPage = () => {
  const [activeTab, setActiveTab] = useState(TAB.INFO);
  const [isMeetingStarted, setIsMeetingStarted] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const mode = "project"; // "study" 또는 "project"


  const changeTab = (tab) => {
    setActiveTab(tab);
  };

  const componentsMap = {
    [TAB.INFO]: (props) => <GroupInfoContent mode={mode} />,
    [TAB.TODO]: TodoContent,
    [TAB.CHALLENGE]: ChallengeTab,
    [TAB.MEETING]: MeetingContent,
    [TAB.MANAGE]: GroupManageContent,
  };

  const SelectedComponent = componentsMap[activeTab];

  // const handleMeetingStart = () => setIsMeetingStarted(true);

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
        <GroupHeaderTop>
          <span className="hiddenSpan" />
          <CategoryMainTitle>{mode === "study" ? "스터디" : "프로젝트"}</CategoryMainTitle>
          <ReportButton onClick={openModal} />
        </GroupHeaderTop>
        {isModalOpen && <Declaration onClose={closeModal} />}
        <StudyTitle>파이널 스터디 - 지금2조</StudyTitle>
        <StudyDetails>
          <ProfileIcon
            src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
            alt="Profile">
            myeongju
          </ProfileIcon>
          <LeaderText>평가점수지표 요약</LeaderText>
        </StudyDetails>
      </GroupHeader >

      <GroupBody>
        {/* 탭 영역 */}
        < FAQTab
          tab={[TAB.INFO, TAB.TODO, TAB.CHALLENGE, TAB.MEETING, TAB.MANAGE]}
          activeTab={activeTab}
          changeTab={changeTab} />
        {/* */}

        {/*<div className="study-content">*/}
        {
          activeTab === TAB.MEETING ? (
            <MeetingContent isMeetingStarted={isMeetingStarted} />
          ) : (
            <SelectedComponent />
          )
        }
        {/*</div>*/}
      </GroupBody>
    </>
  );
};

export default StudyPage;
