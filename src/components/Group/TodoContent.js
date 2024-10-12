/*
라이브러리 설치가 필요합니다.
드래그앤드롭: npm add react-beautiful-dnd 혹은 npm i react-beautiful-dnd
리액트 모달창: npm i react-modal
호환 오류 해결: index.js에서 strict모드(<React.StrictMode>)를 삭제
*/
import styled from 'styled-components';
import {
  Violet500LineButton,
  TodoContainer, TodoHeader, TodoButton, ButtonGroupRight,
  ColumnContainer, Column, TodoItem, ModalTitle, Modaldescription, TodoPlus,
  LinkInputContainer, Input, TaskStatus
} from "../GlobalStyledComponents";

import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import 'react-datepicker/dist/react-datepicker.css';
import InputText from '../Input/InputText';
import StartEndDateButton from '../Button/StartEndDateButton';
import Calendar from '../Calender';
import CancelIcon from '../Icon/CancelIcon';
import ModalForm from '../Modal/ModalForm'
import DragNDrop from '../DragNDrop';
import DeleteIcon from '../Icon/DeleteIcon'


// components/Group/TodoContent.js
const ScheduleItem = styled.div`
    display: flex;
    align-items: center;
    marginBottom: 10px;
    gap: 5px;
`;


// components/Group/TodoContent.js
export const H3Title = styled.h3`
  font-size: 24px;
  font-weight: bold;
  color: var(--black800);
`;


// components/Modal/ModalContainer.jsx
export const ModalContent = styled.div`
    display: flex;
    flex-direction: column; 
    padding:10px;
    gap: 10px;
    height: 100%;
`;

// components/Modal/ModalContainer.jsx
export const ListGroup = styled.div`
    display: flex;
    flex-direction: column; 
    gap: 15px;
`;

