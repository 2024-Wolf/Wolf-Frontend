import styled from "styled-components";
import { Container4, Modal, ModalHeader, Category2, ModalBody2, AuthOrganization, AuthCode, AuthWarning, ModalFooter, Buttons, CancelButton2, AuthButton } from "../GlobalStyledComponents";

import React from "react";

function ChallengeAuthModal(props) {

    const handleCancel = (e) => {
        props.clickFunc();
    }

    return (
        <Container4>
            <Modal>
                <ModalHeader>
                    <Category2>챌린지 인증하기</Category2>
                </ModalHeader>
                <ModalBody2>
                    <p style={{ fontSize: '25px' }}>파이널 스터디 - 지금2조</p>
                    <AuthOrganization>
                        요청기관
                        <select style={{ border: '1px solid #9787FF', width: '420px', height: '30px', float: 'right' }}>
                            <option>한국디자인진흥원</option>
                            <option>한국데이터산업진흥원</option>
                            <option>영화진흥위원회</option>
                            <option>대한상공회의소</option>
                            <option>한국방송통신전파진흥원</option>
                            <option>한국원자력안전기술원</option>
                            <option>한국광해광업공단</option>
                            <option>한국콘텐츠진흥원</option>
                            <option>한국산업인력공단</option>
                        </select>
                        <div style={{ clear: 'both' }}></div>
                    </AuthOrganization>
                    <AuthCode>
                        자격증 번호
                        <input style={{ border: '1px solid #9787FF', width: '420px', height: '30px', float: 'right' }} />
                        <div style={{ clear: 'both' }}></div>
                    </AuthCode>
                    <AuthWarning>
                        인증 시 유의사항
                    </AuthWarning>
                </ModalBody2>
                <ModalFooter>
                    <Buttons>
                        <CancelButton2 onClick={handleCancel}>취소하기</CancelButton2>
                        <AuthButton onClick={handleCancel}>인증하기</AuthButton>
                    </Buttons>
                </ModalFooter>
            </Modal>
        </Container4>
    )
}

export default ChallengeAuthModal;