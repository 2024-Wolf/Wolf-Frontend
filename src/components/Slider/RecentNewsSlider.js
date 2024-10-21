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
    border-top: 1px solid var(--black400);
    border-bottom: 1px solid var(--black400);
    border-radius: 7px;
    padding: 0px 10px;
    gap: 5px;
    color: var(--black500);
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
    gap: 10px;
    color: var(--black700);
    @media (max-width: 768px) {
        font-size: 15px;
        padding: 20px;
    }

    @media (max-width: 480px) {
        font-size: 14px;
        padding: 10px;
    }
`;

const SlideIndicator = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center; /* 가운데 정렬 */
    font-size: 14px;
    white-space: nowrap;
    gap: 5px;
    width: 40px;
`;

const SliderTitle = styled.div`
    display: flex;
    flex-direction: row;
    white-space: nowrap;
    margin: auto;
    width: auto;
    gap: 5px;
    font-weight: bold;
    justify-content: center;
    font-size: 17px;
    color: var(--violet500);
    margin-left: 10px;

    @media (max-width: 768px) {
        font-size: 16px;
    }

    @media (max-width: 480px) {
        font-size: 15px;
        span {
            display: none;
        }
    }
`;

const Arrow = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    font-size: 20px;
    margin: 0 10px;
`;

const SlideContent = styled.div`
  width: 100%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 3; /* 줄 수 제한 */
  color: var(--black700);
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

    const goToNextSlide = () => {
        setCurrentPosition((prev) => (prev < slideCount - 1 ? prev + 1 : 0));
    };

    const goToPrevSlide = () => {
        setCurrentPosition((prev) => (prev > 0 ? prev - 1 : slideCount - 1));
    };

    return (
        <SliderContainer>
            <SliderTitle>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-megaphone-fill" viewBox="0 0 16 16">
                    <path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0zm-1 .724c-2.067.95-4.539 1.481-7 1.656v6.237a25 25 0 0 1 1.088.085c2.053.204 4.038.668 5.912 1.56zm-8 7.841V4.934c-.68.027-1.399.043-2.008.053A2.02 2.02 0 0 0 0 7v2c0 1.106.896 1.996 1.994 2.009l.496.008a64 64 0 0 1 1.51.048m1.39 1.081q.428.032.85.078l.253 1.69a1 1 0 0 1-.983 1.187h-.548a1 1 0 0 1-.916-.599l-1.314-2.48a66 66 0 0 1 1.692.064q.491.026.966.06" />
                </svg>
                <span>최근 소식</span>
            </SliderTitle>
            <SliderInner position={currentPosition}>
                {news.map((item, index) => (
                    <Slide key={index}>
                        <SlideContent>{item.content}</SlideContent>
                        <div style={{ color: "var(--black400)" }}>{item.date}</div>
                    </Slide>
                ))}
            </SliderInner>
            <SlideIndicator>
                {/* 위 화살표 */}
                <svg onClick={goToPrevSlide}
                    xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
                    <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                </svg>
                {currentPosition + 1} / {slideCount} {/* 슬라이드 번호 표시 */}
                {/* 아래 화살표 */}
                <svg onClick={goToNextSlide}
                    xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                </svg>
            </SlideIndicator>
        </SliderContainer>
    );
};

export default RecentNewsSlider;
