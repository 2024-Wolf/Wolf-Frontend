import styled from 'styled-components';
import { Violet500LineButton, CommentItem, CommentBody, TextArea4, ButtonRow, SubmitButton2 } from "../../GlobalStyledComponents";

import React, { useState } from 'react';
import TextAreaBlackLine from '../../Input/TextAreaBlackLine';
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
            {comments.length > 0 ? (
                comments.map((comment, index) => (
                    <CommentItem key={index}>
                        <CommentBody>{comment.text}</CommentBody>
                        <div>{comment.date}</div>
                    </CommentItem>
                ))
            ) : (<></>)}
            {/* 댓글 작성 영역 */}
            <form onSubmit={handleCommentSubmit}>
                <TextAreaBlackLine
                    placeholder="댓글을 적어주세요"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                />
                <ButtonRow>
                    <Violet500LineButton type="submit">등록</Violet500LineButton>
                </ButtonRow>


            </form>
        </>
    );
};

export default CommentSection;
