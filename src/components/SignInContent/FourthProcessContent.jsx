import styled from "styled-components";
import { ContentWrapper, InputLabel2, InputWrapper } from "../GlobalStyledComponents";

import React from "react";
import StatusButton from "./Components/StatusButton";
import WhiteInputBox from "../Input/WhiteInputBox";
import NextButton from "./Components/NextButton";
import SubTitle from "./Components/SubTitle";

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
                <WhiteInputBox />
                <InputLabel2>사용 가능한 닉네임입니다.</InputLabel2>
            </InputWrapper>
            <NextButton onClick={handleNext}>
                프로필 저장
            </NextButton>
        </ContentWrapper>
    )
}

export default FourthProcessContent;