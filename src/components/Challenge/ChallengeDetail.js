import styled from 'styled-components';
import { Title4, Period, PeriodText, ParticipationButton, Content, ChallengeFee, ChallengeWarning, BackButton } from "../GlobalStyledComponents";

import React from "react";
import thumbnail from '../../resources/image/ChallengeThumbnail.png'


function ChallengeDetail(props) {

    return (
        <div>
            <Title4>
                <span style={{ fontWeight: 'bold', marginBottom: '30px' }}>기사 자격증 취득 챌린지</span>
                <img src={thumbnail} alt='챌린지 썸네일' />
            </Title4>
            <Period>
                <PeriodText>챌린지 기간&nbsp;&nbsp;&nbsp;&nbsp;2024.08.23~2024.10.23</PeriodText>
                <ParticipationButton onClick={() => { alert('참가하기') }}>참가하기</ParticipationButton>
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
        </div>
    )
}

export default ChallengeDetail;