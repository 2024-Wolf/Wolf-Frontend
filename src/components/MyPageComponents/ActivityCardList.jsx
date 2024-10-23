import styled from 'styled-components';
import { ActivityCardListContainer, CardMapingContainer, MainCardListContainer, MainCardParentContainer } from "../GlobalStyledComponents";

import React from 'react';
import Card from "../Card/Card";
import { useNavigate } from 'react-router-dom';




const ActivityCardList = ({ cards, buttonText, category }) => {
    const navigate = useNavigate();

    const handleCardClick = (id) => {
        navigate(`/post/${id}`); // 카드 ID에 따라 그룹 페이지로 이동
    };

    {/* 추후변경 - handleCardClick(card.id) */ }
    return (
        <>
            {<MainCardParentContainer>
                <MainCardListContainer>
                    {cards.map((card) => {
                        // // 신청일이 있을 때만 전달
                        // const applicationDate = card.applicationDate ? card.applicationDate : null;

                        // 합류일이 있을 때만 전달
                        const joinDate = card.participationDate ? card.participationDate : null;

                        // // 프로필이 있을 때만 전달
                        // const profile = card.profile ? card.profile : null;

                        return (
                            <CardMapingContainer key={card.groupPostId} onClick={() => navigate(`/post/${card.groupPostId}`)}>
                                <Card
                                    category={category}
                                    title={card.name}
                                    deadline={card.endDate}
                                    challenge={card.isContainChallenge === 'Y' ? true : false}
                                    tags={card?.tag?.split(',').map(tag => `#${tag.trim()}`)}
                                    icons={card.icons}
                                    buttonText={buttonText}
                                    joinDate={joinDate}
                                // profile={profile}
                                // applicationDate={applicationDate}
                                />
                            </CardMapingContainer>
                        );
                    })}
                </MainCardListContainer>
            </MainCardParentContainer>}
        </>
    );
};


export default ActivityCardList;