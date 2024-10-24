import styled from "styled-components";
import { PageTitle } from "../components/GlobalStyledComponents";

import React from "react";
import GroupContent from "../components/Group/GroupComponent/GroupContent";
import { registerGroupPost } from "../components/Apis/GroupPostApi";
import { useNavigate } from "react-router-dom";

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
    const navigate = useNavigate();

    const createGroup = (data) => {
        const groupPost = {
            name: data.title,
            type: data.groupType,
            startDate: data.startDate,
            endDate: data.endDate,
            beginDate: data.beginData,
            deadLineDate: data.deadLineDate,
            techStack: data.techStack,
            optionalRequirements: data.buttons.filter(btn => btn.clicked).map(btn => btn.label).toString(),
            recruitments: data.recruitmentList.map(({ job, count }) => ({ recruitRole: job.toUpperCase(), recruitRoleCnt: count })),
            targetMembers: data.totalMemberCount,
            thumbnail: data.fileName,
            topic: data.subject,
            description: data.introduction,
            warning: data.guidelines,
        }

        registerGroupPost(groupPost)
            .then(function (response) {
                if (response.status >= 400) {
                    console.log(response);
                    alert("에러 발생 : " + response.message);
                    return;
                }
                alert("모집글 작성이 완료되었습니다.");
                navigate('/');
            })

    }

    return (
        <GroupInfoContainer>
            <PageTitle>팀원 모집하기</PageTitle>
            <GroupContent createGroup={createGroup} contentType={'writing'} />
        </GroupInfoContainer>
    );
}

export default CreateGroupPage;