import React from 'react';
import styled from 'styled-components';

const QuestionFormContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 10px;
`;

const TextArea = styled.textarea`
    background-color: #ffffff;
    border-radius: 10px;
    border: 1px solid var(--black400);
    width: 100%;
    height: 100px;
    padding: 10px;
    resize: none;
    margin-top: 15px;
    line-height: 1.3;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
`;

const SubmitButton = styled.button`
  background-color: #fff;
  color: #000000;
  border: 1px solid #968AFF;
  padding: 8px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 13px;
  &:hover {
    background-color: #CEC6FF;
  }
`;

const FileInputButton = styled.label`
  background-color: #fff;
  color: #000000;
  border: 1px solid #968AFF;
  padding: 8px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 13px;
  display: inline-block;
  &:hover {
    background-color: #CEC6FF;
  }
`;

const QuestionForm = ({ newQuestion, setNewQuestion, newPostFile, newQuestionFile, handleQuestionSubmit, showFileOptions = true}) => {
    return (
        <QuestionFormContainer onSubmit={handleQuestionSubmit}>
            <TextArea
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

                <SubmitButton type="submit">등록</SubmitButton>
            </ButtonRow>
        </QuestionFormContainer>
    );
};

export default QuestionForm;
