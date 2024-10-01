import styled from "styled-components";

import React, { useState, useEffect } from "react";
import Dots from "./Dots";


// components/MainPageComponents/Banner/BannerSlider.jsx
export const SliderContainer = styled.div`
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    border-radius: 20px;

    width: 100%;
    max-width: 1300px;
    max-height: 273px;

    @media (max-width: 1200px) {
        max-width: 1000px;
        max-height: 210px;
    }

    @media (max-width: 768px) {
        max-width: 700px;
        max-height: 147px;
    }
    
    @media (max-width: 480px) {
        max-width: 400px;
        max-height: 84px;
    }
`;

// components/MainPageComponents/Banner/BannerSlider.jsx
export const SliderInner = styled.div`
    display: flex;
    transition: transform 0.5s ease;
    transform: ${({ position }) => `translateX(-${position}00%)`};
    width: 100%;
    height: 100%;
`;

// components/MainPageComponents/Banner/BannerSlider.jsx
export const Slide = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    @media (max-width: 1300px) {
        object-fit: contain;
    }
`;

const BannerSlider = ({ images }) => {
    const [currentPosition, setCurrentPosition] = useState(0);

    useEffect(() => {
        const sliderLoop = setInterval(() => {
            setCurrentPosition((prev) =>
                prev < images.length - 1 ? prev + 1 : 0
            );
        }, 3000);
        return () => clearInterval(sliderLoop);
    }, [currentPosition, images.length]);

    const goToSlide = (index) => {
        setCurrentPosition(index);
    };

    return (
        <SliderContainer>
            <SliderInner position={currentPosition} length={images.length}>
                {images.map((image, index) => (
                    <Slide key={index} src={image.imgUrl} />
                ))}
            </SliderInner>
            <Dots
                images={images}
                currentPosition={currentPosition}
                goToSlide={goToSlide}
            />
        </SliderContainer>
    );
};

export default BannerSlider;
