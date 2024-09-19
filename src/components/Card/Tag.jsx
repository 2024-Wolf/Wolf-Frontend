import React from 'react';
import styled from 'styled-components';

const TagContainer = styled.span`
    background-color: var(--violet500);
    color: white;
    border-radius: 10px;
    padding: 4px 8px;
    font-size: 12px;

    /* 반응형 미디어 쿼리 */
    @media (max-width: 768px) {
        font-size: 11px; /* 태블릿에서 태그 크기 줄이기 */
        padding: 3px 7px;
    }

    @media (max-width: 480px) {
        font-size: 10px; /* 모바일에서 태그 크기 더 줄이기 */
        padding: 2px 6px;
    }
`;

const Tag = ({ tag }) => {
    return <TagContainer>{tag}</TagContainer>;
};

export default Tag;
