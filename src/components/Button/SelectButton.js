
import styled from "styled-components";
import { Square, Purpleline } from "../GlobalStyledComponents";

// components/Group/GroupComponent/GroupWritingContent.jsx
// select 드롭다운 목록
const SelectButtonWrapper = styled.select`
    ${Square}
    ${Purpleline}

    display: flex;
    align-items: center;
    padding: 5px 15px;
    border-radius: 7px;
    cursor: pointer;
    margin: 0px;

    height: 35px;
`;

const SelectButton = ({ children, value, onChange, disabled, defaultValue }) => {

    return (
        <SelectButtonWrapper value={value} onChange={onChange} disabled={disabled} defaultValue={defaultValue}>
            {children}
        </SelectButtonWrapper>
    );
}

export default SelectButton;


