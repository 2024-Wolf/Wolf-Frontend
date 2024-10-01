import styled from "styled-components";
import { OptionButton, Button10 } from "../../GlobalStyledComponents";

import React from 'react';
import DateButton from "../../DateInputButton/DateButton";


const ButtonContainer = ({ date, onDateChange }) => {
    return (
        <Button10>
            <DateButton
                value={date}
                onChange={onDateChange}
            />
            <OptionButton> 모집중인 글만 보기 </OptionButton>
        </Button10>
    )
}

export default ButtonContainer;