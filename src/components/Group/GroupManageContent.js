import React, { useState } from "react";
import styled from "styled-components";
import ApplicantConfirmModal from "./GroupInfoModal/ApplicantConfirmModal";
import TabContentsWrapper from "../TabContentsWrapper";

//전체 div
const Container = styled(TabContentsWrapper)`
    padding: 20px;
    display: flex;
    align-items: center;
`;

// 섹션
const Section = styled.section`
    margin-top: 20px;
    padding: 20px;
    width: 100%;
    border-radius: 8px;
    background-color: var(--violet200);
    border: 1px solid #e0e0e0;
`;

// 모집 기본 정보 타이틀
const Title = styled.h1`
    font-size: 24px;
    color: #4b3fbb;
    margin-bottom: 30px;
`;

// 모임구분
const RecruitDate = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 10px;  /* 그룹들 간의 간격을 줄임 */
    width: 100%;

    label {
        margin-bottom: 5px;
        margin-right: 15px;
        color: #333;
    }

    input, select {
        padding: 8px;
        border-radius: 5px;
        border: 1px solid #ccc;
        width: 150px;  /* 가로 길이 줄임 */
    }
`;

// 모집한줄 소개
const IntroduceDiv = styled.div`
    display: flex;
    align-items: center; /* label과 input을 수직 중앙 정렬 */
    margin-top: 10px;

    label {
        margin-right: 10px; /* label과 input 사이의 간격 */
        white-space: nowrap; /* label이 줄 바꿈되지 않도록 */
    }

    input {
        flex: 1; /* input이 남은 공간을 차지 */
        padding: 8px;
        border-radius: 5px;
        border: 1px solid #ccc;
    }
`;

// 필수입력값 타이틀
const SubTitle = styled.h5`
    margin: 20px;
`;

// 모임소개 타이틀
const IntroductionTitle = styled.h2`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
`;

// 주제, 팀명
const SubjectTitle = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    label {
        margin-right: 20px;
        white-space: nowrap;
    }

    div {
        font-size: 24px;
        padding: 10px;
        width: 100%;
        border: 2px solid var(--violet500);
        background-color: var(--violet500);
        border-radius: 5px;
        text-align: center;
    }
`;

// 모임원 관리 타이틀
const MemberTitle = styled.div`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: center;
`;

// 모임원 관리 div
const UserInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
    border-bottom: 1px solid #e0e0e0;

    .UserDetails {
        display: flex; /* UserImg와 UserName을 한 줄로 정렬 */
        align-items: center; /* UserImg와 UserName의 수직 중앙 정렬 */
        
    }

    .roleSelect {
        display: flex;
        align-items: center;
    }

    .roleSelect label {
        margin: 25px;
    }

    .date {
        width: 20%;
        font-size: 12px;
        color: #999;
    }
`;

//지원자 관리 div
const ApplicantInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    border-bottom: 1px solid #e0e0e0;

    .UserDetails {
        display: flex;
        align-items: center;
        flex: 0.5;
    }

    .roleSelect {
        display: flex;
        align-items: center;
        flex: 0.5;
    }

    .roleSelect label {
        margin-right: 5px;
    }

    .date {
        width: 15%;
        font-size: 12px;
        color: #999;
        text-align: center;
    }
`;

const UserImg = styled.div`
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background-color: #6c63ff;
        margin-right: 10px;
`;

const UserName = styled.div`
        font-size: 18px;
`;

const UserPosition = styled.div`
    margin-left: auto;
    font-weight: bold;
    color: #4b3fbb;
`;

//지원시 입력사항
const SupportInput = styled.div`
    button {
        width: 100px;
        height: 30px;
        font-size: 12px;
        margin: 10px;
        border-radius: 10px;
        background-color: ${({ active }) => (active ? "black" : "white")};
        color: ${({ active }) => (active ? "white" : "black")};
        border: 1px solid #ccc;
        cursor: pointer;

        &:hover {
            background-color: #333;
            color: white;
        }
    }
`;

// 태그
const TagDiv = styled.div`
    display: flex;
    align-items: center; /* label과 input을 수직 중앙 정렬 */
    margin-top: 10px;

    label {
        margin-right: 10px; /* label과 input 사이의 간격 */
        white-space: nowrap; /* label이 줄 바꿈되지 않도록 */
    }

    input {
        flex: 1; /* input이 남은 공간을 차지 */
        padding: 8px;
        border-radius: 5px;
        border: 1px solid #ccc;
    }
`;

