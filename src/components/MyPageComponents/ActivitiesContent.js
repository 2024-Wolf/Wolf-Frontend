import styled from "styled-components";
import { PageContainer, SectionContent, SectionTitle } from "../GlobalStyledComponents";

import React, { useEffect, useState } from "react";
import MainCategory from "../Category/MainCategory";
import ActivityCardList from "./ActivityCardList";
import { getGroupPosts, getUserGroupsByTypeAndStatus } from '../Apis/GroupPostApi';

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
    const categories = ["스터디", "프로젝트"];
    const [activeCategory, setActiveCategory] = useState(categories[0]);

    // const { applyCards, ongoingCards, completedCards } = activitiesData;

    const [applyCards, setApplyCards] = useState({});
    const [ongoingCards, setOngoingCards] = useState({});
    const [completedCards, setCompletedCards] = useState({});

    const [type, setType] = useState('STUDY');

    useEffect(() => {
        switch (activeCategory) {
            case "프로젝트":
                setType('PROJECT');
                break;
            default:
                setType('STUDY');
                break;
        }
    }, [activeCategory, applyCards, ongoingCards, completedCards]);

    // "all", "study", "project"

    useEffect(() => {
        const fetchPostData = async () => {
            try {

                const applyPost = await getUserGroupsByTypeAndStatus(type, 'APPLYING'); // 모든 데이터 저장
                applyPost.data ? setApplyCards(applyPost.data) : <></>;

                const ongoingPost = await getUserGroupsByTypeAndStatus(type, 'ONGOING'); // 모든 데이터 저장
                ongoingPost.data ? setOngoingCards(ongoingPost.data) : <></>;

                const completedPost = await getUserGroupsByTypeAndStatus(type, 'COMPLETED'); // 모든 데이터 저장
                completedPost.data ? setCompletedCards(completedPost.data) : <></>;


                // // 상태 코드가 200-299 범위인지 확인
                // if ((applyPost.status < 200 || applyPost.status >= 300) ||
                //     (ongoingPost.status < 200 || ongoingPost.status >= 300) ||
                //     (completedPost.status < 200 || completedPost.status >= 300)) {
                //     throw new Error('네트워크 오류');
                // }

            } catch (error) {
                // 에러 처리: 콘솔에 에러 메시지 출력
                console.error('데이터 등록 실패:', error);
            } finally {
                // 로딩 상태 종료
                // setLoading(false);
            }
        };

        fetchPostData(); // 데이터 가져오기 호출
    }, [type, setType]); // postId가 변경될 때마다 실행

    // console.log('groupPostsData : ', groupPostsData);
    // console.log('groupAllPostsData : ', groupAllPostsData);
    // console.log('groupStudyPostsData : ', groupStudyPostsData);
    // console.log('groupProjectPostsData : ', groupProjectPostsData);
    // console.log('groupTypePostsData : ', groupTypePostsData);


    return (
        <PageContainer>
            <MainCategory
                categories={categories}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
            />
            <SectionContent>
                <SectionTitle>모임 지원 현황</SectionTitle>
                <ActivityCardList
                    cards={activitiesData.applyCards}
                    buttonText={"신청 취소"}
                    category={activeCategory}
                    data={applyCards.groupPostResponseList}
                />
            </SectionContent>
            <SectionContent>
                <SectionTitle>진행중인 모임</SectionTitle>
                <ActivityCardList
                    cards={activitiesData.ongoingCards}
                    buttonText={"탈퇴하기"}
                    category={activeCategory}
                    data={ongoingCards.groupPostResponseList}
                />
            </SectionContent>

            <SectionContent>
                <SectionTitle>완료한 모임</SectionTitle>
                <ActivityCardList
                    cards={activitiesData.completedCards}
                    category={activeCategory}
                    data={completedCards.groupPostResponseList}
                />
            </SectionContent>
        </PageContainer>
    );
};

export default ActivitiesContent;
