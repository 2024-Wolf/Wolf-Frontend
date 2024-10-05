import styled from 'styled-components';
import { NoBackground, NoBackgroundHover, Violet600BackgroundHover } from "../GlobalStyledComponents";
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
    ${Violet600BackgroundHover}
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
    const [maxPageNumbersToShow, setMaxPageNumbersToShow] = useState(10); // 기본값 설정

    const calculateItemsPerPage = () => {
        const availableWidth = window.innerWidth;
        setItemsPerPage(availableWidth >= 964 && availableWidth <= 1257 ? 21 : 20);
        setMaxPageNumbersToShow(availableWidth <= 964 ? 5 : 10); // 최대 페이지 번호 수 조정
    };

    useEffect(() => {
        calculateItemsPerPage();
        window.addEventListener('resize', calculateItemsPerPage);

        return () => {
            window.removeEventListener('resize', calculateItemsPerPage);
        };
    }, []);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const goToNextPage = () => {
        if (currentPage < pageCount) {
            setCurrentPage(Math.min(currentPage + maxPageNumbersToShow, pageCount));
        }
    };

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(Math.max(currentPage - maxPageNumbersToShow, 1));
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

    const startPage = Math.floor((currentPage - 1) / maxPageNumbersToShow) * maxPageNumbersToShow + 1;
    const endPage = Math.min(startPage + maxPageNumbersToShow - 1, pageCount);

    return (
        <>
            {renderItems(currentItems)}
            <PaginationContainer>
                {/* 첫 페이지 버튼 */}
                <ArrowButton onClick={goToFirstPage} disabled={currentPage === 1} aria-label="First page">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-bar-left" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M11.854 3.646a.5.5 0 0 1 0 .708L8.207 8l3.647 3.646a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 0 1 .708 0" />
                    </svg>
                </ArrowButton>

                {/* 이전 페이지 버튼 */}
                <ArrowButton onClick={goToPreviousPage} disabled={currentPage === 1} aria-label="Previous page">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-double-left" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                        <path fillRule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                    </svg>
                </ArrowButton>

                {/* 페이지 번호 버튼 */}
                {Array.from({ length: endPage - startPage + 1 }, (_, index) => {
                    const pageNumber = startPage + index;
                    return (
                        <PageButton
                            key={pageNumber}
                            onClick={() => handlePageChange(pageNumber)}
                            active={currentPage === pageNumber}
                            aria-label={`Go to page ${pageNumber}`}
                        >
                            {pageNumber}
                        </PageButton>
                    );
                })}

                {/* 다음 페이지 버튼 */}
                <ArrowButton onClick={goToNextPage} disabled={currentPage >= pageCount} aria-label="Next page">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-double-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708" />
                        <path fillRule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708" />
                    </svg>
                </ArrowButton>

                {/* 마지막 페이지 버튼 */}
                <ArrowButton onClick={goToLastPage} disabled={currentPage >= pageCount} aria-label="Last page">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-bar-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M4.146 3.646a.5.5 0 0 0 0 .708L7.793 8l-3.647 3.646a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708 0M11.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13a.5.5 0 0 1 .5-.5" />
                    </svg>
                </ArrowButton>
            </PaginationContainer>
        </>
    );
};

export default PaginatedList;
