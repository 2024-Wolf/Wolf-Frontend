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

    background-color: ${(props) =>
        props.category === "스터디"
            ? 'var(--violet100)'
            : 'var(--violet200)'};
    color: ${(props) =>
        props.category === "스터디"
            ? 'var(--black600)'
            : 'var(--black600)'};
    
`;

// components/Card/Category.jsx
export const CategoryTag = styled.span`
    background-color: ${(props) =>
        props.category === "스터디"
            ? 'var(--violet400)' // 스터디 태그 배경
            : 'var(--violet100)'}; // 프로젝트 태그 배경
    color: ${(props) =>
        props.category === "스터디"
            ? 'var(--violet100)' // 스터디 태그 글자색
            : 'var(--violet400)'}; // 프로젝트 태그 글자색

    border-radius: 10px;
    padding: 4px 8px;
    font-size: 12px;
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 0.5;
`;

const Category = ({ category }) => {
    return (
        <CategoryContainer category={category}>
            WOLF
            <CategoryTag category={category}>#{category}</CategoryTag>
        </CategoryContainer>
    );
}

export default Category;
