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
`;

const Title = styled.h1`
    font-size: 20px;
    font-weight: 500;
    margin: 30px 0;
`;

const Row = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin: 10px 0;
`;

const Select = styled.select`
    padding: 5px 15px;
    border-radius: 5px;
    border: 2px solid var(--violet500);
`;

const Label = styled.div`
    width: 6%;
    display: flex;
    align-items: center;
    font-size: 16px;
    line-height: 1.5;
`;

const LongLabel = styled(Label)`
    width: 8%;
    align-items: center;
`;

const ButtonGroup = styled.div`
    display: flex;
    width: 92%;
    gap: 10px;
    justify-content: left;
`;

const StyledButton = styled.button`
    background-color: ${({ clicked }) => (clicked ? "var(--black700)" : "white")};
    color: ${({ clicked }) => (clicked ? "white" : "black")};
    border: 1px solid var(--violet500);
    padding: 10px 20px;
    margin: 5px;
    border-radius: 30px;
    cursor: pointer;

`;

const ThumbNail = styled.div`
    display: flex;
    gap: 10px;

    label {
        font-size: 16px;
        line-height: 1.5;
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
    }

    input {
        font-size: 18px;
        padding: 10px;
        width: 100%;
        border: 2px solid var(--violet500);
        background-color: var(--violet300);
        border-radius: 5px;
    }
`;

const TextArea = styled.textarea`
    width: 100%;
    height: 200px;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid var(--violet500);
    border-radius: 5px;
    resize: none;
`;

const Buttons = styled.div`
    display: flex;
    margin-top: 20px;
    justify-content: flex-end;
    gap: 20px;
`;

const Button = styled.button`
    padding: 10px 15px;
    background-color: var(--violet500);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: var(--violet700);
    }
`;

// 메인 컴포넌트
const GroupInfoContent = () => {
    const [groupType, setGroupType] = useState('study');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [deadLineDate, setDeadLineDate] = useState(new Date());
    const [title, setTitle] = useState('');
    const [subject, setSubject] = useState('');
    const [fileName, setFileName] = useState('');
    const [buttons, setButtons] = useState([
        { label: "이메일", clicked: true },
        { label: "지원직군", clicked: true },
        { label: "지원사유", clicked: true },
        { label: "다를 수 있는 언어", clicked: false },
        { label: "참여가능 요일", clicked: false },
        { label: "자기소개", clicked: false },
        { label: "포트폴리오 링크", clicked: true },
        { label: "자유기재", clicked: false }
    ]);
    const [totalMemberCount, setTotalMemberCount] = useState(0);

    const handleTotalMemberCount = (e) => setTotalMemberCount(e.target.value);


    // 날짜 변경 핸들러
    const handleStartDate = (date) => setStartDate(date);
    const handleEndDate = (date) => setEndDate(date);
    const handleDeadLineDate = (date) => setDeadLineDate(date);

    // 제목과 주제 핸들러
    const handleTitle = (e) => setTitle(e.target.value);
    const handleSubject = (e) => setSubject(e.target.value);

    // 파일 선택 핸들러
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFileName(file.name);
        }
    };

    // 필수/선택사항 버튼 클릭 상태 변경
    const toggleButtonClick = (index) => {
        setButtons(prevButtons => {
            const newButtons = [...prevButtons];
            newButtons[index].clicked = !newButtons[index].clicked;
            return newButtons;
        });
    };

    return (
        <ContentsWrapper>
            <Title>모집 기본 정보</Title>
            <Row>
                <FormField label={"모임 구분"}>
                    <Select value={groupType} onChange={(e) => setGroupType(e.target.value)}>
                        <option value="study">스터디</option>
                        <option value="project">프로젝트</option>
                    </Select>
                </FormField>
                <FormField label={"모집 기간"}>
                    <DateButton value={startDate} onChange={handleStartDate} /> ~ <DateButton value={endDate} onChange={handleEndDate} />
                </FormField>
                <FormField label={"모집 마감일"}>
                    <DateButton value={deadLineDate} onChange={handleDeadLineDate} />
                </FormField>
            </Row>

            <Row>
                <Label>제목</Label>
                <WhiteInputBox value={title} onChange={handleTitle} />
            </Row>

            <Row>
                <LongLabel>지원시 필수/선택사항</LongLabel>
                <ButtonGroup>
                    {buttons.map((button, index) => (
                        <StyledButton
                            key={index}
                            clicked={button.clicked}
                            onClick={() => toggleButtonClick(index)}
                        >
                            {button.label}
                        </StyledButton>
                    ))}
                </ButtonGroup>
            </Row>

            <Row>
                <Label>기술 스택</Label>
                <WhiteInputBox value={title} onChange={handleTitle} />
            </Row>

            <Row>
                {groupType === 'project'? (
                    <>
                        <FormField label={"모집 직군"}>
                            <Select defaultValue="frontEnd">
                                <option value="frontEnd">프론트엔드개발자</option>
                                <option value="backEnd">백엔드개발자</option>
                                <option value="planner">기획자</option>
                                <option value="designer">디자이너</option>
                            </Select>
                        </FormField>
                        <FormField label={"직군별 모집 인원"}>
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
                        </FormField>
                        <FormField label={"총 모집 인원"}>
                            <WhiteInputBox value={"총합"} isActive={false} />
                        </FormField>
                    </>
                ) :
                    <FormField label={"총 모집 인원"}>
                        <WhiteInputBox value={totalMemberCount} onChange={handleTotalMemberCount}/>
                    </FormField>
                }
                <ThumbNail>
                    <label htmlFor="thumbnail">썸네일</label>
                    <input id="thumbnail" type="file" accept="image/*" onChange={handleFileChange} />
                    {/*<HiddenFileInput*/}
                    {/*    id="thumbnail"*/}
                    {/*    type="file"*/}
                    {/*    accept="image/*"*/}
                    {/*    onChange={handleFileChange}*/}
                    {/*/>*/}
                    {fileName && <FileName>선택된 파일: {fileName}</FileName>}
                </ThumbNail>
            </Row>

            <Title>모임 소개</Title>
            <SubjectTitle>
                <label>주제</label>
                <input type="text" placeholder="모임의 주제를 적어주세요." value={subject} onChange={handleSubject} />
            </SubjectTitle>
            <div>
                <TextArea rows="4" placeholder="모집에 대한 간단한 소개를 작성해주세요." />
                <TextArea rows="4" placeholder="유의사항 적어주세요." />
            </div>
            <Buttons>
                <Button>작성</Button>
                <Button>취소</Button>
            </Buttons>
        </ContentsWrapper>
    );
};

export default GroupInfoContent;
