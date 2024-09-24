import React from 'react';
import styled from 'styled-components';
import Card from "../Card/Card";

const ActivityCardListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`;


const ActivityCardList = ({cards, buttonText}) => {



    return (
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
    );
};


export default ActivityCardList;