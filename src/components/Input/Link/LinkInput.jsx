import styled from 'styled-components';
import { LinkRowContainer, Button9 } from "../../GlobalStyledComponents";

import React from 'react';
import InputText from "../InputText";
import RegularIcon from "../../Icon/RegularIcon";

const LinkInput = ({ iconSrc, iconAlt, inputValue, onInputChange }) => {
    return (
        <LinkRowContainer>
            <RegularIcon
                src={iconSrc}
                alt={iconAlt}
            />
            <InputText
                value={inputValue}
                onChange={onInputChange}
            />
            <Button9 onClick={() => alert('주소가 등록되었습니다')}>등록</Button9>
        </LinkRowContainer>
    );
};

export default LinkInput;
