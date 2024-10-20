import styled from "styled-components";
import { ModalContentWrapper, ContentWrapper, OptionButtonGroup, CategoryWrapper2, CategoryButton2, Violet500BackgroundButton, Violet500LineButton, Row } from "../GlobalStyledComponents";

import React, { useEffect, useState } from "react";
import StatusButton from "./Components/StatusButton";
import NextButton from "./Components/NextButton";
import SubTitle from "./Components/SubTitle";
import OptionButton from "../Button/OptionButton";
import PreviousIcon from "../Icon/PreviousIcon";

const categories = [
    { label: "개발", imgSrc: "/skillCategory/dev.png" },
    { label: "기획", imgSrc: "/skillCategory/planning.png" },
    { label: "디자인", imgSrc: "/skillCategory/design.png" },
    { label: "마케팅", imgSrc: "/skillCategory/marketing.png" },
];

const options = [
    {
        category: "개발",
        skills: ["JavaScript", "Python", "Java", "React", "Django", "Node.js", "Git", "GitHub", "MySQL", "MongoDB", "RESTful API"]
    },
    {
        category: "디자인",
        skills: ["Figma", "Adobe XD", "Sketch"]
    },
    {
        category: "기획",
        skills: ["Strategy", "Planning"]
    },
    {
        category: "마케팅",
        skills: ["SEO", "SEM", "Google Analytics", "Facebook Insights", "Content marketing", "Social media"]
    }
];



const ThirdProcessContent = ({ onNext, onPrev, handleInputChange, handleInputReset, signupInfo }) => {
    // 카테고리별로 선택된 옵션을 저장하는 객체 상태
    const [selectedOptionsByCategory, setSelectedOptionsByCategory] = useState({
        개발: [],
        기획: [],
        디자인: [],
        마케팅: []
    });

    const [selectedCategory, setSelectedCategory] = useState(options[0].category); // 초기 카테고리 설정

    const handleOptionClick = (option) => {
        setSelectedOptionsByCategory((prevOptions) => {
            const currentOptions = prevOptions[selectedCategory];
            const updatedOptions = currentOptions.includes(option)
                ? currentOptions.filter((item) => item !== option) // 이미 선택된 옵션이면 해제
                : [...currentOptions, option]; // 선택되지 않은 옵션이면 추가

            return {
                ...prevOptions,
                [selectedCategory]: updatedOptions
            };
        });
    };

    const handleCategoryClick = (label) => {
        setSelectedCategory(label);
    };

    useEffect(() => {
        handleInputChange('interests', [{
            개발: selectedOptionsByCategory.개발,
            기획: selectedOptionsByCategory.기획,
            디자인: selectedOptionsByCategory.디자인,
            마케팅: selectedOptionsByCategory.마케팅
        }]);
    }, [selectedOptionsByCategory, signupInfo]);

    return (
        <ContentWrapper>
            <StatusButton nowIndex={2} />
            <SubTitle title={"관심이 있거나 보유하고 있는 스킬을 선택해주세요"} />
            <ModalContentWrapper>
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
                <OptionButtonGroup>
                    {options.find((option) => option.category === selectedCategory)?.skills.map((skill, index) => (
                        <OptionButton
                            key={index}
                            label={skill}
                            count={3}
                            selected={selectedOptionsByCategory[selectedCategory].includes(skill)}
                            onClick={() => handleOptionClick(skill)}
                        />
                    )) || []}
                </OptionButtonGroup>
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
    );
};

export default ThirdProcessContent;