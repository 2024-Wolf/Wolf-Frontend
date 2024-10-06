import styled from 'styled-components';
import { Violet500LineButton, QuestionFormContainer, ButtonRow, FileInputButton } from "../../GlobalStyledComponents";

import React from 'react';
import TextAreaBlackLine from '../../Input/TextAreaBlackLine';
import InputFile from '../../Input/InputFile';

const QuestionForm = ({ newQuestion, setNewQuestion, newPostFile, newQuestionFile, handleQuestionSubmit, showFileOptions = true }) => {
  return (
    <QuestionFormContainer onSubmit={handleQuestionSubmit}>
      <TextAreaBlackLine
        placeholder="응원이나 궁금한 내용을 입력해주세요!"
        value={newQuestion}
        onChange={(e) => setNewQuestion(e.target.value)}
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
