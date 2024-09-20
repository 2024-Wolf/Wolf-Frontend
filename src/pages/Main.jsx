import React, {useEffect, useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BannerSlider from "../components/Banner/BannerSlider";
import Category from "../components/Category/Category";

const Main = () => {
    const banners = [
        { id: 1, imgUrl: "https://via.placeholder.com/800x300?text=1" },
        { id: 2, imgUrl: "https://via.placeholder.com/800x300?text=2" },
        { id: 3, imgUrl: "https://via.placeholder.com/800x300?text=3" },
    ];

    const categories = ["전체", "프로젝트", "스터디"];
    const [activeCategory, setActiveCategory] = useState('전체');

    useEffect(() => {
        console.log('Active Category:', activeCategory);
    }, [activeCategory]);

    return (
        <div>
            <Header/>
            <BannerSlider images={banners} />;
            <Category
                categories={categories}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
            />
            <Footer/>
        </div>
    );
}
export default Main;