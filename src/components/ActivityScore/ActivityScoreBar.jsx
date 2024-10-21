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
  min-height: 35px;
`;

// components/ActivityScore/ActivityScoreBar.jsx
export const BarLabel = styled.span`
  padding: 0 10px;
  color: var(--black800);
  position: absolute;
  right: 0px;

  @media (min-width: 768px) and (max-width: 950px) {
    display: none;
  }

  @media (max-width: 260px) {
    display: none;
  }
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
  position: relative;

`;

const ActivityScoreBar = ({ activityMetricData }) => {

  // const scores = [
  //   { label: "좋았어요", percentage: activityMetricData.activityRatingGood },
  //   { label: "그저 그랬어요", percentage: activityMetricData.activityRatingSoso },
  //   { label: "별로예요", percentage: activityMetricData.activityRatingBad }
  // ];  

  // scores 배열을 정의
  const scores = [
    {
      label: "좋았어요",
      percentage: activityMetricData?.totalStudyParticipation > 0
        ? ((activityMetricData?.activityRatingGood / activityMetricData?.totalStudyParticipation) * 100).toFixed(0)
        : 0 // 총 참여 수가 0이면 비율은 0으로 설정
    },
    {
      label: "보통이었어요",
      percentage: activityMetricData?.totalStudyParticipation > 0
        ? ((activityMetricData?.activityRatingSoso / activityMetricData?.totalStudyParticipation) * 100).toFixed(0)
        : 0
    },
    {
      label: "별로였어요",
      percentage: activityMetricData?.totalStudyParticipation > 0
        ? ((activityMetricData?.activityRatingBad / activityMetricData?.totalStudyParticipation) * 100).toFixed(0)
        : 0
    }
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