const TodoContent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newSchedule, setNewSchedule] = useState([{ date: null, task: '' }]);
  const [scheduleList, setScheduleList] = useState([]);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [isEditingTask, setIsEditingTask] = useState(false);
  const [isEditingSchedule, setIsEditingSchedule] = useState(false);
  const [editingTaskIndex, setEditingTaskIndex] = useState(null);
  const [githubLink, setGithubLink] = useState('');
  const [figmaLink, setFigmaLink] = useState('');

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const openTaskModal = () => setIsTaskModalOpen(true);
  const closeTaskModal = () => {
    setIsTaskModalOpen(false);
    setIsEditingTask(false);
    setEditingTaskIndex(null);
    setNewTask('');
  };

  const addScheduleField = () => {
    setNewSchedule(prevSchedule => [
      ...prevSchedule,
      { date: null, task: '' }
    ]);
  };

  const delScheduleField = (index) => {
    setNewSchedule(newSchedule.filter((_, i) => i !== index));
  };


  const handleScheduleSubmit = () => {
    // 비어 있지 않은 일정만 필터링
    const nonEmptySchedules = newSchedule.filter(
      (schedule) => schedule.task.trim() !== '' && schedule.startDate && schedule.endDate
    );
    if (nonEmptySchedules.length > 0) {

      if (editingTaskIndex !== null) {
        // 일정 수정 모드일 때
        const updatedList = [...scheduleList];
        updatedList[editingTaskIndex] = {
          ...updatedList[editingTaskIndex], // 기존 데이터 유지
          ...nonEmptySchedules[0], // 새 데이터로 업데이트
        };
        setScheduleList(updatedList);
      } else if (isEditingSchedule) {
        // 스케줄 수정 모드일 때
        setScheduleList([...scheduleList]);
      } else {
        // 새로운 일정 추가
        setScheduleList([...scheduleList, ...nonEmptySchedules]);
      }
      // 상태 초기화
      setNewSchedule([{ task: '', startDate: null, endDate: null }]); // 초기값 변경
      closeModal(); // 모달 닫기
      setEditingTaskIndex(null); // 일정 수정 모드 초기화
      setIsEditingSchedule(false); // 스케줄 수정 모드 초기화
    } else {
      alert("일정 정보를 입력하세요.");
    }
  };


  const handleDeleteSchedule = (index) => {
    const updatedList = scheduleList.filter((_, i) => i !== index);
    setScheduleList(updatedList);
  };

  const handleEditSchedule = (index) => {
    setIsEditingSchedule(true);
    const scheduleToEdit = scheduleList[index];
    setNewSchedule([scheduleToEdit]);
    openModal();
  };

  const handleNewScheduleChange = (index, field, value) => {
    const updatedSchedules = [...newSchedule];
    updatedSchedules[index][field] = value;
    setNewSchedule(updatedSchedules);
  };

  // 할 일 부분
  const handleTaskSubmit = () => {
    if (isEditingTask) {
      // 수정 모드일 경우
      setTasks(prevTasks => {
        const updatedTasks = [...prevTasks];
        updatedTasks[editingTaskIndex].content = newTask;
        return updatedTasks;
      });
      setIsEditingTask(false);
      setEditingTaskIndex(null);
    } else {
      // 추가 모드일 경우
      if (newTask.trim()) {
        setTasks(prevTasks => [
          { id: Date.now(), content: newTask, status: '기획 중' },
          ...prevTasks
        ]);
      }
    }
    setNewTask('');
    closeTaskModal();
  };


  const onDragEnd = (result) => {
    if (!result.destination) return;

    const updatedTasks = Array.from(tasks);
    const [movedTask] = updatedTasks.splice(result.source.index, 1);
    movedTask.status = result.destination.droppableId;
    updatedTasks.splice(result.destination.index, 0, movedTask);

    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleEditTask = (index) => {
    const taskToEdit = tasks[index];
    setNewTask(taskToEdit.content);
    setIsEditingTask(true);
    setEditingTaskIndex(index);
    openTaskModal();
  };


  return (
    <TodoContainer>
      <ListGroup>
        {/* 일정 리스트 상단 */}
        <TodoHeader>
          <H3Title>일정 리스트</H3Title>
          <TodoButton onClick={openModal}>일정 등록</TodoButton>
        </TodoHeader>

        {/* 일정 등록 모달 */}
        <ModalForm onClose={closeModal} isModalOpen={modalIsOpen} onSubmit={handleScheduleSubmit}>
          <CancelIcon
            style={{
              position: "absolute",
              top: "16px",
              right: "16px",
            }}
            type='button'
            onClick={() => { closeModal(); setIsEditingSchedule(false); setNewSchedule([{ task: '', startDate: null, endDate: null }]); }}
          />
          <ModalTitle>{isEditingSchedule ? '일정 수정' : '새로운 일정 등록'}</ModalTitle>
          <Modaldescription>일정을 작성하고 {isEditingSchedule ? '수정' : '등록'} 버튼을 눌러주세요.</Modaldescription>
          <ModalContent>
            {newSchedule.map((schedule, index) => (
              <ScheduleItem key={index}>
                <InputText
                  type="text"
                  value={schedule.task}
                  onChange={(e) => handleNewScheduleChange(index, 'task', e.target.value)}
                  placeholder="일정을 입력하세요"
                  style={{
                    fontSize: '14px', color: 'var(--black700)'
                  }}
                  required
                />
                <StartEndDateButton
                  selected={schedule.startDate}
                  onChange={(dates) => {
                    const [start, end] = dates;
                    handleNewScheduleChange(index, 'startDate', start);
                    handleNewScheduleChange(index, 'endDate', end);
                  }}
                  startDate={schedule.startDate}
                  endDate={schedule.endDate}
                  selectsRange
                  placeholderText="시작 일자 - 종료 일자"
                  style={{ width: '100%', padding: '10px', fontSize: '16px' }}
                />
                {newSchedule.length > 1 && (
                  <DeleteIcon
                    style={{
                      width: '16px', height: '16px', color: 'var(--violet500)'
                    }}
                    type='button'
                    onClick={() => {
                      if (window.confirm("일정을 삭제하시겠습니까?")) {
                        delScheduleField(index);
                      }
                    }}
                  />
                )}
              </ScheduleItem>
            ))}
          </ModalContent>
          <TodoPlus onClick={addScheduleField}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
            </svg>
          </TodoPlus>
          <ButtonGroupRight>
            <Violet500LineButton type='submit'>
              {isEditingSchedule ? '수정' : '등록'}
            </Violet500LineButton>
          </ButtonGroupRight>
        </ModalForm>

        {/* 캘린더 & 일정 리스트 */}
        <Calendar
          data={scheduleList} // 일정 목록 데이터
          handleEditSchedule={handleEditSchedule} // 일정 수정 기능
          handleDeleteSchedule={handleDeleteSchedule} // 일정 삭제 기능
        />
      </ListGroup>

      <DragNDrop />

      <ListGroup>
        <TodoHeader>
          <H3Title>할 일 리스트</H3Title>
          <TodoButton type='button' onClick={openTaskModal}>할 일 등록</TodoButton>
        </TodoHeader>

        {/* 할 일 등록 모달 */}
        <ModalForm onClose={closeTaskModal} isModalOpen={isTaskModalOpen} onSubmit={handleTaskSubmit}>
          <CancelIcon
            style={{
              position: "absolute",
              top: "16px",
              right: "16px",
            }}
            type='button'
            onClick={closeTaskModal}
          />
          <ModalTitle>{isEditingTask ? '할 일 수정' : '새로운 할 일 등록'}</ModalTitle>
          <Modaldescription>할 일을 작성하고 {isEditingTask ? '수정' : '등록'} 버튼을 눌러주세요.</Modaldescription>
          <ModalContent>
            <InputText
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="할 일을 입력하세요"
              style={{ width: '100%', padding: '10px', fontSize: '16px', marginBottom: '30px' }}
            />
          </ModalContent>

          <ButtonGroupRight>
            <Violet500LineButton type='submit'>
              {isEditingTask ? '수정 완료' : '등록'}
            </Violet500LineButton>
          </ButtonGroupRight>
        </ModalForm>


        {/* 드래그 앤 드롭 */}
        <DragDropContext onDragEnd={onDragEnd}>
          <ColumnContainer>
            {['기획 중', '진행 중', '완료'].map((status) => (
              <Droppable droppableId={status} key={status}>
                {(provided) => (
                  <Column ref={provided.innerRef} {...provided.droppableProps}>
                    <TaskStatus>{status}</TaskStatus>
                    {tasks
                      .filter((task) => task.status == status)
                      .map((task, index) => (
                        <Draggable key={task.id} draggableId={String(task.id)} index={index}>
                          {(provided) => (
                            <TodoItem ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span>{task.content}</span>
                                <div style={{ display: 'flex', gap: '10px' }}>
                                  <button onClick={() => handleEditTask(index)}>✒️</button>
                                  <button onClick={() => handleDeleteTask(index)}>X</button>
                                </div>
                              </div>
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
      </ListGroup>


      <ListGroup>
        {/* Link Input */}
        <H3Title>공유 링크</H3Title>
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
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" alt="Figma" width="30" height="30" />
          <Input
            type="text"
            placeholder="피그마 주소를 입력하세요"
            value={figmaLink}
            onChange={(e) => setFigmaLink(e.target.value)}
          />
          <TodoButton onClick={() => alert(`피그마 주소가 등록되었습니다: ${figmaLink}`)}>등록</TodoButton>
        </LinkInputContainer>
      </ListGroup>
    </TodoContainer>
  );
};


export default TodoContent;
