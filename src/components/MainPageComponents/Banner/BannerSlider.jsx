import styled from "styled-components";

import React, { useState, useEffect } from "react";
import Dots from "./Dots";
import { getNotices, getNoticeById } from "../../Apis/NoticeApi";
import { useNavigate } from "react-router-dom";


// components/MainPageComponents/Banner/BannerSlider.jsx
export const SliderContainer = styled.div`
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    border-radius: 20px;
    width: 100%;
    max-width: 100%;
    max-height: 300px;

    filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.05));

    @media (max-width: 1200px) {
    }

    @media (max-width: 768px) {
    }
    
    @media (max-width: 480px) {
    }

`;

// components/MainPageComponents/Banner/BannerSlider.jsx
export const SliderInner = styled.div`
    display: flex;
    transition: transform 0.5s ease;
    transform: ${({ $position }) => `translateX(-${$position}00%)`};
    height: 100%;
    width: 100%;
`;

// components/MainPageComponents/Banner/BannerSlider.jsx
export const Slide = styled.img`
    width: 100%;
    height: 100%;
    max-height: 100%;
    cursor: pointer;
    object-fit: contain;
    max-width: 1360px;
    max-height: 300px;
;

`;

const BannerSlider = ({ }) => {
    const banners = [
        { id: 1, imgUrl: "/banner/banner1.png" },
        { id: 2, imgUrl: "/banner/banner2.png" },
        { id: 3, imgUrl: "/banner/banner3.png" },
        { id: 4, imgUrl: "/banner/banner4.png" },
    ];
    const [currentPosition, setCurrentPosition] = useState(0);
    const [startX, setStartX] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const navigate = useNavigate();
    const [images, setImages] = useState(banners);


    // 공지사항 목록 데이터
    const fetchNoticeData = (page) => {
        getNotices(page)
            .then((data) => {
                console.log(data.data.notices); // 받아온 Notice 데이터를 설정
                // 받아온 Notice 데이터를 설정
            })
            .catch(() => {
                // setError("Notice 데이터를 불러올 수 없습니다.");
            })
    };

    // 공지사항 상세 데이터
    const fetchNoticeDetailData = (noticeId) => {
        getNoticeById(noticeId)
            .then((data) => {
                console.log(data.data); // 받아온 Notice 데이터를 설정
                // 받아온 Notice 데이터를 설정
            })
            .catch(() => {
                // setError("Notice 데이터를 불러올 수 없습니다.");
            })
    };

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
            onTouchStart={handleStart}
            onTouchMove={handleMove}
            onTouchEnd={handleEnd}
        >
            <SliderInner $position={currentPosition}>
                {images.map((image, index) => (
                    <Slide
                        key={`Slide-${index}`}
                        src={image.imgUrl}
                        onClick={() => navigate('/notice', { state: { sendNoticeId: image.id } })} // 수정된 부분
                    />
                ))
                }
            </SliderInner >
            <Dots
                images={images}
                currentPosition={currentPosition}
                goToSlide={goToSlide}
            />
        </SliderContainer >
    );
};

export default BannerSlider;