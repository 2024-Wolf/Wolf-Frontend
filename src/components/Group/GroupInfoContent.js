import styled from 'styled-components';
import { InfoContainer, SupportButton, SupportRecruit, SupportRecruit1, SupportRecruit2, RecruitContainer, SupportContainer, PostInfo, PostTitle, PostContent, UpdateInfo, QuestionContainer, QuestionHeader } from "../GlobalStyledComponents";

import React, { useState } from 'react';
import ApplicantModal from "./GroupInfoModal/ApplicantModal";
import QuestionForm from "./Question/QuestionForm";
import QuestionList from "./Question/QuestionList";
import CommentSection from "./Question/CommentSection";


const GroupInfoContent = ({ mode }) => {
    const [questions, setQuestions] = useState([
        {
            id: 1,
            author: 'gahyun',
            text: '백엔드는 정말 어렵네요. 추가로 공부할만한 책이 있나요?',
            date: '2024.08.28',
            comments: [],
        },
        {
            id: 2,
            author: 'myeongju',
            text: '화면 구현이 빨리 끝나야할텐데... 언제까지 가능하신지 댓글로 남겨주세요',
            date: '2024.09.20',
            comments: [],
        },
    ]);

    const [newQuestion, setNewQuestion] = useState('');
    const [newComment, setNewComment] = useState('');
    const [selectedQuestionId, setSelectedQuestionId] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);

    // 질문 추가
    const handleQuestionSubmit = (e) => {
        e.preventDefault();
        if (newQuestion.trim()) {
            const newQuestionObj = {
                id: questions.length + 1,
                author: 'currentUser',
                text: newQuestion,
                date: new Date().toLocaleDateString(),
                comments: [],
            };
            setQuestions([...questions, newQuestionObj]);
            setNewQuestion('');
        }
    };

    // 댓글 토글
    const toggleComments = (questionId) => {
        setSelectedQuestionId(selectedQuestionId === questionId ? null : questionId);
    };

    const renderComments = (comments) => (
        <CommentSection
            comments={comments}
            onSubmit={(commentText) => handleCommentSubmit(selectedQuestionId, commentText)}
        />
    );

    // 댓글 추가
    const handleCommentSubmit = (questionId, commentText) => {
        if (commentText.trim()) {
            const updatedQuestions = questions.map((question) => {
                if (question.id === questionId) {
                    return {
                        ...question,
                        comments: [...question.comments, { author: 'currentUser', text: commentText, date: new Date().toLocaleDateString() }],
                    };
                }
                return question;
            });
            setQuestions(updatedQuestions);
            setNewComment('');
        }
    };

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <InfoContainer>
            {/* 정보 묶음 */}
            <SupportRecruit>
                <SupportRecruit1>
                    <div className="date">모임 기간 : 2024.09.10~2024.09.20</div>
                    <SupportButton onClick={openModal}>지원하기</SupportButton>

                    {isModalOpen && <ApplicantModal onClose={closeModal} />}
                </SupportRecruit1>
                <SupportRecruit2>
                    <RecruitContainer>
                        <div className="recruitPeople">
                            {mode === 'study' ? '모집현황' : '지원현황'}&emsp;
                        </div>
                        <div>{mode === 'study' ? '스터디원 2/8' : '개발자 1/8'}</div>
                    </RecruitContainer>

                    <SupportContainer>
                        <div className="recruitSupport">
                            {mode === 'study' ? '지원 가능' : '지원 가능 개발자'}&emsp;
                        </div>
                        <div>{mode === 'study' ? '스터디원 6/8' : '개발자 7/8'}</div>
                    </SupportContainer>
                </SupportRecruit2>
            </SupportRecruit>
            {/*<HiddenFileInput*/}
            {/*    id="thumbnail"*/}
            {/*    type="file"*/}
            {/*    accept="image/*"*/}
            {/*    onChange={handleFileChange}*/}
            {/*/>*/}
            {/* 주제 설명 */}
            <PostInfo>
                <PostTitle>
                    제목: "파이널 스터디_지금 2조"
                </PostTitle>
                <PostContent>
                    - 내용: 파이썬 기초를 공부할 사람 모집합니다. <br />
                    - 매주 월, 수, 금 오후 8시부터 10시까지 진행됩니다. <br />
                    - 총 8주 과정으로 진행하고 참가비 무료입니다. <br />
                    - 관심있는 분들은 "지원하기"로 신청해주세요.
                </PostContent>
            </PostInfo>


            {/* 최근 소식 */}
            <UpdateInfo>
                <label>최근 소식</label>
                <div>'파이널 프로젝트-지금2조에 "손흥민"님이 지원하셨습니다.'</div>
                <div>2024.09.02</div>
            </UpdateInfo>

            {/* 질문 작성 영역 */}
            <QuestionContainer>
                <QuestionHeader>응원이나 궁금한 내용을 입력해주세요 !</QuestionHeader>
                <QuestionForm
                    newQuestion={newQuestion}
                    setNewQuestion={setNewQuestion}
                    handleQuestionSubmit={handleQuestionSubmit}
                    showFileOptions={false}
                />
                {/* 질문 목록 */}
                <QuestionList
                    questions={questions}
                    selectedQuestionId={selectedQuestionId}
                    toggleComments={toggleComments}
                    renderComments={renderComments}
                    handleQuestionEdit={(id, text) => { }}
                    handleQuestionDelete={(id) => { }}
                    showFileOptions={false}
                />
            </QuestionContainer>

        </InfoContainer>
    );
};

export default GroupInfoContent;
