import React from "react";
import StatusButton from "./components/StatusButton";
import styled from "styled-components";
import InputBox from "./components/InputBox";
import NextButton from "./components/NextButton";

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const SubTitle = styled.div`
    font-size: 20px;
    color: var(--black800);
    line-height: 1.5;
    @media (max-width: 768px) {
        font-size: 18px;
    }

    @media (max-width: 480px) {
        font-size: 16px;
    }
`;

const Row = styled.div`
    width: 100%;
    display: flex;
    gap: 20px;
    justify-content: space-between;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 10px;
    }

    @media (max-width: 480px) {
        flex-direction: column;
        gap: 8px;
    }
`;


const InputLabel = styled.div`
    text-align: left;
    font-size: 16px;
    color: var(--black800);
    margin-bottom: 10px;

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

const OptionButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    gap: 5px;
`;

const OptionButtonLabel = styled.label`
    font-size: 16px;
    color: var(--black800);

    @media (max-width: 768px) {
        font-size: 14px;
    }

    @media (max-width: 480px) {
        font-size: 12px;
    }
`;

const OptionButton = styled.input.attrs({ type: "radio" })`
    cursor: pointer;
    appearance: none;
    border: 2px solid var(--violet500);
    border-radius: 50%;
    width: 16px;
    height: 16px;
    background-color: var(--black000);

    &:checked {
        background-color: var(--violet500);
    }

    @media (max-width: 768px) {
        width: 14px;
        height: 14px;
    }

    @media (max-width: 480px) {
        width: 12px;
        height: 12px;
    }
`;


const FirstProcessContent = () => {
    return (
        <ContentWrapper>
            <StatusButton nowIndex={0}/>
            <SubTitle>업무 분야와 경력에 맞춰<br/>
                딱 맞는 정보를 추천해드릴게요!</SubTitle>
            <Row>
                <InputWrapper>
                    <InputLabel>직무를 입력해주세요</InputLabel>
                    <InputBox/>
                </InputWrapper>
                <InputWrapper>
                    <InputLabel>경력을 입력해주세요</InputLabel>
                    <InputBox/>
                </InputWrapper>
            </Row>

            <InputWrapper>
                <Row>
                    <InputLabel>소속을 입력해주세요</InputLabel>
                    <OptionButtonWrapper>
                        <OptionButton id="public" name="visibility" />
                        <OptionButtonLabel htmlFor="public">공개</OptionButtonLabel>

                        <OptionButton id="private" name="visibility" />
                        <OptionButtonLabel htmlFor="private">비공개</OptionButtonLabel>
                    </OptionButtonWrapper>
                </Row>
                <InputBox/>
            </InputWrapper>
            <NextButton/>
        </ContentWrapper>
    )
}

export default FirstProcessContent;