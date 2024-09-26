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
`;

const ApplyTitle = styled.h2`
    font-size: 24px;
    font-weight: 500;
    margin: 20px 0;
`;


//지원자 관리 div
const ApplyInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    border-bottom: 1px solid #e0e0e0;

    .UserDetails {
        display: flex;
        align-items: center;
    }

    .roleSelect {
        width: fit-content;
        display: flex;
        align-items: center;
        flex: 0.35;
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
`;

const UserPosition = styled.div`
    margin-left: 50px;
    font-weight: 500;
`;

const Date = styled.div`
    margin: 0 40px;
    font-size: 16px;
    color: var(--black600);
    text-align: center;
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
`;

//지원자 섹션   
const ApplySection = styled.div`
    margin-top: 20px;
    padding: 20px;
    width: 100%;
    border-radius: 8px;

    label {
        font-size: 18px;
    }
`;

const GroupManageContent = (props) => {
    const [isModalOpen, setModalOpen] = useState(false);

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