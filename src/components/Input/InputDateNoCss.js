import styled from "styled-components";
import { Square, NoBackground } from "../GlobalStyledComponents";
import DatePicker from "react-datepicker";

import { useState, React } from "react";

// 날짜 선택기 스타일
export const InputDateNoCssWrapper = styled(DatePicker)`
    ${Square}
    ${NoBackground}
    width: 85px;
    padding: 0px;
    white-space: nowrap;
    text-overflow: ellipsis;

    &:focus {
        outline: none;
    }
`;

const InputDateNoCss = (onChange, onClick, disabled, value) => {
    const [date, setDate] = useState(value || new Date());
    const [open, setOpen] = useState(false); // 날짜 선택기의 열림 상태

    return (
        <>
            <InputDateNoCssWrapper
                selected={date}
                open={open}
                onChange={onChange}
                dateFormat="yyyy/MM/dd"
                onClick={onClick}
                disabled={disabled}
            />
        </>
    );
}

export default InputDateNoCss;
