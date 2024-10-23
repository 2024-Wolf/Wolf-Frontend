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
    span {
        display: flex;
        flex-direction: column;
        gap: 5px;
        font-size: 14px;
        align-items: start;
        width: 100%;
        color: var(--black500);

        @media (max-width: 768px) {
            font-size: 13px;
        }

        @media (max-width: 480px) {
            font-size: 12px;
        }
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
  text-align: center;
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
        width: 87.27px;
    }

    @media (max-width: 480px) {
        width: 36.33px;
    }
  }
`;


function NoticeDetail(props) {

    const prevClick = (e) => {
        e.stopPropagation();
        props.prevClick();
    }

    function formatDate(isoString) {
        const date = new Date(isoString);

        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1
        const day = String(date.getDate()).padStart(2, '0');

        return `${year}.${month}.${day}`; // 원하는 형식으로 반환
    }


    return (
        <NoticeDetailContainer>
            {/* 공지사항 제목 */}
            <NoticeDetailHeaderTop>
                <span className="hiddenSpan" />
                <NoticeDetailTitle>{props.item?.title || ''}</NoticeDetailTitle>
                <PreviousButton prevClick={prevClick} />
            </NoticeDetailHeaderTop>

            <ImagePreview
                imageFile={props.item?.thumbnail || ''}
                src={props.item?.thumbnail || ''} alt='공지사항 썸네일'
            />
            <span>
                <div>작성자 : {props.item?.author || ''}</div>
                <div>작성일 : {formatDate(props.item?.createdAt || '')}</div>
            </span>

            {/* 공지사항 내용 */}
            <Violet500LineDiv>
                <TextAreaNoCss
                    name="introduction"
                    placeholder="내용이 없습니다"
                    value={props.item?.content || ''}
                />
            </Violet500LineDiv>
        </NoticeDetailContainer >
    )
}

export default NoticeDetail;