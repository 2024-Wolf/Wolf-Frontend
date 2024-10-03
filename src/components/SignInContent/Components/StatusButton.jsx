import styled from 'styled-components';
import { CircleButton, Line2, StatusContainer } from "../../GlobalStyledComponents";

import React from 'react';

const StatusButton = ({ nowIndex }) => {
    const buttons = Array(4).fill(null).map((_, i) => (
        <>
            <CircleButton active={i === nowIndex}>{i + 1}</CircleButton>
            {i < 3 && <Line2 />}
        </>
    ));

    return <StatusContainer>{buttons}</StatusContainer>;
};

export default StatusButton;
