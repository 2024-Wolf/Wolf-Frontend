import { ModalContentWrapper, ContentWrapper, InputLabel2, InputWrapper, Violet500BackgroundButton, Row, Violet500LineButton, Label, Div } from "../GlobalStyledComponents";

import React, { useEffect, useState } from "react";
import StatusButton from "./Components/StatusButton";
import InputText from "../Input/InputText";
import SubTitle from "./Components/SubTitle";
import { checkNickname } from "../Apis/AuthApi";
import { signUpUser } from "../Apis/UserApi";

const FourthProcessContent = ({ onPrev, onClose, onLogin, signupInfo, handleInputChange, handleInputReset }) => {
    const [isNickNamePossible, setIsNickNamePossible] = useState(false);
    const [isNickNameImpossible, setIsNickNameImpossible] = useState(false);

    const handleNext = async () => {
        try {
            // 회원가입 API 호출
            const result = await signUpUser(signupInfo);
            console.log('회원가입 성공:', result);
            // 회원가입 성공 후 추가 작업
            onLogin(); // 부모 컴포넌트에 로그인 상태 업데이트
            onClose(); // 모달 닫기
        } catch (error) {
            console.error('회원가입 실패:', error);
            // 실패 시 에러 처리 (필요 시 사용자에게 메시지 출력 등 추가)
        }
    };
    const [nickname, setNickname] = useState('');  // 닉네임 상태 추가

    // 닉네임 실시간 업데이트
    const handleNicknameChange = (e) => {
        const { value } = e.target;
        setNickname(value);
    };

    // 닉네임 중복 검사
    const handleNickNameCheck = async () => {
        try {
            // 닉네임 중복 검사
            const isAvailable = await checkNickname(nickname);  // 서버에서 중복 여부 확인

            if (isAvailable) {
                // 닉네임 사용 가능
                setIsNickNamePossible(true);
                setIsNickNameImpossible(false);
                handleInputChange('nickname', nickname);  // 성공 시 상태 업데이트
            } else {
                // 닉네임 사용 불가
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
                        <InputText required
                            value={nickname}
                            onChange={handleNicknameChange}
                        />
                        <Violet500BackgroundButton
                            type="button"
                            onClick={handleNickNameCheck}
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