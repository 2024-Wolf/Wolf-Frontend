import styled from 'styled-components';
import { Container4, Modal, ModalHeader, Category2, ModalBody, ModalFooter, ChallengeFee2, FeeInput, Buttons, CancelButton2, ApplyButton } from "../GlobalStyledComponents";

import React, { useState } from "react";
import ChallengePayModal from "./ChallengePayModal";

function ChallengeApplyModal(props) {
    const [modalOn, setModalOn] = useState(false);

    const handleCancel = (e) => {
        props.clickFunc();
    }

    const handleApply = (e) => {
        setModalOn(!modalOn);
    }

    return (
        <Container4>
            {modalOn && <ChallengePayModal clickFunc={props.clickFunc} handlePay={() => { setModalOn(!modalOn) }} />}
            <Modal>
                <ModalHeader>
                    <Category2>챌린지 신청하기</Category2>
                    <span style={{ fontSize: "25px" }}>기사 자격증 취득 챌린지</span>
                </ModalHeader>
                <ModalBody>
                    <span style={{ fontWeight: 'bold', fontSize: '16px' }}>본 챌린지는<br />스터디의 노쇼를 방지하기 위해 챌린지 참가비를 받고 있습니다.</span>
                    <br /><br />
                    금액은 개인 참여자 기준으로 최소금액 0원에서 쵣대금액 30,000원까지 가능합니다.
                    금액 단위는 1,000원 단위로 기재할 수 있습니다.
                    예) 28,000원 (가능) / 28,500원 (불가능)
                    <br /><br /><br />
                    <span style={{ fontWeight: 'bold', fontSize: '16px' }}>챌린지 실패시 유의사항</span>
                    <br /><br />
                    챌린지를 신청하면 모임원들에게 참여 및 결제 알림이 전송될 예정입니다.
                    <br /><br /><br />
                    <span style={{ fontWeight: 'bold', fontSize: '16px' }}>환불 정책</span>
                    <br /><br />
                    <ol style={{ listStyleType: 'decimal', paddingLeft: '15px' }}>
                        <li>
                            참가비는 스터디 완료 시 자동으로 환급되며, WOLF 플랫폼은 참가비의<br />
                            10%를 운영 수수료로 차감하고, 추가로 5%는 기부금으로 사용됩니다.
                        </li>
                        <li>스터디 중도 포기 시 참가비는 환급되지 않으며, 기부금으로 전환됩니다.</li>
                        <li>환급금은 스터디 종료 후 5일 이내에 등록된 계좌로 입금됩니다.</li>
                    </ol>
                </ModalBody>
                <ModalFooter>
                    <ChallengeFee2>
                        <span style={{ fontSize: '25px' }}>인당 참가비 설정</span>
                        <FeeInput placeholder="0 ~ 30, 000원" />
                    </ChallengeFee2>
                    <Buttons>
                        <CancelButton2 onClick={handleCancel}>취소하기</CancelButton2>
                        <ApplyButton onClick={handleApply}>신청하기</ApplyButton>
                    </Buttons>
                </ModalFooter>
            </Modal>
        </Container4>
    )
}

export default ChallengeApplyModal;