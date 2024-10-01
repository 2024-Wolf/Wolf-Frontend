import styled from "styled-components";
import { MainContents, SearchContainer } from "../components/GlobalStyledComponents";

import React, { useEffect, useState } from "react";
import BannerSlider from "../components/MainPageComponents/Banner/BannerSlider";
import Category from "../components/Category/Category";
import MainCardList from "../components/MainPageComponents/MainCardList";
import SearchBar from "../components/MainPageComponents/SearchBar/SearchBar";
import ButtonContainer from "../components/MainPageComponents/SearchBar/ButtonContainer";


const Main = () => {
    const banners = [
        { id: 1, imgUrl: "/banner/banner1.png" },
        { id: 2, imgUrl: "/banner/banner2.png" },
        { id: 3, imgUrl: "/banner/banner3.png" },
    ];

    const categories = ["전체", "프로젝트", "스터디"];
    const [activeCategory, setActiveCategory] = useState('전체');
    const [searchDate, setSearchDate] = useState(new Date());

    const handleSearchDate = (date) => {
        setSearchDate(date);
    }

    return (
        <>
            <MainContents>
                <BannerSlider images={banners} />
                <Category
                    categories={categories}
                    activeCategory={activeCategory}
                    setActiveCategory={setActiveCategory}
                />
                <SearchContainer>
                    <ButtonContainer
                        handleStartDate={searchDate}
                        onDateChange={handleSearchDate}
                    />
                    <SearchBar />
                </SearchContainer>
                <MainCardList
                    category={activeCategory}
                />
            </MainContents>
        </>
    );
}
export default Main;