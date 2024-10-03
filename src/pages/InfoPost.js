import React from "react";
import styled from "styled-components";
import { useState } from "react";

const InfoPosts = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 40px;
`;

const SupportButton = styled.button`
    padding: 5px 10px;
    background-color: #4a90e2;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #357abd;
    }
`;

const SupportRecruit = styled.div`
    display:flex;
    flex-direction: column;
    width: 1180px;
    height: 151.35px;
    border: 1px solid #000;
    gap: 20px;
`;

const SupportRecruit1 = styled.div`
    display:flex;
    justify-content: space-between;
`;

const SupportRecruit2 = styled.div`
    display:flex;
   justify-content: space-between;
`;

const RecruitContainer = styled.div`
    display:flex;
    margin-left: 30px;
`;

const SupportContainer = styled.div`
    display:flex;
    margin-right: 30px;
`;

// 주제 설명
const PostInfo = styled.div`
    margin-top: 30px;
    border: 1px solid #000;
    width: 1180px;
    height: 500px;
    padding: 20px;
`;

const UpdateInfo = styled.div`
    margin: 30px 0 30px 0;
    display: flex;
    justify-content: space-between;
    width: 1180px;
    height: 70px;
    align-items: center;
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
`;

const CommentContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 1180px;
    height: 597.7px;
`;

const CommentsInput = styled.input`
    margin-top: 20px;
    padding: 10px;
    width: 1150px;
    height: 116.35px;
`;

const CommentInputButton = styled.div`

`;

const CommentButton = styled.button`
`;

const InfoPost = () => {
    const [commentList, setCommentList] = useState([]);

    const supportSubmit = () => {
        alert('지원하기모달');
    }

    const registerSubmit = () => {
        alert('등록');
    }
    return (
        // 정보 게시글
        <InfoPosts>
            {/* 정보 묶음 */}
            <SupportRecruit>

                {/* 모임기간 지원하기 묶음 */}
                <SupportRecruit1>
                    <div className="date">모임기간 : 2024.09.10~2024.09.20</div>
                    <SupportButton onClick={supportSubmit}>지원하기</SupportButton>
                </SupportRecruit1>

                {/* 모집현황 지원가능 묶음 */}
                <SupportRecruit2>
                    {/* 모집현황 개발자수 묶음 */}
                    <RecruitContainer>
                        <div className="recruitPeople">모집현황</div>
                        <div>개발자 1/8</div>
                    </RecruitContainer>

                    {/* 지원가능 개발자 수 묶음 */}
                    <SupportContainer>
                        <div className="recruitSupport">지원 가능</div>
                        <div>개발자 7/8</div>
                    </SupportContainer>

                </SupportRecruit2>
            </SupportRecruit>

            {/* 주제 설명 */}
            <PostInfo>
                제목 : "파이널 스터디_지금 2조" <br />
                - 내용: 파이썬 기초를 공부할 사람 모집합니다. <br />
                - 매주 월, 수, 금 오후 8시부터 10시까지 진행됩니다. <br />
                - 총 8주 과정으로 진행하고 참가비 무료입니다. <br />
                - 관심있는 분들은 "지원하기"로 신청해주세요.
            </PostInfo>

            {/* 최근 소식 */}
            <UpdateInfo>
                <label for="">최근 소식</label>
                <div>"파이널 프로젝트-지금2조에 손흥민님이 지원하셨습니다."</div>
                <div>2024.09.02</div>
            </UpdateInfo>

            {/* 댓글부분 */}
            <CommentContainer>
                <span>이 모임에 응원, 질문을 올려주세요!</span>
                <div>
                    {/* 댓글input */}
                    <CommentsInput />
                    <button type="submit" className="registerSubmit" onClick={registerSubmit}>등록</button>
                </div>
                <hr />
                <div>
                    {/* 유저 */}
                    <div>
                        <div>
                            <div>사진</div>
                            <div>gahyun</div>
                        </div>
                        <div>2024.08.28</div>
                    </div>
                    {/* 댓글 */}
                    <div>화이팅입니다!</div>
                    {/* 댓글열기 */}
                    <CommentButton onClick={registerSubmit}>댓글열기</CommentButton>
                    {/* 수정삭제버튼 */}
                    <div>
                        <button onClick={() => alert('수정하시겠습니까?')}>수정</button>
                        <button onClick={() => alert('삭제하시겠습니까?')}>삭제</button>
                    </div>
                </div>
            </CommentContainer>
        </InfoPosts>
    )

};

export default InfoPost;