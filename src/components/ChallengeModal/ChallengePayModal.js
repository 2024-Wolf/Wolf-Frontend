import { ModalHeader, ModalContentWrapper, CategoryMainTitle, Violet500LineButton } from "../GlobalStyledComponents";

import React, { useEffect, useState } from "react";
import ChallengePayCompleteModal from "./ChallengePayCompleteModal";
import ModalForm from "../Modal/ModalForm";
import CancelIcon from "../Icon/CancelIcon";
import InputNumber from "../Input/InputNumber";
import FormFieldSingle from "../Group/GroupComponent/FormFieldSingle";
import { participateChallenge, payChallenge } from "../Apis/ChallengePostApi";


function ChallengePayModal(props) {

    const [completeModalOn, setCompleteModalOn] = useState();

    let groupPostId = 1;

    useEffect(()=>{
        if(props.item.status === "PARTICIPATE"){
            participateChallenge(props.item.challengePostId, groupPostId, props.amount);
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault(); // 기본 폼 제출 방지
        payChallenge(props.item.challengePostId, groupPostId, props.amount, "Y");
        setCompleteModalOn(true); // 모달 열기
    };

    return (
        <>
            {completeModalOn && <ChallengePayCompleteModal clickFunc={props.cancel()} />}
            <ModalForm isModalOpen={true} onSubmit={handleSubmit} style={{ zIndex: '10001' }} >
                <CancelIcon
                    style={{
                        position: "absolute",
                        top: "16px",
                        right: "16px",
                    }}
                    type='button'
                    onClick={() => { props.cancel() }}
                />
                <ModalContentWrapper>
                    <ModalHeader>
                        <CategoryMainTitle>챌린지 결제하기</CategoryMainTitle>
                        <p style={{ fontSize: '20px', fontWeight: 'bold', color: 'var(--black900)' }}>{props.item.title}</p>
                    </ModalHeader>
                    <FormFieldSingle label={"인당 참가비"} FormLabelGroupStyle={{ marginTop: '0px' }}>
                        <InputNumber
                            disabled
                            type="number"
                            value={props.amount}
                            id="amount"
                            min="0"
                            max="30000"
                            step="1000" // 1,000원 단위
                            placeholder={'0원~30,000원'}
                            style={{ width: '100%', textAlign: 'start' }} />
                    </FormFieldSingle>
                    <Violet500LineButton type='submit' style={{ margin: '15px auto 0 auto' }}>
                        결제하기
                    </Violet500LineButton>
                </ModalContentWrapper>
            </ModalForm>
        </>
    )
}

export default ChallengePayModal;