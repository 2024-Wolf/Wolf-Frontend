import styled from "styled-components";


import React, { useState } from "react";
import FormFieldSingle from "./FormFieldSingle";
import FormFieldMultiple from "./FormFieldMultiple";
import DateButton from "../../Button/DateButton";
import SelectButton from "../../Button/SelectButton";
import { FormTitle, ButtonGroup } from "../../GlobalStyledComponents";
import InputText from "../../Input/InputText";
import FormOptionButton from "../../Button/FormOptionButton";
import InputFile from "../../Input/InputFile"
import InputNumber from "../../Input/InputNumber"
import TextArea from "../../Input/TextArea";

// 사용자 이름
// components/Group/GroupManageContent.js, components/Group/GroupComponent/GroupWritingContent.jsx
export const UserName = styled.div`
    font-size: 18px;

    @media (max-width: 768px) {
        font-size: 16px;
    }

    @media (max-width: 480px) {
        font-size: 14px;
    }
`;



// 사용자 이미지
// components/Group/GroupManageContent.js, components/Group/GroupComponent/GroupWritingContent.jsx
export const UserImg = styled.div`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: #6c63ff;
    margin-right: 10px;
`;


// components/Group/GroupComponent/GroupWritingContent.jsx
export const MemberTitle = styled.div`
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

// components/Group/GroupComponent/GroupWritingContent.jsx
export const DeleteCancelButton = styled.button`
    background-color: var(--black000);
    color: var(--black800);
    &:hover {
        background-color: var(--black300);
    }
`;


// components/Group/GroupComponent/GroupWritingContent.jsx
export const Button7 = styled.button`
    padding: 10px 15px;
    background-color: var(--violet400);
    color: white;
    border: 1px solid var(--violet500);
    border-radius: 5px;

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

// components/Group/GroupComponent/GroupWritingContent.jsx
export const Buttons2 = styled.div`
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

// components/Group/GroupComponent/GroupWritingContent.jsx
export const GroupInfoContentsWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (max-width: 768px) {
        gap: 25px;
    }

    @media (max-width: 480px) {
    }
`;

// components/Group/GroupComponent/GroupWritingContent.jsx
export const GroupInfoContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    @media (max-width: 768px) {
        gap: 20px;
    }
`;

// components/Group/GroupComponent/GroupWritingContent.jsx, 
// components/SignInContent/FirstProcessContent.jsx
export const FormFieldRow = styled.div`
    display: flex;
    width: 100%;
    justify-content: start;
    gap: 20px;
    @media (max-width: 768px) {

    }

    @media (max-width: 480px) {
    }
`;


// components/Group/GroupComponent/GroupWritingContent.jsx
export const Label = styled.div`
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

// components/Group/GroupComponent/GroupWritingContent.jsx
export const LongLabel = styled(Label)`
    width: 110px;
    align-items: center;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

// components/Group/GroupComponent/GroupWritingContent.jsx
export const StyledButton = styled.button`
    background-color: ${({ clicked }) => (clicked ? "var(--black700)" : "white")};
    color: ${({ clicked }) => (clicked ? "white" : "black")};
    border: 1px solid var(--violet500);
    padding: 13px 15px;
    margin: 5px;
    border-radius: 30px;

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

// components/Group/GroupComponent/GroupWritingContent.jsx
export const HiddenFileInput = styled.input`
    display: none;
`;

// components/Group/GroupComponent/GroupWritingContent.jsx
export const FileName = styled.div`
    margin-top: 10px;
    font-size: 14px;
    color: var(--black800);
`;


// components/Group/GroupComponent/GroupWritingContent.jsx
export const UserInfo = styled.div`
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

export const DoubleDateContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    width: 100%;
`;

