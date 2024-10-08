import styled from 'styled-components';
import {
    Hr, Violet500LineButton, CommentBody, ButtonRow,
    ActionButtons,
    QuestionRow, ButtonGroupRight,
    QuestionItemContainer,
} from "../../GlobalStyledComponents";

import React, { useState } from 'react';
import TextAreaBlackLine from '../../Input/TextAreaBlackLine';
import ProfileIcon from '../../Icon/ProfileIcon';
import { QuestionDate } from './QuestionItem';
import TextAreaNoCss from '../../Input/TextAreaNoCss';
import ArrowDownIcon from '../../Icon/ArrowDownIcon';
import ArrowUpIcon from '../../Icon/ArrowUpIcon';
import DoubleButton from '../../Button/DoubleButton';

const CommentSectionWrapper = styled.div`
    padding:10px;
    background-color: var(--violet200);
`;


// components/Group/Question/CommentSection.jsx
export const CommentItem = styled.div`
    background-color: #ffffff;
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 15px;
`;

const CommentSection = ({ comments = [], onSubmit }) => {
    const [newComment, setNewComment] = useState('');

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (newComment.trim()) {
            onSubmit(newComment);  // 전달받은 함수로 새 댓글 전송
            setNewComment('');  // 입력 필드 초기화
        }
    };

    return (
        <>
            <Hr />
            <CommentSectionWrapper>
                {comments.length > 0 ? (
                    comments.map((comment, index) => (
                        <>
                            <CommentItem key={index}>
                                <QuestionRow>
                                    <ProfileIcon
                                        src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                                        alt="Profile">
                                        {comment.author}
                                    </ProfileIcon>
                                    <QuestionDate>{comment.date}</QuestionDate>
                                </QuestionRow>
                                <TextAreaNoCss value={comment.text} readOnly />
                                <QuestionRow>
                                    <ButtonGroupRight>
                                        <DoubleButton
                                            leftButtonText={false ? "완료" : "수정"} rightButtonText={false ? "취소" : "삭제"}

                                            isEditing={false}
                                        >
                                        </DoubleButton>
                                    </ButtonGroupRight>
                                </QuestionRow>
                            </CommentItem>
                        </>
                    ))
                ) : (<>
                    <p>댓글이 없습니다.</p>
                </>)}
                {/* 댓글 작성 영역 */}
                <form onSubmit={handleCommentSubmit}>
                    <TextAreaBlackLine
                        placeholder="댓글을 적어주세요"
                        value={newComment}
                        onChange={(e) => { setNewComment(e.target.value) }}
                    />
                    <ButtonRow>
                        <Violet500LineButton type="submit">등록</Violet500LineButton>
                    </ButtonRow>
                </form>
            </CommentSectionWrapper>
        </>
    );
};

export default CommentSection;
