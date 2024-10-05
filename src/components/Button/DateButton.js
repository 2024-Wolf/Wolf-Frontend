import styled from "styled-components";
import { Square, Violet500Line, Violet500LineHover } from "../GlobalStyledComponents";

import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// 날짜 버튼 래퍼 스타일
export const DateButtonWrapper = styled.div`
    ${Square}
    ${Violet500Line}

    display: flex;
    align-items: center;
    padding: 5px 15px;
    border-radius: 7px;
    cursor: pointer;
    margin: 0px;
    width: 140px;
    height: 35px;

    @media (max-width: 768px) {
    }

    @media (max-width: 480px) {
        width: 105px;
        svg {
            display:none;
        }
    }

    // 옵션 선택 버튼이면 hover 시 색상 변경
    ${({ setIsChanged }) =>
        typeof setIsChanged === 'function' ? `
            ${Violet500LineHover}
            &:hover {
                svg {
                    background-color: var(--violet500);
                    color: var(--violet100);
                }
                ${DatePickerCustom} {
                    background-color: var(--violet500);
                    color: var(--violet100);
                }
            }
        ` : `
        `
    }

    // 옵션 선택 버튼이면 선택됐을 때 배경을 바꿈
    ${({ isChanged }) => isChanged && `
        background-color: var(--violet500);
        svg {
            color: var(--violet100);
        }
        ${DatePickerCustom} {
            background-color: var(--violet500);
            color: var(--violet100);
        }
    `}
`;

// 날짜 선택기 스타일
export const DatePickerCustom = styled(DatePicker)`
    width: 90px;
    min-height: 20px;
    color: var(--black500);
    background-color: var(--violet000);
    @media (max-width: 480px) {
        width: 78px;
    }
`;

const DateButton = ({ value, onChange, setIsChanged, isChanged, disabled }) => {
    const [date, setDate] = useState(value || new Date());
    const [open, setOpen] = useState(false); // 날짜 선택기의 열림 상태

    const handleChange = (newDate) => {
        if (newDate) {
            if (typeof setIsChanged === 'function') { // 옵션 선택 버튼인지 확인함
                setIsChanged(true);
            }
            setDate(newDate);
            if (onChange) {
                onChange(newDate);
            }
            setOpen(false);
        }
    };

    const handleWrapperClick = () => {
        if (isChanged) {

            if (typeof setIsChanged === 'function') {  // 옵션 선택 버튼인지 확인함
                setIsChanged(false);
            }
            setDate(new Date());
            if (onChange) {
                onChange(null);
            }
        } else {
            if (open == false) {
                setOpen(true);
            }
        }
    };

    return (
        <DateButtonWrapper onClick={handleWrapperClick} isChanged={isChanged} setIsChanged={setIsChanged} disabled={disabled}>
            <DatePickerCustom
                selected={date}
                open={open} // 상태로 열림 여부 관리
                onChange={handleChange}
                dateFormat="yyyy/MM/dd"
                onClick={(e) => e.stopPropagation()} // 날짜 선택기 내부 클릭 시 닫히지 않게 함
                isChanged={isChanged}
                disabled={disabled}
                onCalendarClose={() => setOpen(false)} // 날짜 고르면 선택기 닫음
            />
            <svg xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-calendar-week-fill"
                viewBox="0 0 16 16">
                <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M9.5 7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5m3 0h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5M2 10.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5" />
            </svg>
        </DateButtonWrapper>
    );
}

export default DateButton;
