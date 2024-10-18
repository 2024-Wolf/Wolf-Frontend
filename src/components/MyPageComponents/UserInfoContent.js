import styled, { css } from "styled-components";
import {
    ModalContentWrapper, Div, Wrapper3, Row, ContentsRow, Column, SubContentsWrapper, EtcContentsWrapper,
    SubTitle, Label, LinkInputDiv, Violet400BackgroundButton, ButtonGroupRight, ButtonGroupLeft,
    Hr
} from "../GlobalStyledComponents";

import React, { useEffect, useState } from "react";
import InputText from "../Input/InputText";
import ActivityScoreBar from "../ActivityScore/ActivityScoreBar";
import SelectButton from "../Button/SelectButton";
import { LinkButtonGroup, LinkInputDirection } from "../Group/TodoContent";
import RefreshIcon from "../Icon/RefreshIcon";
import ALinkText from "../Input/ALinkText";
import TextArea from "../Input/TextArea";
import EditButton from "../Button/EditButton"
import WithdrawalButton from "../Button/WithdrawalButton"
import SaveButton from "../Button/SaveButton";
import CancelButton from "../Button/CancelButton";
import CopyButton from "../Button/CopyButton";
import InputNumber from "../Input/InputNumber"
import GlobalSvg from "../Icon/GlobalSvg";
import { postMyProfile } from "../Apis/UserApi";
import { deleteUser } from "../Apis/AuthApi";
import { useNavigate } from 'react-router-dom';



