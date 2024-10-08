import styled from 'styled-components';
import {
    Violet500LineButton, ButtonRow,
    Violet500LineDiv, FormFieldColumn, Violet500BackgroundButton, FormFieldRow, DoubleDateContainer, InfoContainer, PostContent, QuestionHeader,
    ActionButtons,
    ItemRow, ButtonGroupRight,
    QuestionItemContainer, Hr,
    CommentBody,
    QuestionRow,
    ImagePreview
} from "./GlobalStyledComponents";

import ProfileIcon from './Icon/ProfileIcon';
import ArrowUpIcon from './Icon/ArrowUpIcon';
import ArrowDownIcon from './Icon/ArrowDownIcon';
import DoubleButton from './Button/DoubleButton';
import DownloadIcon from './Icon/DownloadIcon';

import FormFieldSingle from "./Group/GroupComponent/FormFieldSingle";
import ApplicantModal from "./Group/GroupInfoModal/ApplicantModal";
import QuestionForm from "./Group/Question/QuestionForm";
import QuestionList from "./Group/Question/QuestionList";
import CommentSection from "./Group/Question/CommentSection";
import TextAreaNoCss from './Input/TextAreaNoCss';
import InputTextNoCss from './Input/InputTextNoCss';
import InputDateNoCss from './Input/InputDateNoCss';
import RecentNewsSlider from './Slider/RecentNewsSlider';
import CancelIcon from './Icon/CancelIcon';
import React, { useEffect, useState, useRef } from 'react';
import TextAreaBlackLine from './Input/TextAreaBlackLine';
import InputFile from './Input/InputFile';

const CommentSectionWrapper = styled.div`
    padding:10px;
`;

// components/Group/Question/CommentSection.jsx
export const CommentItem = styled.div`
    background-color: #ffffff;
    padding: 15px;
    border-radius: 10px;
`;

// components/Group/Question/QuestionItem.jsx
export const QuestionDate = styled.div`
    font-size: 13px;
    color: var(--black400);
`;

// components/Group/Question/QuestionItem.jsx
export const QuestionItemWrapper = styled.div`
    padding: 0px 10px;
    border-radius: 7px;
    width: 100%;
`;

// components/Group/Question/QuestionForm.jsx
export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const CommentItemContainer = styled.div`
    background-color: var(--violet100);
    padding: 10px;
    display: flex;
    width: 100%;
    gap: 10px;
    flex-direction: column;
    border-radius: 7px;
`;



const dummyQuestions = [
    {
        id: 1,
        author: 'gahyun',
        text: '백엔드는 정말 어렵네요. 추가로 공부할만한 책이 있나요?',
        date: '2024.08.28',
        file: null,
        comments: [
            {
                author: 'user2',
                text: '맞아요, 백엔드가 어렵긴 하죠. 저는 "백엔드 개발자를 위한 가이드" 같은 책도 추천합니다. 실전에서 사용할 수 있는 사례가 많아서 도움이 될 거예요.',
                date: '2024.08.29',
                file: null,
            },
        ],
    },
    {
        id: 2,
        author: 'myeongju',
        text: '화면 구현이 빨리 끝나야할텐데... 언제까지 가능하신지 댓글로 남겨주세요.',
        date: '2024.09.20',
        file: null,
        comments: [
            {
                author: 'user5',
                text: '화면 구현은 주어진 기한 내에 맞춰야 하니, 계획적으로 진행하는 게 중요해요. 저는 보통 일주일 정도의 여유를 두고 작업을 진행합니다.',
                date: '2024.09.21',
                file: null,
            },
            {
                author: 'user1',
                text: '저도 그렇게 해요. 의존성 배열을 잘 활용하면 상태 변화에 따라 필요한 업데이트를 쉽게 관리할 수 있으니, 이를 잘 활용하면 시간을 단축할 수 있을 거예요.',
                date: '2024.09.21',
                file: null,
            },
        ],
    },
];



