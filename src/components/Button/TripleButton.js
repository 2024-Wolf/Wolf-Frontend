import styled, { css } from "styled-components";
import { CommonButton, Violet500BackgroundHover } from "../GlobalStyledComponents";
import { useState } from "react";

const TripleButtonCss = css`
    ${CommonButton}
    ${Violet500BackgroundHover}
    background-color: var(--violet200);
    font-size: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3px;

    @media (max-width: 768px) {
        font-size: 12px;
    }

    @media (max-width: 480px) {
        font-size: 11px;
    }
        padding: 5px;

    ${({ $selecting }) =>
        $selecting
            ? `
        background-color: var(--violet500);
        color: var(--violet100);
      `
            : `

      `}
`;

const TripleButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    color: var(--black700);
    border-radius: 30px;
    overflow: hidden;
    justify-content: center;
    width: 360px;
    height: 35px;
`;

const TripleButtonLeft = styled.button`
    ${TripleButtonCss}
    border-right: 1px solid var(--violet000);
    width: 100%;
`;
const TripleButtonCenter = styled.button`
    ${TripleButtonCss}
    border-right: 1px solid var(--violet000);
    width: 100%;
`;

const TripleButtonRight = styled.button`
    ${TripleButtonCss}
    width: 100%;
`;

const DisplayNone768px = styled.span`
    @media (max-width: 768px) {
        display: none;
    }
`;

const DisplayBlock768px = styled.span`
    display: none;
    @media (max-width: 768px) {
        display: inline;
    }
`;


const InnerText = styled.div`
    @media (max-width: 400px) {
        display: none;
    }
`;



const TripleButton = ({
    leftButtonOnClick, leftButtonType,
    centerButtonOnClick, centerButtonType,
    rightButtonOnClick, rightButtonType,
    selecting
}) => {

    return (
        <TripleButtonWrapper>
            <TripleButtonLeft
                type={leftButtonType}
                onClick={leftButtonOnClick}
                $selecting={selecting === 'good'}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    className="bi bi-emoji-laughing textContent" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                    <path d="M12.331 9.5a1 1 0 0 1 0 1A5 5 0 0 1 8 13a5 5 0 0 1-4.33-2.5A1 1 0 0 1 4.535 9h6.93a1 1 0 0 1 .866.5M7 6.5c0 .828-.448 0-1 0s-1 .828-1 0S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 0-1 0s-1 .828-1 0S9.448 5 10 5s1 .672 1 1.5" />
                </svg>
                <InnerText>좋<DisplayBlock768px>음</DisplayBlock768px><DisplayNone768px>았어요</DisplayNone768px></InnerText>
            </TripleButtonLeft>
            <TripleButtonCenter
                type={centerButtonType}
                onClick={centerButtonOnClick}
                $selecting={selecting === 'soso'}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    className="bi bi-emoji-neutral textContent" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                    <path d="M4 10.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5m3-4C7 5.672 6.552 5 6 5s-1 .672-1 1.5S5.448 8 6 8s1-.672 1-1.5m4 0c0-.828-.448-1.5-1-1.5s-1 .672-1 1.5S9.448 8 10 8s1-.672 1-1.5" />
                </svg>
                <InnerText>보통<DisplayNone768px>이었어요</DisplayNone768px></InnerText>
            </TripleButtonCenter>
            <TripleButtonRight
                type={rightButtonType}
                onClick={rightButtonOnClick}
                $selecting={selecting === 'bad'}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    className="bi bi-emoji-frown textContent" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                    <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.5 3.5 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.5 4.5 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5" />
                </svg>
                <InnerText>별로<DisplayNone768px>였어요</DisplayNone768px></InnerText>
            </TripleButtonRight>
        </TripleButtonWrapper>
    );
};

export default TripleButton;
