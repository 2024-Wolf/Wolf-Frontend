import styled from "styled-components";

import React, { useState } from 'react';


// components/MainPageComponents/SearchBar/SearchBar.jsx
export const InputContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    
    background-color: var(--black100);
    padding: 10px 20px;
    border-radius: 30px;
    
    min-width: 300px;
    
    @media (max-width: 768px) {
        width: 100%;
        min-width: auto;
    }

    @media (max-width: 480px) {
    }
`;

// components/MainPageComponents/SearchBar/SearchBar.jsx
export const SearchInput = styled.input`
    font-size: 16px;
    width: 100%;
    border: none;
    color: var(--black700);
    background-color: var(--black100);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const SearchBar = ({ onSearchTermChange }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        const value = event.target.value;
        setSearchTerm(value);
        onSearchTermChange(value);
    };

    const handleIconClick = () => {
        onSearchTermChange(searchTerm);
    };

    return (
        <>
            <InputContainer>
                <SearchInput
                    type="text"
                    placeholder="제목, 태그, 작성자를 검색해보세요."
                    value={searchTerm}
                    onChange={handleSearch}
                    aria-label="Search"
                />
                {/* 검색 아이콘 */}
                <svg style={{ cursor: 'pointer' }}
                    onClick={handleIconClick}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-search"
                    viewBox="0 0 16 16"
                >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
            </InputContainer>
        </>
    )
}

export default SearchBar;