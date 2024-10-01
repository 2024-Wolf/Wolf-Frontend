import styled from "styled-components";
import { CategoryContainer, CategoryTag } from "../GlobalStyledComponents";

import React from "react";


const Category = ({ category }) => {
    return (
        <CategoryContainer>
            <CategoryTag>#{category}</CategoryTag>
        </CategoryContainer>
    );
}

export default Category;