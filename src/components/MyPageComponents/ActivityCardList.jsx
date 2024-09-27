import React from 'react';
import styled from 'styled-components';
import Card from "../Card/Card";
import { useNavigate } from 'react-router-dom';

const ActivityCardListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`;


const ActivityCardList = ({ cards, buttonText }) => {
    const navigate = useNavigate();

    const handleCardClick = (id) => {
        navigate(`/study/${id}`); // 카드 ID에 따라 그룹 페이지로 이동
    };

    return (
        <div onClick={() => navigate('/study')}> {/* 추후변경 - handleCardClick(card.id) */}
            <ActivityCardListContainer>
                {cards.map((card) => {
                    // 신청일이 있을 때만 전달
                    const applicationDate = card.applicationDate ? card.applicationDate : null;

                    // 합류일이 있을 때만 전달
                    const joinDate = card.joinDate ? card.joinDate : null;

                    // 프로필이 있을 때만 전달
                    const profile = card.profile ? card.profile : null;

                    return (
                        <Card
                            key={card.id}
                            category={card.category}
                            title={card.title}
                            deadline={card.deadline}
                            challenge={card.challenge}
                            tags={card.tags}
                            icons={card.icons}
                            profile={profile}
                            applicationDate={applicationDate}
                            joinDate={joinDate}
                            buttonText={buttonText}
                        />
                    );
                })}
            </ActivityCardListContainer>
        </div>
    );
};


export default ActivityCardList;