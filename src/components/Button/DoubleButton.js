import styled, { css } from "styled-components";
import { CommonButton, Violet500BackgroundHover } from "../GlobalStyledComponents";

const DoubleButtonCss = css`
    ${CommonButton}
    ${Violet500BackgroundHover}
    background-color: var(--black200);
    font-size: 13px;

    @media (max-width: 768px) {
        font-size: 12px;
    }

    @media (max-width: 480px) {
        font-size: 11px;
    }

    ${({ editing }) =>
        editing
            ? `
        background-color: var(--violet500);
        color: var(--violet100);
      `
            : `

      `}
`;

const DoubleButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    color: var(--black700);
    border-radius: 30px;
    overflow: hidden;
    justify-content: center;
    width: 75px;
    height: 25px;
    @media (max-width: 768px) {
        width: 73.5px;
    }

    @media (max-width: 480px) {
        width: 72px;
    }
`;

const DoubleButtonLeft = styled.button`
    ${DoubleButtonCss}
    border-right: 1px solid var(--violet000);
    padding: 0px 5px 0px 20px;
`;

const DoubleButtonRight = styled.button`
    ${DoubleButtonCss}
    padding: 0px 20px 0px 5px;
`;

const DoubleButton = ({
    leftButtonOnClick, leftButtonText, leftButtonType,
    rightButtonOnClick, rightButtonText, rightButtonType,
    editing
}) => {
    return (
        <DoubleButtonWrapper>
            <DoubleButtonLeft
                type={leftButtonType}
                onClick={leftButtonOnClick} editing={editing}
            >
                {leftButtonText}
            </DoubleButtonLeft>
            <DoubleButtonRight
                type={rightButtonType}
                onClick={rightButtonOnClick}>
                {rightButtonText}
            </DoubleButtonRight>
        </DoubleButtonWrapper>
    );
};

export default DoubleButton;
