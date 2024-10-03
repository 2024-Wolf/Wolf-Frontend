import styled from "styled-components";
import { Square } from "../GlobalStyledComponents";

import React from "react";

// components/Input/InputFile.jsx
const InputFileWrapper = styled.input`
    ${Square}
    width: 100%;
    padding: 0px;
    padding-top: 5px;
    
    &:disabled {
        background-color: var(--black000);
        border-radius: 5px;

        @media (max-width: 768px) {
            font-size: 14px;
            padding: 5px 10px;
        }

        @media (max-width: 480px) {
            font-size: 12px;
            padding: 5px 10px;
        }
    }
`;
{/*{newGroupData.fileName && <FileName>선택된 파일: {newGroupData.fileName}</FileName>}*/ }

const InputFile = ({ ...props }) => {
    return (
        <InputFileWrapper {...props} />
    );
}

export default InputFile;
