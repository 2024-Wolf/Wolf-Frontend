import {
    CategoryMainTitle, Violet500LineDiv, ModalHeader, ModalBody2,
    Violet500LineButton, ModalContentWrapper
} from "../GlobalStyledComponents";

import React, { useState } from "react";
import ModalForm from "../Modal/ModalForm";
import CancelIcon from "../Icon/CancelIcon";
import SelectButton from "../Button/SelectButton";
import InputText from "../Input/InputText";
import FormFieldSingle from "../Group/GroupComponent/FormFieldSingle";
import TextAreaNoCss from "../Input/TextAreaNoCss";
import { verifyChallenge } from "../Apis/ChallengePostApi";

function ChallengeAuthModal(props) {
    const [inst, setInst] = useState("B490007");
    const [name, setName] = useState("김한수");
    const [code, setCode] = useState("23202110166Y");


    const [reqtInstCode, setReqtInstCode] = useState('');
    const [reqtUserName, setReqtUserName] = useState('');
    const [ctftNo, setCtftNo] = useState('');
    const [responseData, setResponseData] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const requestData = new URLSearchParams();
        requestData.append('reqtInstCode', reqtInstCode);
        requestData.append('reqtUserName', reqtUserName);
        requestData.append('ctftNo', ctftNo);

        try {
            const response = await fetch('http://localhost:4000/https://www.gov.kr/mw/NisCertificateConfirmExecute.do', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                },
                body: requestData.toString(),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.text();
            setResponseData(data);
            setError(null);
        } catch (err) {
            setError(err.message);
            setResponseData(null);
        }
    };


    let groupPostId = 1;

    let status = "Y";

    useEffect(() => {
        certificatonCheck(inst, name, code);
    })

    const handleInst = (e) => {
        setInst(e.target.value);
    }

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleCode = (e) => {
        setCode(e.target.value);
    }

    const handleCertification = (e) => {
        e.preventDefault();

        verifyChallenge(props.item.challengePostId, props.groupPostId, status, inst, name, code);

        props.cancel();
    }

    return (
        <ModalForm isModalOpen={true} onSubmit={handleSubmit}>
            <CancelIcon
                style={{
                    position: "absolute",
                    top: "16px",
                    right: "16px",
                }}
                type='button'
                onClick={() => props.cancel()}
            />

            <ModalContentWrapper>
                <ModalHeader>
                    <CategoryMainTitle>챌린지 인증하기</CategoryMainTitle>
                    <p style={{ fontSize: '20px', fontWeight: 'bold', color: 'var(--black900)' }}>{props.item.title}</p>
                </ModalHeader>

                <ModalBody2>
                    {/* 요청기관 */}
                    <FormFieldSingle label={"요청기관"} FormLabelGroupStyle={{ marginTop: '0px' }}>
                        <SelectButton value={reqtInstCode} onChange={(e) => setReqtInstCode(e.target.value)} style={{ width: '100%' }}>
                            <option value={"B551365"}>한국디자인진흥원</option>
                            <option value={"B553996"}>한국데이터산업진흥원</option>
                            <option value={"B551004"}>영화진흥위원회</option>
                            <option value={"B410015"}>대한상공회의소</option>
                            <option value={"B552729"}>한국방송통신전파진흥원</option>
                            <option value={"B550932"}>한국원자력안전기술원</option>
                            <option value={"B554644"}>한국광해광업공단</option>
                            <option value={"B552644"}>한국콘텐츠진흥원</option>
                            <option value={"B490007"}>한국산업인력공단</option>
                        </SelectButton>
                    </FormFieldSingle>

                    {/* 이름 */}
                    <FormFieldSingle label={"이름"} FormLabelGroupStyle={{ marginTop: '0px' }}>
                        <InputText value={reqtUserName} onChange={(e) => setReqtUserName(e.target.value)}
                        />
                    </FormFieldSingle>

                    {/* 자격증 번호 */}
                    <FormFieldSingle label={"자격증 번호"} FormLabelGroupStyle={{ marginTop: '0px' }}>
                        <InputText value={ctftNo} onChange={(e) => setCtftNo(e.target.value)}
                        />
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
                            value={
                                `매일 최소 1시간 이상 학습 시간을 확보해야 합니다.\n` +
                                `정해진 기간 내에 자격증 시험에 응시하지 않으면 챌린지 불참으로 간주됩니다.\n` +
                                `진행 상황은 매주 반드시 공유해야 하며, 서로의 피드백을 존중해야 합니다.\n` +
                                `자격증 취득을 위한 자료는 신뢰할 수 있는 출처에서 준비해야 합니다.\n`
                            }
                        />
                    </Violet500LineDiv>
                </ModalBody2>
                <Violet500LineButton type='submit' style={{ margin: '0 auto' }}>
                    인증하기
                </Violet500LineButton>
            </ModalContentWrapper>
            {error && <p style={{ color: 'red' }}>Error: {error}</p>}
            {responseData && (
                <div>
                    <h2>응답 결과:</h2>
                    <pre>{responseData}</pre>
                </div>
            )}
        </ModalForm>
    )
}

export default ChallengeAuthModal;