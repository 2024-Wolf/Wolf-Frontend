import styled from 'styled-components';
import { PageTitle } from "../components/GlobalStyledComponents";
import PaginatedList from '../components/Pagination/PaginatedList';
import React, { useEffect, useState } from 'react';
import ErrorUI from "../components/Error/ErrorUI";

import NoticeDetail from "../components/Notice/NoticeDetail";
import { getFaqByCategory } from "../components/Apis/FaqApi";


const NoticeContainer = styled.div`
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

const NoticeContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const NoticeList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 5px;
    width: 100%;
`;

export const NoticeItem = styled.div`
    padding-bottom: 5px;
    border-bottom: 1px solid #ccc;
    width: 100%;
`;

export const NoticeTitle = styled.div`
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

    span {
        overflow: hidden;
        text-overflow: ellipsis;
        width: 100%;
    }
`;

export const NoticeAnswer = styled.div`
    padding: 15px 30px;
    line-height: 1.6;
    border-radius: 7px;
    background-color: var(--black100);
    margin-left: 20px;
    font-size: 16px;
    color: var(--black600);
`;


const NoticeCategories = [
  { label: '계정', value: 'ACCOUNT' },
  { label: '스터디', value: 'STUDY' },
  { label: '프로젝트', value: 'PROJECT' },
  { label: '챌린지', value: 'CHALLENGE' },
  { label: 'Etc', value: 'ETC' }
];

const Notice = () => {
  const [activeTab, setActiveTab] = useState(NoticeCategories[0].value); // 현재 선택된 탭
  const [currentPage, setCurrentPage] = useState(1); // 최근 페이지 번호
  const [noticeData, setNoticeData] = useState([]);
  const [error, setError] = useState(null);
  const [noticeId, setNoticeId] = useState(0);
  const [detailModalOn, setDetailModalOn] = useState(false);
  const [item, setItem] = useState();


  const fetchNoticeData = (category, page) => {
    getFaqByCategory(category, page, 10)
      .then((data) => {
        setNoticeData(data.data.faqItems); // 받아온 Notice 데이터를 설정
      })
      .catch(() => {
        setError("Notice 데이터를 불러올 수 없습니다.");
      })
  };

  useEffect(() => {
    console.log("Current activeTab:", activeTab);
    if (activeTab) {
      fetchNoticeData(activeTab, currentPage);
    }
  }, [activeTab, currentPage]);

  const renderItems = (items) => (
    items?.map((Notice, index) => (
      <NoticeItem key={index} onClick={() => setDetailItem(1)}>
        <NoticeTitle>
          <span>{Notice.question}</span>
        </NoticeTitle>
      </NoticeItem>
    ))
  );

  // 에러 발생 UI
  if (error) {
    return <ErrorUI error={error} />;
  }


  // 공지사항 상세
  function setDetailItem(item) {
    setDetailModalOn(true);
    setItem(item);
  }

  return (
    <NoticeContainer>
      <PageTitle>공지사항</PageTitle>
      <NoticeContent>
        {detailModalOn ? <NoticeDetail challengePostId={item.challengePostId} prevClick={() => setDetailModalOn(false)} /> :
          <>
            <NoticeList>
              <PaginatedList
                setDetail={setDetailItem}
                data={noticeData}
                renderItems={renderItems}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </NoticeList>
          </>
        }
      </NoticeContent>
    </NoticeContainer>
  );
};

export default Notice;
