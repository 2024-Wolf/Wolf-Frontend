import styled from "styled-components";
import React, { useState, useEffect } from "react";

// Recent news slider styled components
const SliderContainer = styled.div`
    overflow: hidden;
    position: relative;
    width: 100%;
    background-color: white;
    display: flex;
    height: 80px;
    border-top: 2px solid var(--black200);
    border-bottom: 2px solid var(--black200);
    border-radius: 7px;
    
    padding: 0px 10px;
    gap: 5px;
`;

const SliderInner = styled.div`
    display: flex;
    flex-direction: column;
    transition: transform 0.5s ease;
    transform: ${({ position }) => `translateY(-${position * 80}px)`};
    height: 100%;
    width: 100%;
`;

const Slide = styled.div`
    width: 100%;
    display: flex;
    font-size: 16px;
    padding: 25px 10px;
    box-sizing: border-box;
    align-items: center;
    justify-content: space-between;
    min-height: 80px;

    @media (max-width: 768px) {
        font-size: 15px;
        padding: 20px;
    }

    @media (max-width: 480px) {
        font-size: 14px;
        padding: 10px;
    }
`;

const DotsContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

const Dot = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${({ active }) => (active ? '#000' : '#ccc')};
    margin: 2px 0;
    cursor: pointer;
`;

const SliderTitle = styled.div`
    display: flex;
    flex-direction: row;
    whiteSpace: nowrap;
    margin: auto;
    width: 100px;
    gap: 5px;
    font-weight: bold;
`;

const RecentNewsSlider = ({ news }) => {
    const [currentPosition, setCurrentPosition] = useState(0);
    const slideCount = news.length;

    useEffect(() => {
        // 슬라이드 자동 전환
        const sliderLoop = setInterval(() => {
            setCurrentPosition((prev) =>
                prev < slideCount - 1 ? prev + 1 : 0
            );
        }, 3000);
        return () => clearInterval(sliderLoop);
    }, [slideCount]);

    const goToSlide = (index) => {
        setCurrentPosition(index);
    };

    return (
        <SliderContainer>
            <SliderTitle>
                최근 소식
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-megaphone-fill" viewBox="0 0 16 16">
                    <path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0zm-1 .724c-2.067.95-4.539 1.481-7 1.656v6.237a25 25 0 0 1 1.088.085c2.053.204 4.038.668 5.912 1.56zm-8 7.841V4.934c-.68.027-1.399.043-2.008.053A2.02 2.02 0 0 0 0 7v2c0 1.106.896 1.996 1.994 2.009l.496.008a64 64 0 0 1 1.51.048m1.39 1.081q.428.032.85.078l.253 1.69a1 1 0 0 1-.983 1.187h-.548a1 1 0 0 1-.916-.599l-1.314-2.48a66 66 0 0 1 1.692.064q.491.026.966.06" />
                </svg>
            </SliderTitle>
            <SliderInner position={currentPosition}>
                {news.map((item, index) => (
                    <Slide key={index}>
                        <div style={{ width: "100%" }}>{item.content}</div>
                        <div>{item.date}</div>
                    </Slide>
                ))}
            </SliderInner>
            <DotsContainer>
                {news.map((_, index) => (
                    <Dot
                        key={index}
                        active={currentPosition === index}
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </DotsContainer>
        </SliderContainer>
    );
};

export default RecentNewsSlider;
