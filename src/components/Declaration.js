import React, { useState } from 'react';
import styled from 'styled-components';

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  background-color: #fff;
  padding: 30px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const Title = styled.h2`
  text-align: center;
  background-color: #8578D8;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  margin: 30px auto;
  width: 140px;
  font-size: 12px;
`;

const Description = styled.p`
  font-size: 10px;
  color: #666;
  margin-bottom: 30px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Select = styled.select`
  width: 100%;
  padding: 5px;
  margin-bottom: 20px;
  border-radius: 3px;
  border: 1px solid #8578D8;
  font-size: 12px;
  color: #666;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 300px;
  padding: 5px;
  border-radius: 3px;
  border: 1px solid #8578D8;
  margin-bottom: 20px;
  resize: none;
  font-size: 12px;
  color: #666;
`;


const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const SubmitButton = styled.button`
  background-color: #CEC6FF;
  color: #000000;
  border: 1px solid #8578D8;
  border-radius: 5px;
  padding: 8px 20px;
  cursor: pointer;
  font-size: 12px;

  &:hover {
    background-color: #8578D8;
    color: white;
  }
`;

const CancelButton = styled.button`
  background-color: white;
  color: #8578D8;
  border: 1px solid #8578D8;
  border-radius: 5px;
  padding: 8px 20px;
  cursor: pointer;
  font-size: 12px;

  &:hover {
    background-color: #CEC6FF;
    color: white;
  }
`;

const Declaration = ({ onSubmit, onClose }) => {
  const [reason, setReason] = useState('');
  const [description, setDescription] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  //textarea
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { reason, description };
    onSubmit(data);
  };

  const handleFocus = () => {
    setIsFocused(true); 
  };

  const handleBlur = (e) => {
    if (e.target.value === '') {
      setIsFocused(false); 
    }
  };

  return (
    <ModalContainer>

      <Title>신고하기</Title>

      <Description>
        악의적이고 반복적인 신고는 회원정지 등의 제재 사유가 될 수 있습니다. 신중하게 작성해주세요!
      </Description>

      {/* 신고 선택 목록 */}
      <Form onSubmit={handleSubmit}>
        <Select value={reason} onChange={(e) => setReason(e.target.value)} required>
          <option value="" disabled>신고 사유를 선택해주세요</option>
          <option value="부적절한 내용">부적절한 내용</option>
          <option value="사기">사기</option>
          <option value="스팸">스팸</option>
        </Select>

      {/* 신고 내용 */}
        <TextArea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={!isFocused ? '신고 내용을 구체적으로 작성해주세요.' : ''}
          required
        />

        <ButtonGroup>
          <SubmitButton type="submit">전송</SubmitButton>
          <CancelButton type="button" onClick={onClose}>취소</CancelButton>
        </ButtonGroup>
      </Form>
    </ModalContainer>
  );
};

export default Declaration;




// 테스트

/* 
import React, { useState } from 'react';
import Declaration from './components/Declaration'; 

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (data) => {
    console.log('제출된 신고:', data);
    setSubmittedData(data);
    setIsModalOpen(false); 
  };

  return (
    <div>
      <h1>신고하기 테스트</h1>
      <button onClick={() => setIsModalOpen(true)}>신고하기</button>

      {isModalOpen && (
        <Declaration onSubmit={handleSubmit} onClose={() => setIsModalOpen(false)} />
      )}

      {submittedData && (
        <div>
          <h2>제출된 신고 내용</h2>
          <p>신고 사유: {submittedData.reason}</p>
          <p>신고 내용: {submittedData.description}</p>
        </div>
      )}
    </div>
  );
}

export default App;

*/