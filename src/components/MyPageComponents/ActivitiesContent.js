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

const Announcement = styled.span`
    display: flex;
    width: 100%;
    padding: 40px 30px;
    flex-direction: column;
    gap: 20px;

    justify-content: center;
    align-items: flex-start;
    height: auto;
    color: var(--black500);
`;



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
                // 모임 지원 현황
                const applyPost = await getUserGroupsByTypeAndStatus(type, 'APPLYING');
                const applyData = applyPost.data.groupPostPreviews || [];
                setApplyCards(applyData);

                // 진행중인 모임
                const ongoingPost = await getUserGroupsByTypeAndStatus(type, 'ONGOING');
                const ongoingData = ongoingPost.data.groupPostPreviews || [];
                setOngoingCards(ongoingData);

                // 완료한 모임
                const completedPost = await getUserGroupsByTypeAndStatus(type, 'COMPLETED');
                const completedData = completedPost.data.groupPostPreviews || [];
                setCompletedCards(completedData);

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


    return (
        <PageContainer>
            <MainCategory
                categories={categories}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
            />
            <SectionContent>
                <SectionTitle>모임 지원 현황</SectionTitle>
                {applyCards.length > 0 ?
                    (
                        <ActivityCardList
                            cards={applyCards}
                            buttonText={"신청 취소"}
                            category={activeCategory}
                        />
                    ) : (
                        <Announcement>
                            모임 정보가 없습니다
                        </Announcement>
                    )}
            </SectionContent>
            <SectionContent>
                <SectionTitle>진행중인 모임</SectionTitle>
                {ongoingCards.length > 0 ?
                    (<ActivityCardList
                        cards={ongoingCards}
                        buttonText={"탈퇴하기"}
                        category={activeCategory}
                    />
                    ) : (
                        <Announcement>
                            모임 정보가 없습니다
                        </Announcement>
                    )}

            </SectionContent>

            <SectionContent>
                <SectionTitle>완료한 모임</SectionTitle>
                {completedCards.length > 0 ?
                    (<ActivityCardList
                        cards={completedCards}
                        category={activeCategory}
                        data={completedCards.groupPostResponseList}
                    />
                    ) : (
                        <Announcement>
                            모임 정보가 없습니다
                        </Announcement>
                    )}
            </SectionContent>
        </PageContainer>
    );
};

export default ActivitiesContent;
