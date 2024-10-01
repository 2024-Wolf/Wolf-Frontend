import styled from "styled-components";
import { LogoL, SubTitle3, Description3, GoogleLoginButton } from "../GlobalStyledComponents";

import React from "react";

const LoginContent = ({ onNext }) => {
    const handleGoogleLogin = () => {
        // Google 로그인 처리 로직 추가
        console.log(onNext);
        // 이후 다음 단계 진행
        onNext();
    };

    return (
        <>
            <LogoL>Wolf</LogoL>
            <SubTitle3>WOLF에 오신것을 환영합니다.</SubTitle3>
            <Description3>
                스터디와 사이드 프로젝트를 찾는 가장 쉬운 방법! <br />
                WOLF에서 함께 할 팀원들을 찾으세요!
            </Description3>
            <GoogleLoginButton onClick={handleGoogleLogin}>Google 로그인</GoogleLoginButton>
        </>
    );
};


export default LoginContent;