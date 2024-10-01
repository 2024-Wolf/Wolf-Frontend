import styled from "styled-components";
import { ContentWrapper, ButtonGroup3, CategoryWrapper2, CategoryButton2 } from "../GlobalStyledComponents";

import React, { useState } from "react";
import StatusButton from "./Components/StatusButton";
import NextButton from "./Components/NextButton";
import SubTitle from "./Components/SubTitle";
import OptionButton from "./Components/OptionButton";

const categories = [
    { label: "개발", imgSrc: "/skillCategory/dev.png" },
    { label: "기획", imgSrc: "/skillCategory/planning.png" },
    { label: "디자인", imgSrc: "/skillCategory/design.png" },
    { label: "마케팅", imgSrc: "/skillCategory/marketing.png" },
];
const options = [
    {
        category: "개발",
        skills: ["java1", "java2", "java3", "java4"]
    },
    {
        category: "디자인",
        skills: ["sketch", "figma", "adobe"]
    },
    {
        category: "기획",
        skills: ["strategy", "planning"]
    },
    {
        category: "마케팅",
        skills: ["seo", "content marketing", "social media"]
    }
];



const ThirdProcessContent = ({ onNext, onPrev }) => {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(options[0].category);

    const handleOptionClick = (option) => {
        setSelectedOptions((prevSelectedOptions) =>
            prevSelectedOptions.includes(option) ?
                prevSelectedOptions.filter((item) => item !== option) // 이미 선택된 버튼이면 해제
                :
                [...prevSelectedOptions, option] // 선택되지 않은 버튼이면 추가
        );
    }

    const handleCategoryClick = (label) => {
        setSelectedCategory(label);
    };

    return (
        <ContentWrapper>
            <button onClick={onPrev}>이전</button>
            <StatusButton nowIndex={2} />
            <SubTitle title={"관심이 있거나 보유하고 있는 스킬을 선택해주세요"} />
            <CategoryWrapper2>
                {categories.map((category) => (
                    <CategoryButton2
                        key={category.label}
                        selected={selectedCategory === category.label}
                        onClick={() => handleCategoryClick(category.label)}
                    >
                        <img src={category.imgSrc} alt={category.label} />
                        <span>{category.label}</span>
                    </CategoryButton2>
                ))}
            </CategoryWrapper2>
            <ButtonGroup3>
                {options.find((option) => option.category === selectedCategory)?.skills.map((skill, index) => (
                    <OptionButton
                        key={index}
                        label={skill}
                        count={3}
                        selected={selectedOptions.includes(skill)}
                        onClick={() => handleOptionClick(skill)}
                    />

                )) || []}
            </ButtonGroup3>
            <NextButton onClick={onNext}>
                다음
            </NextButton>
        </ContentWrapper>
    )
}

export default ThirdProcessContent;