import styled from "styled-components";
import { ContentWrapper, ButtonGroup3 } from "../GlobalStyledComponents";

import React, { useState } from "react";
import StatusButton from "./Components/StatusButton";
import NextButton from "./Components/NextButton";
import SubTitle from "./Components/SubTitle";
import OptionButton from "./Components/OptionButton";

const options = [
    "사이드 프로젝트 팀빌딩 중이에요",
    "사이드 프로젝트를 찾고 있어요",
    "스터디 그룹을 찾고 있어요",
    "스터디 팀원을 찾고 있어요",
    "창업을 준비하는 중이에요",
    "초기 멤버를 찾고 있어요"
];

const SecondProcessContent = ({ onNext, onPrev }) => {
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleOptionClick = (option) => {
        setSelectedOptions((prevSelectedOptions) =>
            prevSelectedOptions.includes(option) ?
                prevSelectedOptions.filter((item) => item !== option) // 이미 선택된 버튼이면 해제
                :
                [...prevSelectedOptions, option] // 선택되지 않은 버튼이면 추가
        );
    }

    return (
        <ContentWrapper>
            <button onClick={onPrev}>이전</button>
            <StatusButton nowIndex={1} />
            <SubTitle title={"현재 상태를 알려주세요"} />
            <ButtonGroup3>
                {options.map((option, index) => (
                    <OptionButton
                        key={index}
                        label={option}
                        count={2}
                        selected={selectedOptions.includes(option)}
                        onClick={() => handleOptionClick(option)}
                    />
                ))}
            </ButtonGroup3>
            <NextButton onClick={onNext}>
                다음
            </NextButton>
        </ContentWrapper>
    )
}

export default SecondProcessContent;