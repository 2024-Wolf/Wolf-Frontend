import styled from 'styled-components';
import { Violet500LineButton, ButtonRow } from "../../GlobalStyledComponents";

import React from 'react';
import TextAreaBlackLine from '../../Input/TextAreaBlackLine';
import InputFile from '../../Input/InputFile';


// components/Group/Question/QuestionForm.jsx
export const QuestionFormContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const QuestionForm = ({ newQuestion, setNewQuestion, newPostFile, newQuestionFile, handleQuestionSubmit, showFileOptions = true }) => {
  return (
    <QuestionFormContainer onSubmit={handleQuestionSubmit}>
      <TextAreaBlackLine
        placeholder="응원의 메시지나 궁금한 사항을 적어주세요 (주의: 상대방에게 상처를 줄 수 있는 말은 제재 대상이 될 수 있습니다)"
        value={newQuestion}
        onChange={(e) => setNewQuestion(e.target.value)
        }
      />
      <ButtonRow>
        {newPostFile && <span>{newPostFile.name}</span>}
        {showFileOptions && <>
          <InputFile
            onChange={(e) => newQuestionFile(e.target.files[0])}
          />
        </>
        }
        <Violet500LineButton type="submit">등록</Violet500LineButton>
      </ButtonRow>
    </QuestionFormContainer>
  );
};

export default QuestionForm;
