import styled from "styled-components";

import React from "react";
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

    @media (max-width: 1500px) {
        width: 1084px;
    }
        
    @media (max-width: 1257px) {
        width: 807px;
    }

    @media (max-width: 964px) {
        width: 530px;
    }

    @media (max-width: 616px) {
        width: 261px;
    }

    @media (max-width: 616px) {
        width: 100%;
    }
    
`;
const CardMapingContainer = styled.div`
    @media (max-width: 616px) {
        display: flex;
        width: 90%;
        height: 300px;
        border-radius: 10px;
        border-bottom: 2px solid var(--black300); 

        border: 0.5px solid var(--black200);
    }
`;


const MainCardList = ({ category, data }) => {
    const navigate = useNavigate();

    const handleCardClick = (id) => {
        navigate(`/post/${id}`); // 카드 ID에 따라 그룹 페이지로 이동
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
                <PaginatedList data={filteredData} renderItems={renderItems} />
            </MainCardListContainer>
        </MainCardParentContainer>
    );
}

export default MainCardList;
