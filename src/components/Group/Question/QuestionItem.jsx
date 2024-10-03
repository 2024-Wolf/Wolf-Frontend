import styled from 'styled-components';
import {
    QuestionItemContainer, ActionButtons, QuestionContent, QuestionText, QuestionDate,
    QuestionAuthor
} from "../../GlobalStyledComponents";

import ProfileIcon from '../../Icon/ProfileIcon';
import React from 'react';

const QuestionItem = ({
    question,
    handleFileChange,
    handleQuestionEdit,
    handleQuestionDelete,
    toggleComments,
    selectedQuestionId,
    renderComments,
    showFileOptions = true,
}) => {

    return (
        <QuestionItemContainer>
            <QuestionAuthor>
                <ProfileIcon
                    src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                    alt="Profile"
                />
                {question.author}
            </QuestionAuthor>
            <QuestionContent>
                <QuestionText>{question.text}</QuestionText>
                {question.file && (
                    <img
                        src={URL.createObjectURL(question.file)}
                        alt="첨부 이미지"
                        style={{ maxWidth: '100px' }}
                    />
                )}
                <QuestionDate>{question.date}</QuestionDate>
            </QuestionContent>


            <ActionButtons>
                {showFileOptions && question.file && (
                    <label>
                        파일 변경
                        <input
                            type="file"
                            onChange={(e) => handleFileChange(question.id, e.target.files[0])}
                            style={{ display: 'none' }}
                        />
                    </label>
                )}
                <button
                    onClick={() =>
                        handleQuestionEdit(question.id, prompt('수정할 내용을 입력하세요', question.text))
                    }
                >
                    수정
                </button>
                <button onClick={() => handleQuestionDelete(question.id)}>삭제</button>
            </ActionButtons>

            <span onClick={() => toggleComments(question.id)}>
                {selectedQuestionId === question.id
                    ? '댓글 닫기'
                    : '댓글 열기'
                }
            </span>

            {selectedQuestionId === question.id && renderComments()}
        </QuestionItemContainer>
    );
};

export default QuestionItem;
