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

import React, { useState } from "react";
import GroupInfoContent from "./GroupComponent/GroupContent";
import ProfileIcon from "../Icon/ProfileIcon";
import FormFieldMultiple from "./GroupComponent/FormFieldMultiple";
import InputText from "../Input/InputText";
import ApplicantModal from "./GroupInfoModal/ApplicantModal";
import { Navigate } from "react-router-dom";
import WithdrawalButton from "../Button/WithdrawalButton";

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
  const [groupData, setGroupData] = useState({
    groupType: "study",
    startDate: new Date(),
    endDate: new Date(),
    deadLineDate: new Date(),
    title: "제목입니다.",
    techStack: "#스프링부트 #리액트",
    subject: "인스타그램 클론 코딩 해보기",
    introduction:
      "인스타그램 클론 코딩해볼 사람을 구합니다. \n" +
      "기간은 2021년 8월 1일부터 2021년 9월 1일까지입니다. \n" +
      "총 8주 과정으로 진행하고 참가비 무료입니다. \n" +
      "많은 참여 부탁드립니다.",
    guidelines: "",
    fileName: "",
    buttons: [
      { label: "이메일", clicked: true },
      { label: "지원직군", clicked: true },
      { label: "지원사유", clicked: true },
      { label: "다를 수 있는 언어", clicked: false },
      { label: "참여가능 요일", clicked: false },
      { label: "자기소개", clicked: false },
      { label: "포트폴리오 링크", clicked: false },
      { label: "자유기재", clicked: false },
    ],
    totalMemberCount: 0,
    recruitmentList: [],
    selectedJob: "",
    selectedCount: "",
    editIndex: null,
    editJob: "",
    editCount: "",
    memberData: [
      { id: 1, name: "강민철", role: "프론트엔드개발자", position: "모집장" },
      { id: 2, name: "김영희", role: "백엔드개발자", position: "모집원" },
      { id: 3, name: "이철수", role: "기획자", position: "모집장" },
      { id: 4, name: "박민지", role: "프론트엔드개발자", position: "모집원" },
    ],
  });

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
      alert("모임이 삭제되었습니다");
      Navigate("/");
    } else {
    }
  };

  return (
    <Container5>
      <Section>
        <GroupInfoContent contentsType={"viewing"} groupData={groupData} />
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
            class="bi bi-person-fill-add"
            viewBox="0 0 16 16"
          >
            <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
            <path d="M2 13c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4" />
          </svg>
          지원자 관리
        </FormTitle>
        {applicantData.map((user, index) => (
          <>
            <MemberInfo key={user.id}>
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
