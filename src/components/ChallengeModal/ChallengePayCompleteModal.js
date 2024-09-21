import React from "react";
import styled from "styled-components";

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
`;

const CancelButton = styled.div`
    width: 100px;
    height: 30px;
    line-height: 30px;
    background: #FCFCFC;
    border: 1px solid #9787FF;
    text-align: center;
    margin: 0px auto;
    &:hover{
        cursor: pointer;
        background: #F2F0FF;
    }
`;

function ChallengePayCompleteModal(props){

    return(
        <Container>
            <Modal>
                <ModalHeader>
                    <Category>챌린지 결제하기</Category>
                </ModalHeader>
                <ModalBody>
                    <p style={{fontSize:'25px'}}>파이널 스터디 - 지금2조</p>
                    <p style={{fontSize:'36px', marginTop:'60px', fontWeight:'bold'}}>결제 완료</p>
                    <p style={{fontSize:'25px', marginTop:'60px'}}>
                        결제가 완료되었습니다.<br /><br />
                        이제부터 챌린지에 도전합니다.<br /><br />
                        화이팅!
                    </p>
                </ModalBody>
                <ModalFooter>
                    <Buttons>
                        <CancelButton>닫기</CancelButton>
                    </Buttons>
                </ModalFooter>
            </Modal>
        </Container>
    )
}

export default ChallengePayCompleteModal;