import styled from "styled-components";
import { ActiveTextInput } from "../GlobalStyledComponents";

import React from "react";

const WhiteInputBox = ({ value, onChange, disabled = false }) => {
    return (
        <ActiveTextInput value={value} onChange={onChange} disabled={disabled} />
    );
}

export default WhiteInputBox;
