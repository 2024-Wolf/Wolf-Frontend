import styled, { keyframes } from "styled-components";
import {
    ModalHeader,
    CategoryMainTitle,
    ModalContentWrapper
} from "../GlobalStyledComponents";

import React from "react";
import ModalForm from "../Modal/ModalForm";
import CancelIcon from "../Icon/CancelIcon";
import TextAreaNoCss from "../Input/TextAreaNoCss";



const shadowAnimation = keyframes`
  0% {
    box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  }
50% {
    box-shadow: -3px 0px 50px rgba(0, 0, 0, 0.3);
  }
  100% {
    box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  }


`;


// components/ChallengeModal/ChallengeResultModal.js
export const Success = styled.div`
  width: 100%;
  height: 100%;
margin: 0px auto;
line-height: 1.5;
`;

// components/ChallengeModal/ChallengeResultModal.js
export const SuccessListTitle = styled.div`
    width: 100%;
    height: 100%;
    margin: 0px auto;
    text-wrap: wrap;
    font-size: 18px;
    font-weight: bold;
`;

// components/ChallengeModal/ChallengeResultModal.js
export const Fail = styled.div`
  width: 100%;
  height: 100%;
margin: 0px auto;
    line-height: 1.5;
`;
// components/ChallengeModal/ChallengeResultModal.js
export const FailListTitle = styled.div`
    width: 100%;
    height: 100%;
    margin: 0px auto;
    text-wrap: wrap;
    font-size: 18px;
    font-weight: 600;
`;

// components/ChallengeModal/ChallengeResultModal.js
export const SuccessList = styled.div`
    border: 1px solid var(--violet300);
    background-color: var(--violet300);
    text-wrap: nowrap;
    font-size: 15px;
    border-radius: 7px 0px 0px 7px;
    width: 50%;
    display: flex;
    flex-direction: column;
    padding: 20px 0px;
    height: auto;
    gap: 10px;
    animation: ${shadowAnimation} 2s ease infinite;
    z-index: 1;
        
    @media (max-width: 480px) {
        width: 100%;
        border-radius: 7px 7px 0px 0px;
    }
`;

// components/ChallengeModal/ChallengeResultModal.js
export const FailList = styled.div`
    border: 1px solid var(--black200);
    background-color: var(--black200);
    text-wrap: nowrap;
    font-size: 15px;
    border-radius: 0px 7px 7px 0px;
    width: 50%;
    display: flex;
    flex-direction: column;
    padding: 20px;
    height: auto;
    gap: 10px;

    @media (max-width: 480px) {
        width: 100%;
        border-radius: 0px 0px 7px 7px;
    }
`;

// components/ChallengeModal/ChallengeResultModal.js
export const ChallengeStatusList = styled.div`
    display: flex;
    flex-direction: row;
  width: 100%;

@media (max-width: 480px) {
    flex-direction: column;
}
`;

// components/ChallengeModal/ChallengeResultModal.js
export const ChallengeAllMount = styled.div`
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

export const ChallengeAllMountTitle = styled.div`
    align-items: center;
    color: var(--violet000);
    min-width: 80px;
    font-size: 24px;
    padding: 10px 0px;

    
    span {
        font-weight: 600;
    }
    display: flex;
    flex-direction: row;
    align-items: start;

    @media (max-width: 400px) {
        flex-direction: column;
    }
`;

export const ChallengeMountTitle = styled.div`
    align-items: center;
    color: var(--black800);
    min-width: 80px;
    font-size: 24px;
    padding: 10px 0px;
    margin: 0px auto;

    
    span {
        font-weight: 600;
    }
    display: flex;
    flex-direction: row;
    align-items: start;

    @media (max-width: 400px) {
        flex-direction: column;
    }
`;


export const ChallengeAllMountContent = styled.div`
    padding: 10px;
    text-align: end;
`;
export const AllAmountText = styled.div`
    color: var(--black200);
    border-radius: 7px;
    width: 100%;
    line-height: 1.7;
    white-space: pre-wrap;
    overflow-wrap: break-word;
    cursor: default;
    justify-content: end;

    span {
        text-wrap: nowrap
    }
        display:flex;
    flex-direction: row;
    @media (max-width: 350px) {
        flex-direction: column;
    }
`;

export const AmountText = styled.div`
    color: var(--black800);
    border-radius: 7px;
    width: 100%;
    line-height: 1.7;
    white-space: pre-wrap;
    overflow-wrap: break-word;
    cursor: default;
    justify-content: end;
    font-size: 15px;

    span {
        text-wrap: nowrap
    }
        display:flex;
    flex-direction: row;
    @media (max-width: 350px) {
        flex-direction: column;
    }
`;




function ChallengeResultModal(props) {

    const handleCancel = (e) => {
        props.cancel();
    }

    return (
        <>
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
                        <CategoryMainTitle>챌린지 결과확인</CategoryMainTitle>
                        <p style={{ fontSize: '20px', fontWeight: 'bold', color: 'var(--black900)' }}>props.item.title</p>
                    </ModalHeader>

                    {/* 챌린지 총 금액 */}
                    <ChallengeAllMount>
                        <ChallengeAllMountTitle>
                            <span>챌린지 총 금액</span> <span>: 240,000원</span>
                        </ChallengeAllMountTitle>
                        <ChallengeAllMountContent>
                            <AllAmountText><span>수령 금액(85%)</span> <span>: 204,000원</span></AllAmountText>
                            <AllAmountText><span>수수료(10%)</span> <span>: 24,000원</span></AllAmountText>
                            <AllAmountText><span>기부금(5%)</span> <span>: 12,000원</span></AllAmountText>
                        </ChallengeAllMountContent>
                    </ChallengeAllMount>


                    {/* 챌린지 성공 명단 */}
                    <ChallengeStatusList>
                        <SuccessList>
                            <SuccessListTitle>🎉 성공을 축하합니다 🎉</SuccessListTitle>
                            <Success>
                                @@@님<br />
                                @@@님<br />
                                @@@님<br />
                            </Success>
                        </SuccessList>
                        <FailList>
                            <FailListTitle>챌린지에 실패했어요<span style={{ textWrap: 'nowrap' }}>(｡•́︿•̀｡)</span></FailListTitle>
                            <Fail>
                                @@@님<br />
                                @@@님<br />
                                @@@님<br />
                            </Fail>
                        </FailList>
                    </ChallengeStatusList>



                    {/* 챌린지 1인당 상금*/}
                    <ChallengeAllMount style={{
                        backgroundColor: 'transparent',
                    }}>
                        <ChallengeMountTitle>
                            <span>1인당 상금</span> <span>: 30,000원</span>
                        </ChallengeMountTitle>
                        <ChallengeAllMountContent>
                            <AmountText><span>수령 금액(85%)</span> <span>: 25,500원</span></AmountText>
                            <AmountText><span>수수료(10%)</span> <span>: 3,000원</span></AmountText>
                            <AmountText><span>기부금(5%)</span> <span>: 1,500원</span></AmountText>
                        </ChallengeAllMountContent>
                        <TextAreaNoCss
                            style={{ color: 'var(--black500)', textAlign: 'center' }}
                            value={'참가비는 등록된 환불계좌로 영업일 5일 이내에 입금될 예정입니다.'} />
                    </ChallengeAllMount>

                </ModalContentWrapper>
            </ModalForm>
        </>
    )
}

export default ChallengeResultModal;