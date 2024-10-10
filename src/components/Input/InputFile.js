import styled from "styled-components";
import { Square, Violet500Line, Violet200BackgroundHover } from "../GlobalStyledComponents";

import React from "react";


// components/Group/Question/QuestionForm.jsx
export const FileInputButton = styled.label`
    ${Square}
    ${Violet500Line}
    ${Violet200BackgroundHover}
    display:flex;
    align-items: center;
    gap: 5px;
    
    @media (max-width: 480px) {
        span {
            display:none;
        }
    }

    ${({ disabled }) => disabled && `
        background-color: var(--violet200);
        pointer-events: none;
    `}
`;



{/*{newGroupData.fileName && <FileName>선택된 파일: {newGroupData.fileName}</FileName>}*/ }

const InputFile = ({ disabled, ...props }) => {
    return (
        <>
            <FileInputButton disabled={disabled}>
                <span>파일 선택</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-upload" viewBox="0 0 16 16">
                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                    <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z" />
                </svg>
                <input
                    {...props}
                    disabled={disabled}
                    type="file"
                // style={{ display: 'none' }}
                />
            </FileInputButton>
        </>
    );
}

export default InputFile;
