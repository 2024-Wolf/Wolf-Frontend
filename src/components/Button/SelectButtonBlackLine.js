import styled from "styled-components";
import { Square, Black500Line } from "../GlobalStyledComponents";

// components/Group/GroupComponent/GroupWritingContent.jsx
// select 드롭다운 목록
const SelectButtonBlackLineWrapper = styled.select`
  ${Square}
  ${Black500Line}

    display: flex;
  align-items: center;
  padding: 5px 10px;
  border-radius: 7px;
  cursor: pointer;
  margin: 0px;
  height: 35px;
  min-height: 35px;
`;

const SelectButtonBlackLine = ({
  style,
  children,
  value,
  onChange,
  disabled,
  defaultValue,
}) => {
  return (
    <SelectButtonBlackLineWrapper
      style={style}
      value={value}
      onChange={onChange}
      disabled={disabled}
      defaultValue={defaultValue}
    >
      {children}
    </SelectButtonBlackLineWrapper>
  );
};

export default SelectButtonBlackLine;
