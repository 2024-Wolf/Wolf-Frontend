import styled from 'styled-components';

import React from 'react';

// components/Card/Tag.jsx
export const TagContainer = styled.span`
    background-color: var(--violet100);
    height: auto;
    color: var(--violet700);
    border-radius: 10px;
    padding: 0.5px 7px;
    font-size: 12px;
    height: fit-content;
`;

const Tag = ({ tag }) => {
    return <TagContainer>{tag}</TagContainer>;
};

export default Tag;
