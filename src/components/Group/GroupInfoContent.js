import React, { useState } from 'react';
import styled from 'styled-components';
import ApplicantModal from "./GroupInfoModal/ApplicantModal";
import TabContentsWrapper from "../TabContentsWrapper";
import QuestionForm from "./Question/QuestionForm";
import QuestionList from "./Question/QuestionList";
import CommentSection from "./Question/CommentSection";

// 전체 div 묶음
const InfoContainer = styled(TabContentsWrapper)`
    position: relative;
    justify-content: space-between;
    align-items: center;
    padding: 40px;
    background: var(--violet100);

    @media (max-width: 768px) {
        padding: 20px;
    }

    @media (max-width: 480px) {
        padding: 10px;
    }
`;

// 지원하기 버튼
const SupportButton = styled.button`
    padding: 10px 15px;
    background-color: var(--violet500);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: var(--violet300);
    }

    @media (max-width: 768px) {
        padding: 8px 12px;
    }
    
    @media (max-width: 480px) {
        font-size: 12px;
        padding : 5px 10px;
    }
`;

// 정보 묶음
const SupportRecruit = styled.div`
    width: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    font-size: 18px;
    padding: 30px;
    border: 1px solid var(--violet500);
    border-radius: 10px;
    gap: 25px;

    @media (max-width: 768px) {
        font-size: 16px;
        padding: 20px;
    }

    @media (max-width: 480px) {
        font-size: 14px;
        padding: 15px;
    }
`;

// 모임 기간 및 지원하기 묶음
const SupportRecruit1 = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
        justify-content: space-between;
    }
`;

// 모집 현황 및 지원 가능 묶음
const SupportRecruit2 = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 15px;
    }
`;

// 모집 현황 묶음
const RecruitContainer = styled.div`
    display: flex;

`;

// 지원 가능 묶음
const SupportContainer = styled.div`
    display: flex;

`;

// 주제 설명
const PostInfo = styled.div`
    margin-top: 30px;
    background-color: white;
    border: 1px solid var(--violet500);
    border-radius: 10px;
    width: 100%;
    min-height: 300px;
    padding: 30px;
    line-height: 2;

    @media (max-width: 768px) {
        padding: 20px;
        font-size: 16px;
    }

    @media (max-width: 480px) {
        padding: 15px;
        font-size: 14px;
    }
`;

const PostTitle = styled.h3`
    font-size: 18px;
    margin-bottom: 10px;

    @media (max-width: 768px) {
        font-size: 16px;
    }

    @media (max-width: 480px) {
        font-size: 14px;
    }
`;

const PostContent = styled.div`
    font-size: 16px;

    @media (max-width: 768px) {
        font-size: 14px;
    }

    @media (max-width: 480px) {
        font-size: 12px;
    }
`;

// 최근 소식
const UpdateInfo = styled.div`
    background-color: white;
    margin: 30px 0;
    padding: 40px 30px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
    
    div, label {
        margin: 0 10px;
    }

    @media (max-width: 768px) {
        font-size: 14px;
        padding: 20px;
        
        div, label {
            margin: 0 10px;
        }
    }

    @media (max-width: 480px) {
        font-size: 12px;
        padding: 10px;
        
        div, label {
            margin: 0 10px;
        }
    }
`;

const QuestionContainer = styled.div`
    width: 100%;
    background-color: white;
    padding: 30px;
    border: 1px solid var(--violet500);
    border-radius: 10px;

    @media (max-width: 768px) {
        padding: 20px;
    }

    @media (max-width: 480px) {
        padding: 15px;
    }
`;

const QuestionHeader = styled.div`
    display: flex;
    font-size: 16px;
    font-weight: 500;
    color: var(--black800);
    text-align: left;
    margin-left: 5px;

    @media (max-width: 768px) {
        font-size: 14px;
    }

    @media (max-width: 480px) {
        font-size: 12px;
    }
`;
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
                    handleQuestionEdit={(id, text) => {}}
                    handleQuestionDelete={(id) => {}}
                    showFileOptions={false}
                />
            </QuestionContainer>

        </InfoContainer>
    );
};

export default GroupInfoContent;
