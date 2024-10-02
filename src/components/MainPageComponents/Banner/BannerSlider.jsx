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
    max-width: 100%; // 화면에 맞게 조정
    max-height: 300px; // 세로를 조정하여 더 높게 설정

    @media (max-width: 1200px) {
    }

    @media (max-width: 768px) {
    min-height: 90px; // 아주 작은 화면에서 높이 조정
    }
    
    @media (max-width: 480px) {
        
    }
    filter: drop-shadow(0px 0px 100px rgba(0, 0, 0, 0.01));
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
    max-height: 100%;
    object-fit: cover; // 이미지가 배너에 맞게 조정
`;

const BannerSlider = ({ images }) => {
    const [currentPosition, setCurrentPosition] = useState(0);
    const [startX, setStartX] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    useEffect(() => {
        const sliderLoop = setInterval(() => {
            setCurrentPosition((prev) =>
                prev < images.length - 1 ? prev + 1 : 0
            );
        }, 3000);
        return () => clearInterval(sliderLoop);
    }, [images.length]);

    const goToSlide = (index) => {
        setCurrentPosition(index);
    };

    const handleStart = (e) => {
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        setStartX(clientX);
        setIsDragging(true);
    };

    const handleMove = (e) => {
        if (!isDragging) return;

        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const deltaX = startX - clientX;
        if (deltaX > 100) {
            // 오른쪽으로 드래그
            setCurrentPosition((prev) =>
                prev < images.length - 1 ? prev + 1 : prev
            );
            setIsDragging(false);
        } else if (deltaX < -100) {
            // 왼쪽으로 드래그
            setCurrentPosition((prev) =>
                prev > 0 ? prev - 1 : prev
            );
            setIsDragging(false);
        }
    };

    const handleEnd = () => {
        setIsDragging(false);
    };

    return (
        <SliderContainer
            onMouseDown={handleStart}
            onMouseMove={handleMove}
            onMouseUp={handleEnd}
            onMouseLeave={handleEnd}
            onTouchStart={handleStart} // 터치 시작
            onTouchMove={handleMove} // 터치 이동
            onTouchEnd={handleEnd} // 터치 종료
        >
            <SliderInner position={currentPosition}>
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