// Question 컴포넌트
const Question = ({
    handleEnterSubmit,
    handleFileChange,
    showFileOptions,
    question,
    onEdit,
    onDelete,
    onCommentEdit,
    onCommentDelete,
    onAddComment,
    newComments,
    handleCommentChange
}) => {
    const [isEditingQuestion, setIsEditingQuestion] = useState(false);
    const [isShowComments, setIsShowComments] = useState(false);
    const [questionEditText, setQuestionEditText] = useState('');
    const [commentIndex, setCommentIndex] = useState(null);
    const [commentEditText, setCommentEditText] = useState('');

    const handleQuestionSubmit = (e) => {
        e.preventDefault();
        const questionValue = new FormData(e.target).get('textareaQuestion');
        const file = new FormData(e.target).get('fileInput');

        // 질문 수정 및 파일 첨부
        onEdit(question.id, {
            text: questionValue || question.text,
            file: file ? file : question.file, // 새로운 파일이 있으면 사용
        });
        setIsEditingQuestion(false);
    };

    const handleCommentSubmit = (e, index) => {
        e.preventDefault();
        const commentValue = new FormData(e.target).get('textareaComment');
        const updatedComment = {
            ...question.comments[index],
            text: commentValue || question.comments[index].text,
        };
        onCommentEdit(question.id, index, updatedComment);
        setCommentIndex(null);
    };

    const startEditQuestion = () => {
        setIsEditingQuestion(true);
        setQuestionEditText(question.text);
    };

    const cancelEditQuestion = () => {
        setIsEditingQuestion(false);
        setQuestionEditText('');
    };

    const startEditComment = (index) => {
        setCommentIndex(index);
        setCommentEditText(question.comments[index].text);
    };

    const cancelEditComment = () => {
        setCommentIndex(null);
        setCommentEditText('');
    };

    const renderFilePreview = (file) => {
        if (file) {
            if (file.type.startsWith('image/')) {
                return <img src={URL.createObjectURL(file)} alt="첨부 이미지" style={{ maxWidth: '100px' }} />;
            } else {
                return <span>{file.name}</span>; // 이미지가 아닐 경우 파일 이름 표시
            }
        }
        return null;
    };

    return (
        <>
            {/* 질문(Question) */}
            <QuestionItemWrapper>
                <QuestionItemContainer>
                    {/* 사용자 프로필 및 날짜 */}
                    <ItemRow>
                        <ProfileIcon
                            src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                            alt="Profile">
                            {question.author}
                        </ProfileIcon>
                        <QuestionDate>{question.date}</QuestionDate>
                    </ItemRow>

                    {/* 편집 상태에 따른 조건부 렌더링 */}
                    {isEditingQuestion ? (
                        <form onSubmit={handleQuestionSubmit}>
                            <TextAreaNoCss
                                name="textareaQuestion"
                                value={questionEditText}
                                editing={isEditingQuestion}
                                onKeyDown={(e) => handleEnterSubmit(e, true)}
                                required
                            />

                            {renderFilePreview(question.file)}

                            {showFileOptions && (
                                <ActionButtons>
                                    <label>
                                        파일 첨부
                                        <input
                                            type="file"
                                            name="fileInput"
                                            onChange={(e) => handleFileChange(question.id, e.target.files[0])}
                                            style={{ display: 'none' }}
                                        />
                                    </label>
                                </ActionButtons>
                            )}

                            <ItemRow>
                                <ButtonGroupRight>
                                    <DoubleButton
                                        leftButtonText={"완료"}
                                        leftButtonType={"submit"}
                                        rightButtonText={"취소"}
                                        rightButtonType={"button"}
                                        rightButtonOnClick={cancelEditQuestion}
                                        editing={isEditingQuestion}
                                    />
                                </ButtonGroupRight>
                            </ItemRow>
                        </form>
                    ) : (
                        <>
                            <TextAreaNoCss
                                value={question.text}
                                readOnly
                            />
                            {renderFilePreview(question.file)}
                            <ItemRow>
                                <ButtonGroupRight>
                                    <DoubleButton
                                        leftButtonText={"수정"}
                                        leftButtonOnClick={startEditQuestion}
                                        rightButtonText={"삭제"}
                                        rightButtonOnClick={() => onDelete(question.id)}
                                        editing={isEditingQuestion}
                                    />
                                </ButtonGroupRight>
                            </ItemRow>
                        </>
                    )}
                </QuestionItemContainer>

                {/* 댓글 열기/닫기 버튼 */}
                <ItemRow>
                    {isShowComments ? (
                        <ArrowUpIcon onClick={() => setIsShowComments(false)}>
                            댓글 닫기
                        </ArrowUpIcon>
                    ) : (
                        <ArrowDownIcon onClick={() => setIsShowComments(true)}>
                            댓글 열기
                        </ArrowDownIcon>
                    )}
                </ItemRow>

                {/* 댓글(Comment) */}
                {isShowComments && (
                    <CommentItemContainer>
                        <Hr />
                        {question.comments.length === 0 ? (
                            <></>
                        ) : (
                            question.comments.map((comment, index) => (
                                <React.Fragment key={index}>
                                    <CommentSectionWrapper>
                                        <ItemRow>
                                            <ProfileIcon
                                                src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                                                alt="Profile">
                                                {comment.author}
                                            </ProfileIcon>
                                            <QuestionDate>{comment.date}</QuestionDate>
                                        </ItemRow>
                                        {commentIndex === index ? (
                                            <form onSubmit={(e) => handleCommentSubmit(e, index)}>
                                                <TextAreaNoCss
                                                    name="textareaComment"
                                                    value={commentEditText}
                                                    editing={commentIndex === index}
                                                    onKeyDown={(e) => handleEnterSubmit(e, true)}
                                                    required
                                                />
                                                <ItemRow>
                                                    <ButtonGroupRight>
                                                        <DoubleButton
                                                            leftButtonText={"완료"}
                                                            leftButtonType={"submit"}
                                                            rightButtonText={"취소"}
                                                            rightButtonType={"button"}
                                                            rightButtonOnClick={cancelEditComment}
                                                            editing={commentIndex === index}
                                                        />
                                                    </ButtonGroupRight>
                                                </ItemRow>
                                            </form>
                                        ) : (
                                            <>
                                                <TextAreaNoCss
                                                    value={comment.text}
                                                    editing={commentIndex === index}
                                                    readOnly
                                                />
                                                <ItemRow>
                                                    <ButtonGroupRight>
                                                        <DoubleButton
                                                            leftButtonText={"수정"}
                                                            leftButtonOnClick={() => startEditComment(index)}
                                                            rightButtonText={"삭제"}
                                                            rightButtonOnClick={() => onCommentDelete(question.id, index)}
                                                            editing={commentIndex === index}
                                                        />
                                                    </ButtonGroupRight>
                                                </ItemRow>
                                            </>
                                        )}
                                    </CommentSectionWrapper>
                                    <Hr />
                                </React.Fragment>
                            ))
                        )}
                        <FormContainer onSubmit={(e) => { e.preventDefault(); onAddComment(question.id); }}>
                            <TextAreaBlackLine
                                placeholder="댓글을 적어주세요"
                                value={newComments[question.id] || ''}
                                onChange={(e) => handleCommentChange(question.id, e.target.value)}
                                onKeyDown={(e) => handleEnterSubmit(e, true)}
                                required
                            />
                            <ButtonRow>
                                {/* 파일 업로드 및 제출 버튼 */}
                                <div style={{ display: 'flex', gap: '10px' }}>
                                    <InputFile
                                        id="AnswerFileRegist"
                                    />
                                    <Violet500LineButton type="submit">댓글 등록</Violet500LineButton>
                                </div>
                            </ButtonRow>
                        </FormContainer>
                    </CommentItemContainer>
                )}
            </QuestionItemWrapper>
            <Hr />
        </>
    );
};

