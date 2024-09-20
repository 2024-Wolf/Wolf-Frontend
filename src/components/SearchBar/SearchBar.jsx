import React from 'react';
import styled from "styled-components";
import Icon from "../Icon/Icon";

const InputContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 10px;
    
    background-color: var(--black200);
    padding: 10px;
    
    border-radius: 30px;
`;

const SearchInput = styled.input`
    width: 100%;
    max-width: 360px;
    border: none;
    color: var(--black700);
    background-color: var(--black200);
`;


const SearchBar = () => {
    return (
        <InputContainer>
            <Icon src="SearchIcon.png" alt="search" />
            <SearchInput type="text" placeholder="Search..." />
        </InputContainer>
    )
}

export default SearchBar;