const UserInfoContent = ({
    contentsType,
    setContentsType,
    profileData
}) => {
    const navigate = useNavigate();

    const [newUserLinks, setNewUserLinks] = useState([
        {
            Id: 0,
            linkType: "GITHUB",
            linkUrl: profileData.links.filter(link => link.linkType === "GITHUB")[0] ?
                profileData.links.filter(link => link.linkType === "GITHUB")[0]?.linkUrl
                : "",
            linkSvg: GlobalSvg.github('25px')
        },
        {
            Id: 0,
            linkType: "FIGMA",
            linkUrl: profileData.links.filter(link => link.linkType === "FIGMA")[0] ?
                profileData.links.filter(link => link.linkType === "FIGMA")[0]?.linkUrl
                : "",
            linkSvg: GlobalSvg.figma('25px')
        },
        {
            Id: 0,
            linkType: "NOTION",
            linkUrl: profileData.links.filter(link => link.linkType === "NOTION")[0] ?
                profileData.links.filter(link => link.linkType === "NOTION")[0]?.linkUrl
                : "",
            linkSvg: GlobalSvg.notion('25px')
        },
        {
            Id: 0,
            linkType: "VELOG",
            linkUrl: profileData.links.filter(link => link.linkType === "VELOG")[0] ?
                profileData.links.filter(link => link.linkType === "VELOG")[0]?.linkUrl
                : "",
            linkSvg: GlobalSvg.velog('25px')
        }
    ]);

    const [newProfileData, setNewProfileData] = useState(profileData);

    useEffect(() => {
        setNewProfileData(prev => ({
            ...prev,
            links: newUserLinks.map(({ linkType, linkUrl }, index) => ({
                Id: newProfileData.id, // 각 링크의 고유 ID를 설정
                linkType,
                linkUrl: linkUrl,
            }))
        }));
    }, []);




    const [isEditing, setIsEditing] = useState(false);

    const [isNickNamePossible, setIsNickNamePossible] = useState(false);
    const [isNickNameImpossible, setIsNickNameImpossible] = useState(false);
    const [newLink, setNewLink] = useState({ imgSrc: '', name: '', url: '' });
    const [editingLinkIndex, setEditingLinkIndex] = useState(null);



    const handleEditClick = () => {
        setContentsType('myselfEditing');
    };

    const handleSaveClick = () => {
        setIsEditing(false); // 편집 종료
        setContentsType('myselfViewing');
    };

    const handleCancelClick = () => {
        setIsEditing(false); // 편집 종료
        setContentsType('myselfViewing');
        setNewProfileData(profileData); // 수정 전의 DB 정보로 초기화
    };

    const deleteUserHandler = async () => {
        // eslint-disable-next-line no-restricted-globals
        if (confirm("탈퇴 하시겠습니까?")) {
            // setIsLoading(true);
            // setError(null); // 이전 에러 초기화

            try {
                const result = await deleteUser();
                alert("회원 정보가 삭제되었습니다", result);
            } catch (error) {
                // setError('회원 정보 삭제 실패');
                console.error(error);
            } finally {
                // setIsLoading(false);
            }

            navigate("/");
        } else {
        }
    };


    const handleInputChange = (field, value) => {
        setIsEditing(true); // 수정 시작

        setNewProfileData((prev) => ({
            ...prev,
            [field]: value
        }));
    };




    const handleNickName = (e) => {
        e.preventDefault();

        // 중복된 닉네임인지 검증하는 로직 구현이 필요함
        if (true) {
            // 닉네임 사용 가능
            alert('사용 가능한 닉네임입니다')
            setIsNickNamePossible(true);
            setIsNickNameImpossible(false);

        } else {
            // 닉네임 사용 불가
            alert('중복된 닉네임입니다')
            setIsNickNameImpossible(true);
            setIsNickNamePossible(false);
        }
    };
    // newUserLinks.links.filter(link => link.linkType === linkType)[0]

    const handleInputLinkChange = (targetLinkType, value) => {
        setIsEditing(true); // 수정 시작


        // 바꾼 value 값으로 다시 넣어줌
        setNewProfileData(prev => ({
            ...prev,
            links: prev.links.map(link =>
                link.linkType === targetLinkType ? { ...link, linkUrl: value } : link
            )
        }));
    };


    // URL 유효성 검사
    const isValidURL = (urlString) => {
        try {
            new URL(urlString);
            return true;
        } catch (_) {
            return false;
        }
    };



    const editLinkRefresh = (targetLinkType) => {
        if (window.confirm("내용을 초기화 하시겠습니까?")) {
            // 내용을 초기화 함
            setNewProfileData(prev => ({
                ...prev,
                links: prev.links.map(link =>
                    link.linkType === targetLinkType ? { ...link, linkUrl: '' } : link
                )
            }));

        } else {
            return; // 초기화하지 않으면 함수 종료
        }
    };

    // 링크 수정 취소
    const editLinkCancel = (event) => {
        event.preventDefault();
        setEditingLinkIndex(null);
        setNewLink({ name: '', url: '' }); // 입력 필드 초기화
    };

    const testData = {
        id: newProfileData.id,
        nickname: newProfileData.nickname,
        name: newProfileData.name,
        jobTitle: newProfileData.jobTitle,
        organization: newProfileData.organization,
        experience: newProfileData.experience,
        interests: newProfileData.interests,
        refundAccount: newProfileData.refundAccount,
        introduction: newProfileData.introduction,
        links: [
            {
                id: 0,
                linkType: "GITHUB",
                linkUrl: ""
            },
            {
                id: 0,
                linkType: "FIGMA",
                linkUrl: ""
            },
            {
                id: 0,
                linkType: "NOTION",
                linkUrl: ""
            },
            {
                id: 0,
                linkType: "VELOG",
                linkUrl: ""
            }
        ]
    }

    console.log(newProfileData.links)
    // 링크 수정 완료
    const editLinkFinish = async (event) => {
        event.preventDefault();

        // setIsLoading(true);
        // setError(null); // 이전 에러 초기화


        try {
            // newProfileData를 함수에 전달하여 API 호출
            const result = await postMyProfile(testData);
            alert('링크 등록 성공:', result);
        } catch (error) {
            // setError('프로필 수정 실패');
            console.error(error);
        } finally {
            // setIsLoading(false);
        }

    };


    const renderNicknameNotice = () => {
        return (
            <div style={{ height: '16px' }}>
                {/* {!isButtonDisable && } */}
                {isNickNamePossible &&
                    <span
                        style={{
                            fontSize: '13px', color: 'var(--blueViolet700)'
                        }}>
                        사용 가능한 닉네임입니다
                    </span>
                }
                {isNickNameImpossible &&
                    <span
                        style={{
                            fontSize: '13px', color: '#ED4E51'
                        }}>
                        사용 불가능한 닉네임입니다
                    </span>
                }
            </div>
        )
    };


    // 링크 수정 시작
    const editLinkStart = (index) => {
        setEditingLinkIndex(index);
        // setNewLink(links[index]); // 수정할 링크 데이터를 newLink로 설정
    };

    return (
        <Wrapper3>
            {GlobalSvg.apple}
            <ButtonGroupRight>
                {contentsType === 'myselfEditing' ? (
                    <>
                        {/* myselfEditing */}
                        {/* 저장 버튼 */}
                        <SaveButton
                            type="button"
                            style={{ width: '88.99px' }}
                            onClick={handleSaveClick} />
                        {/* 취소 버튼 */}
                        <CancelButton
                            type="button"
                            style={{ width: '88.99px' }}
                            onClick={handleCancelClick} />
                        {/* 수정 중 문구 */}
                        <span style={{ display: "flex", alignItems: "center", height: "35px", gap: "10px", width: '88.99px' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                            </svg>
                            수정 중
                        </span>
                    </>
                ) : contentsType === 'strangerViewing' ? (
                    <>
                        {/* strangerViewing */}
                        {/* 없음 */}
                    </>
                ) : (
                    <>
                        {/* myselfViewing */}
                        {/* 수정 버튼 */}
                        <EditButton onClick={handleEditClick} />
                    </>
                )}
            </ButtonGroupRight>
            <ContentsRow>
                <SubContentsWrapper>
                    <div>
                        <SubTitle>기본 정보</SubTitle>
                        <Hr />
                    </div>
                    <ContentsRow>
                        <Column>
                            <Div>
                                <Label>이름</Label>
                                <Row>
                                    <InputText
                                        type="text"
                                        readOnly={true}
                                        value={isEditing ? newProfileData["name"] : profileData["name"]}
                                        onChange={(e) => handleInputChange('name', e.target.value)}
                                    />
                                </Row>
                            </Div>
                            <Div>
                                <Label>이메일</Label>
                                <Row>
                                    <InputText
                                        type="email"
                                        readOnly={!(contentsType === 'myselfEditing')}
                                        value={isEditing ? newProfileData["email"] : profileData["email"]}
                                        onChange={(e) => handleInputChange('email', e.target.value)}
                                    />
                                </Row>
                            </Div>
                        </Column>
                        <Column>
                            <Div>
                                <Label>활동 점수</Label>
                                <Row>
                                    <ActivityScoreBar activityMetricData={profileData.activityMetric} />
                                </Row>
                            </Div>
                        </Column>
                    </ContentsRow>
                    <ModalContentWrapper style={{ gap: '5px' }}>
                        <Div style={{ gap: '2px' }}>
                            <Row>
                                <Div>
                                    <Label>닉네임</Label>
                                    <Row>
                                        <InputText
                                            type="text"
                                            readOnly={!(contentsType === 'myselfEditing')}
                                            value={isEditing ? newProfileData["nickname"] : profileData["nickname"]}
                                            onChange={(e) => handleInputChange('nickname', e.target.value)}
                                        />
                                    </Row>
                                </Div>
                                {contentsType === 'myselfEditing' ? (<>
                                    {/* myselfEditing */}
                                    <Violet400BackgroundButton
                                        type="button"
                                        onClick={handleNickName}
                                    >
                                        중복 검사
                                    </Violet400BackgroundButton>
                                </>) : (<>
                                    {/* strangerViewing */}
                                    {/* myselfViewing */}
                                </>)}

                            </Row>
                            {/* 중복 검사 후 코멘트 출력 */}
                            {renderNicknameNotice()}
                        </Div>
                        <Div>
                            <Label>환불 계좌</Label>
                            <Row>
                                <SelectButton
                                    style={{
                                        pointerEvents: contentsType === 'myselfEditing' ? '' : 'none',
                                        backgroundColor: contentsType === 'myselfEditing' ? '' : 'var(--violet200)' // 비활성화 색상
                                    }}
                                >
                                    <option value="kb">국민은행</option>
                                    <option value="shinhan">신한은행</option>
                                    <option value="hana">하나은행</option>
                                    <option value="woori">우리은행</option>
                                    <option value="nh">농협은행</option>
                                    <option value="ibk">기업은행</option>
                                    <option value="sc">SC제일은행</option>
                                    <option value="kbank">케이뱅크</option>
                                    <option value="toss">토스뱅크</option>
                                    <option value="busan">부산은행</option>
                                    <option value="gwangju">광주은행</option>
                                    <option value="daegu">대구은행</option>
                                    <option value="jeonbuk">전북은행</option>
                                    <option value="jeju">제주은행</option>
                                    <option value="creditunion">신협중앙회</option>
                                </SelectButton>
                                <InputText
                                    type="text"
                                    readOnly={!(contentsType === 'myselfEditing')}
                                    value={isEditing ? newProfileData["refundAccount"] : profileData["refundAccount"]}
                                    onChange={(e) => handleInputChange('refundAccount', e.target.value)}
                                />
                            </Row>
                        </Div>
                    </ModalContentWrapper>
                </SubContentsWrapper>

                <SubContentsWrapper>
                    <div>
                        <SubTitle>경력 정보</SubTitle>
                        <Hr />
                    </div>
                    <Div>
                        <Label>직무</Label>
                        <Row>
                            <InputText
                                type="text"
                                readOnly={!(contentsType === 'myselfEditing')}
                                value={isEditing ? newProfileData["jobTitle"] : profileData["jobTitle"]}
                                onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                            />
                        </Row>
                    </Div>
                    <Div>
                        <Label>소속</Label>
                        <Row>
                            <InputText
                                type="text"
                                readOnly={!(contentsType === 'myselfEditing')}
                                value={isEditing ? newProfileData["organization"] : profileData["organization"]}
                                onChange={(e) => handleInputChange('organization', e.target.value)}
                            />
                        </Row>
                    </Div>
                    <Div>
                        <Label>경력</Label>

                        <Row>
                            <InputNumber
                                style={{ textAlign: 'start' }}
                                readOnly={!(contentsType === 'myselfEditing')}
                                value={isEditing ? newProfileData['experience'] : profileData['experience']}
                                onChange={(e) => handleInputChange('experience', e.target.value)}
                                min={0}
                                max={100}
                                step={1} // 1단위로 증가/감소
                            />
                            <span style={{ height: '100%', lineHeight: '35px' }}>년</span>
                        </Row>
                    </Div>
                </SubContentsWrapper>
            </ContentsRow >

            <EtcContentsWrapper>
                <div>
                    <SubTitle>기타 정보</SubTitle>
                    <Hr />
                </div>
                <Div>
                    <Label>자기 소개</Label>
                    <Row>
                        <TextArea
                            value={isEditing ? newProfileData['introduction'] : profileData['introduction']}
                            onChange={(e) => handleInputChange("introduction", e.target.value)}
                            disabled={!(contentsType === 'myselfEditing')}
                        />
                    </Row>
                </Div>

                {newUserLinks.map((link, index) => (
                    <LinkInputDiv key={`link-${index}`}>
                        <span style={{
                            width: '30px', textAlign: 'center', marginTop: '4px'
                        }}>
                            {link.linkSvg}
                        </span>
                        {contentsType === 'myselfEditing' ? (
                            <>
                                {/* myselfEditing */}
                                <LinkInputDirection>
                                    <div
                                        style={{
                                            display: 'flex',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            width: '100%',
                                            flexDirection: 'column',
                                            gap: '3px'
                                        }}
                                    >
                                        <InputText
                                            style={{
                                                border: '2px solid var(--violet500)',
                                                fontSize: '14px',
                                                color: 'black'
                                            }}
                                            type="text"
                                            placeholder="링크를 입력하세요"
                                            value={isEditing ?
                                                newProfileData.links.filter(data => data.linkType === `${link.linkType}`)[0]?.linkUrl :
                                                (profileData.links.filter(link => link.linkType === `${link.linkType}`)[0] ?
                                                    profileData.links.filter(link => link.linkType === `${link.linkType}`)[0]?.linkUrl :
                                                    "")}
                                            onChange={(e) => handleInputLinkChange(link.linkType, e.target.value)}
                                        />
                                        {/* {console.log('newUserLinks.links', newUserLinks)} */}

                                        {!isValidURL(isEditing ?
                                            newProfileData.links.filter(data => data.linkType === `${link.linkType}`)[0]?.linkUrl :
                                            (profileData.links.filter(link => link.linkType === `${link.linkType}`)[0] ?
                                                profileData.links.filter(link => link.linkType === `${link.linkType}`)[0]?.linkUrl :
                                                "")) &&
                                            <span
                                                style={{
                                                    fontSize: '12px', color: '#ED4E51', marginLeft: '5px'
                                                }}>
                                                유효한 링크를 입력하세요
                                            </span>}
                                    </div>
                                    <LinkButtonGroup>
                                        <RefreshIcon type="button" onClick={() => editLinkRefresh(link.linkType)} />
                                        <Violet400BackgroundButton
                                            onClick={editLinkFinish}
                                            disabled={!isValidURL(isEditing ?
                                                newProfileData.links.filter(data => data.linkType === `${link.linkType}`)[0]?.linkUrl :
                                                (profileData.links.filter(link => link.linkType === `${link.linkType}`)[0] ?
                                                    profileData.links.filter(link => link.linkType === `${link.linkType}`)[0]?.linkUrl :
                                                    ""))}>
                                            등록
                                        </Violet400BackgroundButton>
                                    </LinkButtonGroup>
                                </LinkInputDirection>
                            </>
                        ) : (
                            <>
                                {/* strangerViewing */}
                                {/* myselfViewing */}
                                {/* 링크 보기 모드 */}
                                <ALinkText
                                    style={{ border: '2px solid rgba(255, 255, 255, 0)' }}
                                    href={(profileData.links.filter(link => link.linkType === `${link.linkType}`)[0] ?
                                        profileData.links.filter(link => link.linkType === `${link.linkType}`)[0]?.linkUrl :
                                        "")}
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    {(profileData.links.filter(link => link.linkType === `${link.linkType}`)[0] ?
                                        profileData.links.filter(link => link.linkType === `${link.linkType}`)[0]?.linkUrl :
                                        "")}
                                </ALinkText>
                                <CopyButton copyTarget={(profileData.links.filter(link => link.linkType === `${link.linkType}`)[0] ?
                                    profileData.links.filter(link => link.linkType === `${link.linkType}`)[0]?.linkUrl :
                                    "")}>
                                </CopyButton>
                            </>
                        )}

                    </LinkInputDiv>
                ))
                }
            </EtcContentsWrapper>
            {
                contentsType === 'strangerViewing' ?
                    (<>
                        {/* strangerViewing */}
                    </>)
                    : (<>
                        {/* myselfEditing */}
                        {/* myselfViewing */}
                        <ButtonGroupLeft>
                            <WithdrawalButton onClick={deleteUserHandler}>탈퇴하기</WithdrawalButton>
                        </ButtonGroupLeft>
                    </>)
            }
        </Wrapper3 >
    );
};

export default UserInfoContent;