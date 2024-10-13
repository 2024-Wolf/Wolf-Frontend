import styled from "styled-components";

import React, { useState } from 'react';
import Card from "../Card/Card";
import { useNavigate } from 'react-router-dom';
import PaginatedList from '../Pagination/PaginatedList';
import { CardMapingContainer, MainCardParentContainer, MainCardListContainer } from "../GlobalStyledComponents";





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
