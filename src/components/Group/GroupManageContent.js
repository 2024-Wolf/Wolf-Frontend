import React, { useState } from "react";
import styled from "styled-components";
import ApplicantConfirmModal from "./GroupInfoModal/ApplicantConfirmModal";
import TabContentsWrapper from "../TabContentsWrapper";
import GroupWritingContent from "./GroupComponent/GroupWritingContent";

//전체 div
const Container = styled(TabContentsWrapper)`
    padding: 0 80px;
    display: flex;
    align-items: center;
    background-color: white;

    @media (max-width: 768px) {
        padding: 0 40px;
    }

    @media (max-width: 480px) {
        padding: 0 20px;
    }
`;

// 섹션
const Section = styled.section`
    padding: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: var(--violet100);
    border: 1px solid var(--black200);
    border-radius: 0 0 8px 8px;

    @media (max-width: 768px) {
        padding: 15px;
    }

    @media (max-width: 480px) {
        padding: 10px;
    }
`;

const ApplyTitle = styled.h2`
    font-size: 24px;
    font-weight: 500;
    margin: 20px 0;
    @media (max-width: 768px) {
        font-size: 20px;
        margin: 15px 0;
    }

    @media (max-width: 480px) {
        font-size: 18px;
        margin: 10px 0;
    }
`;


//지원자 관리 div
const ApplyInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    border-bottom: 1px solid #e0e0e0;

    @media (max-width: 768px) {
        align-items: center;
        padding: 5px 0;
    }

    .UserDetails {
        display: flex;
        align-items: center;
    }

    .roleSelect {
        width: fit-content;
        display: flex;
        align-items: center;
        flex: 0.35;

        @media (max-width: 768px) {
            flex-direction: column;
            gap: 5px;
            font-size: 14px;
            align-items: center;
            justify-content: center;
            
            label {
                font-size: 16px;
            }
        }

        @media (max-width: 480px) {
            font-size: 10px;
            flex-direction: column;


            label {
                font-size: 14px;
            }
        }
    }
`;

const UserImg = styled.div`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: #6c63ff;
    margin-right: 10px;
`;

const UserName = styled.div`
    font-size: 18px;
    @media (max-width: 768px) {
        font-size: 16px;
    }

    @media (max-width: 480px) {
        font-size: 14px;
    }
`;

const UserPosition = styled.div`
    margin-left: 50px;
    font-weight: 500;
    line-height: 1.5;
    @media (max-width: 768px) {
        margin-left: 0;
        font-size: 12px;
        text-align: center;
    }
`;

const Date = styled.div`
    margin: 0 40px;
    font-size: 16px;
    color: var(--black600);
    text-align: center;

    @media (max-width: 768px) {
        margin: 0 20px;
        font-size: 14px;
    }

    @media (max-width: 480px) {
        margin: 0 10px;
        font-size: 12px;
    }
`;

//버튼 style
const Button = styled.button`
    padding: 12px 20px;
    background-color: var(--violet600);
    color: var(--black000);
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: var(--violet700);
    }

    @media (max-width: 768px) {
        font-size: 14px;
        padding: 10px 16px;
    }

    @media (max-width: 480px) {
        font-size: 12px;
        padding: 8px 12px;
    }
`;

//지원자 섹션   
const ApplySection = styled.div`
    margin-top: 20px;
    padding: 20px;
    width: 100%;
    border-radius: 8px;
    
    @media (max-width: 768px) {
        padding: 15px;
    }

    @media (max-width: 480px) {
        padding: 10px;
    }

    label {
        font-size: 18px;

        @media (max-width: 768px) {
            font-size: 16px;
        }

        @media (max-width: 480px) {
            font-size: 14px;
        }
    }
`;

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
        {id: 1, name: "박가현", role: "프론트엔드개발자", date: "2024.09.10"},
        {id: 2, name: "강감찬", role: "기획자", date: "2024.09.11"},
        {id: 3, name: "김가네", role: "백엔드개발자", date: "2024.09.12"},
    ];

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <Container>
            <Section>
                <GroupWritingContent
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
                            <UserImg/>
                            <UserName>{user.name}</UserName>
                        </div>

                        <div className="roleSelect">
                            <label>모집직군</label>
                            <UserPosition>{user.role}</UserPosition>
                        </div>

                        <Date className="date">{user.date}</Date>
                        <Button onClick={openModal}>지원글 확인하기</Button>
                    </ApplyInfo>
                ))}

                {isModalOpen && <ApplicantConfirmModal onClose={closeModal}/>}
            </ApplySection>
        </Container>
    );

};
  
  export default GroupManageContent;