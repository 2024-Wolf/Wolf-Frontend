import styled from 'styled-components';
import {
    Violet500LineButton, ButtonRow,
    Violet500LineDiv, FormFieldColumn, Violet500BackgroundButton, FormFieldRow, DoubleDateContainer, InfoContainer, PostContent, QuestionHeader,
    ItemRow, ButtonGroupRight,
    QuestionItemContainer, Hr,
    CommentBody,
    QuestionRow, ItemCol,

} from "./GlobalStyledComponents";

import ProfileIcon from './Icon/ProfileIcon';
import ArrowUpIcon from './Icon/ArrowUpIcon';
import ArrowDownIcon from './Icon/ArrowDownIcon';
import DoubleButton from './Button/DoubleButton';
import DownloadIcon from './Icon/DownloadIcon';
import ImagePreview from './Img/ImagePreview';

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
    display: flex;
    gap: 10px;
    width: 100%;
    flex-direction: column;
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
                id: 3,
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
                id: 4,
                author: 'user5',
                text: '화면 구현은 주어진 기한 내에 맞춰야 하니, 계획적으로 진행하는 게 중요해요. 저는 보통 일주일 정도의 여유를 두고 작업을 진행합니다.',
                date: '2024.09.21',
                file: null,
            },
            {
                id: 5,
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
    showFileOptions,
    onEdit,
    onDelete,
    onCommentEdit,
    onCommentDelete,
    question,
    onAddComment,
    newComments,
    handleCommentChange,
    newCommentFile,
    handleCommentFileChange,
    handleCommentFileDelete,
    handleQuestionFileChange,
    handleQuestionFileDelete,
    commentFileURL,
    setCommentFileURL,
}) => {
    const [isEditingQuestion, setIsEditingQuestion] = useState(false);
    const [isEditFileComment, setIsEditFileComment] = useState({});

    const [isShowComments, setIsShowComments] = useState(false);

    const [questionEditText, setQuestionEditText] = useState('');
    const [commentEditText, setCommentEditText] = useState('');

    const [commentIndex, setCommentIndex] = useState(null);

    const [questionEditFile, setQuestionEditFile] = useState(null || question.file);
    const [questionFileURL, setQuestionFileURL] = useState('');
    const [questionEditFileURL, setQuestionEditFileURL] = useState('');

    const [commentEditFile, setCommentEditFile] = useState(null);

    const [commentEditFileURL, setCommentEditFileURL] = useState('');

    const [isEditFile, setIsEditFile] = useState(false);
    const [editingComments, setEditingComments] = useState({}); // 질문 ID를 키로 사용하는 객체



    const handleQuestionSubmit = (e) => {
        e.preventDefault();
        const questionValue = new FormData(e.target).get('textareaQuestion');

        // 질문 수정 및 파일 첨부
        onEdit(question.id, {
            text: questionValue || question.text,
            file: isEditFile ? questionEditFile : question.file, // 수정했다면 새로운 파일을 사용하고, 그렇지 않으면 기존의 파일을 사용함
        });
        setIsEditingQuestion(false);
        setQuestionEditFile(null);
        setIsEditFile(false);
    };

    const handleCommentSubmit = (e, index) => {
        e.preventDefault();
        const commentValue = new FormData(e.target).get('textareaComment');

        if (question.comments[index]) {
            const updatedComment = {
                ...question.comments[index],
                text: commentValue || question.comments[index].text,
                file: isEditFileComment[index] ? commentEditFile : question.comments[index].file,
            };
            onCommentEdit(question.id, index, updatedComment);
            setCommentIndex(null);
        } else {
        }

        document.querySelectorAll('.InputFileImage').forEach(input => {
            input.value = ''; // 각 input의 value 초기화
        });
        setEditingComments({});
        setIsEditFileComment((prev) => ({
            ...prev,
            [index]: false, // 특정 질문의 댓글 인덱스 저장
        }));
    };

    const startEditQuestion = () => {
        setIsEditingQuestion(true);
        setQuestionEditText(question.text);
    };

    const cancelEditQuestion = () => {
        setIsEditingQuestion(false);
        setQuestionEditText('');
        setQuestionEditFile(null);
        setIsEditFile(false);
    };


    const startEditComment = (questionId, index) => {
        setEditingComments((prev) => ({
            ...prev,
            [questionId]: index, // 특정 질문의 댓글 인덱스 저장
        }));
        setCommentEditText(question.comments[index].text);
    };


    const cancelEditComment = (index) => {
        setCommentIndex(null);
        setCommentEditText('');
        setEditingComments({});
        setIsEditFileComment((prev) => ({
            ...prev,
            [index]: false, // 특정 질문의 댓글 인덱스 저장
        }));
        setCommentEditFile(null);
    };

    const deleteQuestionEditFile = () => {
        setIsEditFile(true);
        setQuestionEditFile(null);
    }

    const addQuestionEditFile = (file) => {
        setIsEditFile(true);
        if (file) {
            setQuestionEditFile(file);
        }
    }

    const deleteCommentEditFile = (index) => {
        setIsEditFileComment((prev) => ({
            ...prev,
            [index]: true, // 특정 질문의 댓글 인덱스 저장
        }));
        setCommentEditFile(null);
    }

    const addCommentEditFile = (file, index) => {
        setIsEditFileComment((prev) => ({
            ...prev,
            [index]: true, // 특정 질문의 댓글 인덱스 저장
        }));
        if (file) {
            setCommentEditFile(file);
        }
    }

    useEffect(() => {
        let questionURL;
        let questionEditURL;

        if (question.file) {
            questionURL = URL.createObjectURL(question.file);
            setQuestionFileURL(questionURL);
        } else {
            setQuestionFileURL('');
        }

        if (questionEditFile) {
            questionEditURL = URL.createObjectURL(questionEditFile);
            setQuestionEditFileURL(questionEditURL);
        } else {
            setQuestionEditFileURL('');
        }

        return () => {
            if (questionURL) {
                URL.revokeObjectURL(questionURL);
            }
            if (questionEditURL) {
                URL.revokeObjectURL(questionEditURL);
            }
        };
    }, [question.file, questionEditFile]);

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
                        // 수정 중일 때
                        <FormContainer onSubmit={handleQuestionSubmit}>
                            <ItemCol>
                                {/* [질문[수정중O]]-텍스트 입력란 */}
                                <TextAreaNoCss
                                    name="textareaQuestion"
                                    value={questionEditText}
                                    editing={isEditingQuestion}
                                    onKeyDown={(e) => handleEnterSubmit(e, true)}
                                    required
                                />
                                {/* [질문[수정중O]]-이미지 프리뷰 */}
                                <ImagePreview
                                    src={questionEditFile ? questionEditFileURL : isEditFile ? "" : questionFileURL}
                                    alt={questionEditFileURL ? "" : ""}
                                    imageFile={question.file}
                                    isEditing={true}
                                    onClick={deleteQuestionEditFile}
                                />
                            </ItemCol>
                            <ItemRow>
                                {/* [질문[수정중O]]-댓글 열기/닫기 버튼 */}
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
                                <ButtonGroupRight>
                                    {/* [질문[수정중O]]-파일 선택 & 삭제 버튼 */}
                                    <ImagePreview
                                        isNoCssUploadButtonAppear={true}
                                        onChange={(file) => addQuestionEditFile(file)}
                                        onClick={deleteQuestionEditFile}
                                    />
                                    {/* [질문[수정중O]]-완료 & 취소 버튼 */}
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
                        </FormContainer>
                    ) : (
                        <>
                            {/* 수정 중이 아닐 때 */}
                            <ItemCol>
                                {/* [질문[수정중X]]-텍스트 입력란 */}
                                <TextAreaNoCss
                                    value={question.text}
                                    readOnly
                                />
                                {/* [질문[수정중X]]-이미지 미리보기 */}
                                {questionFileURL ? (
                                    <>
                                        <ImagePreview
                                            imageFile={question.file}
                                            src={questionFileURL}
                                            alt={question.file ? `preview-${question.file.name}` : 'preview'}
                                        />
                                    </>
                                ) : (
                                    <></>
                                )}
                            </ItemCol>
                            <ItemRow>
                                {/* [질문[수정중X]]-댓글 열기/닫기 버튼 */}
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
                                <ButtonGroupRight>
                                    {/* [질문[수정중X]]-수정 & 삭제 버튼 */}
                                    <DoubleButton
                                        leftButtonText={"수정"}
                                        leftButtonOnClick={startEditQuestion}
                                        rightButtonText={"삭제"}
                                        rightButtonOnClick={() => {
                                            if (window.confirm("삭제하시겠습니까?")) {
                                                onDelete(question.id);
                                            }
                                        }}
                                        editing={isEditingQuestion}
                                    />
                                </ButtonGroupRight>
                            </ItemRow>
                        </>
                    )}
                </QuestionItemContainer>

                {/* 댓글 목록 */}
                {isShowComments && (
                    <CommentItemContainer>
                        <Hr />
                        {question.comments.length === 0 ? (
                            <></>
                        ) : (
                            question.comments.map((comment, index) => (
                                <React.Fragment key={comment.id} comment={comment}>
                                    <CommentSectionWrapper>
                                        <ItemRow>
                                            {/* [댓글] 프로필 */}
                                            <ProfileIcon
                                                src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                                                alt="Profile">
                                                {comment.author}
                                            </ProfileIcon>
                                            {/* [댓글] 날짜 */}
                                            <QuestionDate>{comment.date}</QuestionDate>
                                        </ItemRow>

                                        {editingComments[question.id] === index ? (
                                            <>
                                                <FormContainer onSubmit={(e) => handleCommentSubmit(e, index)}>
                                                    <ItemCol>
                                                        {/* [댓글[수정중O]]-텍스트 입력란 */}
                                                        <TextAreaNoCss
                                                            name="textareaComment"
                                                            value={comment.text}
                                                            editing={editingComments[question.id] === index}
                                                            onKeyDown={(e) => handleEnterSubmit(e, true)}
                                                            required
                                                        />
                                                        {/* [댓글[수정중O]]-이미지 프리뷰 & 삭제 버튼 */}
                                                        {console.log("comment:", comment)}
                                                        {console.log("commentEditFile:", commentEditFile)}
                                                        {console.log("URL.createObjectURL(commentEditFile):", URL.createObjectURL(commentEditFile))}
                                                        {console.log("isEditFileComment[index]:", isEditFileComment[index])}
                                                        {console.log("URL.createObjectURL(comment.file):", URL.createObjectURL(comment.file))}
                                                        {comment.file && (
                                                            <ImagePreview
                                                                src={commentEditFile ? URL.createObjectURL(commentEditFile) : isEditFileComment[index] ? "" : URL.createObjectURL(comment.file)}
                                                                alt={comment.file ? comment.file.name : ""}
                                                                imageFile={comment.file}
                                                                isEditing={true}
                                                                questionId={question.id}
                                                                onClick={() => deleteCommentEditFile(index)} // questionId 전달
                                                            />
                                                        )}
                                                    </ItemCol>
                                                    <ItemRow>
                                                        <ButtonGroupRight>
                                                            {/* [댓글[수정중O]]-파일 선택 버튼 */}
                                                            <ImagePreview
                                                                isNoCssUploadButtonAppear={true}
                                                                onChange={(file) => addCommentEditFile(file, index)}
                                                                onClick={() => deleteCommentEditFile(index)}
                                                                questionId={question.id}
                                                            />
                                                            {/* [댓글[수정중O]]-완료 & 취소 버튼 */}
                                                            <DoubleButton
                                                                leftButtonText={"완료"}
                                                                leftButtonType={"submit"}
                                                                rightButtonText={"취소"}
                                                                rightButtonType={"button"}
                                                                rightButtonOnClick={() => cancelEditComment(index)}
                                                                editing={editingComments[question.id] === index}
                                                            />
                                                        </ButtonGroupRight>
                                                    </ItemRow>
                                                </FormContainer>
                                            </>

                                        ) : (
                                            <>
                                                <ItemCol>
                                                    {/* [댓글[수정중X]]-텍스트 입력란 */}
                                                    <TextAreaNoCss
                                                        value={comment.text}
                                                        editing={editingComments[question.id] === index}
                                                        readOnly
                                                    />
                                                    {/* [댓글[수정중X]]-이미지 미리보기 */}
                                                    {comment.file && (
                                                        <ImagePreview
                                                            imageFile={comment.file}
                                                            src={URL.createObjectURL(comment.file)}
                                                            alt={comment.file.name}>
                                                        </ImagePreview>
                                                    )}
                                                </ItemCol>
                                                <ItemRow>
                                                    <ButtonGroupRight>
                                                        {/* [댓글[수정중X]]-수정 & 삭제 버튼 */}
                                                        <DoubleButton
                                                            leftButtonText={"수정"}
                                                            leftButtonOnClick={() => startEditComment(question.id, index)}
                                                            rightButtonText={"삭제"}
                                                            rightButtonOnClick={() => {
                                                                if (window.confirm("삭제하시겠습니까?")) {
                                                                    onCommentDelete(question.id, index);
                                                                }
                                                            }}
                                                            editing={editingComments[question.id] === index}
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
                        <FormContainer onSubmit={(e) => {
                            e.preventDefault();
                            onAddComment(question.id);
                        }}>
                            {/* [댓글] 텍스트 입력창 */}
                            <TextAreaBlackLine
                                placeholder="댓글을 적어주세요"
                                value={newComments[question.id] || ''}
                                onChange={(e) => handleCommentChange(question.id, e.target.value)}
                                onKeyDown={(e) => handleEnterSubmit(e, true)}
                                required
                            />
                            {/* [댓글]사진 파일 업로드 버튼 & 댓글 등록(제출) 버튼 */}
                            <ImagePreview
                                isEditing={true}
                                isUploadButtonAppear={true}
                                isSubmitButtonAppear={true}
                                onChange={(file) => handleCommentFileChange(file, question.id)}
                                onClick={() => handleCommentFileDelete(question.id)} // questionId 전달
                                questionId={question.id}
                            />
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
    const [newCommentFile, setNewCommentFile] = useState({}); // 각 댓글의 파일 상태
    const [showFileOption, setShowFileOption] = useState(true);
    const [commentFileURL, setCommentFileURL] = useState('');

    const currentUser = '사용자';


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


    const handleAddQuestion = (e) => {
        e.preventDefault();
        if (newQuestion.trim()) {
            const newQuestionObj = {
                id: questions.length + 1,
                author: currentUser,
                text: newQuestion,
                date: new Date().toLocaleDateString(),
                file: newQuestionFile,
                comments: [],
            };
            addQuestion(newQuestionObj);
            setNewQuestion('');
            setNewQuestionFile(null);
        }
    };


    const handleCommentChange = (key, value) => {
        setNewComments((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    const addComment = (questionId) => {
        const commentText = newComments[questionId];
        const commentFile = newCommentFile[questionId];

        if (commentText && commentText.trim()) {
            const newComment = {
                id: Math.floor(Math.random() * 1000), // 임시 ID
                author: currentUser,
                text: commentText,
                date: new Date().toLocaleDateString(),
                file: commentFile || null,
            };
            setQuestions(questions.map(q =>
                q.id === questionId ? { ...q, comments: [...q.comments, newComment] } : q
            ));
            setNewComments((prev) => ({ ...prev, [questionId]: '' }));
            setNewCommentFile((prev) => ({ ...prev, [questionId]: null }));
            setCommentFileURL(''); // 파일 URL 초기화
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
    const handleEnterSubmit = (e, isChild = false) => {
        // alt + enter를 눌렀을 때 줄 바꿈 추가
        if (e.altKey && e.key === 'Enter') {
            e.preventDefault();

            if (isChild && e.target.name) {
                const key = e.target.name; // 댓글의 고유 키를 name 속성으로 가져옴
                setNewComments((prev) => ({
                    ...prev,
                    [key]: (prev[key] || '') + '\n', // 줄 바꿈 추가
                }));
            } else if (e.target) {
                setNewQuestion((prev) => prev + '\n'); // 질문 줄 바꿈 추가
            }
            return;
        }

        // enter를 눌렀을 때 질문 또는 댓글 입력
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            e.target.form.dispatchEvent(new Event('submit', { bubbles: true }));
        }
    };


    const handleQuestionFileChange = (file) => {
        if (file) {
            setNewQuestionFile(file); // 선택한 파일로 설정
        }
    };

    const handleQuestionFileDelete = () => {
        setNewQuestionFile(null); // 파일 삭제
    };


    const handleCommentFileChange = (file, questionId) => {
        if (file) {
            setNewCommentFile((prevFiles) => ({
                ...prevFiles,
                [questionId]: file,
            }));
        }
    };


    const handleCommentFileDelete = (questionId) => {
        setNewCommentFile((prevFiles) => {
            const newFiles = { ...prevFiles };
            delete newFiles[questionId];
            return newFiles;
        });
    };

    return (
        <Violet500LineDiv>
            <FormFieldSingle label={"응원이나 궁금한 내용을 입력해주세요 !"} />
            <FormContainer onSubmit={handleAddQuestion}>
                {/* [질문] 텍스트 입력창 */}
                <TextAreaBlackLine
                    placeholder={`enter 로 내용을 등록할 수 있습니다.\n(줄바꿈을 수행하고 싶다면 alt + enter 를 누르세요)\n`} value={newQuestion}
                    onChange={(e) => setNewQuestion(e.target.value)}
                    onKeyDown={(e) => handleEnterSubmit(e, false)}
                    required
                />
                {/* [질문] 사진 파일 업로드 버튼 & 질문 등록(제출) 버튼 */}
                <ImagePreview
                    isEditing={true}
                    isUploadButtonAppear={true}
                    isSubmitButtonAppear={true}
                    onChange={(file) => handleQuestionFileChange(file)}
                    onClick={() => handleQuestionFileDelete()}
                />
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
                            newCommentFile={newCommentFile[item.id] || null}
                            handleCommentChange={handleCommentChange}
                            showFileOption={showFileOption}
                            handleEnterSubmit={handleEnterSubmit}
                            handleQuestionFileChange={handleQuestionFileChange}
                            handleQuestionFileDelete={handleQuestionFileDelete}
                            handleCommentFileChange={handleCommentFileChange}
                            handleCommentFileDelete={handleCommentFileDelete}
                            commentFileURL={commentFileURL}
                            setCommentFileURL={setCommentFileURL}
                        />
                    ))

                )
            }

        </Violet500LineDiv>
    );
};

export default Exam;
