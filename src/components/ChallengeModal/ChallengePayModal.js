import React, { useState } from "react";
import styled from "styled-components";

import ChallengePayCompleteModal from "./ChallengePayCompleteModal";

const Container = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(226, 227, 227, 0.8);
`
const Modal = styled.div`
    width: 500px;
    height: 550px;
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
    color: #111111;
    border-radius: 3px;
    padding: 20px 10px;
    font-size: 15px;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

const ModalFooter = styled.div`
    width: 90%;
    height: 100px;
    margin-top: 10px;
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

const PayButton = styled.div`
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

function ChallengePayModal(props){

    const [completeModalOn, setCompleteModalOn] = useState();

    return(
        <Container>
            {completeModalOn && <ChallengePayCompleteModal clickFunc={props.clickFunc} />}
            <Modal>
                <ModalHeader>
                    <Category>챌린지 결제하기</Category>
                </ModalHeader>
                <ModalBody>
                    <p style={{fontSize:'25px'}}>파이널 스터디 - 지금2조</p>
                    <p style={{fontSize:'36px', marginTop:'60px', fontWeight:'bold'}}>기사 자격증 취득 챌린지</p>
                    <input type="text" style={{fontSize:'36px', marginTop:'60px', textAlign:'center'}} placeholder="0 ~ 30,000원" />
                </ModalBody>
                <ModalFooter>
                    <Buttons>
                        <CancelButton onClick={() => {props.handlePay()}}>취소하기</CancelButton>
                        <PayButton onClick={()=>{setCompleteModalOn(!completeModalOn)}}>결제하기</PayButton>
                    </Buttons>
                </ModalFooter>
            </Modal>
        </Container>
    )
}

export default ChallengePayModal;