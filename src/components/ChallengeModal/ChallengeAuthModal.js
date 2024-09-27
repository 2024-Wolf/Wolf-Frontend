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
    height: 600px;
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
    height: 500px;
    margin-top: 10px;
    color: #111111;
    border-radius: 3px;
    padding: 20px 10px;
    font-size: 15px;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

const AuthOrganization = styled.div`
    width: 100%;
    text-align: left;
    font-size: 13px;
    line-height: 30px;
    margin-top: 30px;
`

const AuthCode = styled.div`
    width: 100%;
    text-align: left;
    font-size: 13px;
    line-height: 30px;
    margin-top: 30px;
`
const AuthWarning = styled.div`
    width: 100%;
    height: 160px;
    background: #8578D8;
    color: #fff;
    margin-top: 30px;
    text-align: left;
    padding: 10px;
`

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

const AuthButton = styled.div`
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

function ChallengeAuthModal(props){
    
    const handleCancel = (e) => {
        props.clickFunc();
    }

    return(
        <Container>
            <Modal>
                <ModalHeader>
                    <Category>챌린지 인증하기</Category>
                </ModalHeader>
                <ModalBody>
                    <p style={{fontSize:'25px'}}>파이널 스터디 - 지금2조</p>
                    <AuthOrganization>
                        요청기관
                        <select style={{border:'1px solid #9787FF', width:'420px', height:'30px', float:'right'}}>
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
                        <div style={{clear:'both'}}></div>
                    </AuthOrganization>
                    <AuthCode>
                        자격증 번호
                        <input style={{border:'1px solid #9787FF', width:'420px', height:'30px', float:'right'}} />
                        <div style={{clear:'both'}}></div>
                    </AuthCode>
                    <AuthWarning>
                        인증 시 유의사항
                    </AuthWarning>
                </ModalBody>
                <ModalFooter>
                    <Buttons>
                        <CancelButton onClick={handleCancel}>취소하기</CancelButton>
                        <AuthButton onClick={handleCancel}>인증하기</AuthButton>
                    </Buttons>
                </ModalFooter>
            </Modal>
        </Container>
    )
}

export default ChallengeAuthModal;