import styled from "styled-components";
import { PageContainer, SectionContent, SectionTitle } from "../GlobalStyledComponents";

import React, { useState } from "react";
import MainCategory from "../Category/MainCategory";
import ActivityCardList from "./ActivityCardList";

const activitiesData = {
    applyCards: [{
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
        status: '지원', // 상태: 지원
        applicationDate: '2024-09-20' // 신청일
    }],
    ongoingCards: [{
        id: 2,
        category: '프로젝트',
        title: 'Node.js 프로젝트',
        deadline: '2024-10-15',
        challenge: false,
        tags: ['#백엔드', '#Node.js', '#팀프로젝트'],
        icons: [{ src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'GitHub' }],
        status: '진행', // 상태: 진행
        joinDate: '2024-09-22' // 합류일
    }],
    completedCards: [{
        id: 3,
        category: '스터디',
        title: 'Vue.js 스터디',
        deadline: '2024-11-01',
        challenge: false,
        tags: ['#프론트엔드', '#Vue.js'],
        icons: [{ src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', alt: 'GitHub' }],
        profile: { imgSrc: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', name: 'seojin' },
        status: '완료' // 상태: 완료
    }]
};

const ActivitiesContent = () => {
    const categories = ["프로젝트", "스터디"];
    const [activeCategory, setActiveCategory] = useState(categories[0]);

    const { applyCards, ongoingCards, completedCards } = activitiesData;

    return (
        <PageContainer>
            <MainCategory
                categories={categories}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
            />

            <SectionContent>
                <SectionTitle>모임 지원 현황</SectionTitle>
                <ActivityCardList cards={applyCards} buttonText={"신청 취소"} />
            </SectionContent>

            <SectionContent>
                <SectionTitle>진행중인 모임</SectionTitle>
                <ActivityCardList cards={ongoingCards} buttonText={"탈퇴하기"} />
            </SectionContent>

            <SectionContent>
                <SectionTitle>완료한 모임</SectionTitle>
                <ActivityCardList cards={completedCards} />
            </SectionContent>
        </PageContainer>
    );
};

export default ActivitiesContent;
