import React, { useState, useEffect } from "react";

import UserInfo from "../components/UserInfo";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MyPageTabs from "../components/MyPageComponents/MyPageTabs";

const MyPageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: auto;
    flex-direction: column;
    margin: 50px auto;
    max-width: 1300px; /* 최대 너비를 1300px로 설정 (변경 가능성 O)*/
    gap: 50px;
    padding: 0 20px;

    @media (max-width: 768px) {
        padding: 0 15px;
        margin: 50px auto;
        gap: 30px;
    }

    @media (max-width: 480px) {
        padding: 0 10px;
        margin: 30px auto;
        gap: 20px;
    }
`;

const Title = styled.h1`
  text-align: left;
  font-weight: bold;
  font-size: 2.5rem;
  color: #333;
  margin: 30px 0px;
`;

const MyPage = () => {
    const [user, setUser] = useState();

    return (
        <>
            <Header/>
            <MyPageContainer>
                <Title>MyPage</Title>
                <MyPageTabs tab={"계정"}/>
            </MyPageContainer>
            <Footer/>
        </>
    );
}

export default MyPage;