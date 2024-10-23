import styled from "styled-components";

import React from "react";


// components/Card/Category.jsx
export const CategoryContainer = styled.div`
    width: 100%;
    height: 100%;
    max-height: 110px;

    @media (max-width: 616px) {
        max-height: 140px;
    }
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    font: 32px Kavoon, sans-serif;
    text-decoration: none;

    background-color: ${({ $category }) =>
        $category === "스터디"
            ? 'var(--violet100)'
            : 'var(--violet200)'};
    color: ${({ $category }) =>
        $category === "스터디"
            ? 'var(--black600)'
            : 'var(--black600)'};
`;

// components/Card/Category.jsx
export const CategoryTag = styled.span`
    background-color: ${({ $category }) =>
        $category === "study"
            ? 'var(--black500)'
            : 'var(--black500)'};
    color: var(--black000);

    border-radius: 10px;
    padding: 4px 8px;
    font-size: 12px;
    position: absolute;
    top: 10px;
    left: 10px;
`;

const CardThumbnail = ({ style, category }) => {
    return (
        <CategoryContainer style={style} $category={category}>
            WOLF
            {category && <CategoryTag $category={category}>{category}</CategoryTag>}
        </CategoryContainer>
    );
}

export default CardThumbnail;
