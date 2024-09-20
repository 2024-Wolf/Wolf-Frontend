import React, {useEffect, useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BannerSlider from "../components/Banner/BannerSlider";
import Category from "../components/Category/Category";
import styled from "styled-components";


const MainContents = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: auto;
    flex-direction: column;
    margin: 50px auto;
    max-width: 1300px; /* 최대 너비를 1300px로 설정 (변경 가능성 O)*/
    gap: 50px;

    @media (max-width: 768px) {
        margin: 50px auto;
        gap: 30px;
    }

    @media (max-width: 480px) {
        margin: 30px auto;
        gap: 20px;
    }
`;


const Main = () => {
    const banners = [
        { id: 1, imgUrl: "https://via.placeholder.com/1300x300?text=1" },
        { id: 2, imgUrl: "https://via.placeholder.com/1300x300?text=2" },
        { id: 3, imgUrl: "https://via.placeholder.com/1300x300?text=3" },
    ];

    const categories = ["전체", "프로젝트", "스터디"];
    const [activeCategory, setActiveCategory] = useState('전체');

    useEffect(() => {
        console.log('Active Category:', activeCategory);
    }, [activeCategory]);

    return (
        <>
            <Header/>
            <MainContents>
                <BannerSlider images={banners} />
                <Category
                    categories={categories}
                    activeCategory={activeCategory}
                    setActiveCategory={setActiveCategory}
                />
            </MainContents>
            <Footer/>
        </>
    );
}
export default Main;