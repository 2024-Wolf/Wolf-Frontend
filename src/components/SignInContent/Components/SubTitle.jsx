import styled from 'styled-components';

import React from 'react';


// components/SignInContent/Components/SubTitle.jsx
export const SubTitleWrapper = styled.div`
  white-space: pre-line;
  font-size: 18px;
  color: var(--black800);
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 17px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const SubTitle = ({ title }) => {
    return (
        <SubTitleWrapper>
            {title}
        </SubTitleWrapper>
    )
}

export default SubTitle;