import styled from "styled-components";

import React from "react";


// components/ActivityScore/ActivityScoreBar.jsx
export const BarFiller = styled.div`
  background-color: var(--violet300);
  width: ${(props) => props.width};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: var(--black800);
  border-radius: 5px 0 0 5px;
  font-size: 14px;
  font-weight: 500;
  padding: 10px;
  min-height: 35px;
`;

// components/ActivityScore/ActivityScoreBar.jsx
export const BarLabel = styled.span`
  padding: 0 10px;
  color: var(--black800);
    text-align: right;
    width: 100%;
`;

// components/ActivityScore/ActivityScoreBar.jsx
export const BarContainer = styled.div`
  width: 100%;
  display:flex;
  flex-direction:column;
  gap: 5px;
font-size: 14px;
`;

// components/ActivityScore/ActivityScoreBar.jsx
export const BarText = styled.div`
  width: auto;
  display:flex;
  flex-direction:column;
  gap: 5px;
    position: absolute;
  padding: 0 10px;
`;


// components/ActivityScore/ActivityScoreBar.jsx
export const BarWrapper = styled.div`
  width: 100%;
  background-color: #e0e0e0;
  border-radius: 5px;
  display: flex;
  align-items: center;
  overflow: hidden;
  min-height: 35px;
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
                    <BarText>{score.label}</BarText>
                    <BarFiller width={`${score.percentage}%`}></BarFiller>
                    <BarLabel>{score.percentage}%</BarLabel>
                </BarWrapper>
            ))}
        </BarContainer>
    );
};

export default ActivityScoreBar;
