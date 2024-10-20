import styled from "styled-components";
import React, { useEffect, useState } from "react";
import BannerSlider from "../components/MainPageComponents/Banner/BannerSlider";
import MainCategory from "../components/Category/MainCategory";
import MainCardList from "../components/MainPageComponents/MainCardList";
import SearchBar from "../components/MainPageComponents/SearchBar/SearchBar";
import DateButton from "../components/Button/DateButton";
import MainOptionButton from "../components/Button/MainOptionButton";
import { getGroupPosts } from "../components/Apis/GroupPostApi";
import { Token } from "../components/Apis/Common";
import { testLogin } from "../components/Apis/AuthApi";

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
        { id: 1, imgUrl: "/banner/banner1.png" },
        { id: 2, imgUrl: "/banner/banner2.png" },
        { id: 3, imgUrl: "/banner/banner3.png" },
        { id: 4, imgUrl: "/banner/banner4.png" },
    ];

    const categories = ["전체", "프로젝트", "스터디"];
    const [activeCategory, setActiveCategory] = useState();
    const [searchDate, setSearchDate] = useState(null);
    const [isOptionActive, setIsOptionActive] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredCards, setFilteredCards] = useState([]);
    const [isChanged, setIsChanged] = useState(false);
    const [cards, setCards] = useState([]);

    useEffect(() => {
        async function getPosts() {
            await getGroupPosts("all")
                .then(function (response) {
                    if (response.status === 401) {
                        alert("토큰이 유효하지 않습니다!");
                        return;
                    }
                    if (response !== undefined && response.data.groupPostResponseList.length > 0) setCards(response.data.groupPostResponseList);
                })
            setActiveCategory("전체");
        }
        getPosts();
    }, []);

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
            // title, tag 에 대해 검색어가 포함되어 있는지 확인
            card.name.toLowerCase().includes(searchTerm.toLowerCase())
            || card.tag.includes(searchTerm.toLowerCase())
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

    const handleTestLogin = async () => {
        try {
            const data = await testLogin(); // testLogin 호출

            Token.setAccessToken(data.data.tokenResponse.accessToken);
            Token.setRefreshToken(data.data.tokenResponse.refreshToken);
            window.location.reload();
            alert('테스트 로그인 성공')
        } catch (error) {
            console.error('테스트 로그인 실패:', error);
        }
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
                                $isChanged={isChanged}
                                setIsChanged={setIsChanged}
                            />
                            <MainOptionButton onClick={handleOptionButtonClick} $isOptionActive={isOptionActive}>
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
                <div>
                    <button onClick={handleTestLogin}
                        style={{ marginBottom: '10px' }}>
                        테스트 로그인하기
                    </button>
                    <div style={{ border: "1px solid #000", wordWrap: 'break-word', marginBottom: '10px' }}>
                        엑세스 토큰 : {Token.getAccessToken()}
                    </div>
                    <div style={{ border: "1px solid #000", wordWrap: 'break-word' }}>
                        리프레쉬 토큰 : {Token.getRefreshToken()}
                    </div>
                </div>
            </main >
        </>
    );
}

export default Main;