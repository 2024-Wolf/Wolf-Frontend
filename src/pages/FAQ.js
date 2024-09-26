import React, { useState } from 'react';
import styled from 'styled-components';

const FAQContainer = styled.div`
  max-width: 1440px;
  margin: 80px auto;
  padding: 0 50px;
`;

const Title = styled.h1`
  text-align: left;
  font-weight: bold;
  font-size: 2.5rem;
  color: #333;
  margin: 30px 0px;
`;

const Tabs = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0;
  padding: 0;
  border-bottom: 1px solid #ccc;
`;

const TabButton = styled.button`
  flex: 1;
  background: none;
  border: none;
  padding: 15px 0;
  font-size: 16px;
  text-align: center;
  cursor: pointer;
  outline: none;
  color: ${(props) => (props.active ? '#6a5acd' : '#333')};
  background-color: ${(props) => (props.active ? '#F2F0FF' : 'none')};
  border-bottom: ${(props) => (props.active ? '2px solid #6a5acd' : 'none')};
`;

const FAQList = styled.div`
  margin-top: 0;
  padding: 0;
`;

const FAQItem = styled.div`
  border-bottom: 1px solid #ccc;
  padding: 15px 0;
`;

const FAQQuestion = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  font-weight: bold;
  padding: 15px 0;
  line-height: 1.5;
  min-height: 30px;
  background-color: ${(props) => (props.active ? '#F2F0FF' : 'none')};
`;

const FAQAnswer = styled.div`
  margin-top: 10px;
  padding-left: 20px;
  color: #666;
  line-height: 1.6;
`;

const Arrow = styled.span`
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: ${(props) => (props.isOpen ? 'none' : '6px solid #333')};
  border-bottom: ${(props) => (props.isOpen ? '6px solid #333' : 'none')};
`;

const FAQ = () => {
  const [activeTab, setActiveTab] = useState('계정');
  const [openQuestions, setOpenQuestions] = useState({});

  const faqData = {
    계정: [
      { question: '비회원으로 이용 가능한 기능이 있나요?', answer: '비회원은 검색과 조회만 가능합니다.' },
      { question: '회원정보 수정은 어디서 할 수 있나요?', answer: '회원정보 수정은 설정에서 가능합니다.' },
      { question: '탈퇴 신청을 철회할 수 있나요?', answer: '탈퇴 신청은 7일 이내에 철회 가능합니다.' },
    ],
    스터디: [
      { question: '스터디 시작은 어떻게 하나요?', answer: '스터디 게시판에서 해당 스터디에 참여신청을 통해 시작할 수 있습니다.' },
      { question: '스터디 참여 방법은 무엇인가요?', answer: '참여 링크를 통해 쉽게 참여할 수 있습니다.' },
    ],
    프로젝트: [
      { question: '프로젝트 관리 방법은?', answer: '프로젝트 관리 페이지에서 가능합니다.' },
    ],
    챌린지: [
      { question: '챌린지에 어떻게 참여하나요?', answer: '챌린지 페이지에서 참가 신청 가능합니다.' },
    ],
    Etc: [
      { question: '기타 문의는 어디로?', answer: '기타 문의는 wolfas@wolf.com으로 해주세요.' },
    ],
  };

  const toggleQuestion = (index) => {
    setOpenQuestions((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <FAQContainer>
      <Title>FAQ</Title>
      <Tabs>
        {['계정', '스터디', '프로젝트', '챌린지', 'Etc'].map((tab) => (
          <TabButton
            key={tab}
            active={activeTab === tab}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </TabButton>
        ))}
      </Tabs>
      <FAQList>
        {faqData[activeTab]?.map((faq, index) => (
          <FAQItem key={index}>
            <FAQQuestion active={openQuestions[index]} onClick={() => toggleQuestion(index)}>
              {faq.question}
              <Arrow isOpen={openQuestions[index]} />
            </FAQQuestion>
            {openQuestions[index] && <FAQAnswer>{faq.answer}</FAQAnswer>}
          </FAQItem>
        ))}
      </FAQList>
    </FAQContainer>
  );
};

export default FAQ;
