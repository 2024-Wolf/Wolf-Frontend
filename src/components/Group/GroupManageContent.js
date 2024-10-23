import styled from "styled-components";
import {
  ContentsWrapper,
  MemberInfo,
  FormFieldRow,
  Violet500BackgroundButton,
  FormTitle,
  Section,
  ApplyTitle,
  ApplyInfo,
  UserImg,
  UserName,
  DateStyle,
  Button6,
  ApplySection,
  ButtonGroupLeft,
} from "../GlobalStyledComponents";

import React, { useEffect, useState } from "react";
import GroupInfoContent from "./GroupComponent/GroupContent";
import ProfileIcon from "../Icon/ProfileIcon";
import FormFieldMultiple from "./GroupComponent/FormFieldMultiple";
import InputText from "../Input/InputText";
import ApplicantModal from "./GroupInfoModal/ApplicantModal";
import { Navigate, useNavigate } from "react-router-dom";
import WithdrawalButton from "../Button/WithdrawalButton";
import { deleteGroupPost, updateGroupPost } from "../Apis/GroupPostApi";

// 전체 div
// components/Group/GroupManageContent.js
export const Container5 = styled(ContentsWrapper)`
  padding: 0 40px;
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

const dummyData = {
  name: "강태현",
  email: "example1@example.com",
  role: "프론트엔드개발자",
  reason: "열심히 할게요~",
  portfolioLink: "https://github.com/2024-Wolf/Wolf-Frontend",
};

const GroupManageContent = (props) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedApplicant, setSelectedApplicant] = useState(null); // 선택된 지원자 데이터 상태 추가
  const optionalRequirements = props.groupPostData.optionalRequirements.split(',');

  const navigate = useNavigate();

  console.log(props);

  const groupData = {
    groupType: props.groupPostData.type,
    startDate: props.groupPostData.startDate,
    endDate: props.groupPostData.endDate,
    beginDate: props.groupPostData.recruitStartDate,
    deadLineDate: props.groupPostData.recruitDeadlineDate,
    title: props.groupPostData.name,
    techStack: props.groupPostData.tag,
    subject: props.groupPostData.topic,
    introduction: props.groupPostData.description,
    guidelines: props.groupPostData.warning,
    fileName: props.groupPostData.thumbnail || "",
    shortIntro: props.groupPostData.shortIntro,
    buttons: [
      { label: "이메일", clicked: true },
      { label: "지원직군", clicked: true },
      { label: "지원사유", clicked: true },
      { label: "다룰 수 있는 언어", clicked: optionalRequirements.includes('다룰 수 있는 언어') },
      { label: "참여가능 요일", clicked: optionalRequirements.includes('참여가능 요일') },
      { label: "자기소개", clicked: optionalRequirements.includes('자기소개') },
      { label: "포트폴리오 링크", clicked: optionalRequirements.includes('포트폴리오 링크') },
      { label: "자유기재", clicked: optionalRequirements.includes('자유기재') },
    ],
    totalMemberCount: props.groupPostData.targetMembers,
    challengeStatus: props.groupPostData.chaalengeStatus || "N",
    recruitmentList: props.groupPostData.recruitments.map(({ recruitRole, recruitRoleCnt }) => ({ job: recruitRole.toLowerCase(), count: recruitRoleCnt })) || [],
    memberData: props.groupPostData.memberData || []
  };

  const applicantData = [
    {
      id: 1,
      name: "박가현",
      email: "example1@example.com",
      role: "프론트엔드개발자",
      reason: "열심히할게요~",
      portfolioLink: "https://github.com/2024-Wolf/Wolf-Frontend",
      date: "2024-09-10",
    },
    {
      id: 2,
      name: "강감찬",
      email: "example2@example.com",
      role: "기획자",
      reason: "군사목적 홈페이지를 만들고 싶어요.",
      portfolioLink: "https://github.com/2024-Wolf/Wolf-Frontend",
      date: "2024-09-11",
    },
    {
      id: 3,
      name: "김가네",
      email: "example3@example.com",
      role: "백엔드개발자",
      reason: "김밥집 홈페이지를 만들고싶어요.",
      portfolioLink: "https://github.com/2024-Wolf/Wolf-Frontend",
      date: "2024-09-12",
    },
  ];

  const openModal = (applicant) => {
    setSelectedApplicant(applicant); // 선택된 지원자 데이터를 상태에 저장
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedApplicant(null); // 모달 닫을 때 선택된 지원자 데이터 초기화
  };

  const deleteGroupHandler = () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("모임을 삭제하시겠습니까?")) {
      deleteGroupPost(props.groupPostId)
        .then(function (response) {
          if (response.status < 200 && response.status > 300) {
            alert(response.message);
            return;
          }
          alert("모임이 삭제되었습니다");
          navigate("/");
        })
    } else {
      return;
    }
  };

  const updateGroup = (data) => {
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
      shortIntro: data.shortIntro,
      challengeStatus: data.challengeStatus
    }
    updateGroupPost(groupPost, props.groupPostId)
      .then(function (response) {
        if (response.status >= 400) {
          console.log(response);
          alert("에러 발생 : " + response.message);
          return;
        }
        alert("모집글 수정이 완료되었습니다.");
      })

    window.location.reload();
  }

  return (
    <Container5>
      <Section>
        <GroupInfoContent contentsType={"viewing"} updateGroup={updateGroup} groupData={groupData} />
        {/* 모집직군 : 프로젝트시에만 보여짐
                      스터디는 총 모집 인원만 수정 가능
                      이미 모집이 완료된 인원 수는 줄일 수 없음. */}
      </Section>

      <ApplySection>
        <FormTitle>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-person-fill-add"
            viewBox="0 0 16 16"
          >
            <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
            <path d="M2 13c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4" />
          </svg>
          지원자 관리
        </FormTitle>
        {applicantData.map((user, index) => (
          <>
            <MemberInfo key={`${user.id}-${index}`}>
              <ProfileIcon /*src="" alt=""*/>{user.name}</ProfileIcon>
              <FormFieldRow>
                <FormFieldMultiple label={"모집 직군"}>
                  <InputText value={user.role} readOnly />
                </FormFieldMultiple>
                <FormFieldMultiple label={"지원일자"}>
                  <InputText value={user.date} readOnly />
                </FormFieldMultiple>
              </FormFieldRow>
              <Violet500BackgroundButton onClick={() => openModal(user)}>
                지원글 확인하기
              </Violet500BackgroundButton>
            </MemberInfo>
          </>
        ))}

        {isModalOpen && selectedApplicant && (
          <ApplicantModal
            onClose={closeModal}
            applicant={selectedApplicant}
            isView={true}
          />
        )}
      </ApplySection>

      <ButtonGroupLeft style={{ marginBottom: '30px' }}>
        <WithdrawalButton onClick={deleteGroupHandler}>모임 삭제하기</WithdrawalButton>
      </ButtonGroupLeft>
    </Container5>
  );
};

export default GroupManageContent;
