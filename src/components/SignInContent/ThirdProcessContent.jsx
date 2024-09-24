import React, {useState} from "react";
import StatusButton from "./Components/StatusButton";
import styled from "styled-components";
import NextButton from "./Components/NextButton";
import SubTitle from "./Components/SubTitle";
import OptionButton from "./Components/OptionButton";

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const ButtonGroup = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 5px;
    max-width: 100%;
`;

const CategoryWrapper = styled.div`
    display: flex;
    gap: 20px;
    justify-content: center;
    margin-top: 20px;
`;

const CategoryButton = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    padding: 10px;
    cursor: pointer;
    transition: all 0.3s ease;

    img {
        width: 50px;
        height: 50px;
        margin-bottom: 5px;
        background-color: ${({ selected }) => (selected ? "var(--violet200)" : "var(--violet000)")};
        border: ${({ selected }) => (selected ? "2px solid var(--violet500)" : "none")};
        border-radius: 50%;
        padding: 5px;

        &:hover {
            background-color: var(--violet500);
        }
    }

    span {
        font-size: 14px;
        color: var(--black700);
    }

    @media (max-width: 768px) {
        img {
            width: 40px;
            height: 40px;
        }

        span {
            font-size: 12px;
        }
    }

    @media (max-width: 480px) {
        img {
            width: 30px;
            height: 30px;
        }

        span {
            font-size: 10px;
        }
    }
`;

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



const ThirdProcessContent = () => {
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
            <StatusButton nowIndex={2}/>
            <SubTitle title={"관심이 있거나 보유하고 있는 스킬을 선택해주세요"}/>
            <CategoryWrapper>
                {categories.map((category) => (
                    <CategoryButton
                        key={category.label}
                        selected={selectedCategory === category.label}
                        onClick={() => handleCategoryClick(category.label)}
                    >
                        <img src={category.imgSrc} alt={category.label} />
                        <span>{category.label}</span>
                    </CategoryButton>
                ))}
            </CategoryWrapper>
            <ButtonGroup>
                {options.find((option) => option.category === selectedCategory)?.skills.map((skill, index) => (
                    <OptionButton
                        key={index}
                        label={skill}
                        count={3}
                        selected={selectedOptions.includes(skill)}
                        onClick={() => handleOptionClick(skill)}
                    />

                )) || []}
            </ButtonGroup>
            <NextButton>
                다음
            </NextButton>
        </ContentWrapper>
    )
}

export default ThirdProcessContent;