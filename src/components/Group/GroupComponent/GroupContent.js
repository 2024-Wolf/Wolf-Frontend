import styled from "styled-components";

import React, { useState, useEffect } from "react";

import FormFieldMultiple from "./FormFieldMultiple";
import FormFieldSingle from "./FormFieldSingle";
import DateButton from "../../Button/DateButton";
import SelectButton from "../../Button/SelectButton";
import {
  MemberInfo,
  FormFieldRow,
  FormTitle,
  ButtonGroupCenter,
  ButtonGroupRight,
  ButtonGroupWrap,
  DoubleDateContainer,
  Violet500LineButton,
} from "../../GlobalStyledComponents";
import InputText from "../../Input/InputText";
import InputNumber from "../../Input/InputNumber";
import TextArea from "../../Input/TextArea";
import SaveButton from "../../Button/SaveButton";
import CancelButton from "../../Button/CancelButton";
import EditButton from "../../Button/EditButton";
import DeleteButton from "../../Button/DeleteButton";
import CompleteButton from "../../Button/CompleteButton";
import { useNavigate } from "react-router-dom";
import ProfileIcon from "../../Icon/ProfileIcon";
import ImagePreview from "../../Img/ImagePreview";
import FormCheckBoxButton from "../../Button/FormCheckBoxButton";

// 사용자 이름
// components/Group/GroupManageContent.js, components/Group/GroupComponent/GroupWritingContent.jsx
export const UserName = styled.div`
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

// 사용자 이미지
// components/Group/GroupManageContent.js, components/Group/GroupComponent/GroupWritingContent.jsx
export const UserImg = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #6c63ff;
  margin-right: 10px;
`;

// components/Group/GroupComponent/GroupWritingContent.jsx
export const MemberTitle = styled.div`
  border-top: 1px solid var(--black200);
  font-size: 24px;
  font-weight: bold;
  margin-top: 30px;
  padding: 30px 0;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 20px;
    padding: 20px 0;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    padding: 15px 0;
  }
`;

// components/Group/GroupComponent/GroupWritingContent.jsx
export const GroupInfoContentsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0px 10px;

  @media (max-width: 768px) {
  }

  @media (max-width: 480px) {
  }
`;

// components/Group/GroupComponent/GroupWritingContent.jsx
export const GroupInfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  @media (max-width: 950px) {
  }
`;

// components/Group/GroupComponent/GroupWritingContent.jsx
export const Label = styled.div`
  width: 70px;
  font-size: 16px;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

// components/Group/GroupComponent/GroupWritingContent.jsx
export const LongLabel = styled(Label)`
  width: 110px;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

// components/Group/GroupComponent/GroupWritingContent.jsx
export const HiddenFileInput = styled.input`
  display: none;
`;

const ImagePlaceholder = styled.div`
  display: ${(props) => (props.hasFiles ? "flex" : "none")};
  flex-direction: row;
  justify-content: center;
  align-items: start;
  width: 90%;
  gap: 10px;
  margin: 0 20px;
`;

const RecruitmentContainer = styled.div`
  margin-top: 20px;
  padding: 20px;
  border-radius: 8px;
`;

const RecruitmentHeader = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 15px;
`;

const RecruitmentItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  margin-bottom: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  background-color: #fff;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f1f1f1;
  }
`;

const JobCountInfo = styled.span`
  display: flex;
  align-items: center; // 중앙 정렬
  font-weight: bold; // 두껍게 텍스트 스타일링
  color: #6c63ff; // 직군에 사용할 색상
  margin-right: 5px; // 직군과 인원 수 사이의 간격
  border: 1px solid #eee;
  margin: 0 auto;

  /* 인원 수 스타일 */
  span {
    font-size: 14px; // 인원 수의 글자 크기
    color: #555; // 색상
  }
`;

