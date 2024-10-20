import styled from "styled-components";
import { ModalContentWrapper, ContentWrapper, InputLabel2, InputWrapper, Violet500BackgroundButton, Row, Violet500LineButton, Label, Div } from "../GlobalStyledComponents";

import React, { useState } from "react";
import StatusButton from "./Components/StatusButton";
import InputText from "../Input/InputText";
import NextButton from "./Components/NextButton";
import SubTitle from "./Components/SubTitle";
import PreviousIcon from "../Icon/PreviousIcon";
import {checkNickname} from "../Apis/AuthApi";

const FourthProcessContent = ({ onPrev, onClose, onLogin, handleInputChange, handleInputReset }) => {
    const [isNickNamePossible, setIsNickNamePossible] = useState(false);
    const [isNickNameImpossible, setIsNickNameImpossible] = useState(false);




    const handleNext = () => {
        onClose();
        onLogin();
    };

    const handleNickName = async (e) => {
        e.preventDefault();

        const nickname = e.target.value;  // 입력된 닉네임 가져오기

        try {
            // 닉네임 중복 검사
            const isAvailable = await checkNickname(nickname);  // 서버에서 중복 여부 확인

            if (isAvailable) {
                // 닉네임 사용 가능
                alert('사용 가능한 닉네임입니다');
                setIsNickNamePossible(true);
                setIsNickNameImpossible(false);
            } else {
                // 닉네임 사용 불가
                alert('중복된 닉네임입니다');
                setIsNickNameImpossible(true);
                setIsNickNamePossible(false);
            }
        } catch (error) {
            console.error('닉네임 중복 확인 중 오류 발생:', error);
            // 필요에 따라 에러 처리 로직 추가
        }
    };

    return (
        <ContentWrapper>
            <StatusButton nowIndex={3} />
            <SubTitle title={"이제 마지막 단계예요!\n어떤 닉네임으로 시작하시겠어요?"} />
            <ModalContentWrapper>
                <Div>
                    <Label>닉네임을 입력해주세요</Label>
                    <Row>
                        <InputText required />
                        <Violet500BackgroundButton
                            type="button"
                            onClick={handleNickName}
                        >
                            중복 검사
                        </Violet500BackgroundButton>
                    </Row>
                    <div style={{ height: '16px' }}>
                        {/* {!isButtonDisable && } */}
                        {isNickNamePossible &&
                            <span
                                style={{
                                    fontSize: '13px', color: 'var(--blueViolet700)'
                                }}>
                                사용 가능한 닉네임입니다
                            </span>
                        }
                        {isNickNameImpossible &&
                            <span
                                style={{
                                    fontSize: '13px', color: '#ED4E51'
                                }}>
                                사용 불가능한 닉네임입니다
                            </span>
                        }
                    </div>
                </Div>

                {/* <InputLabel2>사용 가능한 닉네임입니다.</InputLabel2> */}
            </ModalContentWrapper>
            <Row style={{ gap: "5px" }}>
                <Violet500LineButton
                    type="button"
                    style={{ width: '100%' }}
                    onClick={() => {
                        if (window.confirm('이전으로 이동하면 입력 정보가 초기화 됩니다.\n진행하시겠습니까?')) {
                            onPrev();
                            handleInputReset('jobTitle');
                            handleInputReset('experience');
                            handleInputReset('organization');
                        }
                    }}>
                    이전
                </Violet500LineButton>
                <Violet500BackgroundButton
                    type="submit"
                    disabled={!isNickNamePossible}
                    style={{ width: '100%' }}
                    onClick={handleNext}>
                    프로필 저장
                </Violet500BackgroundButton>
            </Row>

        </ContentWrapper>
    )
}

export default FourthProcessContent;