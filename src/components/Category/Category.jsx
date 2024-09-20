import React from 'react';
import styled from 'styled-components';

// Styled Components 정의
const CategoryWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #eaeaea;
`;

const CategoryItem = styled.div`
  margin-right: 25px;
  font-size: 22px;
  font-weight: 700;
  color: ${(props) => (props.$isActive ? 'var(--black700)' : 'var(--black400)')};
  cursor: pointer;
  transition: color 0.3s;
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
