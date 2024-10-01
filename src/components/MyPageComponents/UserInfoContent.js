import styled, { css } from "styled-components";
import { Wrapper3, Row, ContentsRow, Column2, ContentsWrapper3, SubContentsWrapper, EtcContentsWrapper, SubTitle2, InputLabel, Description2, ToggleBox, TextArea6, LinkRow, Button12, UpdateButton, CancelButton3, ButtonContainer } from "../GlobalStyledComponents";

import React, { useState } from "react";
import WhiteInputBox from "../Input/WhiteInputBox";
import ActivityScoreBar from "../ActivityScore/ActivityScoreBar";
import RegularIcon from "../Icon/RegularIcon";
import TabContentsWrapper from "../TabContentsWrapper";
import LinkInput from "../Input/Link/LinkInput";

const UserInfoContent = () => {
    const [userInfo, setUserInfo] = useState({
        name: "홍길동",
        nickname: "nickname",
        account: "account",
        job: "job",
        company: "company",
        career: "career",
        introduce: "안녕하세요 자기소개 입니다. 반갑습니다.",
        email: "test@gmail.com"
    });

    const handleInputChange = (field, value) => {
        setUserInfo(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const InputField = ({ label, field }) => (
        <>
            <InputLabel>{label}</InputLabel>
            <WhiteInputBox
                value={userInfo[field]}
                onChange={(e) => handleInputChange(field, e.target.value)}
            />
        </>
    );

    return (
        <Wrapper3>
            <ContentsRow>
                <SubContentsWrapper>
                    <SubTitle2>기본 정보</SubTitle2>
                    <ContentsRow>
                        <Column2>
                            <InputField label="이메일" field="email" isActive={false} />
                            <InputField label="이름" field="name" />
                            <InputField label="닉네임" field="nickname" />
                            <Description2>사용 가능한 닉네임입니다.</Description2>
                        </Column2>
                        <Column2>
                            <InputLabel>활동 점수</InputLabel>
                            <ActivityScoreBar />
                        </Column2>
                    </ContentsRow>
                    <InputLabel>환불 계좌</InputLabel>
                    <ContentsRow>
                        <ToggleBox />
                        <WhiteInputBox
                            value={userInfo.account}
                            onChange={(e) => handleInputChange("account", e.target.value)}
                        />
                    </ContentsRow>
                </SubContentsWrapper>

                <SubContentsWrapper>
                    <SubTitle2>기본 정보</SubTitle2>
                    <InputField label="직무" field="job" />
                    <InputField label="소속" field="company" />
                    <InputField label="경력" field="career" />
                </SubContentsWrapper>
            </ContentsRow>

            <EtcContentsWrapper>
                <SubTitle2>기타 정보</SubTitle2>
                <InputLabel>자기 소개</InputLabel>
                <TextArea6
                    value={userInfo.introduce}
                    onChange={(e) => handleInputChange("introduce", e.target.value)}
                />
                {/* LinkInput 컴포넌트 사용 */}
                <LinkInput
                    iconSrc={"https://cdn-icons-png.flaticon.com/512/25/25231.png"}
                    iconAlt={"github"}
                    inputValue={userInfo.github}
                    onInputChange={(e) => handleInputChange("github", e.target.value)}
                />
                <LinkInput
                    iconSrc={"https://cdn-icons-png.flaticon.com/512/25/25231.png"}
                    iconAlt={"figma"}
                    inputValue={userInfo.figma}
                    onInputChange={(e) => handleInputChange("figma", e.target.value)}
                />
            </EtcContentsWrapper>

            <ButtonContainer>
                <UpdateButton>업데이트</UpdateButton>
                <CancelButton3>탈퇴하기</CancelButton3>
            </ButtonContainer>
        </Wrapper3>
    );
};

export default UserInfoContent;