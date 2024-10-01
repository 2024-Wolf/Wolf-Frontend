import styled from "styled-components";
import { CardContainer2 } from "../GlobalStyledComponents";

import React from "react";
import Card from "../Card/Card";
import { useNavigate } from 'react-router-dom';

const MainCardList = ({ category, data }) => {
    const navigate = useNavigate();

    const handleCardClick = (id) => {
        navigate(`/post/${id}`); // 카드 ID에 따라 그룹 페이지로 이동
    };

    // Cards 데이터를 필터링하여 렌더링
    return (
        <CardContainer2>
            {(category === '전체' ? data : data.filter(card => card.category === category)).map(card => (
                <div key={card.id} onClick={() => handleCardClick(card.id)}> {/* 추후변경 - handleCardClick(data.id) */}
                    <Card
                        key={card.id}
                        category={card.category}
                        title={card.title}
                        deadline={card.deadline}
                        challenge={card.challenge}
                        tags={card.tags}
                        icons={card.icons}
                        profile={card.profile}
                    />
                </div>
            ))}
        </CardContainer2>
    );
}


export default MainCardList;
