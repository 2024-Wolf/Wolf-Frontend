import styled from "styled-components";
import { Square, Violet500Line, Violet500BackgroundHover } from "../GlobalStyledComponents";
import { useState, useRef } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// // 날짜 버튼 래퍼 스타일
// export const DateButtonWrapper = styled.div`
//     ${Square}
//     ${Violet500Line}

//     display: flex;
//     align-items: center;
//     padding: 5px 10px;
//     border-radius: 7px;
//     cursor: pointer;
//     margin: 0px;
//     width: 400px;
//     height: 35px;
//     text-align: center;
//     gap: 5px;

//     @media (max-width: 768px) {
//             width: 210px;
//     }

//     svg {
//         width: 16px;
//         height: 16px;
//     }

//     @media (max-width: 480px) {
//             width: 150px;
//         svg {
//             display:none;
//         }
//     }
// `;

// // 날짜 선택기 스타일
// export const DatePickerCustom = styled(DatePicker)`
//     width: 170px;
//     min-height: 20px;
//     color: var(--black500);
//     background-color: var(--violet000);
//     font-size: 14px;

//     @media (max-width: 768px) {
//         font-size: 13px;
//     }

//     @media (max-width: 480px) {
//         font-size: 12px;
//     }
// `;

export const DateButtonWrapper = styled.div`
    ${Square}
    ${Violet500Line}

    display: flex;
    align-items: center;
    padding: 5px 10px;
    border-radius: 7px;
    cursor: pointer;
    margin: 0px;
    width: 210px;
    height: 35px;

    @media (max-width: 768px) {
        width: 190px;
    }

    @media (max-width: 480px) {
        width: 180px;
        svg {
            display:none;
        }
    }
`;

// 날짜 선택기 스타일
export const DatePickerCustom = styled(DatePicker)`
    width: 170px;
    min-height: 20px;
    color: var(--black500);
    background-color: var(--violet000);
    font-size: 14px;

    @media (max-width: 768px) {
        font-size: 13px;
        width: 150px;
    }

    @media (max-width: 480px) {
        font-size: 12px;
        width: 140px;
    }
`;


const StartEndDateButton = ({ ...props }) => {
    const datePickerRef = useRef(null); // ref 추가

    const handleSvgClick = () => {
        if (datePickerRef.current) {
            datePickerRef.current.setFocus(); // 날짜 선택기에 포커스
        }
    };


    return (
        <>
            <DateButtonWrapper>
                <DatePickerCustom
                    ref={datePickerRef} // ref 설정
                    dateFormat="yyyy/MM/dd"
                    selectsRange
                    {...props}
                />
                <svg
                    onClick={handleSvgClick} // SVG 클릭 핸들러
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-calendar-week-fill"
                    viewBox="0 0 16 16">
                    <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M9.5 7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5m3 0h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5M2 10.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5" />
                </svg>
            </DateButtonWrapper>

        </>
    );
};

export default StartEndDateButton;
