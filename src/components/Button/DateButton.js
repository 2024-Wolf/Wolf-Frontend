import styled from "styled-components";
import { Square, Violet500Line, Violet500BackgroundHover } from "../GlobalStyledComponents";
import { useEffect, useRef, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// 날짜 버튼 래퍼 스타일
export const DateButtonWrapper = styled.div`
    ${Square}
    ${Violet500Line}

    display: flex;
    align-items: center;
    padding: 5px 10px;
    border-radius: 7px;
    cursor: pointer;
    margin: 0px;
    width: 130px;
    height: 35px;

    @media (max-width: 768px) {
        /* 여기에 다른 스타일 추가 가능 */
    }

    @media (max-width: 480px) {
        width: 95px;
        svg {
            display:none;
        }
    }

    ${({ setIsChanged }) =>
        typeof setIsChanged === 'function' ? `
            ${Violet500BackgroundHover}
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
        ` : ``
    }

        /* disabled 상태의 스타일 */
    ${({ disabled }) => disabled && `
        background-color: var(--violet200);
        pointer-events: none;
        svg {

        }
        ${DatePickerCustom} {
            background-color: var(--violet200);
        }
    `}

    ${({ $isChanged }) => $isChanged && `
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
    const wrapperRef = useRef(null);

    // 달력 외부 클릭 시 닫기
    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setOpen(false); // 외부 클릭 시 닫기
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef]);

    const handleChange = (newDate) => {
        if (newDate) {
            if (typeof setIsChanged === 'function') { // 옵션 선택 버튼인지 확인
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
        setOpen(true);
    };

    return (
        <div ref={wrapperRef}>
            <DateButtonWrapper disabled={disabled} onClick={handleWrapperClick} $isChanged={isChanged}>
                <DatePickerCustom
                    selected={date}
                    open={open} // 상태로 열림 여부 관리
                    onChange={handleChange}
                    dateFormat="yyyy/MM/dd"
                    onClick={(e) => e.stopPropagation()} // 날짜 선택기 내부 클릭 시 닫히지 않게 함
                    $isChanged={isChanged}
                    disabled={disabled}
                    onCalendarClose={() => setOpen(false)} // 날짜 고르면 선택기 닫음
                />

                <svg xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    disabled={disabled}
                    className="bi bi-calendar-week-fill" // className으로 변경
                    viewBox="0 0 16 16">
                    <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M9.5 7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5m3 0h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5M2 10.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5" />
                </svg>
            </DateButtonWrapper>
        </div>
    );
};

export default DateButton;
