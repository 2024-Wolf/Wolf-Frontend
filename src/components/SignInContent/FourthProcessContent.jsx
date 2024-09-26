import React from "react";
import StatusButton from "./Components/StatusButton";
import styled from "styled-components";
import WhiteInputBox from "../Input/WhiteInputBox";
import NextButton from "./Components/NextButton";
import SubTitle from "./Components/SubTitle";

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



const FourthProcessContent = ({ onPrev, onClose, onLogin }) => {
    const handleNext = () => {
        onClose();
        onLogin();
    };
    return (
        <ContentWrapper>
            <button onClick={onPrev}>이전</button>
            <StatusButton nowIndex={3} />
            <SubTitle title={"닉네임을 입력해주세요."} />
            <InputWrapper>
                <WhiteInputBox/>
                <InputLabel>사용 가능한 닉네임입니다.</InputLabel>
            </InputWrapper>
            <NextButton onClick={handleNext}>
                프로필 저장
            </NextButton>
        </ContentWrapper>
    )
}

export default FourthProcessContent;