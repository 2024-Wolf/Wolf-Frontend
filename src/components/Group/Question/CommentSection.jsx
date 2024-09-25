import React, { useState } from 'react';
import styled from 'styled-components';

const CommentItem = styled.div`
    background-color: #ffffff;
    padding: 15px;
    border-radius: 3px;
    margin-bottom: 15px;
`;

const CommentBody = styled.div`
    margin-top: 10px;
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 80px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-top: 10px;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;

const SubmitButton = styled.button`
  background-color: #6c63ff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #574dc2;
  }
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
                <TextArea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="댓글을 적어주세요"
                />
                <ButtonRow>
                    <SubmitButton type="submit">등록</SubmitButton>
                </ButtonRow>
            </form>
        </>
    );
};

export default CommentSection;
