import React from 'react';
import styled from 'styled-components';

const SubTitleWrapper = styled.div`
    white-space: pre-line;
    font-size: 20px;
    color: var(--black800);
    line-height: 1.5;
    @media (max-width: 768px) {
        font-size: 18px;
    }

    @media (max-width: 480px) {
        font-size: 16px;
    }
`;

const SubTitle = ({title}) => {
    return (
        <SubTitleWrapper>
            {title}
        </SubTitleWrapper>
    )
}

export default SubTitle;