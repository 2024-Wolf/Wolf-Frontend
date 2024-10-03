import styled from 'styled-components';
import { QuestionFormContainer, TextArea5, ButtonRow, SubmitButton3, FileInputButton } from "../../GlobalStyledComponents";

import React from 'react';

const QuestionForm = ({ newQuestion, setNewQuestion, newPostFile, newQuestionFile, handleQuestionSubmit, showFileOptions = true }) => {
  return (
    <QuestionFormContainer onSubmit={handleQuestionSubmit}>
      <TextArea5
        placeholder="응원이나 궁금한 내용을 입력해주세요!"
        value={newQuestion}
        onChange={(e) => setNewQuestion(e.target.value)}
      />
      <ButtonRow>
        {newPostFile && <span>{newPostFile.name}</span>}
        {showFileOptions && <FileInputButton>
          파일 선택
          <input
            type="file"
            onChange={(e) => newQuestionFile(e.target.files[0])}
            style={{ display: 'none' }}
          />
        </FileInputButton>
        }

        <SubmitButton3 type="submit">등록</SubmitButton3>
      </ButtonRow>
    </QuestionFormContainer>
  );
};

export default QuestionForm;
