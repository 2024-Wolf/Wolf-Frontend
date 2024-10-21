import styled from "styled-components";
import { ModalContentWrapper, ContentWrapper, ButtonWrapper, RadioButtonLabel, RadioButton, Label, Div, ChangeColumn480px, Violet500BackgroundButton, Violet500LineButton, ButtonGroupWrap, Row, ModalContainer } from "../GlobalStyledComponents";

import React from "react";
import StatusButton from "./Components/StatusButton";
import SubTitle from "./Components/SubTitle";
import PreviousIcon from "../Icon/PreviousIcon";
import InputText from "../Input/InputText";

function FirstProcessContent({ onNext, onPrev, handleInputChange, handleInputReset }) {

    return (
        <ContentWrapper>
            <StatusButton nowIndex={0} />
            <SubTitle title={"업무 분야와 경력에 맞춰 \n 딱 맞는 정보를 추천해드릴게요!"} />

            <ModalContentWrapper>
                <ChangeColumn480px>
                    <Div>
                        <Label>직무를 입력해주세요</Label>
                        <InputText
                            placeholder="직무를 입력해주세요"
                            onChange={(e) => handleInputChange('jobTitle', e.target.value)} />
                    </Div>
                    <Div>
                        <Label>경력이 몇 년인지 입력해주세요</Label>
                        <InputText
                            placeholder="경력이 몇 년인지 입력해주세요"
                            onChange={(e) => handleInputChange('experience', e.target.value)} />
                    </Div>
                </ChangeColumn480px>
                <Div>
                    <ChangeColumn480px>
                        <Label style={{ width: 'auto' }}>
                            소속을 입력해주세요
                        </Label>
                    </ChangeColumn480px>
                    <InputText
                        placeholder="소속을 입력해주세요"
                        onChange={(e) => handleInputChange('organization', e.target.value)} />
                </Div>
                <ButtonWrapper>
                    <RadioButton checked id="public" name="visibility" />
                    <RadioButtonLabel htmlFor="public">정보 공개</RadioButtonLabel>

                    <RadioButton id="private" name="visibility" />
                    <RadioButtonLabel htmlFor="private">정보 비공개</RadioButtonLabel>
                </ButtonWrapper>
            </ModalContentWrapper>
            <Row style={{ gap: "5px" }}>
                <Violet500LineButton
                    type="button"
                    style={{ width: '100%' }}
                    onClick={() => {
                        if (window.confirm('이전으로 이동하면 입력 정보가 초기화 됩니다.\n진행하시겠습니까?')) {
                            onPrev();
                            handleInputReset('jobTitle');
                            handleInputReset('experience');
                            handleInputReset('organization');
                        }
                    }}>
                    이전
                </Violet500LineButton>
                <Violet500BackgroundButton
                    type="button"
                    style={{ width: '100%' }}
                    onClick={onNext}>
                    다음
                </Violet500BackgroundButton>
            </Row>
        </ContentWrapper>
    )
}

export default FirstProcessContent;