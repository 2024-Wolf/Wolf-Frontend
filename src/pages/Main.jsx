import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BannerSlider from "../components/Banner/BannerSlider";

const Main = () => {
    const banners = [
        { id: 1, imgUrl: "https://via.placeholder.com/800x300?text=1" },
        { id: 2, imgUrl: "https://via.placeholder.com/800x300?text=2" },
        { id: 3, imgUrl: "https://via.placeholder.com/800x300?text=3" },
    ];

    return (
        <div>
            <Header/>
            <BannerSlider images={banners} />;
            <Footer/>
        </div>
    );
}
export default Main;