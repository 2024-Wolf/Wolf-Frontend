import styled from "styled-components";
import { PageTitle } from "../components/GlobalStyledComponents";

import React from "react";
import GroupInfoContent from "../components/Group/GroupComponent/GroupInfoContent";

// pages/CreateGroupPage.js
export const GroupInfoContainer = styled.div`
    display: flex;
    width: 100%;
    background-color: var(--violet000);
    border-radius: 10px;
    border: 1px solid var(--violet400);
    padding: 30px;
    flex-direction: column;
`;

const CreateGroupPage = () => {

    return (
        <GroupInfoContainer>
            <PageTitle>팀원 모집하기</PageTitle>
            <GroupInfoContent contentType={'writing'} />
        </GroupInfoContainer>
    )
}

export default CreateGroupPage;