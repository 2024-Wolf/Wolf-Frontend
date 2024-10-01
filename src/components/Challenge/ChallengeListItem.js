import styled from "styled-components";
import { Container3, Top, Bottom, Title5, Date, Button5 } from "../GlobalStyledComponents";

import React, { useEffect } from "react";
import WebFont from "webfontloader";

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
        <Container3 onClick={() => props.modalFunc()}>
            <Top style={{ background: topBgColor }}>
                WOLF
            </Top>
            <Bottom>
                <Title5>{props.title}</Title5>
                <Date>
                    <div>등록일 | 2024.09.15</div>
                    <div>마감일 | 2024.12.15</div>
                </Date>
                <Button5 onClick={handleButton}>
                    {props.buttonText}
                </Button5>
            </Bottom>
        </Container3>
    );
}

export default ChallengeListItem;
