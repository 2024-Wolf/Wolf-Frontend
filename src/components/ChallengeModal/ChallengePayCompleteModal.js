import styled from "styled-components";
import { Container4, Modal, ModalHeader, Category2, ModalBody2, ModalFooter, Buttons, CancelButton2, ModalContentWrapper, CategoryMainTitle, Violet500LineButton } from "../GlobalStyledComponents";

import React from "react";
import CancelIcon from "../Icon/CancelIcon";
import ModalForm from "../Modal/ModalForm";
import TextAreaNoCss from "../Input/TextAreaNoCss";

function ChallengePayCompleteModal(props) {

    return (
        <ModalForm isModalOpen={true} style={{ zIndex: '10002' }} >
            <CancelIcon
                style={{
                    position: "absolute",
                    top: "16px",
                    right: "16px",
                }}
                type='button'
                onClick={() => { props.clickFunc() }}
            />
            <ModalContentWrapper>
                <ModalHeader>
                    <CategoryMainTitle>챌린지 결제하기</CategoryMainTitle>
                    <p style={{ fontSize: '20px', fontWeight: 'bold' }}>기사 자격증 취득 챌린지</p>
                </ModalHeader>
            </ModalContentWrapper>

            <p style={{ fontSize: '36px', marginTop: '40px', fontWeight: 'bold' }}>결제 완료</p>
            <TextAreaNoCss
                style={{ textAlign: 'center', fontSize: '20px' }}
                value={`결제가 완료되었습니다.\n` +
                    `이제부터 챌린지에 도전합니다.\n` +
                    `화이팅!`}
            />
            <p style={{ fontSize: '20px', marginTop: '30px' }}>

            </p>

            <Violet500LineButton type="button" onClick={() => { props.clickFunc() }}>
                닫기
            </Violet500LineButton>
        </ModalForm>
    )
}

export default ChallengePayCompleteModal;