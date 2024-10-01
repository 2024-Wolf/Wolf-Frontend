import styled from 'styled-components';
import { CategoryWrapper, CategoryItem } from "../GlobalStyledComponents";

import React from 'react';

const Category = ({ categories, activeCategory, setActiveCategory }) => {

    return (
        <CategoryWrapper>
            {categories.map((category, index) => (
                <CategoryItem
                    key={index}
                    $isActive={(activeCategory === category)}

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
