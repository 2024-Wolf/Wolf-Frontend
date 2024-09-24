import React, { useState } from "react";
import styled,{ css } from "styled-components";
import WhiteInputBox from "../Input/WhiteInputBox";
import ActivityScoreBar from "../ActivityScore/ActivityScoreBar";
import RegularIcon from "../Icon/RegularIcon";
import TabContentsWrapper from "../TabContentsWrapper";

const responsivePadding = css`
    @media (max-width: 768px) {
        padding: 15px;
    }

    @media (max-width: 480px) {
        padding: 10px;
    }
`;

const responsiveFontSize = css`
    @media (max-width: 480px) {
        font-size: 12px;
    }
`;

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 20px;
`;

const ContentsRow = styled(Row)`
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const Column = styled.div`
    width: 48%;
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

const ContentsWrapper = styled.div`
    background-color: white;
    border-radius: 10px;
    border: 1px solid var(--black300);
    padding: 20px;
    gap: 20px;
    display: flex;
    flex-direction: column;
    ${responsivePadding}
`;

const SubContentsWrapper = styled(ContentsWrapper)`
    width: 50%;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

const EtcContentsWrapper = styled(ContentsWrapper)`
    width: 100%;
`;

const SubTitle = styled.h2`
    font-size: 24px;
    font-weight: 500;
    color: var(--black800);
    ${responsiveFontSize}
`;

const InputLabel = styled.label`
    font-size: 18px;
    font-weight: 500;
    color: var(--black800);

    @media (max-width: 480px) {
        font-size: 16px;
    }
`;

const Description = styled.div`
    font-size: 14px;
    color: var(--black800);
    ${responsiveFontSize}
`;

const ToggleBox = styled.input.attrs({ type: "select" })`
    background-color: var(--violet000);
    border: 1px solid var(--violet400);
    border-radius: 15px;
    width: 150px;
    font-size: 16px;
    color: var(--black800);

    @media (max-width: 768px) {
        width: 100%;
    }
`;

const TextArea = styled.textarea`
    width: 100%;
    min-height: 80px;
    padding: 15px 15px;
    border: 1px solid var(--violet500);
    border-radius: 5px;
    font-size: 16px;

    @media (max-width: 768px) {
        font-size: 14px;
    }

    ${responsiveFontSize}
`;

const LinkRow = styled(Row)`
    align-items: center;
`;

const Button = styled.button`
    border-radius: 10px;
    padding: 15px 50px;
    font-size: 16px;
    font-weight: 700;

    @media (max-width: 768px) {
        padding: 12px 40px;
        font-size: 14px;
    }

    ${responsiveFontSize}
`;

const UpdateButton = styled(Button)`
    border: 1px solid var(--violet500);
    background-color: var(--violet500);
    color: white;
`;

const CancelButton = styled(Button)`
    border: 1px solid var(--violet800);
    background-color: var(--violet000);
    color: var(--violet800);
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;

    @media (max-width: 768px) {
        gap: 15px;
    }

    @media (max-width: 480px) {
        flex-direction: column;
        gap: 10px;
    }
`;
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

    const InputField = ({ label, field, isActive = true }) => (
        <>
            <InputLabel>{label}</InputLabel>
            <WhiteInputBox
                isActive={isActive}
                value={userInfo[field]}
                onChange={(e) => handleInputChange(field, e.target.value)}
            />
        </>
    );

    return (
        <TabContentsWrapper>
            <ContentsRow>
                <SubContentsWrapper>
                    <SubTitle>기본 정보</SubTitle>
                    <ContentsRow>
                        <Column>
                            <InputField label="이메일" field="email" isActive={false} />
                            <InputField label="이름" field="name" />
                            <InputField label="닉네임" field="nickname" />
                            <Description>사용 가능한 닉네임입니다.</Description>
                        </Column>
                        <Column>
                            <InputLabel>활동 점수</InputLabel>
                            <ActivityScoreBar />
                        </Column>
                    </ContentsRow>
                    <InputLabel>환불 계좌</InputLabel>
                    <ContentsRow>
                        <ToggleBox />
                        <WhiteInputBox
                            isActive={true}
                            value={userInfo.account}
                            onChange={(e) => handleInputChange("account", e.target.value)}
                        />
                    </ContentsRow>
                </SubContentsWrapper>

                <SubContentsWrapper>
                    <SubTitle>기본 정보</SubTitle>
                    <InputField label="직무" field="job" />
                    <InputField label="소속" field="company" />
                    <InputField label="경력" field="career" />
                </SubContentsWrapper>
            </ContentsRow>

            <EtcContentsWrapper>
                <SubTitle>기타 정보</SubTitle>
                <InputLabel>자기 소개</InputLabel>
                <TextArea
                    value={userInfo.introduce}
                    onChange={(e) => handleInputChange("introduce", e.target.value)}
                />
                <LinkRow>
                    <RegularIcon
                        src={"https://cdn-icons-png.flaticon.com/512/25/25231.png"}
                        alt={"github"}
                    />
                    <WhiteInputBox />
                </LinkRow>
            </EtcContentsWrapper>

            <ButtonContainer>
                <UpdateButton>업데이트</UpdateButton>
                <CancelButton>탈퇴하기</CancelButton>
            </ButtonContainer>
        </TabContentsWrapper>
    );
};

export default UserInfoContent;