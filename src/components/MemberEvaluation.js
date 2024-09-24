import React, { useState } from 'react';
import styled from 'styled-components';

const ModalContainer = styled.div`
  width: 600px;
  background-color: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 0 auto;
`;

const Title = styled.div`
  background-color: #9f87ff;
  padding: 10px;
  border-radius: 8px;
  color: #fff;
  text-align: center;
  font-weight: bold;
  font-size: 12px;
  width: 150px;
  margin: 30px auto 20px auto;
`;

const ProjectName = styled.h2`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
`;

const MemberRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  justify-content: space-between;
`;

const MemberName = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
`;

const ProfileIcon = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: auto 30px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0;
`;

const Button = styled.button`
  background-color: ${(props) => (props.isSelected ? '#8578D8' : 'white')};
  color: ${(props) => (props.isSelected ? 'white' : '#8578D8')};
  border: 1px solid #8578D8;
  padding: 8px 0;
  cursor: pointer;
  font-size: 10px;
  width: 130px; 
  transition: all 0.3s;
  border-radius: 5px;

  &:hover {
    background-color: #8578D8;
    color: white;
  }

`;

const SubmitContainer = styled.div`
  text-align: center;
  margin-top: 30px;
`;

const SubmitButton = styled.button`
  background-color: #CEC6FF; 
  color: #000000; 
  border: 1px solid #8578D8; 
  border-radius: 5px;
  padding: 8px 20px;
  cursor: pointer;
  font-size: 12px;
  margin-right: 10px;

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

const MemberEvaluation = ({ members, onSubmit }) => {
  const [evaluations, setEvaluations] = useState({});

  const handleEvaluation = (id, evaluation) => {
    setEvaluations({ ...evaluations, [id]: evaluation });
  };

  const handleSubmit = () => {
    onSubmit(evaluations);
  };

  return (
    <ModalContainer>
      <Title>프로젝트</Title>
      <ProjectName>파이널 프로젝트 - 지금2조</ProjectName>
      {members.map((member) => (
        <MemberRow key={member.id}>
          <MemberName>
            <ProfileIcon src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" alt="Profile" />
            {member.name}
          </MemberName>
          <ButtonGroup>
            <Button
              isSelected={evaluations[member.id] === '좋았어요'}
              onClick={() => handleEvaluation(member.id, '좋았어요')}
            >
              좋았어요
            </Button>
            <Button
              isSelected={evaluations[member.id] === '그저 그랬어요'}
              onClick={() => handleEvaluation(member.id, '그저 그랬어요')}
            >
              그저 그랬어요
            </Button>
            <Button
              isSelected={evaluations[member.id] === '별로에요'}
              onClick={() => handleEvaluation(member.id, '별로에요')}
            >
              별로에요
            </Button>
          </ButtonGroup>
        </MemberRow>
      ))}
      <SubmitContainer>
        <SubmitButton onClick={handleSubmit}>제출</SubmitButton>
        <CancelButton>취소</CancelButton>
      </SubmitContainer>
    </ModalContainer>
  );
};

export default MemberEvaluation;



//테스트

/* 

import React from 'react';
import MemberEvaluation from './Components/MemberEvaluation';

function App() {
  const members = [
    { id: 1, name: '김연아' },
    { id: 2, name: '손흥민' },
    { id: 3, name: '박가현' },
    { id: 4, name: '홍길동' }
  ];

  const handleSubmit = (evaluationResults) => {
    console.log('평가 결과:', evaluationResults);
    alert('평가가 완료되었습니다!');
  };

  return (
    <div className="App">
      <h1>팀원 평가</h1>
      <MemberEvaluation members={members} onSubmit={handleSubmit} />
    </div>
  );
}

export default App; 

*/
