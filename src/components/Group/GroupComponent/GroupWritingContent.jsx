import styled from "styled-components";
import {
    ContentsWrapper2, Title6, Row, Select2, Label, LongLabel, ButtonGroup2, StyledButton, ThumbNail, HiddenFileInput, FileName, SubjectTitle,
    TextArea2, Buttons2, Button7, DeleteCancelButton, MemberTitle, UserInfo, UserImg, UserName
} from "../../GlobalStyledComponents";

import React, { useState } from "react";
import FormField from "./FormField";
import DateButton from "../../Button/DateButton";
import WhiteInputBox from "../../Input/WhiteInputBox";

// 메인 컴포넌트
const GroupWritingContent = ({ contentType, memberData, groupData }) => {
    const [contentsType, setContentsType] = useState(contentType); // 상태 추가 ('writing', 'editing', 'viewing' 중 하나)

    const GroupData = groupData || {
        groupType: "study",
        startDate: new Date(),
        endDate: new Date(),
        deadLineDate: new Date(),
        title: "",
        techStack: "",
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
        totalMemberCount: 0,
        subject: "",
        introduction: "",
        guidelines: "",
        fileName: ""
    };
    const [newGroupData, setNewGroupData] = useState(groupData ? { ...groupData } : GroupData);
    // 상태를 변경하는 핸들러
    const handleInputChange = (field, value) => {
        setNewGroupData(prevState => ({
            ...prevState,
            [field]: value
        }));
    };

    const toggleButtonClick = (index) => {
        setNewGroupData((prevState) => {
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
        <ContentsWrapper2>
            <Title6>모집 기본 정보</Title6>
            <Row>
                <FormField label={"모임 구분"}>
                    <Select2
                        value={newGroupData.groupType}
                        onChange={(e) => handleInputChange('groupType', e.target.value)}
                        disabled={contentsType === 'viewing'}
                    >
                        <option value="study">스터디</option>
                        <option value="project">프로젝트</option>
                    </Select2>
                </FormField>
                <FormField label={"모집 기간"}>
                    <DateButton
                        value={newGroupData.startDate}
                        onChange={(date) => handleInputChange('startDate', date)}
                        disabled={contentsType === 'viewing'}
                    />
                    ~
                    <DateButton
                        value={newGroupData.endDate}
                        onChange={(date) => handleInputChange('endDate', date)}
                        disabled={contentsType === 'viewing'}
                    />
                </FormField>
                <FormField label={"모집 마감일"}>
                    <DateButton
                        value={newGroupData.deadLineDate}
                        onChange={(date) => handleInputChange('deadLineDate', date)}
                        disabled={contentsType === 'viewing'}
                    />
                </FormField>
            </Row>

            <Row>
                <Label>제목</Label>
                <WhiteInputBox
                    value={newGroupData.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    disabled={contentsType === 'viewing'}
                />
            </Row>

            <Row>
                <Label>기술 스택</Label>
                <WhiteInputBox
                    value={newGroupData.techStack}
                    onChange={(e) => handleInputChange('techStack', e.target.value)}
                    disabled={contentsType === 'viewing'}
                />
            </Row>
            <Row>
                <LongLabel>지원시 <br /> 필수/선택사항</LongLabel>
                <ButtonGroup2>
                    {newGroupData.buttons.map((button, index) => (
                        <StyledButton
                            key={index}
                            clicked={button.clicked}
                            onClick={() => toggleButtonClick(index)}
                            disabled={contentsType === 'viewing'}
                        >
                            {button.label}
                        </StyledButton>
                    ))}
                </ButtonGroup2>
            </Row>
            <Row>
                {newGroupData.groupType === 'project' ? (
                    <>
                        <FormField label={"모집 직군"}>
                            <Select2 defaultValue="frontEnd" disabled={contentsType === 'viewing'}>
                                <option value="frontEnd">프론트엔드개발자</option>
                                <option value="backEnd">백엔드개발자</option>
                                <option value="planner">기획자</option>
                                <option value="designer">디자이너</option>
                            </Select2>
                        </FormField>
                        <FormField label={"직군별 모집 인원"}>
                            <Select2 defaultValue="" disabled={contentsType === 'viewing'}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                            </Select2>
                        </FormField>
                        <FormField label={"총 모집 인원"}>
                            <WhiteInputBox value={newGroupData.totalMemberCount} disabled={contentsType === 'viewing'} />
                        </FormField>
                    </>
                ) :
                    <FormField label={"총 모집 인원"}>
                        <Select2 defaultValue={newGroupData.totalMemberCount} disabled={contentsType === 'viewing'}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                        </Select2>
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
                    {/*{newGroupData.fileName && <FileName>선택된 파일: {newGroupData.fileName}</FileName>}*/}
                </ThumbNail>
            </Row>

            <Title6>모임 소개</Title6>
            <div>
                <SubjectTitle>
                    <label>주제</label>
                    <input
                        value={newGroupData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        disabled={contentsType === 'viewing'}
                    />
                </SubjectTitle>
                <TextArea2
                    rows="4"
                    placeholder="모집에 대한 간단한 소개를 작성해주세요."
                    value={newGroupData.introduction}
                    onChange={(e) => handleInputChange('introduction', e.target.value)}
                    disabled={contentsType === 'viewing'}
                />
                <TextArea2
                    rows="4"
                    placeholder="유의사항 적어주세요."
                    value={newGroupData.guidelines}
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
                                <UserImg />
                                <UserName>{user.name}</UserName>
                            </div>

                            <div className="roleSelect">
                                <label>모집직군</label>
                                <Select2 defaultValue={user.role} disabled={contentsType === 'viewing'}>
                                    <option value="frontEnd">프론트엔드개발자</option>
                                    <option value="backEnd">백엔드개발자</option>
                                    <option value="planner">기획자</option>
                                    <option value="designer">디자이너</option>
                                </Select2>
                            </div>

                            <div className="roleSelect">
                                <label>권한</label>
                                <Select2 defaultValue={user.position} disabled={contentsType === 'viewing'}>
                                    <option value="master">모집장</option>
                                    <option value="member">모집원</option>
                                </Select2>
                            </div>
                        </UserInfo>
                    ))}
                </>
            )
            }

            <Buttons2>
                {contentsType === 'editing' ? (
                    <>
                        <Button7 onClick={handleSaveClick}>저장</Button7>
                        <DeleteCancelButton onClick={() => setContentsType('viewing')}>취소</DeleteCancelButton>
                    </>
                ) : contentsType === 'writing' ? (
                    <>
                        <Button7 onClick={handleSaveClick}>작성 완료</Button7>
                        <DeleteCancelButton onClick={() => setContentsType('viewing')}>취소</DeleteCancelButton>
                    </>
                ) : (
                    <>
                        <Button7 onClick={handleEditClick}>수정</Button7>
                        <DeleteCancelButton>삭제</DeleteCancelButton>
                    </>
                )}
            </Buttons2>
        </ContentsWrapper2>
    );
};

export default GroupWritingContent;