import React from "react";
import styled from "styled-components";

const BarContainer = styled.div`
    width: 100%;
`;

const BarWrapper = styled.div`
    width: 100%;
    background-color: #e0e0e0;
    border-radius: 5px;
    display: flex;
    align-items: center;
    overflow: hidden;
    margin: 10px 0;
`;

const BarFiller = styled.div`
    background-color: var(--violet300);
    width: ${props => props.width};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: var(--black800);
    border-radius: 5px 0 0 5px;
    font-size: 14px;
    font-weight: 500;
    padding: 10px;
`;

const BarLabel = styled.span`
    padding: 0 10px;
    font-size: 16px;
    color: var(--black800);
`;

const ActivityScoreBar = () => {
    const scores = [
        { label: "좋았어요", percentage: 70 },
        { label: "그저 그랬어요", percentage: 40 },
        { label: "별로예요", percentage: 60 }
    ];

    return (
        <BarContainer>
            {scores.map((score, index) => (
                <BarWrapper key={index}>
                    <BarFiller width={`${score.percentage}%`}>{score.label}</BarFiller>
                    <BarLabel>{score.percentage}%</BarLabel>
                </BarWrapper>
            ))}
        </BarContainer>
    );
};

export default ActivityScoreBar;
