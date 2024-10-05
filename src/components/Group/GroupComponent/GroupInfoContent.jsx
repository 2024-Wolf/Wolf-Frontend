import styled from "styled-components";

import React, { useState } from "react";

import FormFieldSingle from "./FormFieldSingle";
import FormFieldMultiple from "./FormFieldMultiple";
import DateButton from "../../Button/DateButton";
import SelectButton from "../../Button/SelectButton";
import { FormTitle, ButtonGroupCenter, ButtonGroupRight, ButtonGroupWrap } from "../../GlobalStyledComponents";
import InputText from "../../Input/InputText";
import FormOptionButton from "../../Button/FormOptionButton";
import InputFile from "../../Input/InputFile"
import InputNumber from "../../Input/InputNumber"
import TextArea from "../../Input/TextArea";
import SaveButton from "../../Button/SaveButton";
import CancelButton from "../../Button/CancelButton";
import EditButton from "../../Button/EditButton";
import DeleteButton from "../../Button/DeleteButton";
import CompleteButton from "../../Button/CompleteButton"
import DeleteIconButton from "../../Icon/DeleteIcon";
import { useNavigate } from 'react-router-dom';

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
export const GroupInfoContentsWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 0px 10px;

    @media (max-width: 768px) {
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
export const HiddenFileInput = styled.input`
    display: none;
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

const ImagePlaceholder = styled.div`
    display: ${(props) => (props.hasFiles ? 'flex' : 'none')};
    flex-direction: row;
    justify-content: center;
    align-items: start;
    width: 100%;
    gap: 10px;
`;

const ImagePreview = styled.img`
    object-fit: cover;
    max-width: 100%;
    max-height: 214px;
    border: 1.5px solid var(--black200);
    border-radius: 10px;
`;

const GroupInfoContent = ({ contentType, memberData, groupData }) => {
    const [contentsType, setContentsType] = useState(contentType); // 상태 추가 ('writing', 'editing', 'viewing' 중 하나)
    const navigate = useNavigate();

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
            { label: "지원사유", clicked: true },
            { label: "다룰 수 있는 언어", clicked: false },
            { label: "참여가능 요일", clicked: false },
            { label: "자기소개", clicked: false },
            { label: "포트폴리오 링크", clicked: false },
            { label: "자유기재", clicked: false }
        ],
        totalMemberCount: 0,
        subject: "",
        introduction: "",
        guidelines: "",
        fileName: ""
    };

    const [newGroupData, setNewGroupData] = useState(groupData ? { ...groupData } : initialGroupData);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const allowedFormats = ['image/jpeg', 'image/png'];

    const handleInputChange = (field, value) => {
        setNewGroupData(prevState => ({
            ...prevState,
            [field]: value
        }));
    };

    const handleDeleteFile = () => {
        setSelectedFiles([]); // 선택된 파일 초기화
        handleInputChange('fileName', ''); // 파일 이름 초기화
        document.getElementById('thumbnail').value = ''; // input 파일 필드 초기화
    };



    const handleImgType = (event) => {
        const files = Array.from(event.target.files);
        const invalidFiles = files.filter(file => {
            const isJfif = file.name.toLowerCase().endsWith('.jfif');
            const isPjpeg = file.name.toLowerCase().endsWith('.pjpeg');
            const isPjp = file.name.toLowerCase().endsWith('.pjp');
            return !allowedFormats.includes(file.type) || isJfif || isPjpeg || isPjp;
        });

        if (invalidFiles.length > 0) {
            alert('허용되지 않는 파일 형식입니다 (첨부 가능 형식: jpeg, jpg, png)');
            return;
        }

        setSelectedFiles(files); // 파일 목록 업데이트
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
            <FormFieldRow>
                <FormTitle>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-1-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M9.283 4.002H7.971L6.072 5.385v1.271l1.834-1.318h.065V12h1.312z" />
                    </svg>
                    모임 정보
                </FormTitle>
                <ButtonGroupRight>
                    {contentsType === 'editing' ? (
                        <>
                            {/* editing */}
                            {/* 그룹 페이지 관리 탭 */}
                        </>
                    ) : contentsType === 'writing' ? (
                        <>
                            {/* writing */}
                            {/* 팀원 모집하기 페이지 */}
                        </>
                    ) : (
                        <>
                            {/* viewing */}
                            <EditButton onClick={handleEditClick} />
                            <DeleteButton />
                        </>
                    )}
                </ButtonGroupRight>
            </FormFieldRow>
            <GroupInfoContainer>
                <FormFieldRow>
                    <FormFieldMultiple label={"모임 구분"}>
                        <SelectButton name="groupType"
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
                            <DateButton name="startDate"
                                value={newGroupData.startDate}
                                onChange={(date) => handleInputChange('startDate', date)}
                                disabled={contentsType === 'viewing'}
                                required
                            />
                            ~
                            <DateButton name="endDate"
                                value={newGroupData.endDate}
                                onChange={(date) => handleInputChange('endDate', date)}
                                disabled={contentsType === 'viewing'}
                            />
                        </DoubleDateContainer>
                    </FormFieldSingle>
                </FormFieldRow>
                <FormFieldRow>
                    <FormFieldSingle label={"모임 이름"}>
                        <InputText name="title"
                            value={newGroupData.title}
                            onChange={(e) => handleInputChange('title', e.target.value)}
                            disabled={contentsType === 'viewing'}
                            placeholder={"모임 이름을 입력하세요"}
                            required />
                    </FormFieldSingle>
                </FormFieldRow>
                <FormFieldRow>
                    <FormFieldSingle label={"썸네일"} htmlFor="thumbnail">
                        <InputFile
                            id="thumbnail"
                            type="file"
                            disabled={contentsType === 'viewing'}
                            className="textContent"
                            name="thumbnail"
                            accept="image/jpeg, image/png"
                            onChange={(e) => {
                                // jpg, png
                                handleImgType(e);
                                // 이미지 파일이 선택된 경우
                                if (e.target.files.length > 0) {
                                    handleInputChange('fileName', e.target.files[0].name);
                                } else {
                                    // 이미지 파일이 선택되지 않은 경우
                                    handleInputChange('fileName', '');
                                }
                            }}
                        />
                    </FormFieldSingle>
                </FormFieldRow>
                <ImagePlaceholder hasFiles={selectedFiles.length > 0}>
                    {selectedFiles.map((file, index) => {
                        const fileURL = URL.createObjectURL(file);
                        return (
                            <> {/* 고유한 key 사용 */}
                                <ImagePreview key={file.name} src={fileURL} alt={`preview-${index}`} />
                                <DeleteIconButton onClick={() => handleDeleteFile()} />
                            </>
                        );
                    })}
                </ImagePlaceholder>
            </GroupInfoContainer>
            <hr style={{ border: '1px solid var(--black200)' }} />
            <FormTitle>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-2-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.646 6.24c0-.691.493-1.306 1.336-1.306.756 0 1.313.492 1.313 1.236 0 .697-.469 1.23-.902 1.705l-2.971 3.293V12h5.344v-1.107H7.268v-.077l1.974-2.22.096-.107c.688-.763 1.287-1.428 1.287-2.43 0-1.266-1.031-2.215-2.613-2.215-1.758 0-2.637 1.19-2.637 2.402v.065h1.271v-.07Z" />
                </svg>
                모집 기본 정보
            </FormTitle>
            <GroupInfoContainer>
                <FormFieldRow>
                    <FormFieldSingle
                        label={"지원시"}
                        label2={"필수/선택사항"}
                        description={"이메일, 지원직군, 지원사유는 필수값입니다. 정보를 많이 요청시, 지원율이 떨어집니다. 필수값만 지정해주세요! "}>
                        <ButtonGroupWrap>
                            {newGroupData.buttons.map((button, index) => (
                                <FormOptionButton
                                    name={button.label}
                                    key={index}
                                    clicked={button.clicked}
                                    onClick={() => toggleButtonClick(index)}
                                    disabled={contentsType === 'viewing'
                                    }
                                >
                                    {button.label}
                                </FormOptionButton>
                            ))}
                        </ButtonGroupWrap>
                    </FormFieldSingle>
                </FormFieldRow>
                <FormFieldRow>
                    <FormFieldSingle label={"기술 스택"}>
                        <InputText
                            name="techStack"
                            value={newGroupData.techStack}
                            onChange={(e) => handleInputChange('techStack', e.target.value)}
                            disabled={contentsType === 'viewing'}
                            placeholder={"#기술 #스택"}
                            required
                        />
                    </FormFieldSingle>
                </FormFieldRow>
                <FormFieldRow>
                    <FormFieldSingle label={"모집 마감일"}>
                        <DateButton
                            name="deadLineDate"
                            value={newGroupData.deadLineDate}
                            onChange={(date) => handleInputChange('deadLineDate', date)}
                            disabled={contentsType === 'viewing'}
                        />
                    </FormFieldSingle>
                    {newGroupData.groupType === 'project' ? (
                        <>
                            <FormFieldSingle label={"총 모집 인원"}>
                                <InputNumber value={newGroupData.totalMemberCount} disabled='true' />
                            </FormFieldSingle>
                        </>
                    ) :
                        <>
                            <FormFieldSingle label={"총 모집 인원"}>
                                <SelectButton
                                    name="totalMemberCount"
                                    defaultValue={newGroupData.totalMemberCount} disabled={contentsType == 'viewing'}>
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
                        </>
                    }

                </FormFieldRow>
                <FormFieldRow>
                    {newGroupData.groupType === 'project' ? (
                        <>
                            <FormFieldRow>
                                <FormFieldSingle label={"모집 직군"}>
                                    <SelectButton
                                        name="recruitingJob"
                                        defaultValue="frontEnd" disabled={contentsType === 'viewing'}>
                                        <option value="frontEnd">프론트엔드개발자</option>
                                        <option value="backEnd">백엔드개발자</option>
                                        <option value="planner">기획자</option>
                                        <option value="designer">디자이너</option>
                                    </SelectButton>
                                </FormFieldSingle>
                                <FormFieldSingle label={"직군별 모집 인원"}>
                                    <SelectButton
                                        name="numOfrecruitingJob"
                                        defaultValue=""
                                        disabled={contentsType === 'viewing'}>
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
                        </>
                    ) :
                        <>
                        </>
                    }
                </FormFieldRow>
            </GroupInfoContainer>

            <hr style={{ border: '1px solid var(--black200)' }} />
            <FormFieldRow>
                <FormTitle>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-2-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.646 6.24c0-.691.493-1.306 1.336-1.306.756 0 1.313.492 1.313 1.236 0 .697-.469 1.23-.902 1.705l-2.971 3.293V12h5.344v-1.107H7.268v-.077l1.974-2.22.096-.107c.688-.763 1.287-1.428 1.287-2.43 0-1.266-1.031-2.215-2.613-2.215-1.758 0-2.637 1.19-2.637 2.402v.065h1.271v-.07Z" />
                    </svg>
                    모임 소개
                </FormTitle>
            </FormFieldRow>
            <GroupInfoContainer>
                <FormFieldRow>
                    <FormFieldSingle label={"주제"}>
                        <InputText
                            name="subject"
                            value={newGroupData.subject}
                            onChange={(e) => handleInputChange('subject', e.target.value)}
                            disabled={contentsType === 'viewing'}
                            placeholder={"주제를 입력해주세요"}
                            required
                        />
                    </FormFieldSingle>
                </FormFieldRow>
                <TextArea
                    name="introduction"
                    rows="4"
                    placeholder="모집에 대한 간단한 소개를 작성해주세요."
                    value={newGroupData.introduction}
                    onChange={(e) => handleInputChange('introduction', e.target.value)}
                    disabled={contentsType === 'viewing'}
                    required
                />
                <TextArea
                    name="guidelines"
                    rows="4"
                    placeholder="유의사항을 적어주세요."
                    value={newGroupData.guidelines}
                    onChange={(e) => handleInputChange('guidelines', e.target.value)}
                    disabled={contentsType === 'viewing'}
                    required
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
            <ButtonGroupCenter>
                {contentsType === 'editing' ? (
                    <>
                        {/* editing */}
                        {/* 그룹 페이지 관리 탭 */}
                        <CancelButton onClick={() => setContentsType('viewing')} />
                        <SaveButton onClick={handleSaveClick} />
                    </>
                ) : contentsType === 'writing' ? (
                    <>
                        {/* writing */}
                        {/* 팀원 모집하기 페이지 */}
                        <CancelButton onClick={() => window.history.back()} />
                        <CompleteButton />
                    </>
                ) : (
                    <>
                        {/* viewing */}
                    </>
                )}
            </ButtonGroupCenter>
        </GroupInfoContentsWrapper>
    );
};

export default GroupInfoContent;
