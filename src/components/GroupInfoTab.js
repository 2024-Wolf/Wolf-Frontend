import React from "react";
import styled from "styled-components";
import { useState } from "react";
import ApplicantModal from "./GroupInfoModal/ApplicantModal";

//전체 div묶음?
const InfoPosts = styled.div`
    position: relative;
    
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 40px;
    background: var(--violet200);
`;

//지원하기 버튼
const SupportButton = styled.button`
    padding: 5px 10px;
    background-color: var(--violet500);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: var(--violet300);
    }
`;

// 정보묶음
const SupportRecruit = styled.div`
    display:flex;
    flex-direction: column;
    width: 100%;
    height: 151.35px;
    padding: 30px;
    border: 1px solid var(--violet500);
    gap: 20px;
`;

//모임기간 지원하기 묶음
const SupportRecruit1 = styled.div`
    display:flex;
    justify-content: space-between;
`;

//모집현황 지원가능 묶음
const SupportRecruit2 = styled.div`
    display:flex;
   justify-content: space-between;
`;

//모집현황 개발자수 묶음
const RecruitContainer = styled.div`
    display:flex;
    margin-left: 30px;
`;

//지원가능 개발자 수 묶음
const SupportContainer = styled.div`
    display:flex;
    margin-right: 30px;
`;

// 주제 설명
const PostInfo = styled.div`
    margin-top: 30px;
    border: 1px solid var(--violet500);
    width: 100%;
    height: 500px;
    padding: 20px;
    line-height: 2;
`;

//최근 소식
const UpdateInfo = styled.div`
    margin: 30px 0 30px 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 70px;
    align-items: center;
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
`;

// 댓글컨테이너
const CommentContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  background-color: var(--violet100);
  border-radius: 8px;
  border: 2px solid #9787FF;
`;

//
const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

//
const QuestionContainer = styled.div`
  position: relative;
  z-index: 1;
`;

//
const QuestionInput = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 10px;
  padding-right: 100px; /* 버튼을 위한 여유 공간 */
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 10px;
  resize: none;
  box-sizing: border-box;
  z-index: 1;
`;

//
const SubmitQuestionButton = styled.button`
  position: absolute;
  right: 10px; /* 버튼의 위치 조정 */
  top: 30px; /* 버튼의 위치 조정 */
  z-index: 1;
  background-color: #6c63ff;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #5a54e0;
  }
`;

//
const CommentSection = styled.div`
  margin-top: 30px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #fff;
`;

//
const Comment = styled.div`
  margin-bottom: 15px;
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

//
const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
 
const CommentAuthor = styled.div`
  display: flex;
  align-items: center;
`;
 
const AuthorIcon = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #6c63ff;
  margin-right: 8px;
`;
 
const CommentDate = styled.span`
  font-size: 12px;
  color: #999;
`;
 
const CommentText = styled.p`
  margin: 5px 0;
`;
 
const CommentActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
`;
 
const ReplyButton = styled.button`
  background: none;
  border: none;
  color: #6c63ff;
  cursor: pointer;
`;
 
const EditButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;
 
const DeleteButton = styled.button`
  background: none;
  border: none;
  color: #ff4d4d;
  cursor: pointer;
`;
 
const ReplyContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 10px;
`;
 
const ReplyInput = styled.textarea`
  width: 100%;
  height: 60px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-right: 10px; /* 버튼과의 간격 */
  resize: none;
  box-sizing: border-box;
`;
 
const ReplyButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
 
const SubmitReplyButton = styled.button`
  background-color: #6c63ff;
  color: white;
  white-space: nowrap;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #5a54e0;
  }
`;

