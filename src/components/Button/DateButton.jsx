import styled from "styled-components";

import { useState, useRef } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// components/DateInputButton/DateButton.jsx
export const DateButtonWrapper = styled.div`
    background-color: var(--violet000);
    border: 1px solid var(--violet500);
    display: flex;
    align-items: center;
    padding: 5px 15px;
    border-radius: 7px;
    cursor: pointer;
    margin: 0px;
    
    width: 140px;
    height: 40px;

    @media (max-width: 768px) {
        width: fit-content;
    }

    @media (max-width: 480px) {

    }

    @media (max-width: 350px) {
        display: none;
    }

    ${({ isChanged }) => isChanged && `
        background-color: var(--violet500);
    `}

    svg {
        color: ${({ isChanged }) => isChanged ? 'var(--violet100)' : 'var(--black500)'};

        @media (max-width: 768px) {
            width: 15px;
            height: 15px;
        }

        @media (max-width: 480px) {
            width: 14px;
            height: 14px;
        }
    }
`;

// components/DateInputButton/DateButton.jsx
export const DatePickerCustom = styled(DatePicker)`
    font-size: 16px;
    width: 90px;
    min-height: 20px;
    color: var(--black500);
    
    @media (max-width: 768px) {
    font-size: 15px;
    width: 85px;
    }

    @media (max-width: 480px) {
    font-size: 14px;
    width: 80px;
    }

    ${({ isChanged }) => isChanged && `
        background-color: var(--violet500);
        color: var(--violet100);
    `}
`;

const DateButton = ({ value, onChange, setIsChanged, isChanged }) => {
    const [date, setDate] = useState(value || new Date());
    const dateRef = useRef();

    const handleChange = (newDate) => {
        if (newDate) {
            setIsChanged(true);
            setDate(newDate);
            if (onChange) {
                onChange(newDate);
            }
        }
    };

    const handleWrapperClick = () => {
        if (isChanged) {
            setIsChanged(false);
            setDate(new Date());
            if (onChange) {
                onChange(null);
            }
        } else {
            dateRef.current.setOpen(true);
        }
    };

    return (
        <DateButtonWrapper onClick={handleWrapperClick} isChanged={isChanged}>
            <DatePickerCustom
                selected={date}
                ref={dateRef}
                dateFormat="yyyy/MM/dd"
                onChange={handleChange}
                onClick={(e) => e.stopPropagation()} // Prevent date picker from closing on clicking inside
                isChanged={isChanged}
                disabled={false}
            />
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-calendar-week-fill" viewBox="0 0 16 16">
                <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M9.5 7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5m3 0h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5M2 10.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5" />
            </svg>
        </DateButtonWrapper>
    );
}

export default DateButton;