import styled from 'styled-components';
import { ModalHeader, ModalContentWrapper, CategoryMainTitle, Violet500LineButton } from "../GlobalStyledComponents";

import React, { useState } from "react";
import ChallengePayModal from "./ChallengePayModal";
import ModalForm from '../Modal/ModalForm';
import CancelIcon from '../Icon/CancelIcon';
import FormFieldSingle from '../Group/GroupComponent/FormFieldSingle';
import TextAreaNoCss from '../Input/TextAreaNoCss';
import InputNumber from '../Input/InputNumber';
import { registerChallenge } from '../Apis/ChallengePostApi';


// components/ChallengeModal/ChallengeResultModal.js
export const ApplyChallengeNotice = styled.div`
    background-color: var(--violet600);
    color: var(--violet000);
    text-wrap: nowrap;
    font-size: 15px;
    border-radius: 7px;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px;
    height: auto;
    gap: 10px;
`;

export const ApplyChallengeNotice2 = styled.div`
    background-color: var(--violet500);
    color: var(--violet000);
    text-wrap: nowrap;
    font-size: 15px;
    border-radius: 7px;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px;
    height: auto;
    gap: 10px;
`;

export const NoticeLabel = styled.label`
    color: var(--violet000);
    min-width: 80px;
    width: 100%;
    min-width: auto;
    justify-content: start;
    font-size: 16px;
    display: flex;
    align-items: start;
    font-weight: bold;
    text-wrap: wrap;
    text-align: start;
    line-height: 1.2;
`;

export const NoticeContent = styled.div`
`;


function ChallengeApplyModal(props) {
    const [modalOn, setModalOn] = useState(false);
    const [amount, setAmount] = useState(null);

    const handleCancel = (e) => {
        props.cancel();
    }

    const handleApply = (e) => {
        e.preventDefault();
        if(amount === 0){
            alert("챌린지 참가비를 입력해주세요!");
            return;
        }
        registerChallenge(props.item.challengePostId, props.groupPostId, amount)
        .then(function(response){
            setModalOn(!modalOn);
        })
    }

    const handleChange = (e) => {
        const value = e.target.value;

        // 빈 값일 경우 초기화
        if (value === "") {
            setAmount(0);
            return; // 함수 종료
        }

        const numValue = Number(value);

        // 0원 이상 30,000원 이하의 값만 허용
        if (numValue >= 0 && numValue <= 30000 && numValue % 1000 === 0) {
            setAmount(numValue);
        }
    };

    return (
        <>
            {modalOn && <ChallengePayModal item={props.item} groupPostId={props.groupPostId} amount={amount} cancel={props.cancel} />}
            <ModalForm isModalOpen={true} onSubmit={handleApply}>
                <CancelIcon
                    style={{
                        position: "absolute",
                        top: "16px",
                        right: "16px",
                    }}
                    type='button'
                    onClick={handleCancel}
                />
                <ModalContentWrapper>
                    <ModalHeader>
                        <CategoryMainTitle>챌린지 신청하기</CategoryMainTitle>
                        <p style={{ fontSize: '20px', fontWeight: 'bold', color: 'var(--black900)' }}>{props.item.title}</p>
                    </ModalHeader>
                    <ApplyChallengeNotice>
                        <NoticeContent>
                            <NoticeLabel>본 챌린지는 스터디의 노쇼를 방지하기 위해 챌린지 참가비를 받고 있습니다.</NoticeLabel>
                            <TextAreaNoCss
                                style={{ background: 'var(--violet600)', color: 'var(--violet000)' }}
                                value={
                                    `금액은 개인 참여자 기준으로 최소금액 0원에서 최대금액 30,000원까지 가능합니다. 금액 단위는 1,000원 단위로 기재할 수 있습니다. 예) 28,000원 (가능) / 28,500원 (불가능)`
                                }
                            />
                        </NoticeContent>
                        <NoticeContent>
                            <NoticeLabel>챌린지 실패시 유의사항</NoticeLabel>
                            <TextAreaNoCss
                                style={{ background: 'var(--violet600)', color: 'var(--violet000)' }}
                                value={
                                    `챌린지를 신청하면 모임원들에게 참여 및 결제 알림이 전송될 예정입니다.`
                                }
                            />
                        </NoticeContent>

                        <ApplyChallengeNotice2>
                            <NoticeContent>
                                <NoticeLabel>환불 정책</NoticeLabel>
                                <TextAreaNoCss
                                    style={{ background: 'var(--violet500)', color: 'var(--violet000)' }}
                                    placeholder="환불 정책"
                                    value={
                                        `1. 참가비는 스터디 완료 시 자동으로 환급되며, WOLF 플랫폼은 참가비의 10%를 운영 수수료로 차감하고, 추가로 5%는 기부금으로 사용됩니다.\n` +
                                        `2. 스터디 중도 포기 시 참가비는 환급되지 않으며, 기부금으로 전환됩니다.\n` +
                                        `3. 환급금은 스터디 종료 후 5일 이내에 등록된 계좌로 입금됩니다.\n`
                                    }
                                />
                            </NoticeContent>
                        </ApplyChallengeNotice2>
                    </ApplyChallengeNotice>

                    <FormFieldSingle label={"인당 참가비 설정"} FormLabelGroupStyle={{ marginTop: '0px' }}>
                        <InputNumber
                            type="number"
                            id="amount"
                            onChange={handleChange}
                            min="0"
                            max="30000"
                            step="1000" // 1,000원 단위
                            placeholder={'0원~30,000원'}
                            style={{ width: '100%', textAlign: 'start' }} />
                    </FormFieldSingle>
                    <Violet500LineButton type='submit' style={{ margin: '15px auto 0 auto' }}>
                        신청하기
                    </Violet500LineButton>
                </ModalContentWrapper>
            </ModalForm>
        </>
    )
}

export default ChallengeApplyModal;