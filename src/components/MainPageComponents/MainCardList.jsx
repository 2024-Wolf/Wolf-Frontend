import styled from "styled-components";

import React, { useState } from 'react';
import Card from "../Card/Card";
import { useNavigate } from 'react-router-dom';
import PaginatedList from '../Pagination/PaginatedList';

const MainCardListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 27.5px;
    align-items: center;
    justify-content: start;

    @media (max-width: 616px) {
        width: 100%;
        flex-wrap: nowrap;
        flex-direction: column;
        height: 100%;
    }
`;

const MainCardParentContainer = styled.div`
    display: flex;
    gap: 27.5px;
    align-items: center;
    justify-content: start;
    width: 1360px;
    margin: auto;
    // 카드 가로 5개

    @media (max-width: 1500px) {
        width: 1084px;
        // 카드 가로 4개
    }
        
    @media (max-width: 1257px) {
        width: 807px;
        // 카드 가로 3개
    }

    @media (max-width: 964px) {
        width: 530px;
        // 카드 가로 2개
    }

    @media (max-width: 616px) {
        width: 100%;
        // 카드 가로 1개
    }
    
`;
const CardMapingContainer = styled.div`
    @media (max-width: 616px) {
        display: flex;
        width: 90%;
        height: 300px;
        border-radius: 10px;
    }
`;


const MainCardList = ({ category, data }) => {
    const [currentPage, setCurrentPage] = useState(1); // 최근 페이지 번호

    const navigate = useNavigate();

    const handleCardClick = (id) => {
        navigate(`/post`); // 카드 ID에 따라 그룹 페이지로 이동 -> navigate(`/post/${id}`)
    };

    const filteredData = category === '전체' ? data : data.filter(card => card.category === category);

    const renderItems = (items) => {
        return items.map((card) => (
            <CardMapingContainer key={card.id} onClick={() => handleCardClick(card.id)}>
                <Card
                    category={card.category}
                    title={card.title}
                    deadline={card.deadline}
                    challenge={card.challenge}
                    tags={card.tags}
                    icons={card.icons}
                    profile={card.profile}
                />
            </CardMapingContainer>
        ));
    };

    return (
        <MainCardParentContainer>
            <MainCardListContainer>
                <PaginatedList data={filteredData} renderItems={renderItems} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </MainCardListContainer>
        </MainCardParentContainer>
    );
}

export default MainCardList;
