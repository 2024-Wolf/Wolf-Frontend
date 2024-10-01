import styled from "styled-components";
import { MainContents, Title, GroupInfoContainer } from "../components/GlobalStyledComponents";

import React from "react";

import GroupWritingContent from "../components/Group/GroupComponent/GroupWritingContent";


const CreateGroupPage = () => {

    return (
        <>
            <MainContents>
                <Title>팀원 모집하기</Title>
                <GroupInfoContainer>
                    <GroupWritingContent contentType={'writing'} />
                </GroupInfoContainer>
            </MainContents>
        </>
    )
}

export default CreateGroupPage;