const GroupContent = ({ contentType = "viewing", groupData, createGroup, updateGroup }) => {
  const [contentsType, setContentsType] = useState(contentType); // 상태 추가 ('writing', 'editing', 'viewing' 중 하나)

  const initialGroupData = {
    groupType: "study",
    startDate: new Date(),
    endDate: new Date(),
    beginDate: new Date(),
    deadLineDate: new Date(),
    title: "",
    techStack: "",
    shortIntro: "",
    buttons: [
      { label: "이메일", clicked: true },
      { label: "지원직군", clicked: true },
      { label: "지원사유", clicked: true },
      { label: "다룰 수 있는 언어", clicked: false },
      { label: "참여가능 요일", clicked: false },
      { label: "자기소개", clicked: false },
      { label: "포트폴리오 링크", clicked: false },
      { label: "자유기재", clicked: false },
    ],
    challengeStatus: "N",
    recruitmentList: [],
    selectedJob: "",
    selectedCount: "",
    editIndex: null,
    editJob: "",
    editCount: "",
    subject: "",
    introduction: "",
    guidelines: "",
    fileName: "",
    totalMemberCount: 0,
    memberData: [],
  };

  const [newGroupData, setNewGroupData] = useState(
    groupData ? groupData : initialGroupData
  );

  const handleInputChange = (field, value) => {
    setNewGroupData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const jobTitleMapping = {
    //직군별 이름
    frontEnd: "프론트엔드개발자",
    backEnd: "백엔드개발자",
    planner: "기획자",
    designer: "디자이너",
  };

  const toggleButtonClick = (index) => {
    const newButtons = newGroupData.buttons.map((button, idx) =>
      idx === index ? { ...button, clicked: !button.clicked } : button
    );

    setNewGroupData((prevState) => ({ ...prevState, buttons: newButtons }));
  };

  const handleEditClick = () => {
    setContentsType("editing");
  };

  const handleSaveClick = (e) => {
    updateGroup(newGroupData);
    setContentsType("viewing");
  };

  const handleCreateGroup = (e) => {
    e.preventDefault();
    createGroup(newGroupData)
  }

  // 인원 총 합계
  const calculateTotalMemberCount = (recruitmentList) => {
    const total = recruitmentList.reduce(
      (total, item) => total + item.count,
      0
    );

    // 10명 이상일 경우 경고 및 추가되지 않도록 조치
    if (total >= 10) {
      alert("선택과 집중을 위해 인원은 10명 미만까지 받고 있습니다.");
      return total; // 여기선 총합을 그대로 반환
    }

    return total; // 조건에 부합할 경우 총합 반환
  };

  // 추가 버튼
  const addRecruitment = (e) => {
    e.preventDefault();

    const isDuplicate = newGroupData.recruitmentList.some(
      (item) =>
        item.job === newGroupData.selectedJob ||
        item.count === newGroupData.selectedCount
    );

    if (isDuplicate) {
      alert("이미 등록된 모집 직군입니다. 수정하거나 다른 값을 입력해 주세요.");
      return; // 중복일 경우 추가하지 않음
    }

    if (newGroupData.selectedJob && newGroupData.selectedCount > 0) {
      const newRecruit = {
        job: newGroupData.selectedJob,
        count: parseInt(newGroupData.selectedCount),
      };

      const updatedRecruitmentList = [
        ...newGroupData.recruitmentList,
        newRecruit,
      ];

      const totalMemberCount = calculateTotalMemberCount(
        updatedRecruitmentList
      );

      if (totalMemberCount >= 10) {
        return; // 총 인원 수가 10명을 초과할 수 없도록 처리
      }

      setNewGroupData((prevData) => ({
        ...prevData,
        recruitmentList: updatedRecruitmentList,
        totalMemberCount: totalMemberCount, // 상태 업데이트
        selectedJob: "",
        selectedCount: 0,
      }));
    } else {
      alert("직군과 모집 인원을 선택해주세요.");
    }
  };

  //수정
  const startEdit = (index) => {
    setNewGroupData((prevData) => ({
      ...prevData,
      editIndex: index,
      editJob: prevData.recruitmentList[index].job,
      editCount: prevData.recruitmentList[index].count,
    }));
  };

  //수정후 저장
  const saveEdit = () => {
    if (
      newGroupData.editJob &&
      Number.isInteger(newGroupData.editCount) &&
      newGroupData.editCount > 0
    ) {
      const updatedRecruitmentList = newGroupData.recruitmentList.map(
        (item, index) =>
          index === newGroupData.editIndex
            ? { job: newGroupData.editJob, count: newGroupData.editCount }
            : item
      );

      setNewGroupData((prevData) => ({
        ...prevData,
        recruitmentList: updatedRecruitmentList,
        totalMemberCount: calculateTotalMemberCount(updatedRecruitmentList),
        editIndex: null,
        editJob: "",
        editCount: 0,
      }));
    } else {
      alert("직군과 모집 인원을 올바르게 입력해주세요.");
    }
  };

  //삭제
  const deleteRecruitment = (index) => {
    const updatedRecruitmentList = newGroupData.recruitmentList.filter(
      (_, i) => i !== index
    );

    setNewGroupData((prevData) => ({
      ...prevData,
      recruitmentList: updatedRecruitmentList,
      totalMemberCount: calculateTotalMemberCount(updatedRecruitmentList),
    }));
  };

  // 사용자 권한 변경 함수
  const handlePositionChange = (userId, newRole) => {
    // //현재 모집장 확인
    // const currentMasterId = newGroupData.find(
    //   (user) => user.role === "LEADER"
    // )?.id;

    // if (newRole === "LEADER" && currentMasterId) {
    //   alert("이미 다른 사용자가 모집장입니다.");
    //   return false; // 새로운 모집장이 설정되지 않음
    // }

    // // 권한을 수정
    // const updatedMembers = newGroupData.map((user) =>
    //   user.id === userId ? { ...user, role: newRole } : user
    // );

    // setNewGroupData(updatedMembers); // 상태 업데이트

    // // 성공적으로 권한이 변경되었음을 알림
    // alert(
    //   `권한이 성공적으로 변경되었습니다! ${newPosition}로 변경된 사용자 ID: ${userId}`
    // );
  };

  return (
    <GroupInfoContentsWrapper>
      <GroupInfoContainer>
        <FormFieldRow>
          <FormTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-house-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z" />
              <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z" />
            </svg>
            모임 정보
          </FormTitle>
          <ButtonGroupRight>
            {contentsType === "editing" ? (
              <>
                {/* editing */}
                {/* 그룹 페이지 관리 탭 */}
                <SaveButton onClick={handleSaveClick} style={{ width: '88.99px' }} />
                <CancelButton onClick={() => setContentsType("viewing")} style={{ width: '88.99px' }} />
                {/* 수정 중 문구 */}
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: "35px",
                    gap: "10px",
                    width: '88.99px'
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-pencil-square"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                    <path
                      fillRule="evenodd"
                      d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                    />
                  </svg>
                  수정 중
                </span>
              </>
            ) : contentsType === "writing" ? (
              <>
                {/* writing */}
                {/* 팀원 모집하기 페이지 */}
              </>
            ) : (
              <>
                {/* viewing */}
                <EditButton onClick={handleEditClick} />
              </>
            )}
          </ButtonGroupRight>
        </FormFieldRow>
        <FormFieldRow>
          <FormFieldSingle label={"모임 구분"}>
            <SelectButton
              name="groupType"
              value={newGroupData.groupType}
              onChange={(e) => handleInputChange("groupType", e.target.value)}
              disabled={contentsType !== "writing"}
            >
              <option value="study">스터디</option>
              <option value="project">프로젝트</option>
            </SelectButton>
          </FormFieldSingle>
        </FormFieldRow>
        <FormFieldRow>
          <FormFieldSingle label={"모임 기간"}>
            <DoubleDateContainer>
              <DateButton
                name="startDate"
                value={newGroupData.startDate}
                onChange={(date) => handleInputChange("startDate", date)}
                disabled={contentsType === "viewing"}
                required
              />
              ~
              <DateButton
                name="endDate"
                value={newGroupData.endDate}
                onChange={(date) => handleInputChange("endDate", date)}
                disabled={contentsType === "viewing"}
              />
            </DoubleDateContainer>
          </FormFieldSingle>
        </FormFieldRow>
        <FormFieldRow>
          <FormFieldSingle label={"모임 이름"}>
            <InputText
              name="title"
              value={newGroupData.title}
              onChange={(e) => handleInputChange("title", e.target.value)}
              disabled={contentsType === "viewing"}
              placeholder={"모임 이름을 입력하세요"}
              required
            />
          </FormFieldSingle>
        </FormFieldRow>
        <FormFieldRow>
          <FormFieldSingle label={"썸네일"} htmlFor="thumbnail">
            <ImagePreview
              isEditing={true}
              id="thumbnail"
              name="thumbnail"
              value={newGroupData.thumbnail}
              disabled={contentsType === "viewing"}
              onChange={(e) => handleInputChange("fileName", e.name)}
              isUploadButtonAppear={true}
              style={{
                flexDirection: "column-reverse",
                alignItems: "start",
                justifyContent: "start",
              }}
            />
          </FormFieldSingle>
        </FormFieldRow>
      </GroupInfoContainer>
      <hr style={{ border: "1px solid var(--black200)" }} />
      <GroupInfoContainer>
        <FormTitle>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-file-earmark-person-fill"
            viewBox="0 0 16 16"
          >
            <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0m2 5.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-.245S4 12 8 12s5 1.755 5 1.755" />
          </svg>
          모집 기본 정보
        </FormTitle>
        <FormFieldRow>
          <FormFieldSingle
            label={"지원시"}
            label2={"필수/선택사항"}
            description={
              "이메일, 지원직군, 지원사유는 필수값입니다. 정보를 많이 요청시, 지원율이 떨어집니다. 필수값만 지정해주세요! "
            }
          >
            <ButtonGroupWrap>
              {newGroupData.buttons.map((button, index) => (
                <FormCheckBoxButton
                  key={"button-" + index}
                  name="button"
                  value={button}
                  checked={button.clicked}
                  disabled={
                    contentsType === "viewing" ||
                    button.label === "이메일" ||
                    button.label === "지원직군" ||
                    button.label === "지원사유"
                  }
                  onChange={(e) => {
                    toggleButtonClick(index);
                  }}
                >
                  {button.label}
                </FormCheckBoxButton>
              ))}
            </ButtonGroupWrap>
          </FormFieldSingle>
        </FormFieldRow>
        <FormFieldRow>
          <FormFieldSingle label={"기술 스택"}>
            <InputText
              name="techStack"
              value={newGroupData.techStack}
              onChange={(e) => handleInputChange("techStack", e.target.value)}
              disabled={contentsType === "viewing"}
              placeholder={"#기술 #스택"}
              required
            />
          </FormFieldSingle>
        </FormFieldRow>
        <FormFieldRow>
          <FormFieldSingle label={"모집 마감일"}>
            <DateButton
              name="deadLineDate"
              value={newGroupData.deadLineDate}
              onChange={(date) => handleInputChange("deadLineDate", date)}
              disabled={contentsType === "viewing"}
            />
          </FormFieldSingle>
          {newGroupData.groupType === "project" ? (
            <>
              <FormFieldSingle label={"총 모집 인원"}>
                <InputNumber
                  name="totalMemberCount"
                  value={newGroupData.totalMemberCount}
                  disabled="true"
                />
              </FormFieldSingle>
            </>
          ) : (
            <>
              <FormFieldSingle label={"총 모집 인원"}>
                <SelectButton
                  name="totalMemberCount"
                  defaultValue={newGroupData.totalMemberCount}
                  disabled={contentsType === "viewing"}
                  onChange={(e) => handleInputChange("totalMemberCount", e.target.value)}
                >
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                </SelectButton>
              </FormFieldSingle>
            </>
          )}
        </FormFieldRow>
        <FormFieldRow>
          {newGroupData.groupType === "project" ? (
            <>
              <FormFieldRow>
                <FormFieldSingle label={"모집 직군"} label2={"분류"}>
                  <SelectButton
                    name="recruitingJob"
                    defaultValue=""
                    value={newGroupData.selectedJob} // 선택된 직군 상태
                    onChange={(e) =>
                      handleInputChange("selectedJob", e.target.value)
                    } // 필드 이름 수정
                    disabled={contentsType === "viewing"}
                  >
                    <option value="">직군선택</option>
                    <option value="frontEnd">프론트엔드개발자</option>
                    <option value="backEnd">백엔드개발자</option>
                    <option value="planner">기획자</option>
                    <option value="designer">디자이너</option>
                  </SelectButton>
                </FormFieldSingle>
                <FormFieldSingle label={"직군별"} label2={"모집 인원"}>
                  <SelectButton
                    name="numOfrecruitingJob"
                    defaultValue=""
                    value={newGroupData.selectedCount} // 선택된 인원 상태
                    onChange={(e) =>
                      handleInputChange("selectedCount", e.target.value)
                    } // 필드 이름 변경
                    disabled={contentsType === "viewing"}
                  >
                    <option value="">인원수</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                  </SelectButton>
                </FormFieldSingle>
                {contentsType !== "viewing" &&
                  <Violet500LineButton onClick={addRecruitment}>
                    추가하기
                  </Violet500LineButton>
                }
              </FormFieldRow>
            </>
          ) : (
            <></>
          )}
        </FormFieldRow>
        {newGroupData.groupType === "project" &&
          newGroupData.recruitmentList?.length > 0 ? (
          <RecruitmentContainer>
            <RecruitmentHeader>모집 직군 목록</RecruitmentHeader>
            {newGroupData.recruitmentList.map((item, index) => (
              <RecruitmentItemWrapper key={index}>
                {newGroupData.editIndex === index ? (
                  <div>
                    <input
                      type="number"
                      value={newGroupData.editCount}
                      onChange={(e) =>
                        setNewGroupData((prevData) => ({
                          ...prevData,
                          editCount: Number(e.target.value),
                        }))
                      }
                    />
                    <Violet500LineButton onClick={saveEdit}>
                      저장
                    </Violet500LineButton>
                    <Violet500LineButton
                      onClick={() =>
                        setNewGroupData((prevData) => ({
                          ...prevData,
                          editIndex: null,
                          editJob: "",
                          editCount: 0,
                        }))
                      }
                    >
                      취소
                    </Violet500LineButton>
                  </div>
                ) : (
                  <JobCountInfo>
                    {jobTitleMapping[item.job] || item.job} | {item.count}명
                    <Violet500LineButton style={{ marginLeft: "40px" }} onClick={() => startEdit(index)}>
                      수정
                    </Violet500LineButton>
                    <Violet500LineButton onClick={() => deleteRecruitment(index)}>
                      삭제
                    </Violet500LineButton>
                  </JobCountInfo>
                )}
              </RecruitmentItemWrapper>
            ))}
          </RecruitmentContainer>
        ) : (
          <></>
        )}
      </GroupInfoContainer>
      <hr style={{ border: "1px solid var(--black200)" }} />
      <GroupInfoContainer>
        <FormTitle>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-megaphone-fill"
            viewBox="0 0 16 16"
          >
            <path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0zm-1 .724c-2.067.95-4.539 1.481-7 1.656v6.237a25 25 0 0 1 1.088.085c2.053.204 4.038.668 5.912 1.56zm-8 7.841V4.934c-.68.027-1.399.043-2.008.053A2.02 2.02 0 0 0 0 7v2c0 1.106.896 1.996 1.994 2.009l.496.008a64 64 0 0 1 1.51.048m1.39 1.081q.428.032.85.078l.253 1.69a1 1 0 0 1-.983 1.187h-.548a1 1 0 0 1-.916-.599l-1.314-2.48a66 66 0 0 1 1.692.064q.491.026.966.06" />
          </svg>
          모임 소개
        </FormTitle>
        <FormFieldRow>
          <FormFieldSingle label={"주제"}>
            <InputText
              name="subject"
              value={newGroupData.subject}
              onChange={(e) => handleInputChange("subject", e.target.value)}
              disabled={contentsType === "viewing"}
              placeholder={"주제를 입력해주세요"}
              required
            />
          </FormFieldSingle>
        </FormFieldRow>
        <TextArea
          name="introduction"
          placeholder="모집에 대한 간단한 소개를 작성해주세요."
          value={newGroupData.introduction}
          onChange={(e) => handleInputChange("introduction", e.target.value)}
          disabled={contentsType === "viewing"}
          required
        />
        <TextArea
          name="guidelines"
          placeholder="유의사항을 적어주세요."
          value={newGroupData.guidelines}
          onChange={(e) => handleInputChange("guidelines", e.target.value)}
          disabled={contentsType === "viewing"}
          required
        />
      </GroupInfoContainer>
      {contentType === "writing" ? (
        <>{/* writing */}</>
      ) : (
        <>
          {/* viewing */}
          {/* editing */}
          <hr style={{ border: "1px solid var(--black200)" }} />
          <GroupInfoContainer>
            <FormTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-people-fill"
                viewBox="0 0 16 16"
              >
                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
              </svg>
              모임원 관리
            </FormTitle>
            <div>
              {newGroupData.memberData.map((user) => (
                <MemberInfo key={user.groupUser.userId}>
                  <ProfileIcon /*src="" alt=""*/ className="UserDetails">
                    {user.groupUser.userNickname}
                  </ProfileIcon>
                  <FormFieldRow>
                    <FormFieldMultiple
                      label={"모집 직군"}
                      className="roleSelect"
                    >
                      <SelectButton
                        defaultValue={user.position}
                        disabled={contentsType === "viewing"}
                      >
                        <option value="FRONTEND">프론트엔드개발자</option>
                        <option value="BACKEND">백엔드개발자</option>
                        <option value="PLANNER">기획자</option>
                        <option value="DESIGNER">디자이너</option>
                      </SelectButton>
                    </FormFieldMultiple>
                    <FormFieldMultiple label={"권한"} className="roleSelect">
                      <SelectButton
                        defaultValue={user.role}
                        disabled={contentsType === "viewing"}
                        onChange={(e) =>
                          handlePositionChange(user.groupUser.userId, e.target.value)
                        }
                      >
                        <option value="LEADER">모집장</option>
                        <option value="MEMBER">모집원</option>
                      </SelectButton>
                    </FormFieldMultiple>
                  </FormFieldRow>
                </MemberInfo>
              ))}
              {/* recruitmentList가 정의되어 있는지와 배열인지 확인 */}
              {Array.isArray(newGroupData.recruitmentList) ? <></> : <></>}
            </div>
          </GroupInfoContainer>
        </>
      )}

      <ButtonGroupCenter>
        {contentsType === "editing" ? (
          <>
            {/* editing */}
            {/* 그룹 페이지 관리 탭 */}
          </>
        ) : contentsType === "writing" ? (
          <>
            {/* writing */}
            {/* 팀원 모집하기 페이지 */}
            <CompleteButton onClick={handleCreateGroup} />
            <CancelButton onClick={() => window.history.back()} />
          </>
        ) : (
          <>{/* viewing */}</>
        )}
      </ButtonGroupCenter>
    </GroupInfoContentsWrapper>
  );
};

export default GroupContent;
