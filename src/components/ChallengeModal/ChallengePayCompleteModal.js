import styled from "styled-components";
import { Container4, Modal, ModalHeader, Category2, ModalBody2, ModalFooter, Buttons, CancelButton2 } from "../GlobalStyledComponents";

import React from "react";

function ChallengePayCompleteModal(props) {

    return (
        <Container4>
            <Modal>
                <ModalHeader>
                    <Category2>챌린지 결제하기</Category2>
                </ModalHeader>
                <ModalBody2>
                    <p style={{ fontSize: '25px' }}>파이널 스터디 - 지금2조</p>
                    <p style={{ fontSize: '36px', marginTop: '60px', fontWeight: 'bold' }}>결제 완료</p>
                    <p style={{ fontSize: '25px', marginTop: '60px' }}>
                        결제가 완료되었습니다.<br /><br />
                        이제부터 챌린지에 도전합니다.<br /><br />
                        화이팅!
                    </p>
                </ModalBody2>
                <ModalFooter>
                    <Buttons>
                        <CancelButton2 onClick={() => { props.clickFunc() }}>닫기</CancelButton2>
                    </Buttons>
                </ModalFooter>
            </Modal>
        </Container4>
    )
}

export default ChallengePayCompleteModal;