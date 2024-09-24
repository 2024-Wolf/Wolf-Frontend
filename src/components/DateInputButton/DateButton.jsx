import { useState, useRef } from 'react';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import MiniIcon from "../Icon/MiniIcon";

/*
* const DateButtonContainer = styled.div`
    background-color: white;
    border: 1px solid var(--violet500);
    border-radius: 10px;
    padding: 5px 10px;
    width: 100%;
    align-content: center;

    &:hover {
        background-color: var(--violet200);
        color: var(--violet800);
    }

    @media (max-width: 768px) {
        padding: 3px 8px;
    }

    @media (max-width: 480px) {
        padding: 2px 6px;
    }
`;

const DatePickerCustom = styled(DatePicker)`
    width: 100%;
    max-width: 100px;
    font-size: 16px;
    margin-right: 5px;

    &:hover {
        background-color: var(--violet200);
        color: var(--violet800);
    }

    @media (max-width: 768px) {
        font-size: 12px;
    }

    @media (max-width: 480px) {
        font-size: 10px;
    }
`;*/
const DatePickerCustom = styled(DatePicker)`
    background-color: white;
    border: 1px solid var(--violet500);
    border-radius: 10px;
    margin-right: 10px;
    padding: 5px 10px;
    font-size: 16px;
    width: 100%;
    min-height: 38.89px; //이거.. 어떻게 해야할까요.. 
    max-width: 120px;

    &:hover {
        background-color: var(--violet200);
        color: var(--violet800);
    }
    @media (max-width: 768px) {
        font-size: 12px;
        padding: 3px 8px;
    }

    @media (max-width: 480px) {
        font-size: 10px;
        padding: 2px 6px;
    }
`;

const DateButton = () => {
    const [date, setDate] = useState(new Date());
    const dateRef = useRef();

    const handleChange = (date) => {
        setDate(date);
    };

    return (
            <DatePickerCustom
                selected={date}
                onChange={handleChange}
                ref={dateRef}
            />
    );
}

export default DateButton;