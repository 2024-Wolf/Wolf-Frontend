import React, { useState } from 'react';
import styled from 'styled-components';
import Tabs from './Tabs';
import GroupInfoTab from '../components/GroupInfoTab';
import TodoTab from '../components/TodoTab';
import ChallengeTab from '../components/ChallengeTab';
import MeetingTab from '../components/MeetingTab';
import GroupManageTab from '../components/GroupManageTab';

const Container = styled.div`
  max-width: 90%;
  margin: 80px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StudyInfo = styled.div`
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
  height: 30Spx;
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
  const categories = ['정보', '할일', '챌린지', '회의', '관리'];
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [isMeetingStarted, setIsMeetingStarted] = useState(false);

  const componentsMap = {
    정보: GroupInfoTab,
    할일: TodoTab,
    챌린지: ChallengeTab,
    회의: MeetingTab,
    관리: GroupManageTab,
  };

  const SelectedComponent = componentsMap[selectedCategory];

  const handleMeetingStart = () => {
    setIsMeetingStarted(true); 
  };

  return (
    <Container>
      {/* 그룹 정보 영역 */}
      <StudyInfo>
        <CategoryButton>스터디</CategoryButton>
        <StudyTitle>파이널 스터디 - 지금2조</StudyTitle>
        <StudyDetails>
          <ProfileIcon src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" alt="Profile" />
          <LeaderInfo>
            <span>myeongju</span>
            <LeaderText>평가점수지표 요약</LeaderText>
          </LeaderInfo>
        </StudyDetails>
      </StudyInfo>

      {/* 탭 영역 */}
      <Tabs
        categories={categories}
        onSelect={setSelectedCategory}
        onMeetingStart={handleMeetingStart}
      />

      <div className="study-content">
        {selectedCategory === '회의' ? (
          <MeetingTab isMeetingStarted={isMeetingStarted} />
        ) : (
          <SelectedComponent />
        )}
      </div>
    </Container>
  );
};

export default StudyPage;
