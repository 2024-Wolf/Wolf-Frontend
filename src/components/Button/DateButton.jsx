import styled from "styled-components";
import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// 날짜 버튼 래퍼 스타일
export const DateButtonWrapper = styled.div`
    background-color: var(--violet000);
    border: 1.5px solid var(--violet500);
    display: flex;
    align-items: center;
    padding: 5px 15px;
    border-radius: 7px;
    cursor: pointer;
    margin: 0px;
    width: 140px;
    height: 35px;

    ${({ isChanged }) => isChanged && `
        background-color: var(--violet500);
    `}

    svg {
        color: ${({ isChanged }) => isChanged ? 'var(--violet100)' : 'var(--black500)'};
    }
`;

// 날짜 선택기 스타일
export const DatePickerCustom = styled(DatePicker)`
    font-size: 16px;
    width: 90px;
    min-height: 20px;
    color: var(--black500);
    background-color: var(--violet000);
    
    ${({ isChanged }) => isChanged && `
        background-color: var(--violet500);
        color: var(--violet100);
    `}
`;

const DateButton = ({ value, onChange, setIsChanged, isChanged }) => {
    const [date, setDate] = useState(value || new Date());
    const [open, setOpen] = useState(false); // 날짜 선택기의 열림 상태

    const handleChange = (newDate) => {
        if (newDate) {
            if (typeof setIsChanged === 'function') {
                setIsChanged(true);
            }
            setDate(newDate);
            if (onChange) {
                onChange(newDate);
            }
            setOpen(false); // 날짜 선택 후 닫기
        }
    };

    const handleWrapperClick = () => {
        if (isChanged) {
            if (typeof setIsChanged === 'function') {
                setIsChanged(false);
            }
            setDate(new Date());
            if (onChange) {
                onChange(null);
            }
        } else {
            setOpen(true); // 날짜 선택기 열기
        }
    };

    return (
        <DateButtonWrapper onClick={handleWrapperClick} isChanged={isChanged}>
            <DatePickerCustom
                selected={date}
                open={open} // 상태로 열림 여부 관리
                onChange={handleChange}
                dateFormat="yyyy/MM/dd"
                onClick={(e) => e.stopPropagation()} // 날짜 선택기 내부 클릭 시 닫히지 않게 함
                isChanged={isChanged}
                disabled={false}
                onCalendarClose={() => setOpen(false)} // 날짜 선택기 닫히면 상태 업데이트
            />
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-calendar-week-fill" viewBox="0 0 16 16">
                <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M9.5 7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5m3 0h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5M2 10.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5" />
            </svg>
        </DateButtonWrapper>
    );
}

export default DateButton;
