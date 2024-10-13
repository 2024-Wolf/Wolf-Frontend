import styled from "styled-components";
import {
    CategoryMainTitle, Violet500LineDiv, ModalHeader, ModalBody2,
    Violet500LineButton, ModalContentWrapper
} from "../GlobalStyledComponents";

import React from "react";
import ModalForm from "../Modal/ModalForm";
import CancelIcon from "../Icon/CancelIcon";
import SelectButton from "../Button/SelectButton";
import InputText from "../Input/InputText";
import FormFieldSingle from "../Group/GroupComponent/FormFieldSingle";
import TextAreaNoCss from "../Input/TextAreaNoCss";

function ChallengeAuthModal(props) {


    const handleCancel = (e) => {
        props.clickFunc();
    }

    return (
        <ModalForm isModalOpen={true}>
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
                    <CategoryMainTitle>챌린지 인증하기</CategoryMainTitle>
                    <p style={{ fontSize: '20px', fontWeight: 'bold' }}>기사 자격증 취득 챌린지</p>
                </ModalHeader>

                <ModalBody2>
                    {/* 요청기관 */}
                    <FormFieldSingle label={"요청기관"} FormLabelGroupStyle={{ marginTop: '0px' }}>
                        <SelectButton style={{ width: '100%' }}>
                            <option>한국디자인진흥원</option>
                            <option>한국데이터산업진흥원</option>
                            <option>영화진흥위원회</option>
                            <option>대한상공회의소</option>
                            <option>한국방송통신전파진흥원</option>
                            <option>한국원자력안전기술원</option>
                            <option>한국광해광업공단</option>
                            <option>한국콘텐츠진흥원</option>
                            <option>한국산업인력공단</option>
                        </SelectButton>
                    </FormFieldSingle>

                    {/* 자격증 번호 */}
                    <FormFieldSingle label={"자격증 번호"} FormLabelGroupStyle={{ marginTop: '0px' }}>
                        <InputText />
                    </FormFieldSingle>

                    {/* 챌린지 인증시 유의사항 */}
                    <Violet500LineDiv
                        style={{ background: 'var(--violet500)', color: 'var(--violet000)', gap: '0px' }}
                    >
                        <FormFieldSingle
                            labelStyle={{ color: 'var(--violet000)', minWidth: '80px' }}
                            FormLabelGroupStyle={{ marginTop: '0px' }}
                            label={"인증 시 유의사항"}>
                        </FormFieldSingle>
                        <TextAreaNoCss
                            style={{ background: 'var(--violet500)', color: 'var(--violet000)' }}
                            name="introduction"
                            placeholder="모집에 대한 간단한 소개를 작성해주세요."
                            value={
                                `매일 최소 1시간 이상 학습 시간을 확보해야 합니다.\n` +
                                `정해진 기간 내에 자격증 시험에 응시하지 않으면 챌린지 불참으로 간주됩니다.\n` +
                                `진행 상황은 매주 반드시 공유해야 하며, 서로의 피드백을 존중해야 합니다.\n` +
                                `자격증 취득을 위한 자료는 신뢰할 수 있는 출처에서 준비해야 합니다.\n`
                            }
                        />
                    </Violet500LineDiv>
                </ModalBody2>
                <Violet500LineButton type='button' onClick={handleCancel} style={{ margin: '0 auto' }}>
                    인증하기
                </Violet500LineButton>
            </ModalContentWrapper>
        </ModalForm>
    )
}

export default ChallengeAuthModal;