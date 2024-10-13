import styled from "styled-components";
import { CardMapingContainer, CategoryTitle, Items, MainCardParentContainer, MainCardListContainer } from "../GlobalStyledComponents";

import React, { useState } from "react";
import ChallengeListItem from "./ChallengeListItem";
import ChallengeApplyModal from "../ChallengeModal/ChallengeApplyModal";
import ChallengeAuthModal from "../ChallengeModal/ChallengeAuthModal";
import ChallengeResultModal from "../ChallengeModal/ChallengeResultModal";


function ChallengeList(props) {
    const [modalOn, setModalOn] = useState(false);

    let items = ['제목1입니다.제목1입니다.제목1입니다.제목1입니다.제목1입니다.제목1입니다.제목1입니다.제목1입니다.제목1입니다.제목1입니다.제목1입니다.제목1입니다.제목1입니다.제목1입니다.', '제목2입니다.', '제목3입니다.', '제목4입니다.', '제목5입니다.'];
    let category;
    let background;
    let buttonText;

    const ModalMap = {
        "진행중": ChallengeAuthModal,
        "완료": ChallengeResultModal,
        "진행 가능": ChallengeApplyModal
    }

    const Modal = ModalMap[props.category];

    switch (props.category) {
        case "진행중":
            category = '진행 중인 챌린지🔥';
            background = 'var(--violet300)';
            buttonText = '인증하기';
            break;
        case "완료":
            category = '완료된 챌린지';
            background = 'var(--black200)';
            buttonText = '결과 확인';
            break;
        default:
            category = '진행 가능한 챌린지 ✨';
            background = 'var(--violet400)';
            buttonText = '참여하기';
            break;
    }

    const handleDetailOpen = (e) => {
        props.clickFunc();
    }

    return (
        <>
            {modalOn && <Modal clickFunc={() => setModalOn(!modalOn)} />}

            <div style={{ width: '100%', display: 'flex', gap: '15px', flexDirection: 'column' }}>
                <CategoryTitle style={{ background: background }}>{category}</CategoryTitle>
                <MainCardParentContainer>
                    <MainCardListContainer>
                        {items.map((title, index) => (
                            <CardMapingContainer>
                                <ChallengeListItem
                                    title={title}
                                    clickFunc={() => setModalOn(!modalOn)}
                                    category={props.category}
                                    buttonText={buttonText}
                                    key={index}
                                    modalFunc={handleDetailOpen}
                                />
                            </CardMapingContainer>
                        ))}
                    </MainCardListContainer>
                </MainCardParentContainer>
            </div>
        </>
    )
}

export default ChallengeList;