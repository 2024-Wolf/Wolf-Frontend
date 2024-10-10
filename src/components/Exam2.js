import styled from 'styled-components';
import React, { useEffect, useState, useRef } from 'react';

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

const Exam2 = () => {
    const [questions, setQuestions] = useState(dummyQuestions);
    const [newQuestion, setNewQuestion] = useState('');
    const [newQuestionFile, setNewQuestionFile] = useState(null);
    const [newComments, setNewComments] = useState({});
    const [newCommentFiles, setNewCommentFiles] = useState({});
    const currentUser = '사용자';

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
            setQuestions([...questions, newQuestionObj]);
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
        const commentFile = newCommentFiles[questionId];

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
            setNewCommentFiles((prev) => ({ ...prev, [questionId]: null }));
        }
    };

    const handleQuestionFileChange = (file) => {
        if (file) {
            setNewQuestionFile(file);
        }
    };

    const handleCommentFileChange = (file, questionId) => {
        if (file) {
            setNewCommentFiles((prevFiles) => ({
                ...prevFiles,
                [questionId]: file,
            }));
        }
    };

    const handleCommentFileDelete = (questionId) => {
        setNewCommentFiles((prevFiles) => {
            const newFiles = { ...prevFiles };
            delete newFiles[questionId];
            return newFiles;
        });
    };

    return (
        <div>
            <FormContainer onSubmit={handleAddQuestion}>
                <TextAreaBlackLine
                    value={newQuestion}
                    onChange={(e) => setNewQuestion(e.target.value)}
                    placeholder="질문을 입력하세요"
                    required
                />
                <input
                    type="file"
                    onChange={(e) => handleQuestionFileChange(e.target.files[0])}
                />
                {newQuestionFile && (
                    <div>
                        <span>{newQuestionFile.name}</span>
                        <img src={URL.createObjectURL(newQuestionFile)} alt="질문 미리보기" style={{ width: '100px', height: 'auto' }} />
                    </div>
                )}
                <Violet500LineButton type="submit">질문 추가</Violet500LineButton>
            </FormContainer>

            {questions.map((item) => (
                <Question
                    key={item.id}
                    question={item}
                    onAddComment={addComment}
                    newComments={newComments}
                    handleCommentChange={handleCommentChange}
                    newCommentFile={newCommentFiles[item.id] || null}
                    handleCommentFileChange={handleCommentFileChange}
                    handleCommentFileDelete={handleCommentFileDelete}
                />
            ))}
        </div>
    );
};

const Question = ({ question, onAddComment, newComments, handleCommentChange, newCommentFile, handleCommentFileChange, handleCommentFileDelete }) => {
    return (
        <CommentItemContainer>
            <TextAreaNoCss>{question.text}</TextAreaNoCss>
            {question.file && (
                <div>
                    <span>첨부 파일: {question.file.name}</span>
                    <img src={URL.createObjectURL(question.file)} alt="질문 미리보기" style={{ width: '100px', height: 'auto' }} />
                </div>
            )}
            <form onSubmit={(e) => {
                e.preventDefault();
                onAddComment(question.id);
            }}>
                <TextAreaBlackLine
                    value={newComments[question.id] || ''}
                    onChange={(e) => handleCommentChange(question.id, e.target.value)}
                    placeholder="댓글을 입력하세요"
                    required
                />
                <input
                    type="file"
                    onChange={(e) => handleCommentFileChange(e.target.files[0], question.id)}
                />
                {newCommentFile && (
                    <div>
                        <span>{newCommentFile.name}</span>
                        <button type="button" onClick={() => handleCommentFileDelete(question.id)}>파일 삭제</button>
                        <img src={URL.createObjectURL(newCommentFile)} alt="댓글 미리보기" style={{ width: '100px', height: 'auto' }} />
                    </div>
                )}
                <Violet500LineButton type="submit">댓글 추가</Violet500LineButton>
            </form>
            {question.comments.map((comment) => (
                <Comment key={comment.id} comment={comment} />
            ))}
        </CommentItemContainer>
    );
};

const Comment = ({ comment }) => {
    return (
        <div>
            <TextAreaNoCss>{comment.text}</TextAreaNoCss>
            {comment.file && (
                <div>
                    <span>첨부 파일: {comment.file.name}</span>
                    <img src={URL.createObjectURL(comment.file)} alt="댓글 미리보기" style={{ width: '100px', height: 'auto' }} />
                </div>
            )}
        </div>
    );
};

export default Exam2;
