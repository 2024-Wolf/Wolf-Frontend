/*
라이브러리 설치가 필요합니다.
드래그앤드롭: npm add react-beautiful-dnd 혹은 npm i react-beautiful-dnd
리액트 모달창: npm i react-modal
호환 오류 해결: index.js에서 strict모드(<React.StrictMode>)를 삭제 
*/

import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const TodoContainer = styled.div`
  padding: 20px;
  background-color: #F2F0FF;
  border-radius: 8px;
`;

const TodoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px; 
`;

const TodoTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  color: #000000;
`;

const TodoButton = styled.button`
  background-color: #FFFFFF;
  color: #000;
  border: 1px solid #9787FF;
  padding: 8px 20px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #8578d8;
    color: white;
  }
`;

const ButtonGroupRight = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: flex-end; 
  margin-top: 20px;
`;

const ColumnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  background-color: #ffffff;
`;

const Column = styled.div`
  flex: 1;
  background-color: #ffffff;
  padding: 20px;
  margin: 0 10px;
  border-radius: 8px;
  min-height: 200px;
`;

const TodoItem = styled.div`
  background-color: #ffffff;
  border: 1px solid #968AFF;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
`;

const Input = styled.input`
  width: 90%;
  padding: 10px;
  margin-right: 10px;
`;

const LinkInputTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-top: 50px;
  color: #000000;
`;

const LinkInputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  font-size: 14px;
`;

const StatusButton = styled.div`
  background-color: #9787FF;
  color: white;
  padding: 15px 20px;
  border-radius: 10px;
  text-align: center;
  margin-bottom: 20px;
  font-size: 18px;
  width: 100%;
`;

const ModalTitle = styled.h2`
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const CalendarIcon = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  background-image: url('https://upload.wikimedia.org/wikipedia/commons/3/3a/Calendar_icon.svg');
  background-size: cover;
`;

const TodoTab = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newSchedule, setNewSchedule] = useState('');
  const [scheduleList, setScheduleList] = useState([]);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [githubLink, setGithubLink] = useState('');
  const [figmaLink, setFigmaLink] = useState('');

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const openTaskModal = () => setIsTaskModalOpen(true);
  const closeTaskModal = () => setIsTaskModalOpen(false);

  const handleTaskSubmit = () => {
    if (newTask.trim()) {
      setTasks([{ id: tasks.length + 1, content: newTask, status: '기획 중' }, ...tasks]);
      setNewTask('');
      closeTaskModal();
    }
  };

  const handleScheduleSubmit = () => {
    if (newSchedule.trim()) {
      setScheduleList([...scheduleList, newSchedule]);
      setNewSchedule('');
      closeModal();
    }
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const updatedTasks = Array.from(tasks);
    const [movedTask] = updatedTasks.splice(result.source.index, 1);
    movedTask.status = result.destination.droppableId;
    updatedTasks.splice(result.destination.index, 0, movedTask);

    setTasks(updatedTasks);
  };

  return (
    <TodoContainer>
      {/* Todo 상단 */}
      <TodoHeader>
        <TodoTitle>일정 리스트</TodoTitle>
        <ButtonGroup>
          <TodoButton onClick={() => alert('달력보기 기능은 다른분께서 구현예정이십니다!')}>달력 보기</TodoButton>
          <TodoButton onClick={openModal}>일정 등록</TodoButton>
        </ButtonGroup>
      </TodoHeader>

      {/* 일정 등록 모달 */}
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <ModalTitle>일정 등록</ModalTitle>
        <input
          type="text"
          value={newSchedule}
          onChange={(e) => setNewSchedule(e.target.value)}
          placeholder="일정을 입력하세요"
        />
        <button onClick={handleScheduleSubmit}>등록</button>
        <button onClick={closeModal}>취소</button>
      </Modal>

      {/* 일정 리스트 */}
      <ul>
        {scheduleList.map((schedule, index) => (
          <li key={index}>
            {schedule} <CalendarIcon />
          </li>
        ))}
      </ul>

      <ButtonGroupRight>
        <TodoButton onClick={openTaskModal}>할 일 등록</TodoButton>
      </ButtonGroupRight>

      {/* 할 일 등록 모달 */}
      <Modal isOpen={isTaskModalOpen} onRequestClose={closeTaskModal}>
        <ModalTitle>새로운 할 일 등록</ModalTitle>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="할 일을 입력하세요"
        />
        <button onClick={handleTaskSubmit}>등록</button>
        <button onClick={closeTaskModal}>취소</button>
      </Modal>

      {/* 드래그 앤 드롭 */}
      <DragDropContext onDragEnd={onDragEnd}>
        <ColumnContainer>
          {['기획 중', '진행 중', '완료'].map((status) => (
            <Droppable droppableId={status} key={status}>
              {(provided) => (
                <Column ref={provided.innerRef} {...provided.droppableProps}>
                  <StatusButton>{status}</StatusButton>
                  {tasks
                    .filter((task) => task.status === status)
                    .map((task, index) => (
                      <Draggable key={task.id} draggableId={String(task.id)} index={index}>
                        {(provided) => (
                          <TodoItem ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                            {task.content}
                          </TodoItem>
                        )}
                      </Draggable>
                    ))}
                  {provided.placeholder}
                </Column>
              )}
            </Droppable>
          ))}
        </ColumnContainer>
      </DragDropContext>

      {/* Link Input */}
      <LinkInputTitle>공유 링크</LinkInputTitle>
      <LinkInputContainer>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Font_Awesome_5_brands_github.svg/800px-Font_Awesome_5_brands_github.svg.png" alt="GitHub" width="30" />
        <Input
          type="text"
          placeholder="깃허브 주소를 입력하세요"
          value={githubLink}
          onChange={(e) => setGithubLink(e.target.value)}  
        />
        <TodoButton onClick={() => alert(`깃허브 주소가 등록되었습니다: ${githubLink}`)}>등록</TodoButton>
      </LinkInputContainer>

      <LinkInputContainer>
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" alt="Figma" width="30" height="30"/>
        <Input
          type="text"
          placeholder="피그마 주소를 입력하세요"
          value={figmaLink}  
          onChange={(e) => setFigmaLink(e.target.value)}
        />
        <TodoButton onClick={() => alert(`피그마 주소가 등록되었습니다: ${figmaLink}`)}>등록</TodoButton>
      </LinkInputContainer>
    </TodoContainer>
  );
};

export default TodoTab;
