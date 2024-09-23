import React from 'react';
import styled from "styled-components";
import MiniIcon from "../../Icon/MiniIcon";

const InputContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    
    background-color: var(--black200);
    padding: 10px;
    border-radius: 30px;
    
    min-width: 300px;
    
    @media (max-width: 768px) {
        min-width: 180px;
        padding: 8px;
    }

    @media (max-width: 480px) {
        min-width: 100px;
        padding: 5px;
    }
`;

const SearchInput = styled.input`
    width: 100%;
    border: none;
    color: var(--black700);
    background-color: var(--black200);


`;


const SearchBar = () => {
    return (
        <InputContainer>
            <MiniIcon src="SearchIcon.png" alt="search" />
            <SearchInput type="text" placeholder="Search..." />
        </InputContainer>
    )
}

export default SearchBar;