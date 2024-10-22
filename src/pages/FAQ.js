import styled from 'styled-components';
import { PageTitle } from "../components/GlobalStyledComponents";

import ArrowDownIcon from '../components/Icon/ArrowDownIcon';
import ArrowUpIcon from '../components/Icon/ArrowUpIcon';
import PaginatedList from '../components/Pagination/PaginatedList';

import React, { useEffect, useState } from 'react';
import FAQTab from "../components/Tab/FAQTab";
import { getFaqByCategory } from "../components/Apis/FaqApi";
import ErrorUI from "../components/Error/ErrorUI";

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
    gap: 5px;
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
    background-color: ${(props) => (props.active === 'true' ? 'var(--violet200)' : 'none')};


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

const FaqCategories = [
  { label: '계정', value: 'ACCOUNT' },
  { label: '스터디', value: 'STUDY' },
  { label: '프로젝트', value: 'PROJECT' },
  { label: '챌린지', value: 'CHALLENGE' },
  { label: 'Etc', value: 'ETC' }
];

const FAQ = () => {
  const [activeTab, setActiveTab] = useState(FaqCategories[0].value); // 현재 선택된 탭
  const [openQuestion, setOpenQuestion] = useState(null); // 하나의 질문만 열리도록 설정
  const [currentPage, setCurrentPage] = useState(1); // 최근 페이지 번호
  const [faqData, setFaqData] = useState([]);
  const [error, setError] = useState(null);


  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index); // 현재 열려있는 질문이면 닫고, 아니면 해당 질문을 열도록 설정
  };

  const fetchFaqData = (category, page) => {
    getFaqByCategory(category, page, 10)
      .then((data) => {
        setFaqData(data.data.faqItems); // 받아온 FAQ 데이터를 상태로 설정
      })
      .catch(() => {
        setError("FAQ 데이터를 불러올 수 없습니다.");
      })
  };
  useEffect(() => {
    console.log("Current activeTab:", activeTab);
    if (activeTab) {
      fetchFaqData(activeTab, currentPage);
    }
  }, [activeTab, currentPage]);

  const changeTab = (tabLabel) => {
    const selectedTab = FaqCategories.find(category => category.label === tabLabel);

    if (selectedTab) {
      setActiveTab(selectedTab.value); // 백엔드와 주고받을 때는 value 사용
      setOpenQuestion(null); // 탭 변경 시 열려 있는 질문 해제
      setCurrentPage(1); // 탭 변경 시 페이지 초기화
    } else {
      console.error(`Invalid tab label: ${tabLabel}`);
    }
  };

  const renderItems = (items) => (
    items?.map((faq, index) => (
      <FAQItem key={index}>
        <FAQQuestion active={(openQuestion === index).toString()} onClick={() => toggleQuestion(index)}>
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

  // 에러 발생 UI
  if (error) {
    return <ErrorUI error={error} />;
  }

  return (
    <FAQContainer>
      <PageTitle>FAQ</PageTitle>
      <FAQContent>
        <FAQTab
          tab={FaqCategories.map(category => category.label)} // 화면에 보여줄 label
          activeTab={FaqCategories.find(category => category.value === activeTab)?.label} // 현재 선택된 탭의 label 표시
          changeTab={changeTab} // 탭 변경 시 changeTab 함수 실행 (label 전달됨)
        />
        <FAQList>
          <PaginatedList
            data={faqData}
            renderItems={renderItems}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </FAQList>
      </FAQContent>
    </FAQContainer>
  );
};

export default FAQ;
