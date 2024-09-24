import React from "react";
import styled from 'styled-components';
import thumbnail from '../../resources/image/ChallengeThumbnail.png'

const Container = styled.div`

`;

const Title = styled.div`
    width: 30%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin: 0px auto;
    font-size: 25px;
`;

const Period = styled.div`
    width: 80%;
    height: 100px;
    line-height: 100px;
    background: #FFF;
    border: 1px solid #CEC6FF;
    margin: 0px auto;
    margin-top: 30px;
`;

const PeriodText = styled.span`
    float: left;
    margin-left: 50px;
`;

const ParticipationButton = styled.div`
    float: right;
    width: 80px;
    height: 35px;
    background: #FAF9FF;
    border: 1px solid #B3A8FF;
    border-radius: 5px;
    line-height: 35px;
    margin-top: 30px;
    margin-right: 50px;

    &:hover{
        cursor: pointer;
        background: #CEC6FF;
    }
`;

const Content = styled.div`
    width: 80%;
    min-height: 300px;
    background: #FFF;
    border: 1px solid #CEC6FF;
    margin: 0px auto;
    margin-top: 30px;
    clear: both;
    padding: 30px;
    text-align: left;
    color: #A0A0A0;
`;

const ChallengeFee = styled.div`
    width: 80%;
    min-height: 200px;
    background: #FFF;
    border: 1px solid #CEC6FF;
    margin: 0px auto;
    margin-top: 30px;
    padding: 30px;
    text-align: left;
    color: #A0A0A0;
`;

const ChallengeWarning = styled.div`
    width: 80%;
    min-height: 300px;
    background: #9787FF;
    color: #FAF9FF;
    margin: 0px auto;
    margin-top: 30px;
    padding: 30px;
    text-align: left;
`;

const BackButton = styled.div`
    width: 10%;
    height: 50px;
    margin: 25px auto;
    background: #E5E1FF;
    border: 1px solid #9787FF;
    color: #49494A;
    font-weight: bold;
    font-size: 25px;
    line-height: 50px;
    text-align: center;

    &:hover{
        background: #B3A8FF;
        border: 1px solid #8578D8;
        cursor: pointer;
    }
`;


function ChallengeDetail(props){

    return(
        <Container>
            <Title>
                <span style={{fontWeight:'bold', marginBottom:'30px'}}>기사 자격증 취득 챌린지</span>                
                <img src={thumbnail} alt='챌린지 썸네일'/>
            </Title>
            <Period>
                <PeriodText>챌린지 기간&nbsp;&nbsp;&nbsp;&nbsp;2024.08.23~2024.10.23</PeriodText>
                <ParticipationButton onClick={()=>{alert('참가하기')}}>참가하기</ParticipationButton>
            </Period>
            <Content>
                챌린지 내용
            </Content>
            <ChallengeFee>
                챌린지 참가비 내용
            </ChallengeFee>
            <ChallengeWarning>
                챌린지 유의사항
            </ChallengeWarning>
            <BackButton onClick={props.clickFunc}>뒤로</BackButton>
        </Container>
    )
}

export default ChallengeDetail;