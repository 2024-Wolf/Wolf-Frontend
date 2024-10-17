import styled from "styled-components";
import { Violet400LineRoundButton, CardInfo, CardContainer, Bottom, } from "../GlobalStyledComponents";

import React, { useEffect, useState } from "react";
import WebFont from "webfontloader";
import CardThumbnail from "../Card/CardThumbnail";

import ChallengeApplyModal from "../ChallengeModal/ChallengeApplyModal";
import ChallengeAuthModal from "../ChallengeModal/ChallengeAuthModal";
import ChallengeResultModal from "../ChallengeModal/ChallengeResultModal";
import ChallengePayModal from "../ChallengeModal/ChallengePayModal";
import ChallengePayCompleteModal from "../ChallengeModal/ChallengePayCompleteModal";

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
    const [progressModalOn, setProressModalOn] = useState(false);

    let topBgColor = props.item.status === "RESULT_CONFIRM" ? "var(--black300)" : "var(--violet100)";
    let buttonText;

    const ModalMap = {
        "CERTIFICATION": ChallengeAuthModal,
        "RESULT_CONFIRM": ChallengeResultModal,
        "APPLY": ChallengeApplyModal,
        "PARTICIPATE": ChallengePayModal,
        "PAY": ChallengePayModal
    }

    switch (props.item.status) {
        case "PARTICIPATE":
            buttonText = "참여하기";
            break;
        case "APPLY":
            buttonText = "신청하기";
            break;
        case "PAY":
            buttonText = "결제하기";
            break;
        case "RESULT_CONFIRM":
            buttonText = "결과확인";
            break;
        case "CERTIFICATION":
            buttonText = "인증하기"
            break;
        case "CERTIFICATION_COMPLETE":
            buttonText = "인증완료"
            break;
        default:
            break;
    }

    // Kavoon font 불러오기
    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Kavoon']
            }
        });
    }, []);

    function processModalOff(){
        setProressModalOn(false);
        props.fetchChallenges();
    }

    function Modal(){

        const ModalComponent = ModalMap[props.item.status];
        return <ModalComponent item={props.item} amount={30000} cancel={processModalOff} />;
    }

    function openProgressModal(e) {
        e.stopPropagation();
        setProressModalOn(true);
    }


    function detailModalOn(){        

        props.setDetail(props.item);
    }

    return (
        <>

            {progressModalOn ? Modal() :
                <CardContainer onClick={() => detailModalOn()}
                    style={{ transform: 'none' }}>
                    <CardThumbnail style={{ backgroundColor: topBgColor }} />
                    <Bottom>
                        <ChallengeCardTitle>{props.item.challenge_title}</ChallengeCardTitle>
                        <CardInfo>
                            <div>등록일:{props.item.challenge_date.toLocaleDateString("en-CA")}</div>
                            <div>마감일:{props.item.challenge_deadline.toLocaleDateString("en-CA")}</div>
                        </CardInfo>
                        <Violet400LineRoundButton onClick={openProgressModal} type="button"
                            disabled={props.item.status === "CERTIFICATION_COMPLETE" ? true : false}>
                            {buttonText}
                        </Violet400LineRoundButton>
                    </Bottom>
                </CardContainer>
            }
        </>
    );
}

export default ChallengeListItem;
