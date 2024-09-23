import React from "react";
import StatusButton from "./components/StatusButton";
import styled from "styled-components";
import InputBox from "./components/InputBox";
import NextButton from "./components/NextButton";
import SubTitle from "./components/SubTitle";

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    
    @media (max-width: 768px) {
        gap: 30px;
    }
    
    @media (max-width: 480px) {
        gap: 20px;
    }
`;

const InputLabel = styled.div`
    text-align: left;
    font-size: 14px;
    color: var(--black800);
    margin-top: 10px;

    @media (max-width: 768px) {
        font-size: 14px;
        margin-bottom: 8px;
    }

    @media (max-width: 480px) {
        font-size: 12px;
        margin-bottom: 5px;
    }
`;

const InputWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;



const FourthProcessContent = () => {
    return (
        <ContentWrapper>
            <StatusButton nowIndex={3}/>
            <SubTitle title={"닉네임을 입력해주세요."}/>
            <InputWrapper>
                <InputBox/>
                <InputLabel>사용 가능한 닉네임입니다.</InputLabel>
            </InputWrapper>
            <NextButton>
                프로필 저장
            </NextButton>
        </ContentWrapper>
    )
}

export default FourthProcessContent;