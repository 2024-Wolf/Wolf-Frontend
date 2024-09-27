import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Dots from "./Dots";

const SliderContainer = styled.div`
    width: 100%;
    max-width: 1300px; /* 최대 너비를 1300px로 설정 (변경 가능성 O)*/
    height: 300px;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    
    @media (max-width: 768px) {
        height: 180px;
    }
    
    @media (max-width: 480px) {
        height: 100px;
    }
`;

const SliderInner = styled.div`
    display: flex;
    transition: transform 0.5s ease;
    transform: ${({ position }) => `translateX(-${position}00%)`};
    width: 100%;
    height: 100%;
`;

const Slide = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    @media (max-width: 768px) {
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
                    <Slide key={index} src={image.imgUrl}/>
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
