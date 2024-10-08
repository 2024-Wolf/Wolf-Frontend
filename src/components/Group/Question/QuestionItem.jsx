import styled from 'styled-components';
import {
    ActionButtons,
    QuestionRow, ButtonGroupRight,
    QuestionItemContainer,
} from "../../GlobalStyledComponents";

import ProfileIcon from '../../Icon/ProfileIcon';
import React, { useState } from 'react';
import ArrowUpIcon from '../../Icon/ArrowUpIcon';
import ArrowDownIcon from '../../Icon/ArrowDownIcon';
import TextAreaNoCss from '../../Input/TextAreaNoCss';
import DoubleButton from '../../Button/DoubleButton';

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

    const [isEditing, setIsEditing] = useState(false);

    const edithandler = () => {
        // 편집버튼 또는 편집 완료
        setIsEditing(!isEditing);
    };

    const deletehandler = () => {
        if (isEditing) {
            // 취소버튼 : isEditing 편집 상태이면
            edithandler(); // edithandler 함수 호출
        } else {
            // 삭제버튼 : isEditing 편집 상태가 아니면
            alert("삭제 버튼이 클릭되었습니다.");
        }
    };


    return (
        <QuestionItemWrapper>
            <QuestionItemContainer>
                <QuestionRow>
                    <ProfileIcon
                        src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                        alt="Profile">
                        {question.author}
                    </ProfileIcon>
                    <QuestionDate>{question.date}</QuestionDate>
                </QuestionRow>
                <TextAreaNoCss value={question.text} isEditing={isEditing} />

                {question.file && (
                    <img
                        src={URL.createObjectURL(question.file)}
                        alt="첨부 이미지"
                        style={{ maxWidth: '100px' }}
                    />
                )}

                {showFileOptions && question.file && (
                    <ActionButtons>
                        <label>
                            파일 변경
                            <input
                                type="file"
                                onChange={(e) => handleFileChange(question.id, e.target.files[0])}
                                style={{ display: 'none' }}
                            />
                        </label>
                    </ActionButtons>
                )}


                <QuestionRow>
                    {selectedQuestionId === question.id ? (
                        <>
                            <ArrowUpIcon onClick={() => toggleComments(question.id)}>
                                댓글 닫기
                            </ArrowUpIcon>
                        </>
                    ) : (
                        <>
                            <ArrowDownIcon onClick={() => toggleComments(question.id)}>
                                댓글 열기
                            </ArrowDownIcon>
                        </>
                    )}

                    <ButtonGroupRight>
                        <DoubleButton
                            leftButtonText={isEditing ? "완료" : "수정"} rightButtonText={isEditing ? "취소" : "삭제"}
                            leftButtonOnClick={edithandler}
                            rightButtonOnClick={deletehandler}
                            isEditing={isEditing}
                        >
                        </DoubleButton>
                    </ButtonGroupRight>
                </QuestionRow>
            </QuestionItemContainer>
            {selectedQuestionId === question.id && (
                <>
                    {renderComments()}
                </>
            )}


        </QuestionItemWrapper >
    );
};

export default QuestionItem;