// 모집 직군, 직군별 모집 인원, 총 모집 인원, 썸네일
const Wrapper = styled.div`
    display: flex;
    align-items: center; /* 수직 중앙 정렬 */
    justify-content: space-between; /* 각 요소 사이의 공간을 동일하게 배치 */
    gap: 20px; /* 항목 간의 간격 조정 */
    margin-top: 10px;

    label {
        margin-right: 10px;
        white-space: nowrap; /* label이 줄 바꿈되지 않도록 설정 */
    }

    select, input {
        flex: 1; /* 항목들이 균등하게 배치되도록 설정 */
        padding: 8px;
        border-radius: 5px;
        border: 1px solid #ccc;
    }
`;

// select 테두리
const Select = styled.select`
    padding: 10px;
    margin-bottom: 15px;
    border-radius: 5px;
    border: 2px solid var(--violet500); /* 테두리 추가 */
`;

// 모임소개, 유의사항
const TextArea = styled.textarea`
    width: 100%;
    height: 200px;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    resize: none;
    width: 100%;
`;

// 추가 삭제 버튼 flex
const AddButton = styled.div`
    display: flex;
    gap: 20px;
`;

//버튼 style
const Button = styled.button`
    padding: 10px 15px;
    background-color: #4b3fbb;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #3a2f9d;
    }
`;

//취소, 수정완료 버튼 flex
const Buttons = styled.div`
    display: flex;
    margin-top: 20px;
    justify-content: flex-end; /* 버튼들을 오른쪽에 정렬 */
    gap: 20px;
`;

//지원자 섹션   
const ApplicantSection = styled.section`
    margin-top: 20px;
    padding: 20px;
    width: 100%;
    border-radius: 8px;

    label {
        font-size: 18px;
    }
`;

