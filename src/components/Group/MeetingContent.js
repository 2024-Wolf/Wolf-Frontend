import React, { useState } from 'react';
import styled from 'styled-components';
import TabContentsWrapper from "../TabContentsWrapper";

const MeetingContainer = styled.div`
  padding: 20px;
  background-color: var(--violet000);
  border: 1px solid var(--violet400);
  border-radius: 3px;
`;

const MeetingHeader = styled.h3`
  font-size: 16px;
  font-weight: bold;
  color: #000000;
  text-align: left;
`;

const PostForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

const PostTextArea = styled.textarea`
  background-color: #ffffff;
  width: 100%;
  height: 100px;
  padding: 10px;
  border-radius: 3px;
  resize: none;
  margin-top: 15px;
  line-height: 1.3;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end; 
  align-items: center;
  gap: 10px;
  margin-top: 10px;
`;

const SubmitButton = styled.button`
  background-color: #fff;
  color: #000000;
  border: 1px solid #968AFF;
  padding: 8px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 13px;
  &:hover {
    background-color: #CEC6FF;
  }
`;

const FileName = styled.span`
  font-size: 14px;
  color: #555;
`;

const PostItem = styled.div`
  background-color: #ffffff;
  padding: 15px;
  border-radius: 3px;
  margin-bottom: 20px;
`;

const ActionButtons = styled.div`
  display: flex;
  justify-content: flex-end; 
  gap: 10px;
  margin-top: 10px;
`;

const CommentAuthor = styled.div`
  font-weight: bold;
  color: #333;
  display: flex;
  align-items: center;
`;

const ProfileIcon = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
`;

const CommentBody = styled.div`
  margin-top: 10px;
`;

const CommentItem = styled.div`
  background-color: #ffffff;
  padding: 15px;
  border-radius: 3px;
  margin-bottom: 15px;
`;

const FileInputButton = styled.label`
  background-color: #fff;
  color: #000000;
  border: 1px solid #968AFF;
  padding: 8px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 13px;
  display: inline-block;
  &:hover {
    background-color: #CEC6FF;
  }
`;

const CommentToggleText = styled.span`
  color: #6c63ff;
  cursor: pointer;
  font-weight: bold;
  font-size: 11px;
`;

const MeetingContent = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: 'gahyun',
      text: '백엔드는 정말 어렵네요. 추가로 공부할만한 책이 있나요?',
      date: '2024.08.28',
      file: null,
      comments: [],
    },
    {
      id: 2,
      author: 'myeongju',
      text: '화면구현이 빨리 끝나야할텐데...언제까지 가능하신지 댓글로 남겨주세요',
      date: '2024.09.20',
      file: null,
      comments: [],
    },
  ]);

  const [newPost, setNewPost] = useState('');
  const [newPostFile, setNewPostFile] = useState(null);
  const [newComment, setNewComment] = useState('');
  const [selectedPostId, setSelectedPostId] = useState(null);

  // 게시글 추가
  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (newPost.trim()) {
      const newPostObj = {
        id: posts.length + 1,
        author: 'currentUser',
        text: newPost,
        date: new Date().toLocaleDateString(),
        file: newPostFile,
        comments: [],
      };
      setPosts([...posts, newPostObj]);
      setNewPost('');
      setNewPostFile(null);
    }
  };

  // 댓글 토글
  const toggleComments = (postId) => {
    setSelectedPostId(selectedPostId === postId ? null : postId);
  };

  // 댓글 추가
  const handleCommentSubmit = (postId) => {
    if (newComment.trim()) {
      const updatedPosts = posts.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            comments: [...post.comments, { author: 'currentUser', text: newComment, date: new Date().toLocaleDateString() }],
          };
        }
        return post;
      });
      setPosts(updatedPosts);
      setNewComment('');
    }
  };

  // 게시글 삭제
  const handlePostDelete = (postId) => {
    setPosts(posts.filter((post) => post.id !== postId));
  };

  // 게시글 수정
  const handlePostEdit = (postId, updatedText) => {
    setPosts(
      posts.map((post) =>
        post.id === postId ? { ...post, text: updatedText } : post
      )
    );
  };

  // 파일 추가/변경
  const handleFileChange = (postId, newFile) => {
    setPosts(
      posts.map((post) =>
        post.id === postId ? { ...post, file: newFile } : post
      )
    );
  };

  return (
    <TabContentsWrapper>
      {/*미팅 버튼 */}
      <MeetingHeader>팀원들과 궁금한 내용을 나눠보세요!</MeetingHeader>

      {/* 게시글 작성 영역 */}
      <PostForm onSubmit={handlePostSubmit}>
        <PostTextArea
          placeholder="응원이나 궁금한 내용을 입력해주세요!"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        />
        <ButtonRow>
          {newPostFile && <FileName>{newPostFile.name}</FileName>}
          <FileInputButton>
            파일 선택
            <input
              type="file"
              onChange={(e) => setNewPostFile(e.target.files[0])}
              style={{ display: 'none' }}
            />
          </FileInputButton>
          <SubmitButton type="submit">등록</SubmitButton>
        </ButtonRow>
      </PostForm>

      {/* 게시글 목록 */}
      {posts.map((post) => (
        <PostItem key={post.id}>
          <CommentAuthor>
            <ProfileIcon
              src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
              alt="Profile"
            />
            {post.author}
          </CommentAuthor>
          <p>{post.text}</p>
          {post.file && (
            <img
              src={URL.createObjectURL(post.file)}
              alt="첨부 이미지"
              style={{ maxWidth: '100px' }}
            />
          )}
          <div>{post.date}</div>

          <ActionButtons>
            {post.file ? (
              <FileInputButton as="label">
                파일 변경
                <input
                  type="file"
                  onChange={(e) => handleFileChange(post.id, e.target.files[0])}
                  style={{ display: 'none' }}
                />
              </FileInputButton>
            ) : (
              <SubmitButton as="label">
                파일 추가
                <input
                  type="file"
                  onChange={(e) => handleFileChange(post.id, e.target.files[0])}
                  style={{ display: 'none' }}
                />
              </SubmitButton>
            )}
            <SubmitButton
              onClick={() =>
                handlePostEdit(post.id, prompt('수정할 내용을 입력하세요', post.text))
              }
            >
              수정
            </SubmitButton>
            <SubmitButton onClick={() => handlePostDelete(post.id)}>
              삭제
            </SubmitButton>
          </ActionButtons>

          {/* 댓글 열기/닫기 */}
          <CommentToggleText onClick={() => toggleComments(post.id)}>
            {post.comments.length > 0
              ? selectedPostId === post.id
                ? '댓글 닫기'
                : '댓글 열기'
              : '댓글 작성'}
          </CommentToggleText>

          {/* 댓글 목록 및 작성 */}
          {selectedPostId === post.id && (
            <div>
              {post.comments.map((comment, index) => (
                <CommentItem key={index}>
                  <CommentBody>{comment.text}</CommentBody>
                  <div>{comment.date}</div>
                </CommentItem>
              ))}
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="댓글을 적어주세요"
                style={{
                  width: '100%',
                  height: '80px',
                  padding: '10px',
                  borderRadius: '5px',
                  marginTop: '10px',
                }}
              />
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <SubmitButton onClick={() => handleCommentSubmit(post.id)}>
                  등록
                </SubmitButton>
              </div>
            </div>
          )}
        </PostItem>
      ))}
    </TabContentsWrapper>
  );
};

export default MeetingContent;
