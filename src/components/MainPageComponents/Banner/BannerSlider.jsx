import styled from "styled-components";
import { SliderContainer, SliderInner, Slide } from "../../GlobalStyledComponents";

import React, { useState, useEffect } from "react";
import Dots from "./Dots";


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