const GroupManageContent = (props) => {
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [deadLineDate, setDeadLineDate] = useState();
    const [introduce, setIntroduce] = useState('');
    const [clickedButtons, setClickedButtons] = useState([true, true, true, false, false, false, true, false]);
    const [isModalOpen, setModalOpen] = useState(false);

    const memberData = [
        { id: 1, name: "강민철", role: "프론트엔드개발자", position: "모집장" },
        { id: 2, name: "김영희", role: "백엔드개발자", position: "모집원" },
        { id: 3, name: "이철수", role: "기획자", position: "모집장" },
        { id: 4, name: "박민지", role: "프론트엔드개발자", position: "모집원" },
        // 다른 사용자 데이터 추가
    ];

    const applicantData = [
        {id: 1, name: "박가현", role: "프론트엔드개발자", date: "2024.09.10"},
        {id: 2, name: "강감찬", role: "기획자", date: "2024.09.11"},
        {id: 3, name: "김가네", role: "백엔드개발자", date: "2024.09.12"},
    ];

    const handleStartDate = (e) => {
        setStartDate(e.target.value);
    }

    const handleEndDate = (e) => {
        setEndDate(e.target.value);
    }

    const handledeadLineDate = (e) => {
        setDeadLineDate(e.target.value);
    }

    const handleIntroduce = (e) => {
        setIntroduce(e.target.value);
    }

    // 버튼 클릭 시 상태를 토글하는 함수 (특정 버튼은 항상 true로 유지)
    const toggleButtonClick = (index) => {
        setClickedButtons((prevState) => {
        const newState = [...prevState];

        // 첫 번째, 두 번째, 세 번째, 일곱 번째 버튼은 항상 true로 유지
        if (index === 0 || index === 1 || index === 2 || index === 6) {
            newState[index] = true;
        } else {
            newState[index] = !newState[index]; // 나머지 버튼은 토글 가능
        }

        return newState;
        });
    };

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <Container>

            <Section>
                <Title>모집 기본 정보</Title>
                <RecruitDate>
                    <div>
                        <label>모임 구분</label>
                        <Select>
                            <option value="study">스터디</option>
                            <option value="project">프로젝트</option>
                        </Select>
                    </div>
                    <div>
                        <label>모집기간</label>
                        <input type="date" value={startDate} onChange={handleStartDate}/>~<input type="date"
                                                                                                 value={endDate}
                                                                                                 onChange={handleEndDate}/>
                    </div>
                    <div>
                        <label>모집마감일</label>
                        <input type="date" value={deadLineDate} onChange={handledeadLineDate}/>
                    </div>

                </RecruitDate>

                <IntroduceDiv>
                    <label>모집한줄소개</label>
                    <input type="text" value={introduce} onChange={handleIntroduce}/>
                </IntroduceDiv>


                <SubTitle>이메일, 지원직군, 지원사유는 필수입니다. 정보를 많이 요청시, 지원율이 떨어집니다. 필수값만 지정해주세요!</SubTitle>

                <SupportInput>
                    <label>지원시 입력사항</label>
                    {/* 버튼 리스트: 클릭 상태에 따라 색상 변화 */}
                    {["이메일", "지원직군", "지원사유", "다를 수 있는 언어", "참여가능 요일", "자기소개", "포트폴리오 링크", "자유기재"].map(
                        (item, index) => (
                            <button
                                key={index}
                                onClick={() => toggleButtonClick(index)}
                                style={{
                                    backgroundColor: clickedButtons[index] ? "black" : "white",
                                    color: clickedButtons[index] ? "white" : "black",
                                }}
                            >
                                {item}
                            </button>
                        )
                    )}
                </SupportInput>

                <TagDiv>
                    <label>태그</label>
                    <input type="text"/>
                </TagDiv>

                {/* 모집직군 : 프로젝트시에만 보여짐
          스터디는 총 모집 인원만 수정 가능
          이미 모집이 완료된 인원 수는 줄일 수 없음. */}

                <Wrapper>
                    <div>
                        <label>모집직군</label>
                        <Select defaultValue="">
                            <option value="frontEnd">프론트엔드개발자</option>
                            <option value="backEnd">백엔드개발자</option>
                            <option value="planner">기획자</option>
                            <option value="designer">디자이너</option>
                        </Select>
                    </div>

                    <div>
                        <label>직군 별 모집인원</label>
                        <Select defaultValue="">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                        </Select>
                    </div>

                    {/* <AddButton>
                  <Button>추가</Button>
                  <Button>삭제</Button>
              </AddButton> */}

                    <div>
                        <label>총 모집 인원</label>
                        <Select defaultValue="">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                        </Select>
                    </div>

                    <div>
                        <label>썸네일</label>
                        <input type="file" accept="image/*"/>
                    </div>
                </Wrapper>

            </Section>

            <Section>
                <IntroductionTitle>모임 소개</IntroductionTitle>
                <SubjectTitle>
                    <label>주제</label>
                    <div>파이널 프로젝트 - 지금 2조</div>
                </SubjectTitle>
                <div>
                    <TextArea rows="4" placeholder="모집에 대한 간단한 소개를 작성해주세요."/>

                    <TextArea rows="4" placeholder="유의사항 적어주세요."/>
                </div>
            </Section>

            <Section>
                <MemberTitle>모임원 관리</MemberTitle>
                {memberData.map((user, index) => (
                    <UserInfo key={user.id}>
                        <div className="UserDetails">
                            <UserImg/>
                            <UserName>{user.name}</UserName>
                        </div>

                        <div className="roleSelect">
                            <label>모집직군</label>
                            <Select defaultValue={user.role}>
                                <option value="frontEnd">프론트엔드개발자</option>
                                <option value="backEnd">백엔드개발자</option>
                                <option value="planner">기획자</option>
                                <option value="designer">디자이너</option>
                            </Select>
                        </div>

                        <div className="roleSelect">
                            <label>권한</label>
                            <Select defaultValue={user.position}>
                                <option value="master">모집장</option>
                                <option value="member">모집원</option>
                            </Select>
                        </div>
                    </UserInfo>
                ))}
                <Buttons>
                    <Button>취소</Button>
                    <Button>수정완료</Button>
                </Buttons>
            </Section>

            <ApplicantSection>
                <label>지원자 관리</label>
                {applicantData.map((user, index) => (
                    <ApplicantInfo key={user.id}>
                        <div className="UserDetails">
                            <UserImg/>
                            <UserName>{user.name}</UserName>
                        </div>

                        <div className="roleSelect">
                            <label>모집직군</label>
                            <UserPosition>{user.role}</UserPosition>
                        </div>

                        <div className="date">{user.date}</div>
                        <Button onClick={openModal}>지원글 확인하기</Button>
                    </ApplicantInfo>
                ))}

                {isModalOpen && <ApplicantConfirmModal onClose={closeModal}/>}
            </ApplicantSection>
        </Container>
    );

};
  
  export default GroupManageContent;