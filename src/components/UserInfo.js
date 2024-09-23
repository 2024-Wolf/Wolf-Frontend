import React, { useState } from "react";
import styled from "styled-components";
import WhiteInputBox from "./Input/WhiteInputBox";
import ActivityScoreBar from "./ActivityScore/ActivityScoreBar";
import RegularIcon from "./Icon/RegularIcon";

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 25px 35px;
    background-color: var(--violet000);
    border: 1px solid var(--violet400);

    @media (max-width: 768px) {
        padding: 15px;
    }

    @media (max-width: 480px) {
        padding: 10px;
    }
`;

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 20px;

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

    @media (max-width: 768px) {
        padding: 15px;
    }

    @media (max-width: 480px) {
        padding: 10px;
    }
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

    @media (max-width: 480px) {
        font-size: 20px;
    }
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

    @media (max-width: 480px) {
        font-size: 12px;
    }
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

    @media (max-width: 480px) {
        font-size: 12px;
    }
`;

const LinkRow = styled(Row)`
    align-items: center;
`;

const UserInfo = () => {
    const [name, setName] = useState("홍길동");
    const [nickname, setNickname] = useState("nickname");
    const [account, setAccount] = useState("account");
    const [job, setJob] = useState("job");
    const [company, setCompany] = useState("company");
    const [career, setCareer] = useState("career");
    const [introduce, setIntroduce] = useState("안녕하세요 자기소개 입니다. 반갑습니다.");

    return (
        <Wrapper>
            <Row>
                <SubContentsWrapper>
                    <SubTitle>기본 정보</SubTitle>
                    <Row>
                        <Column>
                            <InputLabel>이메일</InputLabel>
                            <WhiteInputBox
                                isActive={false}
                                value={"test@gmail.com"}
                            />
                            <InputLabel>이름</InputLabel>
                            <WhiteInputBox
                                isActive={true}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <InputLabel>닉네임</InputLabel>
                            <WhiteInputBox
                                isActive={true}
                                value={nickname}
                                onChange={(e) => setNickname(e.target.value)}
                            />
                            <Description>사용 가능한 닉네임입니다.</Description>
                        </Column>
                        <Column>
                            <InputLabel>활동 점수</InputLabel>
                            <ActivityScoreBar />
                        </Column>
                    </Row>
                    <InputLabel>환불 계좌</InputLabel>
                    <Row>
                        <ToggleBox />
                        <WhiteInputBox
                            isActive={true}
                            value={account}
                            onChange={(e) => setAccount(e.target.value)}
                        />
                    </Row>
                </SubContentsWrapper>
                <SubContentsWrapper>
                    <SubTitle>기본 정보</SubTitle>
                    <InputLabel> 직무 </InputLabel>
                    <WhiteInputBox
                        isActive={true}
                        value={job}
                        onChange={(e) => setJob(e.target.value)}
                    />
                    <InputLabel> 소속 </InputLabel>
                    <WhiteInputBox
                        isActive={true}
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                    />
                    <InputLabel> 경력 </InputLabel>
                    <WhiteInputBox
                        isActive={true}
                        value={career}
                        onChange={(e) => setCareer(e.target.value)}
                    />
                </SubContentsWrapper>
            </Row>
            <EtcContentsWrapper>
                <SubTitle>기타 정보</SubTitle>
                <InputLabel>자기 소개</InputLabel>
                <TextArea
                    value={introduce}
                    onChange={(e) => setIntroduce(e.target.value)}
                />
                <LinkRow>
                    <RegularIcon src={"https://cdn-icons-png.flaticon.com/512/25/25231.png"} alt={"github"} />
                    <WhiteInputBox />
                </LinkRow>
            </EtcContentsWrapper>
        </Wrapper>
    );
};

export default UserInfo;
