import styled from 'styled-components';
import { TabsContainer, TabButton2, MeetingContainer, StartMeetingButton } from "../components/GlobalStyledComponents";

import React, { useState } from 'react';
import MeetingPortal from '../components/Group/MeetingComponent/MeetingPortal';


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
          <TabButton2
            key={index}
            isActive={selectedTab === tab}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </TabButton2>
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
