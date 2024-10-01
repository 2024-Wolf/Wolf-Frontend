import styled from "styled-components";
import { Wrapper, DatePickerCustom } from "../GlobalStyledComponents"; // 필요한 컴포넌트를 import

import { useState, useRef } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import MiniIcon from "../Icon/MiniIcon";

const DateButton = ({ value, onChange }) => {
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
            <MiniIcon src={"/calender.png"} alt={"calender"} />
        </Wrapper>

    );
}

export default DateButton;