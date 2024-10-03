import styled from "styled-components";
import React, { useEffect, useState } from "react";
import BannerSlider from "../components/MainPageComponents/Banner/BannerSlider";
import MainCategory from "../components/Category/MainCategory";
import MainCardList from "../components/MainPageComponents/MainCardList";
import SearchBar from "../components/MainPageComponents/SearchBar/SearchBar";
import DateButton from "../components/Button/DateButton";
import OptionButton from "../components/Button/OptionButton";


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

export const MainButtonContainer = styled.div`
    display: flex;
    gap: 10px;
    justify-content: center; /* 버튼들을 가로 가운데 정렬 */

    @media (max-width: 350px) {
        display: none;
    }
`;

const cards = [
    {
        id: 1,
        category: '스터디',
        title: 'React 기초 스터디',
        deadline: '2024-09-30',
        challenge: true,
        tags: ['#프론트엔드', '#리액트', '#초보환영1', '#초보환영2', '#초보환영3', '#초보환영4', '#초보환영5', '#초보환영6', '#초보환영7'],
        icons: [
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'GitHub' },
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'Slack' }
        ],
        profile: {
            imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
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
            imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
            name: 'jason'
        }
    },
    {
        id: 3,
        category: '스터디',
        title: 'Node.js 심화 스터디',
        deadline: '2024-11-05',
        challenge: true,
        tags: ['#백엔드', '#Node.js'],
        icons: [
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'GitHub' },
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'Discord' }
        ],
        profile: {
            imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
            name: 'sunwoo'
        }
    },
    {
        id: 4,
        category: '프로젝트',
        title: 'Vue.js 웹 앱',
        deadline: '2024-12-01',
        challenge: false,
        tags: ['#프론트엔드', '#Vue.js'],
        icons: [
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'GitHub' },
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'Trello' }
        ],
        profile: {
            imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
            name: 'minji'
        }
    },
    {
        id: 5,
        category: '스터디',
        title: 'HTML & CSS 기초',
        deadline: '2024-09-28',
        challenge: true,
        tags: ['#프론트엔드', '#HTML', '#CSS'],
        icons: [
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'GitHub' },
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'Zoom' }
        ],
        profile: {
            imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
            name: 'soyeon'
        }
    },
    {
        id: 6,
        category: '프로젝트',
        title: 'React와 Firebase 연동',
        deadline: '2024-10-25',
        challenge: false,
        tags: ['#프론트엔드', '#React', '#Firebase'],
        icons: [
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'GitHub' },
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'Slack' }
        ],
        profile: {
            imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
            name: 'hyunwoo'
        }
    },
    {
        id: 7,
        category: '스터디',
        title: 'Python 기초 스터디',
        deadline: '2024-10-10',
        challenge: true,
        tags: ['#백엔드', '#Python'],
        icons: [
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'GitHub' },
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'Google Meet' }
        ],
        profile: {
            imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
            name: 'sujin'
        }
    },
    {
        id: 8,
        category: '프로젝트',
        title: '풀스택 웹 애플리케이션',
        deadline: '2024-11-15',
        challenge: false,
        tags: ['#풀스택', '#React', '#Node.js'],
        icons: [
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'GitHub' },
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'Trello' }
        ],
        profile: {
            imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
            name: 'jiho'
        }
    },
    {
        id: 9,
        category: '스터디',
        title: 'React 고급 스터디',
        deadline: '2024-11-20',
        challenge: true,
        tags: ['#프론트엔드', '#리액트', '#고급'],
        icons: [
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'GitHub' },
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'Discord' }
        ],
        profile: {
            imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
            name: 'yuna'
        }
    },
    {
        id: 10,
        category: '프로젝트',
        title: 'Spring Boot REST API',
        deadline: '2024-12-10',
        challenge: false,
        tags: ['#백엔드', '#Java', '#Spring'],
        icons: [
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'GitHub' },
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'Slack' }
        ],
        profile: {
            imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
            name: 'hwan'
        }
    },
    {
        id: 11,
        category: '스터디',
        title: 'Django 기초 스터디',
        deadline: '2024-10-30',
        challenge: true,
        tags: ['#백엔드', '#Django'],
        icons: [
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'GitHub' },
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'Discord' }
        ],
        profile: {
            imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
            name: 'daeyoung'
        }
    },
    {
        id: 12,
        category: '프로젝트',
        title: 'TypeScript와 React 연동',
        deadline: '2024-11-05',
        challenge: false,
        tags: ['#프론트엔드', '#TypeScript'],
        icons: [
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'GitHub' },
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'Trello' }
        ],
        profile: {
            imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
            name: 'sangwoo'
        }
    },
    {
        id: 13,
        category: '스터디',
        title: 'CSS 고급 스터디',
        deadline: '2024-10-05',
        challenge: true,
        tags: ['#프론트엔드', '#CSS'],
        icons: [
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'GitHub' },
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'Slack' }
        ],
        profile: {
            imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
            name: 'minseok'
        }
    },
    {
        id: 14,
        category: '프로젝트',
        title: 'GraphQL API 개발',
        deadline: '2024-12-20',
        challenge: false,
        tags: ['#백엔드', '#GraphQL'],
        icons: [
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'GitHub' },
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'Discord' }
        ],
        profile: {
            imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
            name: 'haeyoon'
        }
    },
    {
        id: 15,
        category: '스터디',
        title: 'Java 기초 스터디',
        deadline: '2024-10-20',
        challenge: true,
        tags: ['#백엔드', '#Java'],
        icons: [
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'GitHub' },
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'Slack' }
        ],
        profile: {
            imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
            name: 'kyungsoo'
        }
    },
    {
        id: 16,
        category: '프로젝트',
        title: 'Mobile App Development',
        deadline: '2024-12-30',
        challenge: false,
        tags: ['#모바일', '#앱개발'],
        icons: [
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'GitHub' },
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'Zoom' }
        ],
        profile: {
            imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
            name: 'seojin'
        }
    },
    {
        id: 17,
        category: '스터디',
        title: 'AWS 기초 스터디',
        deadline: '2024-10-22',
        challenge: true,
        tags: ['#클라우드', '#AWS'],
        icons: [
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'GitHub' },
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'Slack' }
        ],
        profile: {
            imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
            name: 'nara'
        }
    },
    {
        id: 18,
        category: '프로젝트',
        title: 'Chatbot 개발',
        deadline: '2024-11-30',
        challenge: false,
        tags: ['#인공지능', '#챗봇'],
        icons: [
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'GitHub' },
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'Discord' }
        ],
        profile: {
            imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
            name: 'minju'
        }
    },
    {
        id: 19,
        category: '스터디',
        title: 'SEO 기초 스터디',
        deadline: '2024-10-18',
        challenge: true,
        tags: ['#마케팅', '#SEO'],
        icons: [
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'GitHub' },
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'Zoom' }
        ],
        profile: {
            imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
            name: 'sumin'
        }
    },
    {
        id: 20,
        category: '프로젝트',
        title: 'E-commerce 웹사이트',
        deadline: '2024-12-05',
        challenge: false,
        tags: ['#프론트엔드', '#E-commerce'],
        icons: [
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'GitHub' },
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'Slack' }
        ],
        profile: {
            imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
            name: 'jiyoon'
        }
    },
    {
        id: 21,
        category: '스터디',
        title: 'React Native 기초',
        deadline: '2024-10-25',
        challenge: true,
        tags: ['#모바일', '#React Native'],
        icons: [
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'GitHub' },
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'Trello' }
        ],
        profile: {
            imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
            name: 'kyeong'
        }
    },
    {
        id: 22,
        category: '프로젝트',
        title: 'Web Security Best Practices',
        deadline: '2024-11-15',
        challenge: false,
        tags: ['#보안', '#웹개발'],
        icons: [
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'GitHub' },
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'Discord' }
        ],
        profile: {
            imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
            name: 'jeong'
        }
    },
    {
        id: 23,
        category: '스터디',
        title: '데이터베이스 기초',
        deadline: '2024-10-12',
        challenge: true,
        tags: ['#데이터베이스', '#SQL'],
        icons: [
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'GitHub' },
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'Slack' }
        ],
        profile: {
            imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
            name: 'sangmin'
        }
    },
    {
        id: 24,
        category: '프로젝트',
        title: 'Data Visualization Tool',
        deadline: '2024-12-20',
        challenge: false,
        tags: ['#데이터', '#시각화'],
        icons: [
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'GitHub' },
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'Zoom' }
        ],
        profile: {
            imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
            name: 'wooju'
        }
    },
    {
        id: 25,
        category: '스터디',
        title: '블록체인 기초',
        deadline: '2024-11-01',
        challenge: true,
        tags: ['#블록체인', '#개발'],
        icons: [
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'GitHub' },
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'Discord' }
        ],
        profile: {
            imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
            name: 'yang'
        }
    },
    {
        id: 26,
        category: '프로젝트',
        title: 'IoT 솔루션 개발',
        deadline: '2024-12-15',
        challenge: false,
        tags: ['#IoT', '#개발'],
        icons: [
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'GitHub' },
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'Zoom' }
        ],
        profile: {
            imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
            name: 'sora'
        }
    },
    {
        id: 27,
        category: '스터디',
        title: 'UX/UI 디자인 기초',
        deadline: '2024-10-28',
        challenge: true,
        tags: ['#디자인', '#UX/UI'],
        icons: [
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'GitHub' },
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'Discord' }
        ],
        profile: {
            imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
            name: 'dana'
        }
    },
    {
        id: 28,
        category: '프로젝트',
        title: 'Smart Home Application',
        deadline: '2024-12-01',
        challenge: false,
        tags: ['#IoT', '#모바일'],
        icons: [
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'GitHub' },
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'Slack' }
        ],
        profile: {
            imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
            name: 'kyungmi'
        }
    },
    {
        id: 29,
        category: '스터디',
        title: 'Agile Methodology',
        deadline: '2024-11-10',
        challenge: true,
        tags: ['#프로젝트관리', '#Agile'],
        icons: [
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'GitHub' },
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'Zoom' }
        ],
        profile: {
            imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
            name: 'bora'
        }
    },
    {
        id: 30,
        category: '프로젝트',
        title: 'Social Media Application',
        deadline: '2024-12-10',
        challenge: false,
        tags: ['#소셜미디어', '#개발'],
        icons: [
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'GitHub' },
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'Discord' }
        ],
        profile: {
            imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
            name: 'jaeyoon'
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
    const [searchDate, setSearchDate] = useState(null); // 기본값을 null로 설정
    const [isOptionActive, setIsOptionActive] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredCards, setFilteredCards] = useState(cards);
    const [isChanged, setIsChanged] = useState(false);

    useEffect(() => {
        const filteredByCategory = cards.filter(card =>
            activeCategory === '전체' || card.category === activeCategory
        );

        const searchedCards = filteredByCategory.filter(card =>
            card.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

        const dateFilteredCards = searchedCards.filter(card => {
            const cardDeadline = new Date(card.deadline);
            const isAfterSelectedDate = searchDate ? cardDeadline > searchDate : true;

            if (isOptionActive) {
                return isAfterSelectedDate && cardDeadline > new Date();
            }

            return isAfterSelectedDate;
        });

        setFilteredCards(dateFilteredCards);
    }, [activeCategory, searchDate, isOptionActive, searchTerm]);

    const handleSearchDate = (date) => {
        setSearchDate(date);
    };

    const handleOptionButtonClick = () => {
        setIsOptionActive(prev => !prev);
    };

    const handleSearchTermChange = (term) => {
        setSearchTerm(term);
    };

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
                        <MainButtonContainer>
                            <DateButton
                                value={searchDate}
                                onChange={handleSearchDate}
                                isChanged={isChanged}
                                setIsChanged={setIsChanged}
                            />
                            <OptionButton innerText={'모집중인 글만 보기'} onClick={handleOptionButtonClick} isOptionActive={isOptionActive} />
                        </MainButtonContainer>
                        <SearchBar onSearchTermChange={handleSearchTermChange} />
                    </SearchContainer>
                </div>
                <MainCardList
                    category={activeCategory}
                    data={filteredCards}
                />
            </main >
        </>
    );
}

export default Main;