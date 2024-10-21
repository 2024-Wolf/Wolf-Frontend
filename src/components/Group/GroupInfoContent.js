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

const GroupInfoContent = ({ mode, groupPostId, userId }) => {

  console.log('userId : ', userId)
  const recentNews = [
    {
      title: "최근 소식",
      content: "‘파이널 프로젝트- 지금2조’에 ‘손흥민’ 님이 지원하셨습니다.",
      date: "2024.09.02",
    },
    {
      title: "최근 소식",
      content: "프로젝트 회의는 다음 주 월요일 오후 3시입니다.",
      date: "2024.09.03",
    },
    {
      title: "최근 소식",
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
          src="https://image.utoimage.com/preview/cp927958/2020/09/202009015931_500.jpg"
          imageFile="https://image.utoimage.com/preview/cp927958/2020/09/202009015931_500.jpg" />

        {/* 정보 묶음 */}
        <Violet500LineDiv>
          <FormFieldColumn>
            <FormFieldSingle label={"모임 기간"}>
              <DoubleDateContainer className="date">
                <InputDateNoCss value="2024-09-10" />
                ~
                <InputDateNoCss value="2024-09-20" />
              </DoubleDateContainer>
            </FormFieldSingle>
            <Violet500BackgroundButton onClick={openModal}>
              지원하기
            </Violet500BackgroundButton>
          </FormFieldColumn>

          {isModalOpen && (
            <ApplicantModal onClose={closeModal} isView={false} />
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
                value="인스타그램 클론 코딩 해보기"
                readOnly />
            </FormFieldSingle>
          </FormFieldRow>
          <TextAreaNoCss
            name="introduction"
            placeholder="모집에 대한 간단한 소개를 작성해주세요."
            value={
              "- 내용: 파이썬 기초를 공부할 사람 모집합니다.\n" +
              "- 매주 월, 수, 금 오후 8시부터 10시까지 진행됩니다.\n" +
              "- 총 8주 과정으로 진행하고 참가비 무료입니다.\n" +
              '- 관심있는 분들은 "지원하기"로 신청해주세요.'
            }
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
