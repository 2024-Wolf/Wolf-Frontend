import { useState, useRef } from 'react';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import MiniIcon from "../Icon/MiniIcon";

const Wrapper = styled.div`
    background-color: white;
    border: 1px solid var(--violet500);
    display: flex;
    align-items: center;
    padding: 5px 15px;
    border-radius: 7px;
    @media (max-width: 768px) {
        padding: 6px;
    }

    @media (max-width: 480px) {
        padding: 3px;
    }
`;

const DatePickerCustom = styled(DatePicker)`
    font-size: 16px;
    width: 100%;
    max-width: 95px;
    
    @media (max-width: 768px) {
        font-size: 12px;
        max-width: 70px;
    }

    @media (max-width: 480px) {
        font-size: 10px;
        max-width: 60px;
    }
`;
const DateButton = ({value, onChange}) => {
    const [date, setDate] = useState(value || new Date());
    const dateRef = useRef();

    const handleChange = (newDate) => {
        if (newDate) {
            setDate(newDate);
            if (onChange) {
                onChange(newDate);
            }
        }
    };

    return (
        <Wrapper>
            <DatePickerCustom
                selected={date}
                ref={dateRef}
                dateFormat="yyyy/MM/dd"
                onChange={(date) => handleChange(date)}
            />
            <MiniIcon src={"/calender.png"} alt={"calender"}/>
        </Wrapper>

    );
}

export default DateButton;