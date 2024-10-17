import styled, { css } from "styled-components";
import {
    ModalContentWrapper, Div, Wrapper3, Row, ContentsRow, Column, SubContentsWrapper, EtcContentsWrapper,
    SubTitle, Label, LinkInputDiv, Violet400BackgroundButton, ButtonGroupRight, ButtonGroupLeft,
    Hr
} from "../GlobalStyledComponents";

import React, { Children, useEffect, useState } from "react";
import InputText from "../Input/InputText";
import ActivityScoreBar from "../ActivityScore/ActivityScoreBar";
import RegularIcon from "../Icon/RegularIcon";
import TabContentsWrapper from "../TabContentsWrapper";
import LinkInput from "../Input/Link/LinkInput";
import SelectButton from "../Button/SelectButton";
import { LinkButtonGroup, LinkInputDirection } from "../Group/TodoContent";
import RefreshIcon from "../Icon/RefreshIcon";
import ALinkText from "../Input/ALinkText";
import TextArea from "../Input/TextArea";
import EditButton from "../Button/EditButton"
import WithdrawalButton from "../Button/WithdrawalButton"
import { Navigate } from "react-router-dom";
import CompleteButton from "../Button/CompleteButton";
import SaveButton from "../Button/SaveButton";
import CancelButton from "../Button/CancelButton";
import CopyButton from "../Button/CopyButton";
import InputNumber from "../Input/InputNumber"


const DummyLinkData = [{
    github: {
        linkId: 0,
        linkType: "VELOG",
        linkUrl: "",
        imgSrc: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
        name: 'GitHub',
        url: 'https://github.com/2024-Wolf'
    },
    figma: {
        linkId: 0,
        linkType: "VELOG",
        linkUrl: "",
        imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
        name: 'Figma',
        url: 'https://www.figma.com/design/rM1Gynrm58vcLKV0TnLQeB/Final-Project?node-id=0-1&node-type=canvas&t=BDG3dMm1HoLkkbv8-0'
    }
}];

const UserInfoContent = ({
    contentsType,
    setContentsType,
    profileData
}) => {

    const [newUserLinks, setNewUserLinks] = useState([
        {
            linkId: 0,
            linkType: "GITHUB",
            linkUrl: ""
        },
        {
            linkId: 0,
            linkType: "FIGMA",
            linkUrl: ""
        },
        {
            linkId: 0,
            linkType: "NOTION",
            linkUrl: ""
        },
        {
            linkId: 0,
            linkType: "VELOG",
            linkUrl: ""
        }
    ]);

    const [newProfileData, setNewProfileData] = useState(profileData);

    const [isEditing, setIsEditing] = useState(false);

    const [isNickNamePossible, setIsNickNamePossible] = useState(false);
    const [isNickNameImpossible, setIsNickNameImpossible] = useState(false);
    const [links, setLinks] = useState(DummyLinkData || []);
    const [newLink, setNewLink] = useState({ imgSrc: '', name: '', url: '' });
    const [editingLinkIndex, setEditingLinkIndex] = useState(null);



    const userLink = {
        github: {
            name: 'github',
            imgSrc: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
            url: ''
        },
        figma: {
            name: 'figma',
            imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
            url: ''
        }
    };


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

    const deleteUserHandler = () => {
        // eslint-disable-next-line no-restricted-globals
        if (confirm("탈퇴 하시겠습니까?")) {
            alert("회원 정보가 삭제되었습니다");
            Navigate("/");
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

    const handleInputLinkChange = (field, value) => {
        setNewProfileData(prev => ({
            ...prev,
            [field]: {
                ...prev[field],
                url: value // URL만 업데이트
            }
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


    const InputField = ({ children, label }) => (
        <>
            <Div>
                <Label>{label}</Label>
                <Row>
                    {children}
                </Row>
            </Div>
        </>
    );

    // URL 유효성 검사
    const isValidURL = (urlString) => {
        try {
            new URL(urlString);
            return true;
        } catch (_) {
            return false;
        }
    };



    const editLinkRefresh = (field) => {
        if (window.confirm("내용을 초기화 하시겠습니까?")) {
            setNewProfileData(prev => ({
                ...prev,
                [field]: {
                    ...prev[field],
                    url: '' // URL 초기화
                }
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


    // 링크 수정 완료
    const editLinkFinish = (event) => {
        event.preventDefault();
        const updatedLinks = links.map((link, index) =>
            index === editingLinkIndex ? newLink : link
        );
        setLinks(updatedLinks);
        setEditingLinkIndex(null);
        setNewLink({ name: '', url: '' }); // 입력 필드 초기화
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
        setNewLink(links[index]); // 수정할 링크 데이터를 newLink로 설정
    };

    return (
        <Wrapper3>
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
                        <span style={{ display: "flex", alignItems: "center", height: "35px", gap: "10px" }}>
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
                            value={isEditing ? newProfileData['introduce'] : profileData['introduce']}
                            onChange={(e) => handleInputChange("introduce", e.target.value)}
                            disabled={!(contentsType === 'myselfEditing')}
                        />
                    </Row>
                </Div>

                {[userLink.github, userLink.figma].map((link, index) => (
                    <LinkInputDiv key={index}>
                        <span style={{
                            width: '30px', textAlign: 'center', marginTop: '4px'
                        }}>
                            <img
                                src={link.imgSrc}
                                alt={`${link.name}-img`}
                                width="25"
                                height="25" />
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
                                            value={link.url}
                                            onChange={(e) => handleInputLinkChange(link.name, e.target.value)}
                                        />
                                        {!isValidURL(link.url) &&
                                            <span
                                                style={{
                                                    fontSize: '12px', color: '#ED4E51', marginLeft: '5px'
                                                }}>
                                                유효한 링크를 입력하세요
                                            </span>}
                                    </div>
                                    <LinkButtonGroup>
                                        <RefreshIcon type="button" onClick={() => editLinkRefresh(link.name)} />
                                        <Violet400BackgroundButton onClick={editLinkFinish} disabled={!isValidURL(link.url)}>
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
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    {link.url}
                                </ALinkText>
                                <CopyButton copyTarget={link.url}>
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