import React, { useState } from 'react';
import styled from 'styled-components';
import MeetingPortal from '../components/Group/MeetingComponent/MeetingPortal';

const TabsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

const TabButton = styled.button`
  flex-basis: 20%;
  padding: 10px;
  text-align: center;
  background-color: ${(props) => (props.isActive ? '#f2f0ff' : 'transparent')};
  border: none;
  border-bottom: ${(props) => (props.isActive ? '2px solid #6c63ff' : 'none')};
  cursor: pointer;
  font-weight: ${(props) => (props.isActive ? 'bold' : 'normal')};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const MeetingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
`;

const StartMeetingButton = styled.button`
  padding: 10px 20px;
  background-color: #6c63ff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #574dff;
  }
`;

const Tabs = ({ categories, onSelect }) => {
  const [selectedTab, setSelectedTab] = useState(categories[0]);
  const [isMeetingOpen, setIsMeetingOpen] = useState(false);

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
    onSelect(tab);
  };

  const openMeetingWindow = () => {
    setIsMeetingOpen(true);
  };

  return (
    <div>
      <TabsContainer>
        {categories.map((tab, index) => (
          <TabButton
            key={index}
            isActive={selectedTab === tab}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </TabButton>
        ))}
      </TabsContainer>

      {selectedTab === '회의' && (
        <MeetingContainer>
          <div>
            <StartMeetingButton onClick={openMeetingWindow}>
              화상회의 하기
            </StartMeetingButton>
            {isMeetingOpen && <MeetingPortal />}
          </div>
        </MeetingContainer>
      )}
    </div>
  );
};

export default Tabs;
