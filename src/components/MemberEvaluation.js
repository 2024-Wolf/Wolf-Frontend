import styled from 'styled-components';
import { ModalContainer, Title2, ProjectName, MemberRow, MemberName, ProfileIcon, ButtonGroup, Button2, SubmitContainer, SubmitButton, CancelButton } from "./GlobalStyledComponents";

import React, { useState } from 'react';

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
      <Title2>프로젝트</Title2>
      <ProjectName>파이널 프로젝트 - 지금2조</ProjectName>
      {members.map((member) => (
        <MemberRow key={member.id}>
          <MemberName>
            <ProfileIcon src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" alt="Profile" />
            {member.name}
          </MemberName>
          <ButtonGroup>
            <Button2
              isSelected={evaluations[member.id] === '좋았어요'}
              onClick={() => handleEvaluation(member.id, '좋았어요')}
            >
              좋았어요
            </Button2>
            <Button2
              isSelected={evaluations[member.id] === '그저 그랬어요'}
              onClick={() => handleEvaluation(member.id, '그저 그랬어요')}
            >
              그저 그랬어요
            </Button2>
            <Button2
              isSelected={evaluations[member.id] === '별로에요'}
              onClick={() => handleEvaluation(member.id, '별로에요')}
            >
              별로에요
            </Button2>
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
