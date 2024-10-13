
import styled from "styled-components";
import { Square, Violet500Line } from "../GlobalStyledComponents";

// components/Group/GroupComponent/GroupWritingContent.jsx
// select 드롭다운 목록
const SelectButtonWrapper = styled.select`
    ${Square}
    ${Violet500Line}

    display: flex;
    align-items: center;
    padding: 5px 10px;
    border-radius: 7px;
    cursor: pointer;
    margin: 0px;
    height: 35px;
    min-height: 35px;
`;

const SelectButton = ({ style, children, value, onChange, disabled, defaultValue }) => {

    return (
        <SelectButtonWrapper style={style} value={value} onChange={onChange} disabled={disabled} defaultValue={defaultValue}>
            {children}
        </SelectButtonWrapper>
    );
}

export default SelectButton;


