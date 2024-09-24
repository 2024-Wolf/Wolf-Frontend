import React from "react";
import styled from "styled-components";

const CategoryContainer = styled.div`
    width: 100%;
    height: 110px;
    position: relative;
    background-image: ${(category) =>
            category === "스터디"
                    ? `url('/CardViewThumbnail/ProjectThumbnail.png')`
                    : `url('/CardViewThumbnail/StudyThumbnail.png')`};
    background-size: cover;
    background-position: center;
    border-radius: 30px 30px 0 0;
    
    /* 반응형 미디어 쿼리 */
    @media (max-width: 768px) {
        height: 90px; /* 태블릿 크기 이하일 때 높이 조정 */
    }

    @media (max-width: 480px) {
        height: 70px; /* 모바일 크기 이하일 때 높이 조정 */
    }
`;

const CategoryTag = styled.span`
    background-color: var(--violet500); /*color system 500*/
    color: white;
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
        <CategoryContainer>
            <CategoryTag>#{category}</CategoryTag>
        </CategoryContainer>
    );
}

export default Category;