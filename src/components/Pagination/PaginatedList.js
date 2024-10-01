import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

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

    &:hover {
        background-color: var(--violet700);
        color: var(--black200);
    }
`;

const PaginatedList = ({ data, renderItems }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(15);
    const minWidth = 1500; // 최소 가로 길이
    const cardWidth = 250; // 카드 가로 길이
    const cardHeight = 260; // 카드 세로 길이
    const gap = 27.5; // 카드 간격

    useEffect(() => {
        const calculateItemsPerPage = () => {
            const availableWidth = minWidth - (gap * 4); // 여유 공간 계산 (5개 기준)
            const numberOfCards = Math.floor(availableWidth / (cardWidth + gap));

            // 가로에 따른 세로 카드 개수 설정
            let rows;
            if (numberOfCards >= 5) {
                rows = 3; // 5개 이상일 때 3줄
            } else if (numberOfCards >= 4) {
                rows = 4; // 4개일 때 4줄
            } else if (numberOfCards >= 3) {
                rows = 5; // 3개일 때 5줄
            } else if (numberOfCards >= 2) {
                rows = 7; // 2개일 때 7줄
            } else {
                rows = 15; // 1개일 때 15줄
            }

            setItemsPerPage(numberOfCards * rows);
        };

        calculateItemsPerPage();
        window.addEventListener('resize', calculateItemsPerPage);

        return () => {
            window.removeEventListener('resize', calculateItemsPerPage);
        };
    }, [minWidth, cardWidth, gap]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = data.slice(startIndex, startIndex + itemsPerPage);
    const pageCount = Math.ceil(data.length / itemsPerPage);

    return (
        <>
            {renderItems(currentItems)}
            <PaginationContainer>
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
            </PaginationContainer>
        </>
    );
};

export default PaginatedList;