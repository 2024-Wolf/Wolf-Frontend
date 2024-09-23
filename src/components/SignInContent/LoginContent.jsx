import React from "react";
import styled from "styled-components";


const LogoL = styled.div`
    font-family: "Kavoon";
    font-size: 96px;
    font-weight: 700;
    background-size: 100%;
    margin: 0 auto;
`;


const SubTitle = styled.div`
    margin: 20px 0;
    font-size: 20px;
    color: var(--black800);
`;

const Description = styled.div`
    margin: 10px 0;
    font-size: 15px;
    line-height: 1.5;
    color: var(--black800);
`;

const GoogleLoginButton = styled.button`
    width: 100%;
    height: 50px;
    margin-top: 20px;
`;


const LoginContent = () => {
    return (
        <>
            <LogoL>Wolf</LogoL>
            <SubTitle>WOLF에 오신것을 환영합니다.</SubTitle>
            <Description>스터디와 사이드 프로젝트를 찾는 가장 쉬운 방법! <br/>
                WOLF에서 함께 할 팀원들을 찾으세요!</Description>
            <GoogleLoginButton>Google 로그인</GoogleLoginButton>
        </>
    )
}


export default LoginContent;