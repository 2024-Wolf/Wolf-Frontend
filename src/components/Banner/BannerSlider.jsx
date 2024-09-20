import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Dots from "./Dots";

const SliderContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
`;

const SliderInner = styled.div`
    display: flex;
    transition: transform 0.5s ease;
    transform: ${(position) => `translateX(-${position}00%)`};
    width: 100%;
`;

const Slide = styled.img`
    width: 100%;
    height: 300px;
    object-fit: cover;
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
