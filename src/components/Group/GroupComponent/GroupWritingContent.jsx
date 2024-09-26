import React, { useState } from "react";
import styled from "styled-components";
import FormField from "./FormField";
import DateButton from "../../DateInputButton/DateButton";
import WhiteInputBox from "../../Input/WhiteInputBox";

// 스타일 정의
const ContentsWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px;

    @media (max-width: 768px) {
        padding: 10px;
    }

    @media (max-width: 480px) {
        padding: 5px;
    }
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 500;
    margin: 30px 0;

    @media (max-width: 768px) {
        font-size: 18px;
        margin: 20px 0;
    }

    @media (max-width: 480px) {
        font-size: 16px;
        margin: 15px 0;
    }
`;
const Row = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin: 10px 0;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 10px;
    }

    @media (max-width: 480px) {
        flex-direction: column;
        gap: 8px;
    }
`;

const Select = styled.select`
    padding: 10px 15px;
    border-radius: 5px;
    border: 2px solid var(--violet500);

    @media (max-width: 768px) {
        padding: 6px 10px;
    }

    @media (max-width: 480px) {
        padding: 5px 8px;
    }
`;

const Label = styled.div`
    width: 70px;
    font-size: 16px;

    @media (max-width: 768px) {
        width: 100%;
        font-size: 14px;
    }

    @media (max-width: 480px) {
        font-size: 13px;
    }
`;

const LongLabel = styled(Label)`
    width: 110px;
    align-items: center;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

const ButtonGroup = styled.div`
    display: flex;
    width: 92%;
    justify-content: left;

    @media (max-width: 768px) {
        flex-wrap: wrap;
        gap: 10px;
    }
`;
const StyledButton = styled.button`
    background-color: ${({ clicked }) => (clicked ? "var(--black700)" : "white")};
    color: ${({ clicked }) => (clicked ? "white" : "black")};
    border: 1px solid var(--violet500);
    padding: 13px 15px;
    margin: 5px;
    border-radius: 30px;
    cursor: pointer;

    @media (max-width: 768px) {
        padding: 8px;
        font-size: 12px;
        flex: 1;
    }
    
    @media (max-width: 480px) {
        padding: 5px;
        font-size: 10px;
        flex: 1;
    }
`;

const ThumbNail = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-left: 10px;


    label {
        font-size: 16px;
        line-height: 1.5;
    }

    input {
        width: 200px;

        @media (max-width: 768px) {
            width: 100%;
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
    }

    @media (max-width: 480px) {
        gap: 8px;
    }
`;

const HiddenFileInput = styled.input`
    display: none;
`;

const FileName = styled.div`
    margin-top: 10px;
    font-size: 14px;
    color: var(--black800);
`;

const SubjectTitle = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    label {
        margin-right: 20px;
        white-space: nowrap;

        @media (max-width: 768px) {
            margin-right: 10px;
        }
    }

    input {
        font-size: 16px;
        padding: 10px;
        width: 100%;
        border: 1px solid var(--violet500);
        background-color: var(--violet300);
        border-radius: 5px;

        @media (max-width: 768px) {
            font-size: 14px;
            padding: 8px;
        }
    }
`;

const TextArea = styled.textarea`
    width: 100%;
    min-height: 200px;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid var(--violet500);
    border-radius: 5px;
    resize: none;
    font-size: 16px;
    line-height: 1.5;

    &:disabled {
        background-color: var(--black000);
    }

    @media (max-width: 768px) {
        font-size: 14px;
        padding: 8px;
    }

    @media (max-width: 480px) {
        font-size: 13px;
        padding: 6px;
    }
`;

const Buttons = styled.div`
    display: flex;
    margin-top: 20px;
    justify-content: flex-end;
    gap: 20px;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 10px;
    }
    
    @media (max-width: 480px) {
        gap: 5px;
    }
`;

const Button = styled.button`
    padding: 10px 15px;
    background-color: var(--violet400);
    color: white;
    border: 1px solid var(--violet500);
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: var(--violet700);
    }

    @media (max-width: 768px) {
        padding: 8px;
        font-size: 14px;
        width: 100%;
    }
    
    @media (max-width: 480px) {
        padding: 5px;
        font-size: 12px;
    }
`;

const DeleteCancelButton = styled(Button)`
    background-color: var(--black000);
    color: var(--black800);
    &:hover {
        background-color: var(--black300);
    }
    
