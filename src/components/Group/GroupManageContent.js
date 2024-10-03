import styled from "styled-components";
import { Container5, Section, ApplyTitle, ApplyInfo, UserImg, UserName, UserPosition, DateStyle, Button6, ApplySection } from "../GlobalStyledComponents";

import React, { useState } from "react";
import ApplicantConfirmModal from "./GroupInfoModal/ApplicantConfirmModal";
import TabContentsWrapper from "../TabContentsWrapper";
import GroupInfoContent from "./GroupComponent/GroupInfoContent";


const GroupManageContent = (props) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [groupData, setGroupData] = useState({
        groupType: 'study',
        startDate: new Date(),
        endDate: new Date(),
        deadLineDate: new Date(),
        title: '제목입니다.',
        techStack: '#스프링부트 #리액트',
        subject: '인스타그램 클론 코딩 해보기',
        introduction: '인스타그램 클론 코딩해볼 사람을 구합니다. \n' +
            '기간은 2021년 8월 1일부터 2021년 9월 1일까지입니다. \n' +
            '총 8주 과정으로 진행하고 참가비 무료입니다. \n' +
            '많은 참여 부탁드립니다.',
        guidelines: '',
        fileName: '',
        buttons: [
            { label: "이메일", clicked: true },
            { label: "지원직군", clicked: true },
            { label: "지원사유", clicked: false },
            { label: "다를 수 있는 언어", clicked: false },
            { label: "참여가능 요일", clicked: false },
            { label: "자기소개", clicked: false },
            { label: "포트폴리오 링크", clicked: true },
            { label: "자유기재", clicked: false }
        ],
        totalMemberCount: 0
    });

    const memberData = [
        { id: 1, name: "강민철", role: "프론트엔드개발자", position: "모집장" },
        { id: 2, name: "김영희", role: "백엔드개발자", position: "모집원" },
        { id: 3, name: "이철수", role: "기획자", position: "모집장" },
        { id: 4, name: "박민지", role: "프론트엔드개발자", position: "모집원" },
        // 다른 사용자 데이터 추가
    ];

    const applicantData = [
        { id: 1, name: "박가현", role: "프론트엔드개발자", date: "2024.09.10" },
        { id: 2, name: "강감찬", role: "기획자", date: "2024.09.11" },
        { id: 3, name: "김가네", role: "백엔드개발자", date: "2024.09.12" },
    ];

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <Container5>
            <Section>
                <GroupInfoContent
                    contentsType={"viewing"}
                    memberData={memberData}
                    groupData={groupData}
                />
                {/* 모집직군 : 프로젝트시에만 보여짐
                      스터디는 총 모집 인원만 수정 가능
                      이미 모집이 완료된 인원 수는 줄일 수 없음. */}
            </Section>

            <ApplySection>
                <ApplyTitle>지원자 관리</ApplyTitle>
                {applicantData.map((user, index) => (
                    <ApplyInfo key={user.id}>
                        <div className="UserDetails">
                            <UserImg />
                            <UserName>{user.name}</UserName>
                        </div>

                        <div className="roleSelect">
                            <label>모집직군</label>
                            <UserPosition>{user.role}</UserPosition>
                        </div>

                        <DateStyle className="date">{user.date}</DateStyle>
                        <Button6 onClick={openModal}>지원글 확인하기</Button6>
                    </ApplyInfo>
                ))}

                {isModalOpen && <ApplicantConfirmModal onClose={closeModal} />}
            </ApplySection>
        </Container5>
    );

};

export default GroupManageContent;