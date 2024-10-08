import styled from 'styled-components';
import { PageTitle, CommonButton } from "../components/GlobalStyledComponents";

import FaqData from "../components/Data/FaqData";

import ArrowDownIcon from '../components/Icon/ArrowDownIcon';
import ArrowUpIcon from '../components/Icon/ArrowUpIcon';
import PaginatedList from '../components/Pagination/PaginatedList';

import React, { useState } from 'react';
import FAQTab from "../components/Tab/FAQTab";

const FAQContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 50px;
    padding: 40px 30px;
    @media (max-width: 768px) {
      padding: 40px 20px;
    }
    @media (max-width: 480px) {
      padding: 40px 10px;
    }
`;

const FAQContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 5px;
  width: 100%;
`;

export const FAQItem = styled.div`
  padding-bottom: 5px;
  border-bottom: 1px solid #ccc;
  width: 100%;
`;

export const FAQQuestion = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  line-height: 1.5;
  align-items: center;
  padding: 15px;
  font-size: 16px;
  color: var(--black800);
  min-height: 80px;

  border-radius: 7px;
  background-color: ${(props) => (props.active ? 'var(--violet200)' : 'none')};


  span {
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
  }
`;

export const FAQAnswer = styled.div`
  padding: 15px 30px;
  line-height: 1.6;
  border-radius: 7px;
  background-color: var(--black100);
  margin-left: 20px;
  font-size: 16px;
  color: var(--black600);
`;


export const FAQTabs = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0;
  padding: 0;
  border-bottom: 1px solid var(--black200);
`;

export const FAQTabButton = styled.button`
  white-space: nowrap;
  font-size: 18px;
  width: auto;
  text-align: center;
  min-height: 50px;
  background: none;
  flex: 1;
  outline: none;

  color: ${(props) => (props.active ? 'var(--violet600)' : 'var(--black600)')};
  background-color: ${(props) => (props.active ? '' : 'none')};
  border-bottom: ${(props) => (props.active ? '2px solid var(--violet600)' : 'none')};

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

const FAQ = () => {
  const [activeTab, setActiveTab] = useState('계정');
  const [openQuestion, setOpenQuestion] = useState(null); // 하나의 질문만 열리도록 설정
  const [currentPage, setCurrentPage] = useState(1); // 최근 페이지 번호

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index); // 현재 열려있는 질문이면 닫고, 아니면 해당 질문을 열도록 설정
  };

  const changeTab = (tab) => {
    setActiveTab(tab);
    setOpenQuestion(null); // 탭 변경 시 열려 있는 질문 해제
    setCurrentPage(1);
  };

  const renderItems = (items) => (
    items?.map((faq, index) => (
      <FAQItem key={index}>
        <FAQQuestion active={openQuestion === index} onClick={() => toggleQuestion(index)}>
          <span>{faq.question}</span>
          {openQuestion === index ? (
            <ArrowUpIcon isOpen={openQuestion === index} />
          ) : (
            <ArrowDownIcon isOpen={openQuestion === index} />
          )}
        </FAQQuestion>
        {openQuestion === index && <FAQAnswer>{faq.answer}</FAQAnswer>}
      </FAQItem>
    ))
  );

  return (
    <FAQContainer>
      <PageTitle>FAQ</PageTitle>
      <FAQContent>
        <FAQTab
          tab={['계정', '스터디', '프로젝트', '챌린지', 'Etc']}
          activeTab={activeTab}
          changeTab={changeTab}
        />
        <FAQList>
          <PaginatedList data={FaqData[activeTab]} renderItems={renderItems} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </FAQList>
      </FAQContent>
    </FAQContainer>
  );
};

export default FAQ;
