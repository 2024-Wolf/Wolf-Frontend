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
    width: 580px;
    height: 800px;
    background: #FCFCFC;
    margin: 150px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ModalHeader = styled.div`
    width: 90%;
    height: 50px;
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
    height: 620px;
    margin-top: 10px;
    color: #111111;
    border-radius: 3px;
    padding: 20px 10px;
    font-size: 15px;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

const TotalAmount = styled.div`
    width: 100%;
    height: 120px;
    background: #8578D8;
    color: #FCFCFC;
    padding: 10px 50px;
    font-size: 28px;
`;

const ResultDetail = styled.div`
    width: 100%;
    height: 200px;
    background: #CEC6FF;
    border: #9787FF;
    display: flex;
    font-size: 18px;
    padding: 25px 63px;
`

const Success = styled.div`
    width: 50%;
    height: 100%;
`;

const Fail = styled.div`
    width: 50%;
    height: 100%;
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

function ChallengeResultModal(props){

    const handleCancel = (e) => {
        props.clickFunc();
    }

    return(
        <Container>
            <Modal>
                <ModalHeader>
                    <Category>챌린지 결과확인</Category>
                </ModalHeader>
                <ModalBody>
                    <p style={{fontSize:'25px'}}>파이널 스터디 - 지금2조</p>
                    <p style={{fontSize:'36px', fontWeight:'bold', marginTop:'30px'}}>기사 자격증 취득 챌린지</p>
                    <TotalAmount>
                        총 금액 : 204,000원<br /><br />
                        <span style={{fontSize:'16px', color:'#B3B4B4'}}>(수수료 10%: 24,000원 / 기부금 5%: 12,000원 제외한 금액)</span>
                    </TotalAmount>
                    <ResultDetail>
                        <Success>
                            <span style={{fontSize:'25px'}}>챌린지 성공</span><br /><br />
                            성공인원 : <span style={{fontWeight:'bold'}}>3</span>명<br /><br />
                            @@@ 님<br />
                            @@@ 님<br />
                            @@@ 님<br />
                        </Success>
                        <Fail>
                            <span style={{fontSize:'25px'}}>챌린지 실패</span><br /><br />
                            실패인원 : <span style={{fontWeight:'bold'}}>3</span>명<br /><br />
                            @@@ 님<br />
                            @@@ 님<br />
                            @@@ 님<br />
                        </Fail>
                    </ResultDetail>
                    <p style={{fontSize:'32px', marginTop:'30px'}}>1인당 상금 : <span style={{fontWeight:'bold'}}>25,500원</span></p>
                    <p style={{fontSize:'18px', marginTop:'30px', color:'#B3B4B4'}}>(수수료 10% : <span style={{fontWeight:'bold'}}>3,000</span>원 / 기부금 5% : <span style={{fontWeight:'bold'}}>1,500</span>원 제외한 금액)</p>
                    <p style={{fontSize:'18px', marginTop:'30px'}}>참가비는 등록된 환불계좌로 영업일 5일 이내에 입금될 예정입니다.</p>
                </ModalBody>
                <ModalFooter>
                    <Buttons>
                        <CancelButton onClick={handleCancel}>닫기</CancelButton>
                    </Buttons>
                </ModalFooter>
            </Modal>
        </Container>
    )
}

export default ChallengeResultModal;