import styled from "styled-components";
import {
  ItemRow,
  ButtonGroupRight,
  QuestionItemContainer,
  Hr,
  ItemCol,
} from "../../GlobalStyledComponents";

import ProfileIcon from "../../Icon/ProfileIcon";
import ArrowUpIcon from "../../Icon/ArrowUpIcon";
import ArrowDownIcon from "../../Icon/ArrowDownIcon";
import DoubleButton from "../../Button/DoubleButton";
import ImagePreview from "../../Img/ImagePreview";
import TextAreaNoCss from "../../Input/TextAreaNoCss";
import React, { useEffect, useState, useRef } from "react";
import TextAreaBlackLine from "../../Input/TextAreaBlackLine";
import {
  getQuestionsWithComments,
  registerQuestion,
  updateQuestion,
  deleteQuestion,
  registerComment,
  updateComment,
  deleteComment,
  registerReply
} from '../../Apis/GroupPostApi'; // 위에서 정의한 API 함수가 있는 파일 경로

const CommentSectionWrapper = styled.div`
  padding: 10px;
  display: flex;
  gap: 10px;
  width: 100%;
  flex-direction: column;
`;

const CommentListWrapper = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  flex-direction: column;
  max-height: 706px;
  overflow-y: auto;
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
  showFileOption,
  questionData,
  userId
}) => {
  const [isEditingQuestion, setIsEditingQuestion] = useState(false);
  const [isEditFileComment, setIsEditFileComment] = useState({});

  const [isShowComments, setIsShowComments] = useState(false);

  const [questionEditText, setQuestionEditText] = useState("");
  const [commentEditText, setCommentEditText] = useState("");

  const [questionEditFile, setQuestionEditFile] = useState(
    '' || questionData.user.userProfileImg
  );
  const [questionFileURL, setQuestionFileURL] = useState("");
  const [questionEditFileURL, setQuestionEditFileURL] = useState("");

  const [commentEditFile, setCommentEditFile] = useState('');


  const [isEditFile, setIsEditFile] = useState(false);
  const [editingComments, setEditingComments] = useState({}); // 질문 ID를 키로 사용하는 객체




  const handleQuestionSubmit = (e) => {
    e.preventDefault();
    const questionValue = new FormData(e.target).get("textareaQuestion");

    // 질문 수정 및 파일 첨부
    onEdit(questionData.questionId, {
      questionDetails: questionValue || questionData.questionDetails,
      questionImageUrl: isEditFile ? questionEditFile : questionData.questionImageUrl, // 수정했다면 새로운 파일을 사용하고, 그렇지 않으면 기존의 파일을 사용함
      questionTime: questionData.questionTime, // 기존 시간을 그대로 사용함
    });
    setIsEditingQuestion(false);
    setQuestionEditFile('');
    setIsEditFile(false);
  };

  const handleCommentSubmit = (e, commentId, index) => {
    e.preventDefault();
    const commentValue = new FormData(e.target).get("textareaComment");

    if (questionData.comments[index]) {
      const updatedComment = {
        commentDetails: commentValue || questionData.comments[index].commentDetails,
        commentImageUrl: isEditFileComment[index]
          ? commentEditFile
          : questionData.comments[index].commentImageUrl,
        commentTime: questionData.comments[index].commentTime,
      };

      onCommentEdit(questionData.questionId, commentId, updatedComment);
    } else {
    }

    setEditingComments({});
    setIsEditFileComment({});
  };

  const startEditQuestion = () => {
    setIsEditingQuestion(true);
    setQuestionEditText(questionData.questionDetails);
  };

  const cancelEditQuestion = () => {
    setIsEditingQuestion(false);
    setQuestionEditText("");
    setQuestionEditFile('');
    setIsEditFile(false);
  };

  const startEditComment = (questionId, index) => {
    setEditingComments((prev) => ({
      ...prev,
      [questionId]: index, // 특정 질문의 댓글 인덱스 저장
    }));
    setCommentEditText(questionData.comments[index].commentDetails);
    setCommentEditFile(questionData.comments[index].commentImageUrl);
    setIsEditFileComment({});
  };

  const cancelEditComment = () => {
    setCommentEditText("");
    setEditingComments({});
    setIsEditFileComment({});
    setCommentEditFile('');
  };

  const deleteQuestionEditFile = () => {
    setIsEditFile(true);
    setQuestionEditFile('');
  };

  const addQuestionEditFile = (file) => {
    setIsEditFile(true);
    if (file) {
      setQuestionEditFile(file);
    }
  };

  const deleteCommentEditFile = (index) => {
    setIsEditFileComment((prev) => ({
      ...prev,
      [index]: true, // 특정 질문의 댓글 인덱스 저장
    }));
    setCommentEditFile('');
  };

  const addCommentEditFile = (file, index) => {
    setIsEditFileComment((prev) => ({
      ...prev,
      [index]: true, // 특정 질문의 댓글 인덱스 저장
    }));
    if (file) {
      setCommentEditFile(file);
    }
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    onAddComment(questionData.questionId);
  };

  useEffect(() => {
    let questionURL;
    let questionEditURL;

    if (questionData.questionImageUrl) {
      questionURL = questionData.questionImageUrl;
      setQuestionFileURL(questionURL);
    } else {
      setQuestionFileURL("");
    }

    if (questionEditFile) {
      questionEditURL = questionEditFile;
      setQuestionEditFileURL(questionEditURL);
    } else {
      setQuestionEditFileURL("");
    }

    return () => {
      if (questionURL) {
        URL.revokeObjectURL(questionURL);
      }
      if (questionEditURL) {
        URL.revokeObjectURL(questionEditURL);
      }
    };
  }, [questionData.questionImageUrl, questionEditFile]);

  function formatDate(isoString) {
    const date = new Date(isoString);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}.${month}.${day}`; // 원하는 형식으로 반환
  }


  return (
    <>
      {/* 질문(Question) */}
      <QuestionItemWrapper>
        <QuestionItemContainer>
          {/* 사용자 프로필 및 날짜 */}
          <ItemRow>
            <ProfileIcon
              userId={userId}
              reportTopicText={"QUESTION"}
              targetUserId={questionData.user.userId}
              src={questionData.user.userProfileImg}
              alt={`${questionData.user.userId}-questionProfileIcon`}
            >
              {questionData?.user.userNickname}
            </ProfileIcon>
            <QuestionDate>{formatDate(questionData.questionTime)}</QuestionDate>
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
                {(questionFileURL || questionEditFileURL) && (
                  <ImagePreview
                    src={
                      questionEditFile
                        ? questionEditFileURL
                        : isEditFile
                          ? ""
                          : questionFileURL
                    }
                    alt={questionEditFileURL ? "" : ""}
                    imageFile={questionData.questionImageUrl}
                    isEditing={true}
                    onClick={deleteQuestionEditFile}
                  />
                )}
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
                    isNoCssUploadButtonAppear={showFileOption}
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
                <TextAreaNoCss value={questionData?.questionDetails} readOnly />
                {/* [질문[수정중X]]-이미지 미리보기 */}
                {questionFileURL ? (
                  <>
                    <ImagePreview
                      imageFile={questionData?.questionImageUrl}
                      src={questionFileURL}
                      alt={
                        questionData?.questionImageUrl
                          ? `preview-${questionData?.questionImageUrl}`
                          : "preview"
                      }
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
                  {/* 질문 글을 작성한 사용자만 수정할 수 있음 */}
                  {questionData.user.userId == userId ? (<>
                    <DoubleButton
                      leftButtonText={"수정"}
                      leftButtonOnClick={startEditQuestion}
                      rightButtonText={"삭제"}
                      rightButtonOnClick={() => {
                        if (window.confirm("삭제하시겠습니까?")) {
                          onDelete(questionData?.questionId);
                        }
                      }}
                      editing={isEditingQuestion}
                    />
                  </>) : (<></>)}
                </ButtonGroupRight>
              </ItemRow>
            </>
          )}
        </QuestionItemContainer>

        {/* 댓글 목록 */}
        {isShowComments && (
          <CommentItemContainer>
            <Hr />
            {questionData.comments.length === 0 ? (
              <></>
            ) : (
              <CommentListWrapper>
                {questionData.comments.map((comment, index) => (
                  <React.Fragment key={comment.commentId}>
                    <CommentSectionWrapper>
                      <ItemRow>
                        {/* [댓글] 프로필 */}
                        <ProfileIcon
                          userId={userId}
                          reportTopicText={"REPLY"}
                          targetUserId={comment.authorId.userId}
                          src={comment.authorId.userProfileImg}
                          alt={`${comment.authorId.userId}-commentProfileIcon`}
                        >
                          {comment.authorId.userNickname}
                        </ProfileIcon>
                        {/* [댓글] 날짜 */}
                        <QuestionDate>{formatDate(comment.createTime)}</QuestionDate>
                      </ItemRow>

                      {editingComments[questionData.questionId] === index ? (
                        <>
                          <FormContainer
                            onSubmit={(e) => handleCommentSubmit(e, comment.commentId, index)}
                          >
                            <ItemCol>
                              {/* [댓글[수정중O]]-텍스트 입력란 */}
                              <TextAreaNoCss
                                name="textareaComment"
                                value={comment.commentDetails}
                                editing={editingComments[questionData.questionId] === index}
                                onKeyDown={(e) => handleEnterSubmit(e, true)}
                                required
                              />
                              {(comment.commentImageUrl || commentEditFile) && (
                                <>
                                  {/* [댓글[수정중O]]-이미지 프리뷰 & 삭제 버튼 */}
                                  <ImagePreview
                                    src={
                                      commentEditFile
                                        ? commentEditFile
                                        : isEditFileComment[index]
                                          ? ""
                                          : comment.commentImageUrl
                                    }
                                    alt={comment.commentImageUrl ? comment.commentImageUrl : ""}
                                    imageFile={comment.commentImageUrl}
                                    isEditing={true}
                                    questionId={questionData.questionId}
                                    onClick={() => deleteCommentEditFile(index)} // questionId 전달
                                  />
                                </>
                              )}
                            </ItemCol>
                            <ItemRow>
                              <ButtonGroupRight>
                                {/* [댓글[수정중O]]-파일 선택 버튼 */}
                                <ImagePreview
                                  isNoCssUploadButtonAppear={showFileOption}
                                  onChange={(file) =>
                                    addCommentEditFile(file, index)
                                  }
                                  onClick={() => deleteCommentEditFile(index)}
                                  questionId={questionData.questionId}
                                />
                                {/* [댓글[수정중O]]-완료 & 취소 버튼 */}
                                <DoubleButton
                                  leftButtonText={"완료"}
                                  leftButtonType={"submit"}
                                  rightButtonText={"취소"}
                                  rightButtonType={"button"}
                                  rightButtonOnClick={() =>
                                    cancelEditComment(index)
                                  }
                                  editing={editingComments[questionData.questionId] === index}
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
                              value={comment.commentDetails}
                              editing={editingComments[questionData.questionId] === index}
                              readOnly
                            />
                            {/* [댓글[수정중X]]-이미지 미리보기 */}
                            {comment.commentImageUrl && (
                              <ImagePreview
                                imageFile={comment.commentImageUrl}
                                src={comment.commentImageUrl}
                                alt={comment.commentImageUrl}
                              ></ImagePreview>
                            )}
                          </ItemCol>
                          <ItemRow>
                            <ButtonGroupRight style={{ minHeight: '25px' }}>
                              {/* [댓글[수정중X]]-수정 & 삭제 버튼 */}
                              {/* 댓글을 작성한 사용자만 수정할 수 있음 */}
                              {comment.authorId.userId == userId ? (<>
                                <DoubleButton
                                  leftButtonText={"수정"}
                                  leftButtonOnClick={() =>
                                    startEditComment(questionData.questionId, index)
                                  }
                                  rightButtonText={"삭제"}
                                  rightButtonOnClick={() => {
                                    if (window.confirm("삭제하시겠습니까?")) {

                                      onCommentDelete(questionData.questionId, comment.commentId);
                                    }
                                  }}
                                  editing={editingComments[questionData.questionId] === index}
                                />
                              </>) : (<></>)}

                            </ButtonGroupRight>
                          </ItemRow>
                        </>
                      )}
                    </CommentSectionWrapper>
                    <Hr />
                  </React.Fragment>
                ))}
              </CommentListWrapper>
            )}
            <FormContainer onSubmit={(e) => handleAddComment(e)}>
              {/* [댓글] 텍스트 입력창 */}
              <TextAreaBlackLine
                placeholder="댓글을 적어주세요"
                value={newComments[questionData.questionId] || ""}
                onChange={(e) =>
                  handleCommentChange(questionData.questionId, e.target.value)
                }
                onKeyDown={(e) => handleEnterSubmit(e, true)}
                required
              />
              {/* [댓글]사진 파일 업로드 버튼 & 댓글 등록(제출) 버튼 */}
              <ImagePreview
                isEditing={true}
                isUploadButtonAppear={showFileOption}
                isSubmitButtonAppear={true}
                onChange={(file) => handleCommentFileChange(file, questionData.questionId)}
                onClick={() => handleCommentFileDelete(questionData.questionId)}
                questionId={questionData.questionId}
              />
            </FormContainer>
          </CommentItemContainer>
        )}
      </QuestionItemWrapper>
      <Hr />
    </>
  );
};


// 대댓글 컴포넌트
const Reply = ({ comment, children }) => {
  return (
    <div style={{ marginLeft: comment.parentsId ? '20px' : '0', border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
      <div>
        <strong>{comment.authorId.userNickname}</strong> <span>{new Date(comment.commentTime).toLocaleString()}</span>
      </div>
      <div>{comment.commentDetails}</div>
      {children}
    </div>
  );
};



const QuestionForm = ({ showFileOption, groupPostId, userId }) => {

  const [newQuestion, setNewQuestion] = useState("");
  const [newComments, setNewComments] = useState({});
  const [newQuestionFile, setNewQuestionFile] = useState("");
  const [newCommentFile, setNewCommentFile] = useState({}); // 각 댓글의 파일 상태
  const [commentFileURL, setCommentFileURL] = useState("");

  // -------------------------------
  const [questionData, setQuestionData] = useState([]);
  const [pageData, setPageData] = useState([]);
  const [option, setOption] = useState(showFileOption === false ? 'QUESTION' : 'COMMUNICATION');// question은 정보탭, communication은 회의탭

  // 질문 등록 - 완료
  const addQuestion = async (e) => {
    e.preventDefault();
    if (newQuestion.trim()) {
      try {
        const result = await registerQuestion(groupPostId, option, {
          questionDetails: newQuestion,
          questionImageUrl: newQuestionFile,
          questionTime: new Date(Date.now() + 9 * 60 * 60 * 1000).toISOString()
        });

        // 상태 코드가 200-299 범위인지 확인
        if (result.status < 200 || result.status >= 300) {
          throw new Error('네트워크 오류');
        }

        alert("질문이 등록되었습니다");
        setNewQuestion("");
        setNewQuestionFile("");

      } catch (error) {
        // setError('질문 등록 실패');
        console.error(error);
      } finally {
        // setIsLoading(false);
      }
    }
  };

  // 질문 수정 - 완료
  const editQuestion = async (questionId, updatedQuestion) => {
    try {
      const result = await updateQuestion(groupPostId, questionId, {
        questionDetails: updatedQuestion.questionDetails,
        questionImageUrl: updatedQuestion.questionImageUrl,
        questionTime: new Date(Date.now() + 9 * 60 * 60 * 1000).toISOString()
      });

      // 상태 코드가 200-299 범위인지 확인
      if (result.status < 200 || result.status >= 300) {
        throw new Error('네트워크 오류');
      }

      alert("질문이 수정되었습니다");

    } catch (error) {
      // setError('질문 수정 실패');
      console.error(error);
    } finally {
      // setIsLoading(false);
    }
  };

  // 질문 삭제 - 완료
  const eliminationQuestion = async (questionId) => {

    try {
      const result = await deleteQuestion(groupPostId, questionId);

      // 상태 코드가 200-299 범위인지 확인
      if (result.status < 200 || result.status >= 300) {
        throw new Error('네트워크 오류');
      }

      alert("질문이 삭제되었습니다");

    } catch (error) {
      // setError('질문 삭제 실패');
      console.error(error);
    } finally {
      // setIsLoading(false);
    }
  };

  // 댓글 작성 - 완료
  const addComment = async (questionId) => {
    const commentText = newComments[questionId];
    const commentFile = newCommentFile[questionId];

    try {
      const result = await registerComment(groupPostId, questionId, {
        commentDetails: commentText,
        commentImageUrl: commentFile || '',
        commentTime: new Date(Date.now() + 9 * 60 * 60 * 1000).toISOString()
      })

      // 상태 코드가 200-299 범위인지 확인
      if (result.status < 200 || result.status >= 300) {
        throw new Error('네트워크 오류');
      }

      alert("댓글이 등록되었습니다");
      setNewComments((prev) => ({ ...prev, [questionId]: '' }));
      setNewCommentFile((prev) => ({ ...prev, [questionId]: '' }));
      setCommentFileURL(''); // 파일 URL 초기화

    } catch (error) {
      // setError('댓글 등록 실패');
      console.error(error);
    } finally {
      // setIsLoading(false);
    }

  };

  // 댓글 수정 - 완료
  const editComment = async (questionId, commentId, updatedComment) => {
    try {
      const result = await updateComment(groupPostId, questionId, commentId, {
        commentDetails: updatedComment.commentDetails,
        commentImageUrl: updatedComment.commentImageUrl,
        commentTime: new Date(Date.now() + 9 * 60 * 60 * 1000).toISOString()
      })

      // 상태 코드가 200-299 범위인지 확인
      if (result.status < 200 || result.status >= 300) {
        throw new Error('네트워크 오류');
      }

      alert("댓글이 수정되었습니다");

    } catch (error) {
      // setError('댓글 수정 실패');
      console.error(error);
    } finally {
      // setIsLoading(false);
    }
  };

  // 댓글 삭제 - 완료
  const eliminationComment = async (questionId, commentId) => {

    try {
      const result = await deleteComment(groupPostId, questionId, commentId)

      // 상태 코드가 200-299 범위인지 확인
      if (result.status < 200 || result.status >= 300) {
        throw new Error('네트워크 오류');
      }

      alert("댓글이 삭제되었습니다");

    } catch (error) {
      // setError('댓글 삭제 실패');
      console.error(error);
    } finally {
      // setIsLoading(false);
    }
  };

  // 대댓글 작성 - 프론트에서는 구현되지 않은 부분이라, 개발 보류
  const addCommentReply = async (questionId, parentCommentId, reply) => {

    try {
      // const result = await registerReply(groupPostId, questionId, parentCommentId, reply)

      const result = await registerReply(groupPostId, 1, 2, {
        commentDetails: "string",
        commentImageUrl: "string",
        commentTime: "2024-10-21T17:36:23.246Z"
      })

      // 상태 코드가 200-299 범위인지 확인
      if (result.status < 200 || result.status >= 300) {
        throw new Error('네트워크 오류');
      }

      alert("댓글이 삭제되었습니다");

    } catch (error) {
      // setError('댓글 삭제 실패');
      console.error(error);
    } finally {
      // setIsLoading(false);
    }
  };

  // 질문 목록 조회 - 완료
  // getQuestions(groupId, option, pageable)


  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        // setLoading(true);  // 로딩 상태 시작
        // setError(null);    // 에러 초기화

        const dataQuestions = await getQuestionsWithComments(groupPostId, option);

        setQuestionData(dataQuestions.data.questionResponses); // 질문 데이터 설정
        setPageData(dataQuestions.data.page) // 질문 페이지 데이터 설정

        // setQuestionData(data); // 질문 데이터 설정

        // setAlarmData(dataAlarm.data); // 댓글 데이터 설정

      } catch (err) {
        // setError('데이터를 불러오는 데 실패했습니다.');
        console.error(err);
      } finally {
        // setLoading(false);  // 로딩 상태 종료
      }
    };

    fetchQuestions(); // 질문 가져오기
  }, []); // groupId가 변경될 때마다 목록을 재조회


  const handleCommentChange = (questionId, commentValue) => {
    setNewComments((prev) => ({
      ...prev,
      [questionId]: commentValue,
    }));
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
    setNewQuestionFile(''); // 파일 삭제
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
    <>
      <FormContainer onSubmit={addQuestion}>
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
          isUploadButtonAppear={showFileOption}
          isSubmitButtonAppear={true}
          onChange={(file) => handleQuestionFileChange(file)}
          onClick={() => handleQuestionFileDelete()}

        />
      </FormContainer>

      <Hr />
      {/* 질문 목록 */}
      {
        questionData.length === 0 ? (
          <div style={{
            width: "100%", fontSize: "15px", textAlign: "center",
            color: "var(--black200)", padding: "20px 0px",
          }}>
            이 그룹에는 질문이 아직 없습니다
          </div>
        ) : (
          questionData.map((item, index) => (
            <Question
              key={item.questionId}
              onEdit={editQuestion}
              onDelete={eliminationQuestion}
              onCommentEdit={editComment}
              onCommentDelete={eliminationComment}
              onAddComment={addComment}
              newComments={newComments}
              newCommentFile={newCommentFile[index] || ''}
              handleCommentChange={handleCommentChange}
              handleEnterSubmit={handleEnterSubmit}
              handleQuestionFileChange={handleQuestionFileChange}
              handleQuestionFileDelete={handleQuestionFileDelete}
              handleCommentFileChange={handleCommentFileChange}
              handleCommentFileDelete={handleCommentFileDelete}
              commentFileURL={commentFileURL}
              setCommentFileURL={setCommentFileURL}
              showFileOption={showFileOption}
              questionData={item}
              userId={userId}
            />
          ))
        )
      }
    </>
  );
};

export default QuestionForm;
