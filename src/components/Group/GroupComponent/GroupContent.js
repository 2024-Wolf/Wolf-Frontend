import styled from "styled-components";

import React, { useState } from "react";

import FormFieldMultiple from "./FormFieldMultiple";
import FormFieldSingle from "./FormFieldSingle";
import DateButton from "../../Button/DateButton";
import SelectButton from "../../Button/SelectButton";
import { FormLabel, MemberInfo, FormFieldRow, FormTitle, ButtonGroupCenter, ButtonGroupRight, ButtonGroupWrap, DoubleDateContainer } from "../../GlobalStyledComponents";
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
import CancelIcon from "../../Icon/CancelIcon";
import { useNavigate } from 'react-router-dom';
import ProfileIcon from "../../Icon/ProfileIcon";
import ImagePreview from "../../Img/ImagePreview";

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
    @media (max-width: 950px) {
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


const ImagePlaceholder = styled.div`
    display: ${(props) => (props.hasFiles ? 'flex' : 'none')};
    flex-direction: row;
    justify-content: center;
    align-items: start;
    width: 90%;
    gap: 10px;
    margin: 0 20px;
`;

const GroupContent = ({ contentType = "viewing", memberData, groupData }) => {
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

    const deleteGroupHandler = () => {
        // eslint-disable-next-line no-restricted-globals
        if (confirm("모임을 삭제하시겠습니까?")) {
            alert("모임이 삭제되었습니다");
            navigate("/");
        } else {
        }
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
            <GroupInfoContainer>
                <FormFieldRow>
                    <FormTitle>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
                            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z" />
                            <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z" />
                        </svg>
                        모임 정보
                    </FormTitle>
                    <ButtonGroupRight>
                        {contentsType === 'editing' ? (

                            <>
                                {/* editing */}
                                {/* 그룹 페이지 관리 탭 */}
                                <span style={{ display: "flex", alignItems: "center", height: "35px", gap: "10px" }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                                    </svg>
                                    수정 중
                                </span>
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
                                <DeleteButton onClick={deleteGroupHandler} />

                            </>

                        )}
                    </ButtonGroupRight>

                </FormFieldRow>
                <FormFieldRow>
                    <FormFieldSingle label={"모임 구분"}>
                        <SelectButton name="groupType"
                            value={newGroupData.groupType}
                            onChange={(e) => handleInputChange('groupType', e.target.value)}
                            disabled={contentsType === 'viewing'}
                        >
                            <option value="study">스터디</option>
                            <option value="project">프로젝트</option>
                        </SelectButton>
                    </FormFieldSingle>
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
                        <ImagePreview
                            isEditing={true}
                            id="thumbnail"
                            name="thumbnail"
                            disabled={contentsType === 'viewing'}
                            isUploadButtonAppear={true}
                            style={{
                                flexDirection: 'column-reverse',
                                alignItems: 'start',
                                justifyContent: 'start',
                            }}
                        />
                    </FormFieldSingle>
                </FormFieldRow>
            </GroupInfoContainer>
            <hr style={{ border: '1px solid var(--black200)' }} />
            <GroupInfoContainer>
                <FormTitle>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-person-fill" viewBox="0 0 16 16">
                        <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0m2 5.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-.245S4 12 8 12s5 1.755 5 1.755" />
                    </svg>
                    모집 기본 정보
                </FormTitle>
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
                                <FormFieldSingle label={"모집 직군"} label2={"분류"}>
                                    <SelectButton
                                        name="recruitingJob"
                                        defaultValue="frontEnd" disabled={contentsType === 'viewing'}>
                                        <option value="frontEnd">프론트엔드개발자</option>
                                        <option value="backEnd">백엔드개발자</option>
                                        <option value="planner">기획자</option>
                                        <option value="designer">디자이너</option>
                                    </SelectButton>
                                </FormFieldSingle>
                                <FormFieldSingle label={"직군별"} label2={"모집 인원"}>
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
            <GroupInfoContainer>
                <FormTitle>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-megaphone-fill" viewBox="0 0 16 16">
                        <path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0zm-1 .724c-2.067.95-4.539 1.481-7 1.656v6.237a25 25 0 0 1 1.088.085c2.053.204 4.038.668 5.912 1.56zm-8 7.841V4.934c-.68.027-1.399.043-2.008.053A2.02 2.02 0 0 0 0 7v2c0 1.106.896 1.996 1.994 2.009l.496.008a64 64 0 0 1 1.51.048m1.39 1.081q.428.032.85.078l.253 1.69a1 1 0 0 1-.983 1.187h-.548a1 1 0 0 1-.916-.599l-1.314-2.48a66 66 0 0 1 1.692.064q.491.026.966.06" />
                    </svg>
                    모임 소개
                </FormTitle>
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
                    placeholder="모집에 대한 간단한 소개를 작성해주세요."
                    value={newGroupData.introduction}
                    onChange={(e) => handleInputChange('introduction', e.target.value)}
                    disabled={contentsType === 'viewing'}
                    required
                />
                <TextArea
                    name="guidelines"
                    placeholder="유의사항을 적어주세요."
                    value={newGroupData.guidelines}
                    onChange={(e) => handleInputChange('guidelines', e.target.value)}
                    disabled={contentsType === 'viewing'}
                    required
                />
            </GroupInfoContainer>
            {memberData && (
                <>
                    <hr style={{ border: '1px solid var(--black200)' }} />
                    <GroupInfoContainer>
                        <FormTitle>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
                                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                            </svg>
                            모임원 관리
                        </FormTitle>
                        <div>
                            {memberData?.map((user) => (
                                <MemberInfo key={user.id}>
                                    <ProfileIcon /*src="" alt=""*/ className="UserDetails">{user.name}</ProfileIcon>
                                    <FormFieldRow>
                                        <FormFieldMultiple label={"모집 직군"} className="roleSelect">
                                            <SelectButton
                                                defaultValue={user.role} disabled={contentsType === 'viewing'}>
                                                <option value="frontEnd">프론트엔드개발자</option>
                                                <option value="backEnd">백엔드개발자</option>
                                                <option value="planner">기획자</option>
                                                <option value="designer">디자이너</option>
                                            </SelectButton>
                                        </FormFieldMultiple>
                                        <FormFieldMultiple label={"권한"} className="roleSelect">
                                            <SelectButton defaultValue={user.position} disabled={contentsType === 'viewing'}>
                                                <option value="master">모집장</option>
                                                <option value="member">모집원</option>
                                            </SelectButton>
                                        </FormFieldMultiple>
                                    </FormFieldRow>
                                </MemberInfo>
                            ))}
                        </div>
                    </GroupInfoContainer>
                </>
            )
            }

            <ButtonGroupCenter>
                {contentsType === 'editing' ? (
                    <>
                        {/* editing */}
                        {/* 그룹 페이지 관리 탭 */}
                        <SaveButton onClick={handleSaveClick} />
                        <CancelButton onClick={() => setContentsType('viewing')} />
                    </>
                ) : contentsType === 'writing' ? (
                    <>
                        {/* writing */}
                        {/* 팀원 모집하기 페이지 */}
                        <CompleteButton />
                        <CancelButton onClick={() => window.history.back()} />
                    </>
                ) : (
                    <>
                        {/* viewing */}
                    </>
                )}
            </ButtonGroupCenter>
        </GroupInfoContentsWrapper >
    );
};

export default GroupContent;
