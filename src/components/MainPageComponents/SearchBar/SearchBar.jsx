import styled from "styled-components";
import { InputContainer, SearchInput } from "../../GlobalStyledComponents";

import React from 'react';
import MiniIcon from "../../Icon/MiniIcon";


const SearchBar = () => {
    return (
        <InputContainer>
            <MiniIcon src="SearchIcon.png" alt="search" />
            <SearchInput type="text" placeholder="Search..." />
        </InputContainer>
    )
}

export default SearchBar;