import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Dots from "./Dots"; // Dots 컴포넌트 가져오기

const SliderContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    background-color: #ddd; /* 임시 배경색 */
`;

const SliderInner = styled.div`
    display: flex;
    transition: transform 0.5s ease;
    transform: ${(position) => `translateX(-${position}00%)`};
    width: ${(length) => `${length}00%`}; /* 이미지의 길이에 맞춰 슬라이더 폭 조정 */
`;

const Slide = styled.div`
    flex: 0 0 100%;
    height: 300px;
    background-color: #ccc;
    background-image: ${(backgroundImg) => `url(${backgroundImg})`};
    background-size: cover;
    background-position: center;
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
                    <Slide key={index} backgroundImg={image.imgUrl} />
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