const GroupInfoTab = ({mode}) => {
  const [showReply, setShowReply] = useState(false);
  const [replyText, setReplyText] = useState('');
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleReplyInput = () => {
  setShowReply(!showReply);
  };

  const handleReplyChange = (e) => {
  setReplyText(e.target.value);
  };

  const handleReplySubmit = (e) => {
  e.preventDefault();
  //console.log("대댓글 등록:", replyText);
  setReplyText(''); // 입력 필드 초기화
  setShowReply(false); // 입력란 닫기
  };

  const deleteClick = () => {
      const result = window.confirm('삭제하시겠습니까?');

      if(result) {
          alert('삭제했습니다.');
      }
  }

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

  return(
      // 정보 게시글
      <InfoPosts>
          {/* 정보 묶음 */}
          <SupportRecruit>

              {/* 모임기간 지원하기 묶음 */}
              <SupportRecruit1>
              <div className="date">모임기간 : 2024.09.10~2024.09.20</div>
              <SupportButton onClick={openModal}>지원하기</SupportButton>

              {isModalOpen && <ApplicantModal onClose={closeModal} />}

              </SupportRecruit1>

              {/* 모집현황 지원가능 묶음 */}
              <SupportRecruit2>
                  {/* 모집현황 개발자수 묶음 */}
                  {/* 스터디 모집이면 스터디원으로 변경 */}
                  <RecruitContainer>
                      <div className="recruitPeople">
                          {mode === 'study' ? '모집현황' : '지원현황'}&emsp;
                      </div>
                      <div>
                          {mode === 'study' ? '스터디원 2/8' : '개발자 1/8'}
                      </div>
                  </RecruitContainer>

                  <SupportContainer>
                      {/* 지원가능 개발자 수 묶음 */}
                      {/* 스터디 모집이면 지원가능 스터디원으로 변경 */}
                      <div className="recruitSupport">
                          {mode === 'study' ? '지원 가능' : '지원 가능 개발자'}&emsp;
                      </div>
                      <div>
                          {mode === 'study' ? '스터디원 6/8' : '개발자 7/8'}
                      </div>
                  </SupportContainer>
              </SupportRecruit2>
          </SupportRecruit>
          
          {/* 주제 설명 */}
          <PostInfo>
              제목 : "파이널 스터디_지금 2조" <br/>
              - 내용: 파이썬 기초를 공부할 사람 모집합니다. <br/>
              - 매주 월, 수, 금 오후 8시부터 10시까지 진행됩니다. <br/>
              - 총 8주 과정으로 진행하고 참가비 무료입니다. <br/>
              - 관심있는 분들은 "지원하기"로 신청해주세요. 
          </PostInfo>

          {/* 최근 소식 */}
          <UpdateInfo>
              <label>최근 소식</label>
              <div>'파이널 프로젝트-지금2조에 "손흥민"님이 지원하셨습니다.'</div>
              <div>2024.09.02</div>
          </UpdateInfo>
          <CommentContainer>
              <Title>이 모임에 응답 질문을 올려주세요!</Title>
                  <QuestionContainer>
                      <QuestionInput placeholder="응답이나 궁금한 질문을 입력해주세요." />
                      <SubmitQuestionButton>질문등록</SubmitQuestionButton>
                  </QuestionContainer>

              <CommentSection>
                  <Comment>
                      <CommentHeader>
                          <CommentAuthor>
                              <AuthorIcon />
                                  <span>gahyun</span>
                          </CommentAuthor>
                              <CommentDate>2024.08.28</CommentDate>
                      </CommentHeader>
                  <CommentText>이 프로젝트에 대해 알고 싶습니다, 혹시 Spring을 사용하나요?</CommentText>
          <CommentActions>
              <ReplyButton onClick={toggleReplyInput}>
              {showReply ? '댓글 닫기' : '댓글 열기'}
              </ReplyButton>
              <div>
              <EditButton onClick={()=>alert('수정하시겠습니끼?')}>수정&emsp;</EditButton>
              <DeleteButton onClick={()=>deleteClick()}>삭제</DeleteButton>
              </div>
          </CommentActions>
              {showReply && (
              <ReplyContainer>
              <ReplyInput value={replyText} onChange={handleReplyChange} placeholder="대댓글을 작성하세요."/>
                  <ReplyButtonContainer>
                      <SubmitReplyButton onClick={handleReplySubmit}>댓글달기</SubmitReplyButton>
                  </ReplyButtonContainer>
              </ReplyContainer>)}
                  </Comment>
              </CommentSection>
          </CommentContainer>
          
      </InfoPosts>
  )

};
  
  export default GroupInfoTab;