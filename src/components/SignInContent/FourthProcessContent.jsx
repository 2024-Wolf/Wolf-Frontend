import styled from "styled-components";
import { ModalContentWrapper, ContentWrapper, InputLabel2, InputWrapper, Violet500BackgroundButton, Row, Violet500LineButton, Label, Div } from "../GlobalStyledComponents";

import React, { useState } from "react";
import StatusButton from "./Components/StatusButton";
import InputText from "../Input/InputText";
import NextButton from "./Components/NextButton";
import SubTitle from "./Components/SubTitle";
import PreviousIcon from "../Icon/PreviousIcon";

const FourthProcessContent = ({ onPrev, onClose, onLogin, handleInputChange, handleInputReset }) => {
    const [isNickNamePossible, setIsNickNamePossible] = useState(false);
    const [isNickNameImpossible, setIsNickNameImpossible] = useState(false);




    const handleNext = () => {
        onClose();
        onLogin();
    };

    const handleNickName = (e) => {
        e.preventDefault();

        // 중복된 닉네임인지 검증하는 로직 구현이 필요함
        if (true) {
            // 닉네임 사용 가능
            alert('사용 가능한 닉네임입니다')
            setIsNickNamePossible(true);
            setIsNickNameImpossible(false);

        } else {
            // 닉네임 사용 불가
            alert('중복된 닉네임입니다')
            setIsNickNameImpossible(true);
            setIsNickNamePossible(false);
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