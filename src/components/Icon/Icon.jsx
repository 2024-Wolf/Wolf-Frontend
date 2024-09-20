import React from 'react';
import styled from "styled-components";

const IconContainer = styled.img`
    width: 16px;
    height: 16px;

    /* 반응형 미디어 쿼리 */
    @media (max-width: 768px) {
        width: 14px;
        height: 14px; /* 태블릿에서 아이콘 크기 줄이기 */
    }

    @media (max-width: 480px) {
        width: 12px;
        height: 12px; /* 모바일에서 아이콘 크기 더 줄이기 */
    }
`;


const Icon = ({ src, alt }) => {
    return <IconContainer src={src} alt={alt}/>
};

export default Icon;
