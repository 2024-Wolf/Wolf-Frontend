import styled from "styled-components";
import { ContentWrapper, Row, InputLabel2, InputWrapper, ButtonWrapper, RadioButtonLabel, RadioButton } from "../GlobalStyledComponents";

import React from "react";
import StatusButton from "./Components/StatusButton";
import InputText from "../Input/InputText";
import NextButton from "./Components/NextButton";
import SubTitle from "./Components/SubTitle";

function FirstProcessContent({ onNext, onPrev }) {

    return (
        <ContentWrapper>
            <button onClick={onPrev}>이전</button>
            <StatusButton nowIndex={0} />
            <SubTitle title={"업무 분야와 경력에 맞춰 \n 딱 맞는 정보를 추천해드릴게요!"} />
            <Row>
                <InputWrapper>
                    <InputLabel2>직무를 입력해주세요</InputLabel2>
                    <InputText />
                </InputWrapper>
                <InputWrapper>
                    <InputLabel2>경력을 입력해주세요</InputLabel2>
                    <InputText />
                </InputWrapper>
            </Row>

            <InputWrapper>
                <Row>
                    <InputLabel2>소속을 입력해주세요</InputLabel2>
                    <ButtonWrapper>
                        <RadioButton id="public" name="visibility" />
                        <RadioButtonLabel htmlFor="public">공개</RadioButtonLabel>

                        <RadioButton id="private" name="visibility" />
                        <RadioButtonLabel htmlFor="private">비공개</RadioButtonLabel>
                    </ButtonWrapper>
                </Row>
                <InputText />
            </InputWrapper>
            <NextButton onClick={onNext}>
                다음
            </NextButton>
        </ContentWrapper>
    )
}

export default FirstProcessContent;