import styled from "styled-components";
import { Container4, Modal, ModalHeader, Category2, ModalBody2, ModalFooter, Buttons, CancelButton2, PayButton, ModalContentWrapper, CategoryMainTitle, Violet500LineButton } from "../GlobalStyledComponents";

import React, { useState } from "react";
import ChallengePayCompleteModal from "./ChallengePayCompleteModal";
import ModalForm from "../Modal/ModalForm";
import CancelIcon from "../Icon/CancelIcon";
import InputNumber from "../Input/InputNumber";


function ChallengePayModal(props) {

    const [completeModalOn, setCompleteModalOn] = useState();

    const handleSubmit = (e) => {
        e.preventDefault(); // 기본 폼 제출 방지
        setCompleteModalOn(true); // 모달 열기
    };

    return (
        <>
            {completeModalOn && <ChallengePayCompleteModal clickFunc={props.clickFunc} />}
            <ModalForm isModalOpen={true} onSubmit={handleSubmit} style={{ zIndex: '10001' }} >
                <CancelIcon
                    style={{
                        position: "absolute",
                        top: "16px",
                        right: "16px",
                    }}
                    type='button'
                    onClick={() => { props.handlePay() }}
                />
                <ModalContentWrapper>
                    <ModalHeader>
                        <CategoryMainTitle>챌린지 결제하기</CategoryMainTitle>
                        <p style={{ fontSize: '20px', fontWeight: 'bold' }}>기사 자격증 취득 챌린지</p>
                    </ModalHeader>
                </ModalContentWrapper>
                <ModalBody2>
                    <input type="text" style={{ fontSize: '36px', marginTop: '60px', textAlign: 'center' }} placeholder="0 ~ 30,000원" />
                </ModalBody2>
                <Violet500LineButton type='submit'>
                    결제하기
                </Violet500LineButton>
            </ModalForm>
        </>
    )
}

export default ChallengePayModal;