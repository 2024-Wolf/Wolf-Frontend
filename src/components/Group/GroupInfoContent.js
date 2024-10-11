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

const GroupInfoContent = ({ mode }) => {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      author: "gahyun",
      text: "백엔드는 정말 어렵네요. 추가로 공부할만한 책이 있나요?",
      date: "2024.08.28",
      comments: [],
    },
    {
      id: 2,
      author: "myeongju",
      text: "화면 구현이 빨리 끝나야할텐데... 언제까지 가능하신지 댓글로 남겨주세요",
      date: "2024.09.20",
      comments: [],
    },
  ]);

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

  const [newQuestion, setNewQuestion] = useState("");
  const [newComment, setNewComment] = useState("");
  const [selectedQuestionId, setSelectedQuestionId] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  // 질문 추가
  const handleQuestionSubmit = (e) => {
    e.preventDefault();
    if (newQuestion.trim()) {
      const newQuestionObj = {
        id: questions.length + 1,
        author: "currentUser",
        text: newQuestion,
        date: new Date().toLocaleDateString(),
        comments: [],
      };
      setQuestions([...questions, newQuestionObj]);
      setNewQuestion("");
    }
  };

  // 댓글 토글
  const toggleComments = (questionId) => {
    setSelectedQuestionId(
      selectedQuestionId === questionId ? null : questionId
    );
  };

  const renderComments = (comments) => (
    <>
      <CommentSection
        comments={comments}
        onSubmit={(commentText) =>
          handleCommentSubmit(selectedQuestionId, commentText)
        }
      />
    </>
  );

  // 댓글 추가
  const handleCommentSubmit = (questionId, commentText) => {
    if (commentText.trim()) {
      const updatedQuestions = questions.map((question) => {
        if (question.id === questionId) {
          return {
            ...question,
            comments: [
              ...question.comments,
              {
                author: "currentUser",
                text: commentText,
                date: new Date().toLocaleDateString(),
              },
            ],
          };
        }
        return question;
      });
      setQuestions(updatedQuestions);
      setNewComment("");
    }
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <InfoContainer>
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
              />
            </FormFieldSingle>
            <FormFieldSingle
              label={mode === "study" ? "지원 가능" : "지원 가능 개발자"}
              className="recruitSupport"
            >
              <InputTextNoCss
                value={mode === "study" ? "스터디원 6/8" : "개발자 7/8"}
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
              <InputTextNoCss value="인스타그램 클론 코딩 해보기" />
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
          <PostContent></PostContent>
        </Violet500LineDiv>

        {/* 최근 소식 */}
        <RecentNewsSlider news={recentNews} />

        {/* 주제 설명 */}
        <Violet500LineDiv>
          <FormFieldRow>
            <FormFieldSingle label={"주제"} className="PostTitle">
              <InputTextNoCss value="인스타그램 클론 코딩 해보기" />
            </FormFieldSingle>
          </FormFieldRow>
          <TextAreaNoCss
            name="introduction"
            placeholder="모집에 대한 간단한 소개를 작성해주세요."
            value={
              "- 내용: 파이썬 기초를 공부할 사람 모집합니다.\n" +
              "- 매주 월, 수, 금 오후 8시부터 10시까지 진행됩니다.\n" +
              "- 총 8주 과정으로 진행하고 참가비 무료입니다.\n" +
              "- 관심있는 분들은 \"지원하기\"로 신청해주세요."
            }
          />
          <PostContent>
          </PostContent>
        </Violet500LineDiv>

        {/* 최근 소식 */}
        <RecentNewsSlider news={recentNews} />

        {/* 질문 작성 영역 */}
        <Violet500LineDiv>
          <FormFieldSingle label={"응원이나 궁금한 내용을 입력해주세요 !"} />
          <QuestionForm
            showFileOption={false}
          // data={data} 데이터 연결 필요
          />
        </Violet500LineDiv>
      </InfoContainer >
    </>
  );
};

export default GroupInfoContent;
