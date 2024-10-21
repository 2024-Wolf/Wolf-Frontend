import styled from "styled-components";
import {
  Violet500LineDiv,
  FormFieldColumn,
  Violet500BackgroundButton,
  FormFieldRow,
  DoubleDateContainer,
  InfoContainer,
  PostContent,
  QuestionHeader,

} from "../GlobalStyledComponents";

import React, { useState } from "react";
import ApplicantModal from "./GroupInfoModal/ApplicantModal";

import CommentSection from "./Question/CommentSection";
import FormFieldSingle from "./GroupComponent/FormFieldSingle";
import TextAreaNoCss from "../Input/TextAreaNoCss";
import InputTextNoCss from "../Input/InputTextNoCss";
import InputDateNoCss from "../Input/InputDateNoCss";
import RecentNewsSlider from "../Slider/RecentNewsSlider";
import QuestionForm from "./Question/QuestionForm";
import { matchRoutes } from 'react-router-dom';
import ImagePreview from "../Img/ImagePreview"

const GroupInfoContent = ({ mode, groupPostId, userId, groupPostData }) => {

  const recentNews = [
    {
      content: "‘파이널 프로젝트- 지금2조’에 ‘손흥민’ 님이 지원하셨습니다.",
      date: "2024.09.02",
    },
    {
      content: "프로젝트 회의는 다음 주 월요일 오후 3시입니다.",
      date: "2024.09.03",
    },
    {
      content: "스터디원 모집 중 프론트엔드 스터디에 참여하세요!",
      date: "2024.09.04",
    },
  ];

  const [isModalOpen, setModalOpen] = useState(false);


  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <InfoContainer>

        {/* 이미지가 있으면 여기에 넣으면 됨! */}
        <ImagePreview
          src={groupPostData?.thumbnail ? groupPostData?.thumbnail : "기본이미지"}
          imageFile={groupPostData?.thumbnail ? groupPostData?.thumbnail : "기본이미지"}
        />

        {/* 정보 묶음 */}
        <Violet500LineDiv>
          <FormFieldColumn>
            <FormFieldSingle label={"모임 기간"}>
              <DoubleDateContainer className="date">
                <InputDateNoCss value={groupPostData?.startDate} />
                ~
                <InputDateNoCss value={groupPostData?.endDate} />
              </DoubleDateContainer>
            </FormFieldSingle>
            <Violet500BackgroundButton onClick={openModal}>
              지원하기
            </Violet500BackgroundButton>
          </FormFieldColumn>

          {isModalOpen && (
            <ApplicantModal onClose={closeModal} isView={false} optionalRequirements={groupPostData?.optionalRequirements} />
          )}

          <FormFieldRow>
            <FormFieldSingle
              label={mode === "study" ? "모집 현황" : "지원 현황"}
              className="recruitPeople"
            >
              <InputTextNoCss
                value={mode === "study" ? "스터디원 2/8" : "개발자 1/8"}
                readOnly
              />
            </FormFieldSingle>
            <FormFieldSingle
              label={mode === "study" ? "지원 가능" : "지원 가능 개발자"}
              className="recruitSupport"
            >
              <InputTextNoCss
                value={mode === "study" ? "스터디원 6/8" : "개발자 7/8"}
                readOnly
              />
            </FormFieldSingle>
          </FormFieldRow>
        </Violet500LineDiv>

        {/*<HiddenFileInput*/}
        {/*    id="thumbnail"*/}
        {/*    type="file"*/}
        {/*    accept="image/*"*/}
        {/*    onChange={handleFileChange}*/}
        {/*/>*/}

        {/* 주제 설명 */}
        <Violet500LineDiv>
          <FormFieldRow>
            <FormFieldSingle label={"주제"} className="PostTitle">
              <InputTextNoCss
                value={groupPostData?.topic}
                readOnly />
            </FormFieldSingle>
          </FormFieldRow>
          <TextAreaNoCss
            name="introduction"
            placeholder="모집에 대한 간단한 소개를 작성해주세요."
            value={groupPostData?.description}
          />
        </Violet500LineDiv>

        {/* 최근 소식 */}
        <RecentNewsSlider news={recentNews} />

        {/* 질문 작성 영역 */}
        <Violet500LineDiv>
          <FormFieldSingle
            FormLabelGroupStyle={{ width: '100%', marginTop: '10px' }}
            labelStyle={{
              width: '100%', textWrap: 'wrap', justifyContent: 'start',

            }}
            label={"응원이나 궁금한 내용을 입력해주세요 !"}
          />
          <QuestionForm
            userId={userId}
            showFileOption={false}
            groupPostId={groupPostId}
          // data={data} 데이터 연결 필요
          />
        </Violet500LineDiv>
      </InfoContainer >
    </>
  );
};

export default GroupInfoContent;
