import styled from 'styled-components';
import {
    Violet500LineDiv, FormFieldRow, FormFieldColumn,
} from "../GlobalStyledComponents";

import React, { useEffect, useState } from "react";
import FormFieldSingle from "../Group/GroupComponent/FormFieldSingle";
import InputTextNoCss from '../Input/InputTextNoCss';
import TextAreaNoCss from '../Input/TextAreaNoCss';
import PreviousButton from '../Button/PreviousButton';
import ImagePreview from '../Img/ImagePreview';
import { getChallenge } from '../Apis/ChallengePostApi';

export const NoticeDetailContainer = styled.div`
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

// components/Notice/NoticeDetail.js
export const NoticeDetailTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 0 auto 0 auto;
  font-size: 25px;
  font-weight: bold;
`;

const NoticeDetailHeaderTop = styled.div`
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


function NoticeDetail(props) {
    const [item, setItem] = useState({});

    useEffect(() => {
        getChallenge(props.NoticePostId)
            .then(function (response) {
                // setItem(response.data);
            })
    }, []);

    const prevClick = (e) => {
        e.stopPropagation();
        props.prevClick();
    }

    return (
        <NoticeDetailContainer>
            <NoticeDetailHeaderTop>
                <span className="hiddenSpan" />
                <NoticeDetailTitle>{item.title}</NoticeDetailTitle>
                <PreviousButton prevClick={prevClick} />
            </NoticeDetailHeaderTop>
            <ImagePreview
                imageFile={'ChallengeThumbnail/ChallengeThumbnail.png'}
                src={'ChallengeThumbnail/ChallengeThumbnail.png'} alt='공지사항 썸네일'
            />
            {/* 공지사항 제목 */}
            <Violet500LineDiv>
                <FormFieldColumn>
                    <FormFieldSingle label={"제목"}>
                        <InputTextNoCss
                            name="title"
                            placeholder="제목을 작성해주세요."
                            value={
                                item.content
                            }
                        />
                    </FormFieldSingle>
                </FormFieldColumn>
            </Violet500LineDiv>
            {/* 공지사항 내용 */}
            <Violet500LineDiv>
                <TextAreaNoCss
                    name="introduction"
                    placeholder="내용을 작성해주세요."
                    value={
                        item.content
                    }
                />
            </Violet500LineDiv>
        </NoticeDetailContainer >
    )
}

export default NoticeDetail;