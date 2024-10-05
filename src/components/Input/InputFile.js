import styled from "styled-components";
import { CommonButton } from "../GlobalStyledComponents";

import React from "react";

// components/Input/InputFile.jsx
const InputFileWrapper = styled.input`
    ${CommonButton}
    width: 100%;
    padding: 0px;
    padding-top: 5px;
`;
{/*{newGroupData.fileName && <FileName>선택된 파일: {newGroupData.fileName}</FileName>}*/ }

const InputFile = ({ ...props }) => {
    return (
        <>
            <InputFileWrapper {...props} />
        </>
    );
}

export default InputFile;
