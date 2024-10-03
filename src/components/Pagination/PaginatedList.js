import styled from 'styled-components';
import { NoBackground, NoBackgroundHover, DarkBackgroundHover } from "../GlobalStyledComponents";

import React, { useState, useEffect } from 'react';


const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px 0;
    width: 100%;
`;

const PageButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 30px;
    margin: 0 5px;
    padding: 10px;
    border-radius: 50%;
    background-color: ${props => (props.active ? 'var(--violet700)' : 'var(--violet100)')};
    color: ${props => (props.active ? 'var(--black200)' : 'var(--black800)')};

    ${DarkBackgroundHover}
`;

const ArrowButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 30px;
    margin: 0 5px;
    color: var(--black500);
    border-radius: 50%;

    ${NoBackground}
    ${NoBackgroundHover}
    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
    
`;

const PaginatedList = ({ data, renderItems }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(21);

    useEffect(() => {
        const calculateItemsPerPage = () => {
            const availableWidth = window.innerWidth;

            if (availableWidth >= 964 && availableWidth <= 1257) {
                setItemsPerPage(21);
            } else {
                setItemsPerPage(20);
            }
        };

        calculateItemsPerPage();
        window.addEventListener('resize', calculateItemsPerPage);

        return () => {
            window.removeEventListener('resize', calculateItemsPerPage);
        };
    });

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const goToNextPage = () => {
        if (currentPage < pageCount) {
            setCurrentPage(currentPage + 1);
        }
    };

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const goToFirstPage = () => {
        setCurrentPage(1);
    };

    const goToLastPage = () => {
        setCurrentPage(pageCount);
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = data.slice(startIndex, startIndex + itemsPerPage);
    const pageCount = Math.ceil(data.length / itemsPerPage);

    return (
        <>
            {renderItems(currentItems)}
            <PaginationContainer>
                {/* 첫 페이지 버튼 */}
                <ArrowButton onClick={goToFirstPage} disabled={currentPage === 1} aria-label="First page">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-bar-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M11.854 3.646a.5.5 0 0 1 0 .708L8.207 8l3.647 3.646a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 0 1 .708 0M4.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-.5-.5" />
                    </svg>
                </ArrowButton>

                {/* 이전 페이지 버튼 */}
                <ArrowButton onClick={goToPreviousPage} disabled={currentPage === 1} aria-label="Previous page">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                    </svg>
                </ArrowButton>

                {/* 페이지 번호 버튼 */}
                {Array.from({ length: pageCount }, (_, index) => (
                    <PageButton
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        active={currentPage === index + 1}
                        aria-label={`Go to page ${index + 1}`}
                    >
                        {index + 1}
                    </PageButton>
                ))}

                {/* 다음 페이지 버튼 */}
                <ArrowButton onClick={goToNextPage} disabled={currentPage === pageCount} aria-label="Next page">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                    </svg>
                </ArrowButton>

                {/* 마지막 페이지 버튼 */}
                <ArrowButton onClick={goToLastPage} disabled={currentPage === pageCount} aria-label="Last page">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-bar-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4.146 3.646a.5.5 0 0 0 0 .708L7.793 8l-3.647 3.646a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708 0M11.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13a.5.5 0 0 1 .5-.5" />
                    </svg>
                </ArrowButton>
            </PaginationContainer>
        </>
    );
};

export default PaginatedList;
