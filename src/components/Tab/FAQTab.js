import styled from "styled-components";

import React from "react";

const FAQTabWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0;
  padding: 0;
  border-bottom: 1px solid var(--black200);
  width: 100%;
`;

const FAQTabButton = styled.button.withConfig({
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


const FAQTab = ({ tab, activeTab, changeTab, disabled }) => {
  return (
    <FAQTabWrapper>
      {tab.map((tab) => (
        <FAQTabButton
          key={tab}
          active={(activeTab === tab).toString()}
          onClick={() => changeTab(tab)}
          disabled={disabled}
        >
          {tab}
        </FAQTabButton>
      ))}
    </FAQTabWrapper>
  );
}

export default FAQTab;