import styled from "styled-components";
import { Container4, Modal, ModalHeader, Category2, ModalBody2, ModalFooter, Buttons, CancelButton2, PayButton } from "../GlobalStyledComponents";

import React, { useState } from "react";
import ChallengePayCompleteModal from "./ChallengePayCompleteModal";


function ChallengePayModal(props) {

    const [completeModalOn, setCompleteModalOn] = useState();

    return (
        <Container4>
            {completeModalOn && <ChallengePayCompleteModal clickFunc={props.clickFunc} />}
            <Modal>
                <ModalHeader>
                    <Category2>챌린지 결제하기</Category2>
                </ModalHeader>
                <ModalBody2>
                    <p style={{ fontSize: '25px' }}>파이널 스터디 - 지금2조</p>
                    <p style={{ fontSize: '36px', marginTop: '60px', fontWeight: 'bold' }}>기사 자격증 취득 챌린지</p>
                    <input type="text" style={{ fontSize: '36px', marginTop: '60px', textAlign: 'center' }} placeholder="0 ~ 30,000원" />
                </ModalBody2>
                <ModalFooter>
                    <Buttons>
                        <CancelButton2 onClick={() => { props.handlePay() }}>취소하기</CancelButton2>
                        <PayButton onClick={() => { setCompleteModalOn(!completeModalOn) }}>결제하기</PayButton>
                    </Buttons>
                </ModalFooter>
            </Modal>
        </Container4>
    )
}

export default ChallengePayModal;