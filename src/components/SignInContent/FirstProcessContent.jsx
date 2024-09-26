import React from "react";
import StatusButton from "./Components/StatusButton";
import styled from "styled-components";
import WhiteInputBox from "../Input/WhiteInputBox";
import NextButton from "./Components/NextButton";
import SubTitle from "./Components/SubTitle";

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
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

const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    margin-right: 5px;
    gap: 5px;
`;

const RadioButtonLabel = styled.label`
    font-size: 16px;
    color: var(--black800);

    @media (max-width: 768px) {
        font-size: 14px;
    }

    @media (max-width: 480px) {
        font-size: 12px;
    }
`;

const RadioButton = styled.input.attrs({ type: "radio" })`
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


function FirstProcessContent({ onNext, onPrev }) {

    return (
        <ContentWrapper>
            <button onClick={onPrev}>이전</button>
            <StatusButton nowIndex={0} />
            <SubTitle title={"업무 분야와 경력에 맞춰 \n 딱 맞는 정보를 추천해드릴게요!"} />
            <Row>
                <InputWrapper>
                    <InputLabel>직무를 입력해주세요</InputLabel>
                    <WhiteInputBox/>
                </InputWrapper>
                <InputWrapper>
                    <InputLabel>경력을 입력해주세요</InputLabel>
                    <WhiteInputBox/>
                </InputWrapper>
            </Row>

            <InputWrapper>
                <Row>
                    <InputLabel>소속을 입력해주세요</InputLabel>
                    <ButtonWrapper>
                        <RadioButton id="public" name="visibility" />
                        <RadioButtonLabel htmlFor="public">공개</RadioButtonLabel>

                        <RadioButton id="private" name="visibility" />
                        <RadioButtonLabel htmlFor="private">비공개</RadioButtonLabel>
                    </ButtonWrapper>
                </Row>
                <WhiteInputBox/>
            </InputWrapper>
            <NextButton onClick={onNext}>
                다음
            </NextButton>
        </ContentWrapper>
    )
}

export default FirstProcessContent;