import styled from "styled-components";
import { Violet400LineRoundButton, CardInfo, CardContainer, Top, Bottom, Title5, Date, Button5 } from "../GlobalStyledComponents";

import React, { useEffect } from "react";
import WebFont from "webfontloader";
import CardThumbnail from "../Card/CardThumbnail";

export const ChallengeCardTitle = styled.p`
    font-size: 18px;
    font-weight: 500;
    color: var(--black700);
    text-align: left;
    margin-bottom: 8px;

    display: -webkit-box;  // flex 대신 사용
    -webkit-box-orient: vertical; // 세로 방향으로 배치
    -webkit-line-clamp: 2; // 최대 두 줄로 제한
    overflow: hidden; 
    text-overflow: ellipsis; 

    max-width: 100%;
    height: 50px;
    line-height: 1.5;
`;


function ChallengeListItem(props) {
    let topBgColor = props.category === "완료" ? "var(--black300)" : "var(--violet100)";

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
        <>
            <CardContainer
                style={{ transform: 'none' }}
                onClick={() => props.modalFunc()}>
                <CardThumbnail style={{ backgroundColor: topBgColor }} />
                <Bottom>
                    <ChallengeCardTitle>{props.title}</ChallengeCardTitle>
                    <CardInfo>
                        <div>등록일 | 2024.09.15</div>
                        <div>마감일 | 2024.12.15</div>
                    </CardInfo>
                    <Violet400LineRoundButton type="button" onClick={handleButton}>
                        {props.buttonText}
                    </Violet400LineRoundButton>
                </Bottom>
                {console.log('지금!', props)}
            </CardContainer>
        </>
    );
}

export default ChallengeListItem;
