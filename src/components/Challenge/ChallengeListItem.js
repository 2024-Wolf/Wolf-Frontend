import React, { useEffect } from "react";
import styled from "styled-components";
import WebFont from "webfontloader";

const Container = styled.div`
    width: 100%;
    max-width: 240px;
    height: 240px;

    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;

    border: 0.5px solid var(--black300);
    border-radius: 30px;
    overflow: hidden;
    background-color: #ffffff;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.05);
    }

    @media (max-width: 768px) {
        max-width: 200px; 
        height: 220px;
    }

    @media (max-width: 480px) {
        max-width: 160px; 
        height: 180px;
    }
`;

const Top = styled.div`
    width: 100%;
    height: 45%;
    font-family: 'Kavoon', cursive;
    font-size: 35px;
    color: var(--black600);
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        font-size: 28px;
    }

    @media (max-width: 480px) {
        font-size: 24px;
    }
`;

const Bottom = styled.div`
    width: 100%;
    padding: 10px;
`;

const Title = styled.div`
    font-size: 18px;
    font-weight: 500;
    color: var(--black800);
    text-align: left;
    margin-bottom: 15px;

    min-height: 36px;

    @media (max-width: 768px) {
        font-size: 14px;
        min-height: 30px;
        margin-bottom: 10px;
    }

    @media (max-width: 480px) {
        font-size: 12px;
        min-height: 24px;
        margin-bottom: 8px;
    }
`;

const Date = styled.div`
    width: 100%;
    color: var(--black600);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    
    font-size: 12px;

    @media (max-width: 768px) {
        font-size: 10px;
        margin-bottom: 10px;
        
    }

    @media (max-width: 480px) {
        font-size: 8px;
        margin-bottom: 8px;
    }
`;

const Button = styled.div`
    margin: 0 auto;
    padding: 8px 10px;
    background: var(--violet200);
    border: 1px solid var(--violet400);
    border-radius: 5px;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    color: var(--black700);
    font-weight: 500;
    font-size: 14px;

    &:hover {
        background: var(--violet400);
        border: 1px solid #8578D8;
    }

    @media (max-width: 768px) {
        padding: 6px 8px;
        font-size: 12px;
    }

    @media (max-width: 480px) {
        padding: 5px 6px;
        font-size: 10px;
    }
`;

function ChallengeListItem(props) {
    let topBgColor = props.category === "완료" ? "#B3B4B4" : "#F2F0FF";

    // Kavoon font 불러오기
    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Kavoon']
            }
        });
    }, []);

    const handleButton = (e) => {
        e.stopPropagation();
        props.clickFunc();
    };

    return (
        <Container>
            <Top style={{ background: topBgColor }}>
                WOLF
            </Top>
            <Bottom>
                <Title>{props.title}</Title>
                <Date>
                    <div>등록일 | 2024.09.15</div>
                    <div>마감일 | 2024.12.15</div>
                </Date>
                <Button onClick={handleButton}>
                    {props.buttonText}
                </Button>
            </Bottom>
        </Container>
    );
}

export default ChallengeListItem;
