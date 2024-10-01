import styled from "styled-components";
import { OptionButton, ButtonContainer } from "../components/GlobalStyledComponents";

import React, { useEffect, useState } from "react";
import BannerSlider from "../components/MainPageComponents/Banner/BannerSlider";
import MainCategory from "../components/Category/MainCategory";
import MainCardList from "../components/MainPageComponents/MainCardList";
import SearchBar from "../components/MainPageComponents/SearchBar/SearchBar";
import DateButton from "../components/Button/DateButton";

// pages/Main.js
export const SearchContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    gap: 10px;

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: start;
        align-items: start;
    }

    @media (max-width: 480px) {

    }
`;

const cards = [
    {
        id: 1,
        category: '스터디',
        title: 'React 기초 스터디',
        deadline: '2024-09-30',
        challenge: true,
        tags: ['#프론트엔드', '#리액트', '#초보환영'],
        icons: [
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'GitHub' },
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'Slack' }
        ],
        profile: {
            imgSrc: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
            name: 'myeongju'
        }
    },
    {
        id: 2,
        category: '프로젝트',
        title: 'JavaScript 프로젝트',
        deadline: '2024-10-15',
        challenge: false,
        tags: ['#프론트엔드', '#자바스크립트'],
        icons: [
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'GitHub' },
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'Slack' }
        ],
        profile: {
            imgSrc: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
            name: 'jason'
        }
    },
    {
        id: 3,
        category: '스터디',
        title: 'Node.js 심화 과정',
        deadline: '2024-11-20',
        challenge: true,
        tags: ['#백엔드', '#NodeJS'],
        icons: [
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'GitHub' },
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'Slack' }
        ],
        profile: {
            imgSrc: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
            name: 'sara'
        }
    },
    {
        id: 4,
        category: '스터디',
        title: 'CSS Flexbox 마스터하기',
        deadline: '2024-12-01',
        challenge: false,
        tags: ['#디자인', '#CSS'],
        icons: [
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'GitHub' },
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'Slack' }
        ],
        profile: {
            imgSrc: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
            name: 'kim'
        }
    },
    {
        id: 5,
        category: '프로젝트',
        title: 'React + Redux 애플리케이션',
        deadline: '2024-10-30',
        challenge: true,
        tags: ['#프론트엔드', '#리액트', '#Redux'],
        icons: [
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'GitHub' },
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'Slack' }
        ],
        profile: {
            imgSrc: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
            name: 'lee'
        }
    },
    {
        id: 6,
        category: '스터디',
        title: 'Git과 GitHub 배우기',
        deadline: '2024-11-15',
        challenge: false,
        tags: ['#버전관리', '#Git'],
        icons: [
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'GitHub' },
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'Slack' }
        ],
        profile: {
            imgSrc: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
            name: 'park'
        }
    },
    {
        id: 7,
        category: '프로젝트',
        title: '풀스택 웹 개발',
        deadline: '2024-12-15',
        challenge: true,
        tags: ['#풀스택', '#웹개발'],
        icons: [
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'GitHub' },
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'Slack' }
        ],
        profile: {
            imgSrc: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
            name: 'choi'
        }
    },
    {
        id: 8,
        category: '스터디',
        title: 'React Hooks 심화',
        deadline: '2024-11-30',
        challenge: false,
        tags: ['#프론트엔드', '#리액트', '#Hooks'],
        icons: [
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'GitHub' },
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'Slack' }
        ],
        profile: {
            imgSrc: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
            name: 'jiyoung'
        }
    },
    {
        id: 9,
        category: '프로젝트',
        title: 'HTML/CSS 기초',
        deadline: '2024-10-10',
        challenge: true,
        tags: ['#프론트엔드', '#HTML', '#CSS'],
        icons: [
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'GitHub' },
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'Slack' }
        ],
        profile: {
            imgSrc: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
            name: 'yuna'
        }
    },
    {
        id: 10,
        category: '스터디',
        title: 'TypeScript 기초',
        deadline: '2024-12-05',
        challenge: false,
        tags: ['#프론트엔드', '#TypeScript'],
        icons: [
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'GitHub' },
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'Slack' }
        ],
        profile: {
            imgSrc: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
            name: 'hannah'
        }
    },
    {
        id: 11,
        category: '스터디',
        title: '프론트엔드 개발자 준비',
        deadline: '2024-10-20',
        challenge: true,
        tags: ['#프론트엔드', '#취업준비'],
        icons: [
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'GitHub' },
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'Slack' }
        ],
        profile: {
            imgSrc: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
            name: 'sooyoung'
        }
    },
    {
        id: 12,
        category: '프로젝트',
        title: '모바일 앱 개발',
        deadline: '2024-11-25',
        challenge: false,
        tags: ['#모바일', '#앱개발'],
        icons: [
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'GitHub' },
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'Slack' }
        ],
        profile: {
            imgSrc: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
            name: 'minji'
        }
    },
    {
        id: 13,
        category: '스터디',
        title: 'AWS 기초',
        deadline: '2024-12-10',
        challenge: true,
        tags: ['#클라우드', '#AWS'],
        icons: [
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'GitHub' },
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'Slack' }
        ],
        profile: {
            imgSrc: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
            name: 'sumin'
        }
    },
    {
        id: 14,
        category: '프로젝트',
        title: '데이터베이스 기초',
        deadline: '2024-11-05',
        challenge: false,
        tags: ['#데이터베이스', '#MySQL'],
        icons: [
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'GitHub' },
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'Slack' }
        ],
        profile: {
            imgSrc: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
            name: 'david'
        }
    },
    {
        id: 15,
        category: '스터디',
        title: '머신러닝 기초',
        deadline: '2024-12-20',
        challenge: true,
        tags: ['#인공지능', '#머신러닝'],
        icons: [
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'GitHub' },
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'Slack' }
        ],
        profile: {
            imgSrc: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
            name: 'clara'
        }
    }
];


const Main = () => {
    const banners = [
        { id: 1, imgUrl: "/banner/banner1.png" },
        { id: 2, imgUrl: "/banner/banner2.png" },
        { id: 3, imgUrl: "/banner/banner3.png" },
    ];

    const categories = ["전체", "프로젝트", "스터디"];
    const [activeCategory, setActiveCategory] = useState('전체');
    const [searchDate, setSearchDate] = useState(new Date());
    const [isOptionActive, setIsOptionActive] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchDate = (date) => {
        setSearchDate(date);
    }

    const handleOptionButtonClick = () => {
        setIsOptionActive((prev) => !prev);
    };

    const handleSearchTermChange = (term) => {
        setSearchTerm(term);
    };

    // 검색된 카드 필터링
    const filteredCards = cards.filter(card =>
        card.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <BannerSlider images={banners} />
            <main style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '40px' }}>
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '20px', padding: '0px 15px' }}>
                    <MainCategory
                        categories={categories}
                        activeCategory={activeCategory}
                        setActiveCategory={setActiveCategory}
                    />
                    <SearchContainer>
                        <ButtonContainer>
                            <DateButton
                                value={searchDate}
                                onChange={handleSearchDate}
                            />
                            <OptionButton onClick={handleOptionButtonClick} isOptionActive={isOptionActive}>
                                모집중인 글만 보기
                            </OptionButton>
                        </ButtonContainer>
                        <SearchBar onSearchTermChange={handleSearchTermChange} />
                    </SearchContainer>
                </div>
                <MainCardList
                    category={activeCategory}
                    data={filteredCards || cards}
                />
            </main>

        </>
    );
}
export default Main;