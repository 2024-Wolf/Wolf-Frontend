import styled from "styled-components";
import { Container4, Modal, ModalHeader, Category2, ModalBody2, TotalAmount, ResultDetail, Success, Fail, ModalFooter, Buttons, CancelButton2 } from "../GlobalStyledComponents";

import React from "react";

function ChallengeResultModal(props) {

    const handleCancel = (e) => {
        props.clickFunc();
    }

    return (
        <Container4>
            <Modal>
                <ModalHeader>
                    <Category2>챌린지 결과확인</Category2>
                </ModalHeader>
                <ModalBody2>
                    <p style={{ fontSize: '25px' }}>파이널 스터디 - 지금2조</p>
                    <p style={{ fontSize: '36px', fontWeight: 'bold', marginTop: '30px' }}>기사 자격증 취득 챌린지</p>
                    <TotalAmount>
                        총 금액 : 204,000원<br /><br />
                        <span style={{ fontSize: '16px', color: '#B3B4B4' }}>(수수료 10%: 24,000원 / 기부금 5%: 12,000원 제외한 금액)</span>
                    </TotalAmount>
                    <ResultDetail>
                        <Success>
                            <span style={{ fontSize: '25px' }}>챌린지 성공</span><br /><br />
                            성공인원 : <span style={{ fontWeight: 'bold' }}>3</span>명<br /><br />
                            @@@ 님<br />
                            @@@ 님<br />
                            @@@ 님<br />
                        </Success>
                        <Fail>
                            <span style={{ fontSize: '25px' }}>챌린지 실패</span><br /><br />
                            실패인원 : <span style={{ fontWeight: 'bold' }}>3</span>명<br /><br />
                            @@@ 님<br />
                            @@@ 님<br />
                            @@@ 님<br />
                        </Fail>
                    </ResultDetail>
                    <p style={{ fontSize: '32px', marginTop: '30px' }}>1인당 상금 : <span style={{ fontWeight: 'bold' }}>25,500원</span></p>
                    <p style={{ fontSize: '18px', marginTop: '30px', color: '#B3B4B4' }}>(수수료 10% : <span style={{ fontWeight: 'bold' }}>3,000</span>원 / 기부금 5% : <span style={{ fontWeight: 'bold' }}>1,500</span>원 제외한 금액)</p>
                    <p style={{ fontSize: '18px', marginTop: '30px' }}>참가비는 등록된 환불계좌로 영업일 5일 이내에 입금될 예정입니다.</p>
                </ModalBody2>
                <ModalFooter>
                    <Buttons>
                        <CancelButton2 onClick={handleCancel}>닫기</CancelButton2>
                    </Buttons>
                </ModalFooter>
            </Modal>
        </Container4>
    )
}

export default ChallengeResultModal;