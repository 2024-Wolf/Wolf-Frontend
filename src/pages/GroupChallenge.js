import React from "react";
import styled from 'styled-components';
import ChallengeList from '../components/ChallengeList';

const Container = styled.div`
    width: 100%;
    margin: 50px 0px;
`;

const Category = styled.div`
    width: 12%;
    height: 45px;
    line-height: 45px;
    font-weight: bold;
    color: #FCFCFC;
    margin: 0px auto;
    border-radius: 5px;
    background: #8578D8;
`;

const StudyName = styled.div`
    margin: 15px auto;
    color: #222;
    font-size: 20px;
`;

const LeaderProfile = styled.div`
    width: 18%;
    height: 40px;
    margin: 0px auto;
    display: flex;
    justify-content: space-between;
`;

const StudyTab = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 50px;
`;

const StudyTabItem = styled.div`
    width: 20%;
    height: 50px;
    line-height: 50px;
    background: #F1F1F1;
    border: 1px solid #B3B4B4;
`;

const ChallengeLists = styled.div`
    padding-top: 30px;
    padding-bottom: 30px;
    border: 1px solid #9787FF;
`;

function GroupChallenge(props){

    return(
        <Container>
            <Category>
                스터디
            </Category>
            <StudyName>
                파이널 스터디 - 지금2조
            </StudyName>
            <LeaderProfile>
                <img style={{ borderRadius:"50%", height:"100%"}} src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" alt="profile"/>
                <span style={{ fontWeight:"bold", lineHeight:"40px" }}>myeongju</span><span style={{ lineHeight:"40px" }}>평가점수지표</span>
            </LeaderProfile>
            <StudyTab>
                <StudyTabItem onClick={()=>{alert('정보')}}>정보</StudyTabItem>
                <StudyTabItem onClick={()=>{alert('할 일')}}>할 일</StudyTabItem>
                <StudyTabItem onClick={()=>{alert('챌린지')}}>챌린지</StudyTabItem>
                <StudyTabItem onClick={()=>{alert('회의')}}>회의</StudyTabItem>
                <StudyTabItem onClick={()=>{alert('관리')}}>관리</StudyTabItem>
            </StudyTab>
            <ChallengeLists>
                <ChallengeList category="진행중" />
                <ChallengeList category="완료" />
                <ChallengeList category="진행 가능" />
            </ChallengeLists>
        </Container>
    )
}

export default GroupChallenge;