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
    const [itemsPerPage, setItemsPerPage] = useState(21); // 기본 카드 수를 20으로 설정

    useEffect(() => {
        const calculateItemsPerPage = () => {
            const availableWidth = window.innerWidth; // 현재 가로 길이

            // 616px에서 964px 사이일 경우 21개 설정
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
