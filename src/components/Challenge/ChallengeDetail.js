import styled from 'styled-components';
import {
    DoubleDateContainer, Violet500LineDiv, FormFieldRow, FormFieldColumn,
    Violet500BackgroundButton
} from "../GlobalStyledComponents";

import React, { useEffect, useState } from "react";
import FormFieldSingle from "../Group/GroupComponent/FormFieldSingle";
import InputDateNoCss from '../Input/InputDateNoCss';
import TextAreaNoCss from '../Input/TextAreaNoCss';
import PreviousButton from '../Button/PreviousButton';
import ImagePreview from '../Img/ImagePreview';
import { getChallenge } from '../Apis/ChallengePostApi';

export const ChallengeDetailContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  position: relative;
  justify-content: space-between;
  align-items: center;
  padding: 30px 40px;
  
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
    const [item, setItem] = useState({});

    useEffect(() => {
        getChallenge(props.challengePostId)
            .then(function (response) {
                setItem(response.data);
            })
    }, []);

    const prevClick = (e) => {
        e.stopPropagation();
        props.prevClick();
    }

    return (
        <ChallengeDetailContainer>
            <ChallengeDetailHeaderTop>
                <span className="hiddenSpan" />
                <ChallengeDetailTitle>{item.title}</ChallengeDetailTitle>
                <PreviousButton prevClick={prevClick} />
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
                            <InputDateNoCss value={item.registrationDate} />
                            ~
                            <InputDateNoCss value={item.deadline} />
                        </DoubleDateContainer>
                    </FormFieldSingle>
                    {/* {<Violet500BackgroundButton onClick={() => { alert('참가하기') }}>
                        참가하기
                    </Violet500BackgroundButton>} */}
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
                        item.content
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
                        item.awardContent
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
                        item.manner
                    }
                />
            </Violet500LineDiv>
        </ChallengeDetailContainer >
    )
}

export default ChallengeDetail;