const GroupInfoContent = ({ contentType, memberData, groupData }) => { // memberData에 기본값 추가
    const [contentsType, setContentsType] = useState(contentType); // 상태 추가 ('writing', 'editing', 'viewing' 중 하나)

    const initialGroupData = {
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
            { label: "다룰 수 있는 언어", clicked: false },
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

    const [newGroupData, setNewGroupData] = useState(groupData ? { ...groupData } : initialGroupData);

    const handleInputChange = (field, value) => {
        setNewGroupData(prevState => ({
            ...prevState,
            [field]: value
        }));
    };

    const toggleButtonClick = (index) => {
        setNewGroupData(prevState => {
            const newButtons = prevState.buttons.map((button, idx) =>
                idx === index ? { ...button, clicked: !button.clicked } : button
            );
            return { ...prevState, buttons: newButtons };
        });
    };

    const handleEditClick = () => {
        setContentsType('editing');
    };

    const handleSaveClick = () => {
        setContentsType('viewing');
    };

    return (
        <GroupInfoContentsWrapper>
            <FormTitle>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-1-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M9.283 4.002H7.971L6.072 5.385v1.271l1.834-1.318h.065V12h1.312z" />
                </svg>
                모임 정보
            </FormTitle>
            <GroupInfoContainer>
                <FormFieldRow>
                    <FormFieldMultiple label={"모임 구분"}>
                        <SelectButton
                            value={newGroupData.groupType}
                            onChange={(e) => handleInputChange('groupType', e.target.value)}
                            disabled={contentsType === 'viewing'}
                        >
                            <option value="study">스터디</option>
                            <option value="project">프로젝트</option>
                        </SelectButton>
                    </FormFieldMultiple>
                </FormFieldRow>
                <FormFieldRow>
                    <FormFieldSingle label={"모임 기간"}>
                        <DoubleDateContainer>
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
                        </DoubleDateContainer>
                    </FormFieldSingle>
                </FormFieldRow>
                <FormFieldRow>
                    <FormFieldSingle label={"모임 이름"}>
                        <InputText
                            value={newGroupData.title}
                            onChange={(e) => handleInputChange('title', e.target.value)}
                            disabled={contentsType === 'viewing'} />
                    </FormFieldSingle>
                </FormFieldRow>
                <FormFieldRow>
                    <FormFieldSingle label={"기술 태그"}>
                        <InputText
                            value={newGroupData.techStack}
                            onChange={(e) => handleInputChange('techStack', e.target.value)}
                            disabled={contentsType === 'viewing'}
                        />
                    </FormFieldSingle>
                </FormFieldRow>
            </GroupInfoContainer>
            <hr style={{ border: '1px solid var(--black200)' }} />

            <FormTitle>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-2-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.646 6.24c0-.691.493-1.306 1.336-1.306.756 0 1.313.492 1.313 1.236 0 .697-.469 1.23-.902 1.705l-2.971 3.293V12h5.344v-1.107H7.268v-.077l1.974-2.22.096-.107c.688-.763 1.287-1.428 1.287-2.43 0-1.266-1.031-2.215-2.613-2.215-1.758 0-2.637 1.19-2.637 2.402v.065h1.271v-.07Z" />
                </svg>
                모집 정보
            </FormTitle>
            <GroupInfoContainer>
                <FormFieldRow>
                    <FormFieldSingle label={"모집 마감일"}>
                        <DateButton
                            value={newGroupData.deadLineDate}
                            onChange={(date) => handleInputChange('deadLineDate', date)}
                            disabled={contentsType === 'viewing'}
                        />
                    </FormFieldSingle>
                    <FormFieldSingle label={"총 모집 인원"}>
                        <SelectButton defaultValue={newGroupData.totalMemberCount} disabled={contentsType === 'viewing'}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                        </SelectButton>
                    </FormFieldSingle>
                </FormFieldRow>

                <FormFieldRow>
                    <FormFieldSingle label={"모집 직군"}>
                        <SelectButton defaultValue="frontEnd" disabled={contentsType === 'viewing'}>
                            <option value="frontEnd">프론트엔드개발자</option>
                            <option value="backEnd">백엔드개발자</option>
                            <option value="planner">기획자</option>
                            <option value="designer">디자이너</option>
                        </SelectButton>
                    </FormFieldSingle>
                </FormFieldRow>
                <FormFieldRow>
                    <FormFieldSingle label={"기술 스택"}>
                        <ButtonGroup>
                            {newGroupData.buttons.map((button, index) => (
                                <FormOptionButton
                                    key={index}
                                    clicked={button.clicked}
                                    onClick={() => toggleButtonClick(index)}
                                    disabled={contentsType === 'viewing'}
                                >
                                    {button.label}
                                </FormOptionButton>
                            ))}
                        </ButtonGroup>
                    </FormFieldSingle>
                </FormFieldRow>
                <hr style={{ border: '1px solid var(--black200)' }} />
            </GroupInfoContainer>

            <FormFieldRow>
                <FormTitle>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-3-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-8.082.414c.92 0 1.535.54 1.541 1.318.012.791-.615 1.36-1.588 1.354-.861-.006-1.482-.469-1.54-1.066H5.104c.047 1.177 1.05 2.144 2.754 2.144 1.653 0 2.954-.937 2.93-2.396-.023-1.278-1.031-1.846-1.734-1.916v-.07c.597-.1 1.505-.739 1.482-1.876-.03-1.177-1.043-2.074-2.637-2.062-1.675.006-2.59.984-2.625 2.12h1.248c.036-.556.557-1.054 1.348-1.054.785 0 1.348.486 1.348 1.195.006.715-.563 1.237-1.342 1.237h-.838v1.072h.879Z" />
                    </svg>
                    모임 소개
                </FormTitle>
            </FormFieldRow>
            <GroupInfoContainer>
                <FormFieldRow>
                    <FormFieldSingle label={"주제"}>
                        <InputText
                            value={newGroupData.subject}
                            onChange={(e) => handleInputChange('subject', e.target.value)}
                            disabled={contentsType === 'viewing'}
                        />
                    </FormFieldSingle>
                    <FormFieldMultiple label={"썸네일"} htmlFor="thumbnail">
                        <InputFile
                            id="thumbnail"
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleInputChange('fileName', e.target.files[0].name)}
                            disabled={contentsType === 'viewing'}
                        />
                    </FormFieldMultiple>

                </FormFieldRow>
                <TextArea
                    rows="4"
                    placeholder="모집에 대한 간단한 소개를 작성해주세요."
                    value={newGroupData.introduction}
                    onChange={(e) => handleInputChange('introduction', e.target.value)}
                    disabled={contentsType === 'viewing'}
                />
                <TextArea
                    rows="4"
                    placeholder="유의사항을 적어주세요."
                    value={newGroupData.guidelines}
                    onChange={(e) => handleInputChange('guidelines', e.target.value)}
                    disabled={contentsType === 'viewing'}
                />

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
                                    <SelectButton defaultValue={user.role} disabled={contentsType === 'viewing'}>
                                        <option value="frontEnd">프론트엔드개발자</option>
                                        <option value="backEnd">백엔드개발자</option>
                                        <option value="planner">기획자</option>
                                        <option value="designer">디자이너</option>
                                    </SelectButton>
                                </div>

                                <div className="roleSelect">
                                    <label>권한</label>
                                    <SelectButton defaultValue={user.position} disabled={contentsType === 'viewing'}>
                                        <option value="master">모집장</option>
                                        <option value="member">모집원</option>
                                    </SelectButton>
                                </div>
                            </UserInfo>
                        ))}
                    </>
                )
                }
            </GroupInfoContainer>
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
        </GroupInfoContentsWrapper>
    );
};

export default GroupInfoContent;