import React from 'react';
import styled from 'styled-components';

const CategoryWrapper = styled.div`
    width:100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px 0;
`;

const CategoryItem = styled.div`
    margin-right: 25px;
    font-size: 22px;
    font-weight: 700;
    color: ${({$isActive}) => ($isActive ? 'var(--black700)' : 'var(--black400)')};
    cursor: pointer;
    transition: color 0.3s;
    
    @media (max-width: 768px) {
        font-size: 14px;
        margin-right: 20px;
    }
    
    @media (max-width: 480px) {
        font-size: 12px;
        margin-right: 15px;
    }
`;


const Category = ({ categories, activeCategory, setActiveCategory }) => {

    return (
        <CategoryWrapper>
            {categories.map((category, index) => (
                <CategoryItem
                    key={index}
                    $isActive = {(activeCategory === category)}

                    onClick={() => {
                        setActiveCategory(category);
                    }}
                >
                    {category}
                </CategoryItem>
            ))}
        </CategoryWrapper>
    );
};

export default Category;
