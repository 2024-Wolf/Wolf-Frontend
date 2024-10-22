import styled from "styled-components";
import { PageContainer, SectionContent, SectionTitle } from "../GlobalStyledComponents";

import React, { useEffect, useState } from "react";
import MainCategory from "../Category/MainCategory";
import ActivityCardList from "./ActivityCardList";
import { getGroupPosts } from '../Apis/GroupPostApi';

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

    const [groupPostsData, setGroupPostsData] = useState({});
    const [groupAllPostsData, setGroupAllPostsData] = useState({});
    const [groupStudyPostsData, setGroupStudyPostsData] = useState({});
    const [groupProjectPostsData, setGroupProjectPostsData] = useState({});
    const [groupTypePostsData, setGroupTypePostsData] = useState({});
    const [type, setType] = useState('all');

    // "all", "study", "project"

    useEffect(() => {
        const fetchPostData = async () => {
            try {
                const AllPost = await getGroupPosts("all"); // 모든 데이터 저장
                AllPost.data ? setGroupAllPostsData(AllPost.data) : <></>;

                const StudyPost = await getGroupPosts("study"); // 스터디 데이터 저장
                StudyPost.data ? setGroupStudyPostsData(StudyPost.data) : <></>;

                const ProjectPost = await getGroupPosts("project"); // 프로젝트 데이터 저장
                ProjectPost.data ? setGroupProjectPostsData(ProjectPost.data) : <></>;

                const TypePost = await getGroupPosts(type); // 타입별 데이터 저장
                TypePost.data ? setGroupTypePostsData(TypePost.data) : <></>;


                // 상태 코드가 200-299 범위인지 확인
                if ((AllPost.status < 200 || AllPost.status >= 300) ||
                    (StudyPost.status < 200 || AllPost.status >= 300)
                        (ProjectPost.status < 200 || AllPost.status >= 300)
                        (TypePost.status < 200 || AllPost.status >= 300)) {
                    throw new Error('네트워크 오류');
                }

            } catch (error) {
                // 에러 처리: 콘솔에 에러 메시지 출력
                console.error('데이터 등록 실패:', error);
            } finally {
                // 로딩 상태 종료
                // setLoading(false);
            }
        };

        fetchPostData(); // 데이터 가져오기 호출
    }, []); // postId가 변경될 때마다 실행


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