`;

const MemberTitle = styled.div`
    border-top: 1px solid var(--black200);
    font-size: 24px;
    font-weight: bold;
    margin-top: 30px;
    padding: 30px 0;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 20px;
        padding: 20px 0;
    }

    @media (max-width: 480px) {
        font-size: 18px;
        padding: 15px 0;
    }
`;

const UserInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-bottom: 10px;
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

    @media (max-width: 768px) {
        flex-wrap: wrap;
        align-items: center;
        font-size: 14px;
        .UserDetails {
            gap: 10px;
        }

        .roleSelect {
            align-items: flex-start;
            gap: 10px;
        }

        .roleSelect label {
            margin: 10px 0;
        }
        
        .date {
            width: 100%; /* 모바일에서 전체 너비 사용 */
            text-align: center;
        }
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
    @media (max-width: 768px) {
        font-size: 16px;
    }

    @media (max-width: 480px) {
        font-size: 14px;
    }
`;

// 메인 컴포넌트
const GroupWritingContent = ({memberData}) => {
    const [groupInfo, setGroupInfo] = useState({
        groupType: 'study',
        startDate: new Date(),
        endDate: new Date(),
        deadLineDate: new Date(),
        title: '제목입니다.',
        techStack: '#스프링부트 #리액트',
        subject: '인스타그램 클론 코딩 해보기',
        introduction: '인스타그램 클론 코딩해볼 사람을 구합니다. \n' +
            '기간은 2021년 8월 1일부터 2021년 9월 1일까지입니다. \n' +
            '총 8주 과정으로 진행하고 참가비 무료입니다. \n' +
            '많은 참여 부탁드립니다.',
        guidelines: '',
        fileName: '',
        buttons: [
            { label: "이메일", clicked: true },
            { label: "지원직군", clicked: true },
            { label: "지원사유", clicked: false },
            { label: "다를 수 있는 언어", clicked: false },
            { label: "참여가능 요일", clicked: false },
            { label: "자기소개", clicked: false },
            { label: "포트폴리오 링크", clicked: true },
            { label: "자유기재", clicked: false }
        ],
        totalMemberCount: 0
    });



    const [contentsType, setContentsType] = useState('viewing'); // 상태 추가 ('writing', 'editing', 'viewing' 중 하나)

    // 상태를 변경하는 핸들러
    const handleInputChange = (field, value) => {
        setGroupInfo(prevState => ({
            ...prevState,
            [field]: value
        }));
    };

    const toggleButtonClick = (index) => {
        setGroupInfo((prevState) => {
            const newButtons = [...prevState.buttons];
            newButtons[index].clicked = !newButtons[index].clicked;
            return {
                ...prevState,
                buttons: newButtons,
            };
        });
    };

    // 수정 버튼 클릭 시 상태 변경
    const handleEditClick = () => {
        setContentsType('editing');
    };

    // 작성/수정 완료 시 상태 변경
    const handleSaveClick = () => {
        setContentsType('viewing');
    };

    return (
        <ContentsWrapper>
            <Title>모집 기본 정보</Title>
            <Row>
                <FormField label={"모임 구분"}>
                    <Select
                        value={groupInfo.groupType}
                        onChange={(e) => handleInputChange('groupType', e.target.value)}
                        disabled={contentsType === 'viewing'}
                    >
                        <option value="study">스터디</option>
                        <option value="project">프로젝트</option>
                    </Select>
                </FormField>
                <FormField label={"모집 기간"}>
                    <DateButton
                        value={groupInfo.startDate}
                        onChange={(date) => handleInputChange('startDate', date)}
                        disabled={contentsType === 'viewing'}
                    />
                    ~
                    <DateButton
                        value={groupInfo.endDate}
                        onChange={(date) => handleInputChange('endDate', date)}
                        disabled={contentsType === 'viewing'}
                    />
                </FormField>
                <FormField label={"모집 마감일"}>
                    <DateButton
                        value={groupInfo.deadLineDate}
                        onChange={(date) => handleInputChange('deadLineDate', date)}
                        disabled={contentsType === 'viewing'}
                    />
                </FormField>
            </Row>

            <Row>
                <Label>제목</Label>
                <WhiteInputBox
                    value={groupInfo.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    disabled={contentsType === 'viewing'}
                />
            </Row>

            <Row>
                <Label>기술 스택</Label>
                <WhiteInputBox
                    value={groupInfo.techStack}
                    onChange={(e) => handleInputChange('techStack', e.target.value)}
                    disabled={contentsType === 'viewing'}
                />
            </Row>
            <Row>
                <LongLabel>지원시 <br/> 필수/선택사항</LongLabel>
                <ButtonGroup>
                    {groupInfo.buttons.map((button, index) => (
                        <StyledButton
                            key={index}
                            clicked={button.clicked}
                            onClick={() => toggleButtonClick(index)}
                            disabled={contentsType === 'viewing'}
                        >
                            {button.label}
                        </StyledButton>
                    ))}
                </ButtonGroup>
            </Row>
            <Row>
                {groupInfo.groupType === 'project'? (
                        <>
                            <FormField label={"모집 직군"}>
                                <Select defaultValue="frontEnd"  disabled={contentsType === 'viewing'}>
                                    <option value="frontEnd">프론트엔드개발자</option>
                                    <option value="backEnd">백엔드개발자</option>
                                    <option value="planner">기획자</option>
                                    <option value="designer">디자이너</option>
                                </Select>
                            </FormField>
                            <FormField label={"직군별 모집 인원"}>
                                <Select defaultValue=""  disabled={contentsType === 'viewing'}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                </Select>
                            </FormField>
                            <FormField label={"총 모집 인원"}>
                                <WhiteInputBox value={groupInfo.totalMemberCount} disabled={contentsType === 'viewing'}/>
                            </FormField>
                        </>
                    ) :
                    <FormField label={"총 모집 인원"}>
                        <Select defaultValue={groupInfo.totalMemberCount}  disabled={contentsType === 'viewing'}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                        </Select>
                    </FormField>
                }
                <ThumbNail>
                    <label htmlFor="thumbnail">썸네일</label>
                    <input
                        id="thumbnail"
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleInputChange('fileName', e.target.files[0].name)}
                        disabled={contentsType === 'viewing'}
                    />
                    {/*{groupInfo.fileName && <FileName>선택된 파일: {groupInfo.fileName}</FileName>}*/}
                </ThumbNail>
            </Row>

            <Title>모임 소개</Title>
            <div>
                <SubjectTitle>
                    <label>주제</label>
                    <input
                        value={groupInfo.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        disabled={contentsType === 'viewing'}
                    />
                </SubjectTitle>
                <TextArea
                    rows="4"
                    placeholder="모집에 대한 간단한 소개를 작성해주세요."
                    value={groupInfo.introduction}
                    onChange={(e) => handleInputChange('introduction', e.target.value)}
                    disabled={contentsType === 'viewing'}
                />
                <TextArea
                    rows="4"
                    placeholder="유의사항 적어주세요."
                    value={groupInfo.guidelines}
                    onChange={(e) => handleInputChange('guidelines', e.target.value)}
                    disabled={contentsType === 'viewing'}
                />
            </div>

            {memberData && (
                <>
                    <MemberTitle>모임원 관리</MemberTitle>
                    {memberData?.map((user) => (
                        <UserInfo key={user.id}>
                            <div className="UserDetails" >
                                <UserImg/>
                                <UserName>{user.name}</UserName>
                            </div>

                            <div className="roleSelect">
                                <label>모집직군</label>
                                <Select defaultValue={user.role} disabled={contentsType === 'viewing'}>
                                    <option value="frontEnd">프론트엔드개발자</option>
                                    <option value="backEnd">백엔드개발자</option>
                                    <option value="planner">기획자</option>
                                    <option value="designer">디자이너</option>
                                </Select>
                            </div>

                            <div className="roleSelect">
                                <label>권한</label>
                                <Select defaultValue={user.position} disabled={contentsType === 'viewing'}>
                                    <option value="master">모집장</option>
                                    <option value="member">모집원</option>
                                </Select>
                            </div>
                        </UserInfo>
                    ))}
                </>
            )
            }

            <Buttons>
                {contentsType === 'writing' || contentsType === 'editing' ? (
                    <>
                        <Button onClick={handleSaveClick}>저장</Button>
                        <DeleteCancelButton onClick={() => setContentsType('viewing')}>취소</DeleteCancelButton>
                    </>
                ) : (
                    <>
                        <Button onClick={handleEditClick}>수정</Button>
                        <DeleteCancelButton>삭제</DeleteCancelButton>
                    </>
                )}
            </Buttons>
        </ContentsWrapper>
    );
};

export default GroupWritingContent;