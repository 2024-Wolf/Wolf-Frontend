import styled from "styled-components";

import React, { useState } from 'react';
import Card from "../Card/Card";
import { useNavigate } from 'react-router-dom';
import PaginatedList from '../Pagination/PaginatedList';
import { CardMapingContainer, MainCardParentContainer, MainCardListContainer } from "../GlobalStyledComponents";


const MainCardList = (props) => {
    const [currentPage, setCurrentPage] = useState(1); // 최근 페이지 번호

    const navigate = useNavigate();

    const handleCardClick = (id) => {
        navigate(`/post/${id}`); // 카드 ID에 따라 그룹 페이지로 이동 -> navigate(`/post/${id}`)
    };

    

    const renderItems = (items) => {
        return items.map((card) => (
            <CardMapingContainer key={card.groupPostId} onClick={() => handleCardClick(card.groupPostId)}>
                <Card
                    category={card.type}
                    title={card.name}
                    deadline={card.endDate}
                    tags={[card.tag]}
                    challenge={card.challengeStatus === 'Y' ? 'Y' : null}
                    profile={{
                        imgSrc: card.leaderUser.userProfileImg || 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
                        name: card.leaderUser.userNickname
                    }}
                />
            </CardMapingContainer>
        ));
    };

    return (
        <MainCardParentContainer>
            <MainCardListContainer>
                <PaginatedList data={props.data} renderItems={renderItems} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </MainCardListContainer>
        </MainCardParentContainer>
    );
}

export default MainCardList;
