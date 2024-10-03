import styled from 'styled-components';

import React from 'react';

// components/Category/MainCategory.jsx
export const MainCategoryWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

// components/Category/MainCategory.jsx
export const MainCategoryItem = styled.div`
    margin-right: 15px;
    font-size: 26px;
    font-weight: bold;
    color: ${({ $isActive }) => ($isActive ? 'var(--black700)' : 'var(--black400)')};
    cursor: pointer;
    transition: color 0.3s;
    white-space: nowrap;

    @media (max-width: 768px) {
        font-size: 24px;
    }

    @media (max-width: 480px) {
        font-size: 22px;
    }
`;

const MainCategory = ({ categories, activeCategory, setActiveCategory }) => {

    return (
        <MainCategoryWrapper>
            {categories.map((category, index) => (
                <MainCategoryItem
                    key={index}
                    $isActive={(activeCategory === category)}

                    onClick={() => {
                        setActiveCategory(category);
                    }}
                >
                    {category}
                </MainCategoryItem>
            ))}
        </MainCategoryWrapper>
    );
};

export default MainCategory;
