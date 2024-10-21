import styled from "styled-components";
import {
  StudyTitle, StudyDetails, LeaderText, CategoryMainTitle
} from "../components/GlobalStyledComponents";

import React, { useEffect, useRef, useState } from "react";
import TodoContent from "../components/Group/TodoContent";
import ChallengeTab from "../components/Group/ChallengeTab";
import MeetingContent from "../components/Group/MeetingContent";
import GroupInfoContent from "../components/Group/GroupInfoContent";
import GroupManageContent from "../components/Group/GroupManageContent";
import Declaration from "../components/Declaration";
import ProfileIcon from "../components/Icon/ProfileIcon";
import FAQTab from "../components/Tab/FAQTab";
import ReportButton from "../components/Button/ReportButton";
import { useParams } from "react-router-dom";
import { getGroupPost } from "../components/Apis/GroupPostApi"



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

const StudyPage = ({ profileData }) => {
  const [activeTab, setActiveTab] = useState(TAB.INFO);
  const [isMeetingStarted, setIsMeetingStarted] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [groupPostData, setGroupPostData] = useState({});  // 그룹 데이터
  const modeRef = useRef("project"); // "study" 또는 "project" (useEffect에서 설정함)

  const { postId } = useParams();

  const changeTab = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    const fetchGroupPostData = async () => {
      try {
        const result = await getGroupPost(postId); // 그룹 데이터 저장
        result.data ? setGroupPostData(result.data) : <></>;
        modeRef.current = result.data.type; // "study" 또는 "project"

        // 상태 코드가 200-299 범위인지 확인
        if (result.status < 200 || result.status >= 300) {
          throw new Error('네트워크 오류');
        }

      } catch (error) {
        // 에러 처리: 콘솔에 에러 메시지 출력
        console.error('데이터 등록 실패:', error);
      } finally {
        // 로딩 상태 종료
        // setLoading(false);
      }
    };

    fetchGroupPostData(); // 데이터 가져오기 호출
  }, [postId]); // postId가 변경될 때마다 실행

  const componentsMap = {
    [TAB.INFO]: (props) => <GroupInfoContent mode={modeRef.current} groupPostId={postId} userId={profileData?.id} groupPostData={groupPostData} />,
    [TAB.TODO]: (props) => <TodoContent />,
    [TAB.CHALLENGE]: (props) => <ChallengeTab />,
    [TAB.MEETING]: (props) => <MeetingContent groupPostId={postId} userId={profileData?.id} />,
    [TAB.MANAGE]: (props) => <GroupManageContent />,
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
          <CategoryMainTitle>{modeRef.current === "study" ? "스터디" : "프로젝트"}</CategoryMainTitle>
          <ReportButton onClick={openModal} />
        </GroupHeaderTop>
        {isModalOpen && <Declaration onClose={closeModal} />}
        <StudyTitle>{groupPostData?.name}</StudyTitle>
        <StudyDetails>
          <ProfileIcon
            targetUserId={groupPostData?.leaderUser?.userId}
            src={groupPostData?.leaderUser?.userProfileImg}
            alt="Profile">
            {groupPostData?.leaderUser?.userNickname}
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
            <SelectedComponent groupPostId={postId} />
          )
        }
        {/*</div>*/}
      </GroupBody>
    </>
  );
};

export default StudyPage;
