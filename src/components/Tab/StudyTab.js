import styled from "styled-components";

import React from "react";

const StudyTabWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0;
  padding: 0;
  border-bottom: 1px solid var(--black200);
  width: 100%;
`;

const StudyTabButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'active'
})`
  white-space: nowrap;
  font-size: 18px;
  width: auto;
  text-align: center;
  min-height: 50px;
  background: none;
  flex: 1;
  outline: none;
  border: 1px solid var(--black100);

  color: ${({ active }) => (active === 'true' ? 'var(--violet600)' : 'var(--black600)')};
  background-color: ${({ active }) => (active === 'true' ? '' : '')};
  border-bottom: ${({ active }) => (active === 'true' ? '2px solid var(--violet600)' : 'none')};

  &:hover {
    background-color: var(--black100);
  }

  @media (max-width: 768px) {
    font-size: 17px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;


const StudyTab = ({ tab, activeTab, changeTab, isLeader, isMember }) => {
  return (
    <StudyTabWrapper>
      {tab.map((tabItem) => {
        // 각 탭의 disabled 조건 설정
        let isDisabled = false;
        console.log('isLeader', isLeader)
        console.log('isMember', isMember)
        if (!isLeader && !isMember && tabItem !== tab[0]) {
          // 리더도 모임원도 아닌 경우, 'INFO' 탭만 활성화
          isDisabled = true;
        } else if (isMember && tabItem === tab[4]) {
          // 모임원은 'MANAGE' 탭만 비활성화
          isDisabled = true;
        }

        return (
          <StudyTabButton
            key={tabItem}
            active={(activeTab === tabItem).toString()}
            onClick={() => changeTab(tabItem)}
            disabled={isDisabled}
          >
            {tabItem}
            {isDisabled && (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock-fill" viewBox="0 0 16 16">
                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2" />
              </svg>
            )}
          </StudyTabButton>
        );
      })}
    </StudyTabWrapper>
  );
}

export default StudyTab;