import styled from "styled-components";
import { CardContainer2 } from "../GlobalStyledComponents";

import React from "react";
import Card from "../Card/Card";
import { useNavigate } from 'react-router-dom';

const cards = [
    {
        id: 1,
        category: '스터디',
        title: 'React 기초 스터디',
        deadline: '2024-09-30',
        challenge: true,
        tags: ['#프론트엔드', '#리액트', '#초보환영'],
        icons: [
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'GitHub' },
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'Slack' }
        ],
        profile: {
            imgSrc: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
            name: 'myeongju'
        }
    }, {
        id: 2,
        category: '스터디',
        title: 'React 기초 스터디',
        deadline: '2024-09-30',
        challenge: false,
        tags: ['#프론트엔드', '#리액트', '#초보환영'],
        icons: [
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'GitHub' },
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'Slack' }
        ],
        profile: {
            imgSrc: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
            name: 'myeongju'
        }
    }, {
        id: 3,
        category: '스터디',
        title: 'React 기초 스터디',
        deadline: '2024-09-30',
        challenge: true,
        tags: ['#프론트엔드', '#리액트', '#초보환영'],
        icons: [
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'GitHub' },
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'Slack' }
        ],
        profile: {
            imgSrc: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
            name: 'myeongju'
        }
    }, {
        id: 4,
        category: '스터디',
        title: 'React 기초 스터디',
        deadline: '2024-09-30',
        challenge: false,
        tags: ['#프론트엔드', '#리액트', '#초보환영'],
        icons: [
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'GitHub' },
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'Slack' }
        ],
        profile: {
            imgSrc: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
            name: 'myeongju'
        }
    }, {
        id: 5,
        category: '스터디',
        title: 'React 기초 스터디',
        deadline: '2024-09-30',
        challenge: false,
        tags: ['#프론트엔드', '#리액트', '#초보환영'],
        icons: [
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'GitHub' },
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'Slack' }
        ],
        profile: {
            imgSrc: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
            name: 'myeongju'
        }
    }, {
        id: 6,
        category: '스터디',
        title: 'React 기초 스터디',
        deadline: '2024-09-30',
        challenge: true,
        tags: ['#프론트엔드', '#리액트', '#초보환영'],
        icons: [
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'GitHub' },
            { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'Slack' }
        ],
        profile: {
            imgSrc: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
            name: 'myeongju'
        }
    }
];

const MainCardList = ({ category }) => {
    const navigate = useNavigate();

    const handleCardClick = (id) => {
        navigate(`/study/${id}`); // 카드 ID에 따라 그룹 페이지로 이동
    };

    // Cards 데이터를 필터링하여 렌더링
    return (
        <CardContainer2>
            {(category === '전체' ?
                cards
                :
                cards.filter(card => card.category === category)
            ).map(card => (
                <div key={card.id} onClick={() => navigate('/study')}> {/* 추후변경 - handleCardClick(card.id) */}
                    <Card
                        key={card.id}
                        category={card.category}
                        title={card.title}
                        deadline={card.deadline}
                        challenge={card.challenge}
                        tags={card.tags}
                        icons={card.icons}
                        profile={card.profile}
                    />
                </div>
            ))}
        </CardContainer2>
    );
}


export default MainCardList;
