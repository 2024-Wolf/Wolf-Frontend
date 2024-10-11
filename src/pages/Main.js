import styled from "styled-components";
import React, { useEffect, useState } from "react";
import BannerSlider from "../components/MainPageComponents/Banner/BannerSlider";
import MainCategory from "../components/Category/MainCategory";
import MainCardList from "../components/MainPageComponents/MainCardList";
import SearchBar from "../components/MainPageComponents/SearchBar/SearchBar";
import DateButton from "../components/Button/DateButton";
import MainOptionButton from "../components/Button/MainOptionButton";
import cards from "../components/Data/CardData";
import { getGroupPosts, registerGroupPost } from "../components/Apis/GroupPostApi";

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

const groupPost = {
    leader_user: 1,
    type: 'STUDY',
    start_date: new Date('2024-09-01T10:00:00'),
    end_date: new Date('2024-12-01T10:00:00'),
    recruit_start_date: new Date('2024-09-01T10:00:00'),
    recruit_deadline_date: new Date('2024-09-15T10:00:00'),
    short_intro: '새로운 스터디 그룹',
    tag: "'#프론트엔드', '#리액트', '#초보환영1', '#초보환영2', '#초보환영3', '#초보환영4', '#초보환영5', '#초보환영6', '#초보환영7'",
    optional_requirements: '경험자 우대',
    target_members: 5,
    thumbnail: 'http://example.com/thumb1',
    name: '데이터 사이언스 스터디1',
    title: '개발 및 연구 스터디1',
    description: '데이터 분석 및 머신러닝을 배우는 그룹입니다.',
    warning: '참여 시 사전 준비 필수',
    challenge_status: '1',
}


const Main = () => {
    useEffect(() => {
        //registerGroupPost(groupPost);
    }, [])

    const banners = [
        { id: 1, imgUrl: "/banner/banner1.png" },
        { id: 2, imgUrl: "/banner/banner2.png" },
        { id: 3, imgUrl: "/banner/banner3.png" },
        { id: 4, imgUrl: "/banner/banner4.png" },
    ];

    const categories = ["전체", "프로젝트", "스터디"];
    const [activeCategory, setActiveCategory] = useState('전체');
    const [searchDate, setSearchDate] = useState(null);
    const [isOptionActive, setIsOptionActive] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredCards, setFilteredCards] = useState(cards);
    const [isChanged, setIsChanged] = useState(false);

    useEffect(() => {
        const filteredByCategory = cards.filter(card =>
            activeCategory === '전체' || card.category === activeCategory
        );

        const searchedCards = filteredByCategory.filter(card => {
            // title, tags, profile name에 대해 검색어가 포함되어 있는지 확인
            const isTitleMatch = card.title.toLowerCase().includes(searchTerm.toLowerCase());

            // tags는 배열이라고 가정하고 각 태그를 검색
            const isTagMatch = card.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

            // profile name도 포함한다고 가정하고 검색
            const isProfileNameMatch = card.profile.name.toLowerCase().includes(searchTerm.toLowerCase());

            // title, tags, profile name 중 하나라도 일치하면 필터링
            return isTitleMatch || isTagMatch || isProfileNameMatch;
        });

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
                            <MainOptionButton onClick={handleOptionButtonClick} isOptionActive={isOptionActive}>
                                모집 중만 보기
                            </MainOptionButton>
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