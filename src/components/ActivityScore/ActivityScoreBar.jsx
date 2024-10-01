import styled from "styled-components";
import { BarContainer, BarWrapper, BarFiller, BarLabel } from "../GlobalStyledComponents";

import React from "react";

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
