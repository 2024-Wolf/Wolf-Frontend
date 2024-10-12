import styled from 'styled-components';
import {
    DoubleDateContainer, Violet500LineDiv, FormFieldRow, FormFieldColumn,
    Violet500BackgroundButton, Period, PeriodText, ParticipationButton, Content, ChallengeFee, ChallengeWarning, BackButton,
    ButtonGroupRight
} from "../GlobalStyledComponents";

import React from "react";
import FormFieldSingle from "../Group/GroupComponent/FormFieldSingle";
import InputDateNoCss from '../Input/InputDateNoCss';
import TextAreaNoCss from '../Input/TextAreaNoCss';
import EditButton from '../Button/EditButton';
import DeleteButton from '../Button/DeleteButton';
import PreviousButton from '../Button/PreviousButton';
import ImagePreview from '../Img/ImagePreview';

export const ChallengeDetailContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  position: relative;
  justify-content: space-between;
  align-items: center;
  padding: 0px 40px;
  
  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

// components/Challenge/ChallengeDetail.js
export const ChallengeDetailTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 0 auto 0 auto;
  font-size: 25px;
  font-weight: bold;
`;

const ChallengeDetailHeaderTop = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  justify-content: space-between;

  .hiddenSpan {
    width: 88.99px;
    @media (max-width: 768px) {
        width: 113.2px;
    }

    @media (max-width: 480px) {
        width: 36.33px;
    }
  }
`;

function ChallengeDetail(props) {

    return (
        <>
            <ChallengeDetailContainer>
                <ChallengeDetailHeaderTop>
                    <span className="hiddenSpan" />
                    <ChallengeDetailTitle>기사 자격증 취득 챌린지</ChallengeDetailTitle>
                    <PreviousButton onClick={props.clickFunc} />
                </ChallengeDetailHeaderTop>
                <ImagePreview
                    imageFile={'ChallengeThumbnail/ChallengeThumbnail.png'}
                    src={'ChallengeThumbnail/ChallengeThumbnail.png'} alt='챌린지 썸네일'
                />
                {/* 챌린지 기간 & 참가하기 */}
                <Violet500LineDiv>
                    <FormFieldColumn>
                        <FormFieldSingle label={"챌린지 기간"}>
                            <DoubleDateContainer className="date">
                                <InputDateNoCss value="2024-09-10" />
                                ~
                                <InputDateNoCss value="2024-09-20" />
                            </DoubleDateContainer>
                        </FormFieldSingle>
                        <Violet500BackgroundButton onClick={() => { alert('참가하기') }}>
                            참가하기
                        </Violet500BackgroundButton>
                    </FormFieldColumn>
                </Violet500LineDiv>
                {/* 챌린지 내용 */}
                <Violet500LineDiv>
                    <FormFieldRow>
                        <FormFieldSingle label={"챌린지 상세"} className="PostTitle">
                        </FormFieldSingle>
                    </FormFieldRow>
                    <TextAreaNoCss
                        name="introduction"
                        placeholder="모집에 대한 간단한 소개를 작성해주세요."
                        value={
                            `2024년 10월 13일까지 원하는 분야의 자격증을 목표로 하루 1시간 이상 공부합니다.\n` +
                            `매주 진행 상황을 공유하고, 챌린지 종료 후 자격증 시험에 응시합니다.\n` +
                            `참가자들은 서로 격려하며 학습하고, 목표를 이루는 데 도움을 줍니다.\n` +
                            `새로운 지식을 쌓고 경력 발전을 도모하는 기회를 제공합니다!`
                        }
                    />
                </Violet500LineDiv>
                {/* 챌린지 참가비 내용 */}
                <Violet500LineDiv>
                    <FormFieldRow>
                        <FormFieldSingle
                            labelStyle={{ minWidth: '70px' }}
                            label={"참가비"} className="PostTitle">
                        </FormFieldSingle>
                    </FormFieldRow>
                    <TextAreaNoCss
                        name="introduction"
                        placeholder="모집에 대한 간단한 소개를 작성해주세요."
                        value={
                            `2024년 10월 13일까지 원하는 분야의 자격증을 목표로 하루 1시간 이상 공부합니다.\n` +
                            `매주 진행 상황을 공유하고, 챌린지 종료 후 자격증 시험에 응시합니다.\n` +
                            `참가자들은 서로 격려하며 학습하고, 목표를 이루는 데 도움을 줍니다.\n` +
                            `새로운 지식을 쌓고 경력 발전을 도모하는 기회를 제공합니다!`
                        }
                    />
                </Violet500LineDiv>
                {/* 챌린지 유의사항 */}
                <Violet500LineDiv
                    style={{ background: 'var(--violet500)', color: 'var(--violet000)' }}
                >
                    <FormFieldRow>
                        <FormFieldSingle
                            labelStyle={{ color: 'var(--violet000)', minWidth: '80px' }}
                            label={"유의사항"} className="PostTitle">
                        </FormFieldSingle>
                    </FormFieldRow>
                    <TextAreaNoCss
                        style={{ background: 'var(--violet500)', color: 'var(--violet000)' }}
                        name="introduction"
                        placeholder="모집에 대한 간단한 소개를 작성해주세요."
                        value={
                            `매일 최소 1시간 이상 학습 시간을 확보해야 합니다.\n` +
                            `정해진 기간 내에 자격증 시험에 응시하지 않으면 챌린지 불참으로 간주됩니다.\n` +
                            `진행 상황은 매주 반드시 공유해야 하며, 서로의 피드백을 존중해야 합니다.\n` +
                            `자격증 취득을 위한 자료는 신뢰할 수 있는 출처에서 준비해야 합니다.\n`
                        }
                    />
                </Violet500LineDiv>
            </ChallengeDetailContainer >
        </>
    )
}

export default ChallengeDetail;