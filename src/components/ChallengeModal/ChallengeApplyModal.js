import React, { useState } from "react";
import styled from 'styled-components';

import ChallengePayModal from "./ChallengePayModal";

const Container = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(226, 227, 227, 0.8);
`
const Modal = styled.div`
    width: 580px;
    height: 650px;
    background: #FCFCFC;
    margin: 150px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ModalHeader = styled.div`
    width: 90%;
    height: 100px;
    margin-top: 20px;
    text-align: center;
`;

const Category = styled.div`
    width: 40%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    margin: 0px auto;
    margin-bottom: 10px;
    background: #9787FF;
    border-radius: 5px;
    color: #FFF;
`;

const ModalBody = styled.div`
    width: 90%;
    height: 350px;
    margin-top: 10px;
    background: #8578D8;
    color: #FFF;
    border-radius: 3px;
    padding: 20px 10px;
    font-size: 15px;
    text-align: left;
`;

const ModalFooter = styled.div`
    width: 90%;
    height: 150px;
    margin-top: 10px;
`;

const ChallengeFee = styled.div`
    width: 100%;
    height: 60%;
    display: flex;
    justify-content: center;
    line-height: 50px;
    padding: 20px 30px;
`;

const FeeInput = styled.input.attrs({
    type: 'text'
  })`
    width: 200px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    color: #2E2E2E;
    border: 1px solid #9787FF;
    margin-left: 20px;
`;

const Buttons = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const CancelButton = styled.div`
    width: 100px;
    height: 30px;
    line-height: 30px;
    background: #FCFCFC;
    border: 1px solid #9787FF;
    text-align: center; 

    &:hover{
        cursor: pointer;
        background: #F2F0FF;
    }
`;

const ApplyButton = styled.div`
    width: 100px;
    height: 30px;
    line-height: 30px;
    background: #FCFCFC;
    border: 1px solid #9787FF;
    text-align: center;
    margin-left: 20px;

    &:hover{
        cursor: pointer;
        background: #F2F0FF;
    }
`;

function ChallengeApplyModal(props){
    const [modalOn, setModalOn] = useState(false);

    const handleCancel = (e) => {
        props.clickFunc();
    }

    const handleApply = (e) => {
        setModalOn(!modalOn);
    }

    return(
        <Container>
            {modalOn && <ChallengePayModal clickFunc={props.clickFunc} handlePay={()=>{setModalOn(!modalOn)}} />}
            <Modal>
                <ModalHeader>
                    <Category>챌린지 신청하기</Category>
                    <span style={{fontSize:"25px"}}>기사 자격증 취득 챌린지</span>
                </ModalHeader>
                <ModalBody>
                    <span style={{fontWeight:'bold', fontSize:'16px'}}>본 챌린지는<br />스터디의 노쇼를 방지하기 위해 챌린지 참가비를 받고 있습니다.</span>
                    <br /><br />
                    금액은 개인 참여자 기준으로 최소금액 0원에서 쵣대금액 30,000원까지 가능합니다.
                    금액 단위는 1,000원 단위로 기재할 수 있습니다.
                    예) 28,000원 (가능) / 28,500원 (불가능)
                    <br /><br /><br />
                    <span style={{fontWeight:'bold', fontSize:'16px'}}>챌린지 실패시 유의사항</span>
                    <br /><br />
                    챌린지를 신청하면 모임원들에게 참여 및 결제 알림이 전송될 예정입니다.
                    <br /><br /><br />
                    <span style={{fontWeight:'bold', fontSize:'16px'}}>환불 정책</span>
                    <br /><br />
                    <ol style={{listStyleType:'decimal', paddingLeft:'15px'}}>
                        <li>
                            참가비는 스터디 완료 시 자동으로 환급되며, WOLF 플랫폼은 참가비의<br />
                            10%를 운영 수수료로 차감하고, 추가로 5%는 기부금으로 사용됩니다.
                        </li>
                        <li>스터디 중도 포기 시 참가비는 환급되지 않으며, 기부금으로 전환됩니다.</li>
                        <li>환급금은 스터디 종료 후 5일 이내에 등록된 계좌로 입금됩니다.</li>
                    </ol>
                </ModalBody>
                <ModalFooter>
                    <ChallengeFee>
                        <span style={{fontSize:'25px'}}>인당 참가비 설정</span>
                        <FeeInput placeholder="0 ~ 30, 000원" />
                    </ChallengeFee>
                    <Buttons>
                        <CancelButton onClick={handleCancel}>취소하기</CancelButton>
                        <ApplyButton onClick={handleApply}>신청하기</ApplyButton>
                    </Buttons>
                </ModalFooter>
            </Modal>
        </Container>
    )
}

export default ChallengeApplyModal;