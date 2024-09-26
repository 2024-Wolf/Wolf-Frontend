import React from "react";
import styled from "styled-components";
import GroupInfoContent from "../components/Group/GroupComponent/GroupInfoContent";


const MainContents = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: auto;
    flex-direction: column;
    margin: 50px auto;
    max-width: 1340px; /* 최대 너비를 1300px로 설정 (변경 가능성 O)*/
    gap: 50px;
    padding: 0 20px;

    @media (max-width: 768px) {
        padding: 0 15px;
        margin: 50px auto;
        gap: 30px;
    }

    @media (max-width: 480px) {
        padding: 0 10px;
        margin: 30px auto;
        gap: 20px;
    }
`;

const Title = styled.h1`
    text-align: left;
    font-weight: bold;
    font-size: 2.5rem;
    color: var(--black800);
    margin: 30px 0;
`;

const GroupInfoContainer = styled.div`
    display: flex;
    width: 100%;
    background-color: var(--violet000);
    border-radius: 10px;
    border: 1px solid var(--violet400);
    padding: 30px 50px;
`;

const CreateGroupPage = () => {

    return (
        <>
            <MainContents>
                <Title>팀원 모집하기</Title>
                <GroupInfoContainer>
                    <GroupInfoContent />
                </GroupInfoContainer>
            </MainContents>
        </>
    )
}

export default CreateGroupPage;