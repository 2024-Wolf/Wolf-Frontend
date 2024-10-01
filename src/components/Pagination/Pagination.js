import React, { useState } from 'react';
import styled from 'styled-components';

const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

const PageButton = styled.button`
    height: 30px;
    width: 30px;
    margin: 0 5px;
    padding: 10px;
    border-radius: 50%;
    background-color: ${props => (props.active ? 'var(--violet700)' : 'var(--violet100)')};
    color: ${props => (props.active ? 'var(--black200)' : 'var(--black800)')};
    cursor: pointer;

    &:hover {
        background-color: var(--violet700);
        color: var(--black200);
    }
`;

const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
    const pageCount = Math.ceil(totalItems / itemsPerPage);

    const handlePageClick = (page) => {
        onPageChange(page);
    };

    return (
        <PaginationContainer>
            {Array.from({ length: pageCount }, (_, index) => (
                <PageButton
                    key={index}
                    onClick={() => handlePageClick(index + 1)}
                    active={currentPage === index + 1}
                >
                    {index + 1}
                </PageButton>
            ))}
        </PaginationContainer>
    );
};

export default Pagination;