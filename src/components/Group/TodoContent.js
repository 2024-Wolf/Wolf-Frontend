/*
라이브러리 설치가 필요합니다.
드래그앤드롭: npm add react-beautiful-dnd 혹은 npm i react-beautiful-dnd
리액트 모달창: npm i react-modal
호환 오류 해결: index.js에서 strict모드(<React.StrictMode>)를 삭제
*/
import styled from 'styled-components';
import { TodoContainer, TodoHeader, ButtonGroupCenter, TodoTitle, TodoButton, ButtonGroupRight, ColumnContainer, Column, TodoItem, ModalContainer2, ModalTitle, Modaldescription, ModalInput, ModalInputDate, TodoPlus, ModalTaskInput, LinkInputTitle, LinkInputContainer, Input, StatusButton, CalendarIcon } from "../GlobalStyledComponents";

import React, { useState } from 'react';
import Modal from 'react-modal';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const TodoContent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newSchedule, setNewSchedule] = useState([{ date: null, task: '' }]);
  const [scheduleList, setScheduleList] = useState([]);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [isEditingTask, setIsEditingTask] = useState(false);
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

  // 일정 부분
  const addScheduleField = () => {
    setNewSchedule([...newSchedule, { date: null, task: '' }]);
  };

  const handleScheduleSubmit = () => {
    const nonEmptySchedules = newSchedule.filter(
      (schedule) => schedule.task.trim() !== '' && schedule.startDate && schedule.endDate
    );
    if (nonEmptySchedules.length > 0) {
      setScheduleList([...scheduleList, ...nonEmptySchedules]);
      setNewSchedule([{ date: null, task: '' }]);
      closeModal();
    }
  };

  const handleDeleteSchedule = (index) => {
    const updatedList = scheduleList.filter((_, i) => i !== index);
    setScheduleList(updatedList);
  };

  const handleEditSchedule = (index) => {
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
      const updatedTasks = [...tasks];
      updatedTasks[editingTaskIndex].content = newTask;
      setTasks(updatedTasks);
      setIsEditingTask(false);
      setEditingTaskIndex(null);
    } else {
      if (newTask.trim()) {
        setTasks([{ id: tasks.length + 1, content: newTask, status: '기획 중' }, ...tasks]);
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
      {/* Todo 상단 */}
      <TodoHeader>
        <TodoTitle>일정 리스트</TodoTitle>
        <ButtonGroupCenter>
          <TodoButton onClick={openModal}>일정 등록</TodoButton>
        </ButtonGroupCenter>
      </TodoHeader>

      {/* 일정 등록 모달 */}
      <TodoContainer>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
          <ModalContainer2>
            <ModalTitle>일정 등록</ModalTitle>
            <Modaldescription>일정을 작성하고 등록버튼을 눌러주세요.</Modaldescription>

            {newSchedule.map((schedule, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <ModalInput>
                  <input
                    type="text"
                    value={schedule.task}
                    onChange={(e) => handleNewScheduleChange(index, 'task', e.target.value)}
                    placeholder="일정을 입력하세요"
                    style={{ width: '100%', padding: '10px', fontSize: '16px' }}
                  />
                </ModalInput>
                <ModalInputDate>
                  <DatePicker
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
                  <CalendarIcon />
                </ModalInputDate>
              </div>
            ))}
            <TodoPlus onClick={addScheduleField}>+</TodoPlus>
            <ButtonGroupRight>
              <TodoButton onClick={handleScheduleSubmit}>등록</TodoButton>
              <TodoButton onClick={closeModal}>취소</TodoButton>
            </ButtonGroupRight>
          </ModalContainer2>
        </Modal>
      </TodoContainer>

      {/* 일정 리스트 */}
      <ul>
        {scheduleList.map((schedule, index) => (
          <li key={index} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0' }}>
            {schedule.task} ({schedule.startDate?.toLocaleDateString()} ~ {schedule.endDate?.toLocaleDateString()})
            <div style={{ display: 'flex', gap: '10px' }}>
              <button onClick={() => handleEditSchedule(index)}>✒️</button>
              <button onClick={() => handleDeleteSchedule(index)}>X</button>
            </div>
          </li>
        ))}
      </ul>

      <ButtonGroupRight>
        <TodoButton onClick={openTaskModal}>할 일 등록</TodoButton>
      </ButtonGroupRight>

      {/* 할 일 등록 모달 */}
      <Modal isOpen={isTaskModalOpen} onRequestClose={closeTaskModal}>
        <ModalContainer2>
          <ModalTitle>{isEditingTask ? '할 일 수정' : '새로운 할 일 등록'}</ModalTitle>
          <Modaldescription>할 일을 작성하고 {isEditingTask ? '수정 완료' : '등록'} 버튼을 눌러주세요.</Modaldescription>
          <ModalTaskInput>
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="할 일을 입력하세요"
              style={{ width: '100%', padding: '10px', fontSize: '16px' }}
            />
          </ModalTaskInput>

          <ButtonGroupRight>
            <TodoButton onClick={handleTaskSubmit}>{isEditingTask ? '수정 완료' : '등록'}</TodoButton>
            <TodoButton onClick={closeTaskModal}>취소</TodoButton>
          </ButtonGroupRight>
        </ModalContainer2>
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
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" alt="Figma" width="30" height="30" />
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


export default TodoContent;
