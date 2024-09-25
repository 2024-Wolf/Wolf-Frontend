import React, { useState } from "react";
import styled from "styled-components";
import ChallengeListItem from "./ChallengeListItem";

import ChallengeApplyModal from"../ChallengeModal/ChallengeApplyModal";
import ChallengeAuthModal from "../ChallengeModal/ChallengeAuthModal";
import ChallengeResultModal from "../ChallengeModal/ChallengeResultModal";

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 15px;
    gap: 40px;
`;

const Category = styled.div`
    width: 100%;
    height: 50px;
    border-radius: 10px;
    line-height: 50px;
    font-size: 20px;
    font-weight: 500;
`;

const Items = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    
    @media (max-width: 768px) {
        margin: 0 auto;
        gap: 10px;
    }
    @media (max-width: 480px) {
        gap: 5px;
    }
`;

function ChallengeList(props){
    const [modalOn, setModalOn] = useState(false);

    let items = ['제목1입니다.제목1입니다.제목1입니다.', '제목2입니다.', '제목3입니다.', '제목4입니다.', '제목5입니다.'];
    let category;
    let background;
    let buttonText;    

    const ModalMap = {
        "진행중": ChallengeAuthModal,
        "완료" : ChallengeResultModal,
        "진행 가능" : ChallengeApplyModal
    }

    const Modal = ModalMap[props.category];

    switch(props.category){
        case "진행중":
            category = '진행 중인 챌린지🔥';
            background = 'var(--violet300)';
            buttonText = '인증 완료';
            break;
        case "완료":
            category = '완료된 챌린지';
            background = 'var(--black200)';
            buttonText = '결과 확인';
            break;
        default :
            category = '진행 가능한 챌린지 ✨';
            background = 'var(--violet400)';
            buttonText = '참여하기';
            break;
    }    

    

    const handleDetailOpen = (e) => {
        props.clickFunc();
    }

    return(
        <Container>
            {modalOn && <Modal clickFunc={() => setModalOn(!modalOn)} />}
            <Category style={{background:background}}>{category}</Category>
            <Items>
                {items.map((title, index) => (
                    <ChallengeListItem
                        title={title}
                        clickFunc={() => setModalOn(!modalOn)}
                        category={props.category}
                        buttonText={buttonText}
                        key={index}
                        onClick={handleDetailOpen}
                    />
                ))}
            </Items>
        </Container>
    )
}

export default ChallengeList;