import styled from "styled-components";
import React, { useEffect, useState } from "react";
import BannerSlider from "../components/MainPageComponents/Banner/BannerSlider";
import MainCategory from "../components/Category/MainCategory";
import MainCardList from "../components/MainPageComponents/MainCardList";
import SearchBar from "../components/MainPageComponents/SearchBar/SearchBar";
import DateButton from "../components/Button/DateButton";
import MainOptionButton from "../components/Button/MainOptionButton";
import { getGroupPosts } from "../components/Apis/GroupPostApi";

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


const Main = () => {
    const banners = [
        { id: 1, imgUrl: "/banner/banner1.png", link: "/"},
        { id: 2, imgUrl: "/banner/banner2.png" },
        { id: 3, imgUrl: "/banner/banner3.png" },
        { id: 4, imgUrl: "/banner/banner4.png", link: "/" },
    ];

    const categories = ["전체", "프로젝트", "스터디"];
    const [activeCategory, setActiveCategory] = useState();
    const [searchDate, setSearchDate] = useState(null);
    const [isOptionActive, setIsOptionActive] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);
    const [filteredCards, setFilteredCards] = useState([]);
    const [isChanged, setIsChanged] = useState(false);
    const [cards, setCards] = useState([]);

    useEffect(() => {
        async function getPosts() {
            await getGroupPosts("all")
                .then(function (response) {
                    if (response === undefined) {
                        alert("토큰을 확인해주세요.");
                        return;
                    }
                    if (response.status === 401 || response.status === 403) {
                        alert("토큰이 유효하지 않습니다!");
                        return;
                    }
                    if (response.data.groupPostResponseList && response.data.groupPostResponseList.length > 0) setCards(response.data.groupPostResponseList);
                })
            setActiveCategory("전체");
        }
        getPosts();
    }, []);

    useEffect(() => {
        // 사용자가 입력을 멈추면 200ms 후에 검색어 업데이트
        const handler = setTimeout(() => {
            setDebouncedSearchTerm(searchTerm);
        }, 200);

        // clean-up function: 새로운 입력이 들어오면 기존 타이머 취소
        return () => {
            clearTimeout(handler);
        }
    }, [searchTerm]);

    useEffect(() => {
        let filteredByCategory = [];

        switch (activeCategory) {
            case "전체":
                filteredByCategory = cards;
                break;
            case "프로젝트":
                filteredByCategory = cards.filter(card => card.type === "project");
                break;
            default:
                filteredByCategory = cards.filter(card => card.type === "study");
                break;
        }

        const searchedCards = filteredByCategory.filter(card =>
            card.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
            card.tag.includes(debouncedSearchTerm.toLowerCase()) ||
            card.leaderUser.userNickname.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
        );

        const dateFilteredCards = searchedCards.filter(card => {
            const cardDeadline = new Date(card.endDate);
            const isAfterSelectedDate = searchDate ? cardDeadline > searchDate : true;

            if (isOptionActive) {
                return isAfterSelectedDate && cardDeadline > new Date();
            }

            return isAfterSelectedDate;
        });

        setFilteredCards(dateFilteredCards);
    }, [activeCategory, searchDate, isOptionActive, debouncedSearchTerm]);

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