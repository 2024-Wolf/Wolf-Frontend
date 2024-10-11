import styled from "styled-components";
import { PageTitle } from "../components/GlobalStyledComponents";

import React from "react";
import GroupContent from "../components/Group/GroupComponent/GroupContent";

// pages/CreateGroupPage.js
export const GroupInfoContainer = styled.form`
    display: flex;
    min-width: 100%;
    background-color: var(--violet000);
    border-radius: 10px;
    border: 2px solid var(--black200);
    padding: 40px 20px;
    flex-direction: column;
    gap: 30px;

    @media (max-width: 768px) {
    min-width: auto;
    margin: 0px 15px;
    }
    
`;

const CreateGroupPage = () => {
    const handleSubmit = (event) => {
        // 여기서 API 호출

        alert('모집글이 등록되었습니다');
    };

    return (
        <GroupInfoContainer method="get" action="/" onSubmit={handleSubmit} encType="multipart/form-data">
            <PageTitle>팀원 모집하기</PageTitle>
            <GroupContent contentType={'writing'} />
        </GroupInfoContainer>
    );
}

export default CreateGroupPage;