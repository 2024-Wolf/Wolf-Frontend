import React from 'react';
import styled from "styled-components";
import DateButton from "../../DateInputButton/DateButton";

const OptionButton = styled.button`
    background-color: white;
    border: 1px solid var(--violet500);
    border-radius: 7px;
    margin-right: 10px;
    padding: 5px 10px;
    font-size: 16px;
    
    @media (max-width: 768px) {
        font-size: 12px; 
        padding: 3px 8px;
    }

    @media (max-width: 480px) {
        font-size: 10px;
        padding: 2px 6px;
    }
`;

const Button = styled.div`
    display: flex;
    gap: 10px;
`;


const ButtonContainer = ({date, onDateChange}) => {
    return (
        <Button>
            <DateButton
                value={date}
                onChange={onDateChange}
            />
            <OptionButton> 모집중인 글만 보기 </OptionButton>
        </Button>
    )
}

export default ButtonContainer;