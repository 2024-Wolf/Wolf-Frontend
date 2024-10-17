import styled from 'styled-components';
import { LinkRowContainer, Button9, Violet500LineButton } from "../../GlobalStyledComponents";

import React from 'react';
import InputText from "../InputText";
import RegularIcon from "../../Icon/RegularIcon";

const LinkInput = ({ iconSrc, iconAlt, inputValue, onInputChange, disabled }) => {
    return (
        <LinkRowContainer>
            <RegularIcon
                src={iconSrc}
                alt={iconAlt}
            />
            <InputText
                value={inputValue}
                onChange={onInputChange}
                disabled={disabled}
            />
            <Violet500LineButton onClick={() => alert('주소가 등록되었습니다')}>
                등록
            </Violet500LineButton>
        </LinkRowContainer>
    );
};

export default LinkInput;
