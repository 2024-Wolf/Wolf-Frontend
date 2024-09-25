import React from 'react';
import styled from 'styled-components';
import WhiteInputBox from "../WhiteInputBox";
import RegularIcon from "../../Icon/RegularIcon";


const LinkRowContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
    gap: 15px;
`;

const Button = styled.button`
    background-color: white;
    color: var(--black800);
    border-radius: 5px;
    border: 1px solid var(--violet500);
    cursor: pointer;
    font-size: 14px;
    padding: 10px 15px;
    width: 6%;
    height: 100%;

    &:hover {
        background-color: var(--violet400);
        color: white;
    }

    @media (max-width: 768px) {
        font-size: 12px;
        padding: 5px 15px;
    }

    @media (max-width: 480px) {
        font-size: 10px;
        padding: 5px 10px;
    }
`;


const LinkInput = ({ iconSrc, iconAlt, inputValue, onInputChange }) => {
    return (
        <LinkRowContainer>
            <RegularIcon
                src={iconSrc}
                alt={iconAlt}
            />
            <WhiteInputBox
                value={inputValue}
                onChange={onInputChange}
            />
            <Button onClick={() => alert('주소가 등록되었습니다')}>등록</Button>
        </LinkRowContainer>
    );
};

export default LinkInput;