const Exam = () => {
    const [questions, setQuestions] = useState(dummyQuestions);
    const [newQuestion, setNewQuestion] = useState('');
    const [newComments, setNewComments] = useState({});
    const [newQuestionFile, setNewQuestionFile] = useState(null);
    const [showFileOption, setShowFileOption] = useState(true);
    const [isImageModalOpen, setIsImageModalOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);

    const currentUser = '사용자';


    const handleCommentChange = (key, value) => {
        setNewComments((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    const addQuestion = (question) => {
        if (question.text && question.text.trim()) {
            setQuestions([...questions, { ...question, id: questions.length + 1, comments: [] }]);
        }
    };

    const editQuestion = (questionId, updatedQuestion) => {
        setQuestions(questions.map(q => (q.id === questionId ? { ...q, ...updatedQuestion } : q)));
    };

    const deleteQuestion = (questionId) => {
        setQuestions(questions.filter(q => q.id !== questionId));
    };

    const addComment = (questionId) => {
        const commentText = newComments[questionId];

        if (commentText && commentText.trim()) {
            const newComment = {
                id: Math.floor(Math.random() * 1000), // 임시 ID
                author: currentUser,
                text: commentText,
                date: new Date().toLocaleDateString(),
            };
            setQuestions(questions.map(q =>
                q.id === questionId ? { ...q, comments: [...q.comments, newComment] } : q
            ));
            setNewComments({ ...newComments, [questionId]: '' });
        }
    };

    const editComment = (questionId, commentIndex, updatedComment) => {
        setQuestions(questions.map(q =>
            q.id === questionId
                ? {
                    ...q,
                    comments: q.comments.map((c, index) => (index === commentIndex ? updatedComment : c))
                }
                : q
        ));
    };

    const deleteComment = (questionId, commentIndex) => {
        setQuestions(questions.map(q =>
            q.id === questionId
                ? {
                    ...q,
                    comments: q.comments.filter((_, index) => index !== commentIndex)
                }
                : q
        ));
    };

    const handleAddQuestion = (e) => {
        e.preventDefault();

        if (newQuestion.trim()) {
            const newQuestionObj = {
                author: currentUser,
                text: newQuestion,
                date: new Date().toLocaleDateString(),
                file: newQuestionFile
            };
            addQuestion(newQuestionObj);
            setNewQuestion('');
            setNewQuestionFile(null);
        }
        document.getElementById('AnswerFileRegist').value = '';
    };

    const handleEnterSubmit = (e, isChild = false) => {
        // alt + enter를 눌렀을 때 줄 바꿈 추가
        if (e.altKey && e.key === 'Enter') {
            e.preventDefault();

            if (isChild) {
                const key = e.target.name; // 댓글의 고유 키를 name 속성으로 가져옴
                setNewComments((prev) => ({
                    ...prev,
                    [key]: (prev[key] || '') + '\n', // 줄 바꿈 추가
                }));
            } else {
                setNewQuestion((prev) => prev + '\n'); // 질문 줄 바꿈 추가
            }
            return;
        }

        // enter를 눌렀을 때 질문 입력
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            e.target.form.dispatchEvent(new Event('submit', { bubbles: true }));
        }
    };


    const handleFileChange = (file) => {
        setNewQuestionFile(file); // 선택한 파일 설정
    };

    const handleFileDelete = () => {
        setNewQuestionFile(null); // 파일 삭제
        document.getElementById('AnswerFileRegist').value = ''; // input 파일 필드 초기화
    };

    const renderFilePreview = (file) => {
        if (!file) return null;

        const fileType = file.type;
        if (fileType.startsWith('image/')) {
            return (
                <>
                    <div style={{ position: 'relative', display: 'inline-block', marginTop: '10px' }}>
                        <ImagePreview
                            src={URL.createObjectURL(file)}
                            alt="첨부 파일 미리보기"
                            style={{
                                border: '1.5px solid var(--black200)',
                                borderRadius: '10px', maxHeight: '214px', cursor: 'pointer'
                            }}
                            onClick={() => {
                                setCurrentImage(URL.createObjectURL(file));
                                setIsImageModalOpen(true);
                            }} />
                    </div>
                    {/* 파일 취소 삭제 */}
                    <CancelIcon onClick={handleFileDelete} />
                </>
            );
        } else {
            return (
                <>
                    {/* 파일명 표시*/}
                    <span style={{
                        display: 'inline-block',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        height: '35px',
                        alignContent: 'center',
                    }}
                    >
                        {file.name}
                    </span>
                    {/* 파일 취소 삭제 */}
                    <CancelIcon onClick={handleFileDelete} />
                </>
            );
        }
    };

    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        handleFileChange(file);

    };

    return (
        <Violet500LineDiv>
            <FormFieldSingle label={"응원이나 궁금한 내용을 입력해주세요 !"} />
            <FormContainer onSubmit={handleAddQuestion}>
                <TextAreaBlackLine
                    placeholder={`enter 로 내용을 등록할 수 있습니다.\n(줄바꿈을 수행하고 싶다면 alt + enter 를 누르세요)\n`} value={newQuestion}
                    onChange={(e) => setNewQuestion(e.target.value)}
                    onKeyDown={handleEnterSubmit}
                    required
                />
                <ButtonRow>
                    {/* 파일 미리보기 또는 파일명 표시 */}
                    <div style={{
                        display: 'flex',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        width: "100%",
                        justifyContent: 'end',
                        gap: "5px",
                    }}>
                        {renderFilePreview(newQuestionFile)}
                    </div>

                    {/* 파일 업로드 버튼 */}
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <InputFile
                            id="AnswerFileRegist"
                            onChange={handleFileInputChange}
                        />
                        {/* 질문 등록 버튼 */}
                        <Violet500LineButton type="submit">질문 등록</Violet500LineButton>
                    </div>
                </ButtonRow>

            </FormContainer>

            <Hr />
            {/* 질문 목록 */}
            {
                questions.length === 0 ? (
                    <div style={{
                        fontSize: "20px", width: "100%", fontSize: "15px", textAlign: "center",
                        color: "var(--black200)", padding: "20px 0px",
                    }}>
                        이 그룹에는 질문이 아직 없습니다
                    </div>
                ) : (
                    questions.map((item) => (
                        <Question
                            key={item.id}
                            question={item}
                            onEdit={editQuestion}
                            onDelete={deleteQuestion}
                            onCommentEdit={editComment}
                            onCommentDelete={deleteComment}
                            onAddComment={addComment}
                            newComments={newComments}
                            handleCommentChange={handleCommentChange}
                            handleFileChange={handleFileChange}
                            showFileOption={showFileOption}
                            renderFilePreview={renderFilePreview}
                            handleEnterSubmit={handleEnterSubmit}
                        />
                    ))

                )
            }

        </Violet500LineDiv>
    );
};

export default Exam;
