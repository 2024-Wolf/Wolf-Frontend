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

    const [currentPosition, setCurrentPosition] = useState(0);
    const [startX, setStartX] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const navigate = useNavigate();
    const [noticeData, setNoticeData] = useState([]);
    const [detailNoticeData, setDetailNoticeData] = useState([]);
    const [mergeData, setMergeData] = useState([]);

    const fetchNoticeDetailData = (noticeId, lengthCnt) => {
        getNoticeById(noticeId)
            .then((data) => {
                setMergeData(prevData => {
                    if (!Array.isArray(prevData)) {
                        prevData = [];
                    }

                    const updatedData = [...prevData, data.data];

                    if (updatedData.length === lengthCnt) {
                        setDetailNoticeData(updatedData);
                    }
                    return updatedData;
                });
            })
            .catch(() => {
                // setError("Notice 데이터를 불러올 수 없습니다.");
            });
    };

    // 공지사항 목록 데이터
    const fetchNoticeData = (page) => {
        getNotices(page)
            .then((data) => {
                setNoticeData(data.data.notices); // 받아온 Notice 데이터를 설정    

                // 각 공지사항에 대해 상세 데이터를 요청
                data.data.notices.map(notice => {
                    return fetchNoticeDetailData(notice.noticeId, data.data.notices.length);
                });

            })
            .then((details) => {
                // 모든 상세 데이터 요청이 완료된 후
                // 각 상세 데이터의 결과를 상태에 추가하는 작업을 수행
                const mergedDetails = details.map(detail => detail.data); // 필요한 데이터만 추출
                setDetailNoticeData(prevData => [...prevData, ...mergedDetails]); // 기존 데이터에 추가
            })
            .catch(() => {
                // 에러 처리
                // setError("Notice 데이터를 불러올 수 없습니다.");
            });
    };

    // 공지사항 데이터들을 불러옴
    useEffect(() => {
        fetchNoticeData();
    }, []); // hasFetched 상태가 변경될 때만 실행

    useEffect(() => {
        const sliderLoop = setInterval(() => {
            setCurrentPosition((prev) =>
                prev < detailNoticeData?.length - 1 ? prev + 1 : 0
            );
        }, 3000);
        return () => clearInterval(sliderLoop);
    }, [detailNoticeData?.length]);

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
                prev < detailNoticeData?.length - 1 ? prev + 1 : prev
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
                {detailNoticeData?.map((image, index) => (
                    <Slide
                        key={`Slide-${index}`}
                        src={image.thumbnail}
                        onClick={() => navigate('/notice', { state: { sendNoticeId: image.noticeId } })} // 수정된 부분
                    />
                ))
                }
            </SliderInner >
            <Dots
                images={detailNoticeData}
                currentPosition={currentPosition}
                goToSlide={goToSlide}
            />
        </SliderContainer >
    );
};

export default BannerSlider;