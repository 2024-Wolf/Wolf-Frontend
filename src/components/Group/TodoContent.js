/*
라이브러리 설치가 필요합니다.
드래그앤드롭: npm add react-beautiful-dnd 혹은 npm i react-beautiful-dnd
리액트 모달창: npm i react-modal
호환 오류 해결: index.js에서 strict모드(<React.StrictMode>)를 삭제
*/
import styled from 'styled-components';
import {
  Violet500LineButton,
  TodoHeader, ButtonGroupRight,
  ColumnContainer, Column, TodoItem, ModalTitle, Modaldescription, TodoPlus,
  LinkInputForm, TaskStatus, Violet400BackgroundButton,
  ContentsWrapper
} from "../GlobalStyledComponents";

import React, { useState, useRef } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import 'react-datepicker/dist/react-datepicker.css';
import InputText from '../Input/InputText';
import StartEndDateButton from '../Button/StartEndDateButton';
import Calendar from '../Calender';
import CancelIcon from '../Icon/CancelIcon';
import ModalForm from '../Modal/ModalForm'
import DeleteIcon from '../Icon/DeleteIcon'
import ALinkText from '../Input/ALinkText'
import RefreshIcon from '../Icon/RefreshIcon'


// components/Group/TodoContent.js
const ScheduleItem = styled.div`
    display: flex;
    align-items: center;
    marginBottom: 10px;
    gap: 5px;
`;


// components/Group/TodoContent.js
export const H3Title = styled.h3`
  font-size: 22px;
  font-weight: bold;
  color: var(--black800);
  margin-left: 10px;
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
    gap: 20px;
`;


const DragHandle = styled.div`
  cursor: grab;
  height: auto;
  font-size: 20px;
`;

// components/Group/TodoContent.js
export const TodoContainer = styled(ContentsWrapper)`
  position: relative;
  width: 100%;
  padding: 30px 40px;
  background: var(--violet100);
  gap: 50px;

  @media (max-width: 768px) {
    padding: 20px 30px;
  }

  @media (max-width: 480px) {
    padding: 20px 10px;
  }
`;

export const LinkButtonGroup = styled.div`
  display: flex;
  gap: 5px;

`;

export const LinkInputDirection = styled.div`
    display: flex;
    width: 100%;
    align-items: start;
    flex-direction: row;
    gap: 10px;

  @media (max-width: 768px) {
    gap: 5px;
    flex-direction: column;
    align-items: end;
  }

  @media (max-width: 480px) {

  }
`;





const DummyCalenderData = [
  { date: null, startDate: new Date('2024-10-15'), endDate: new Date('2024-10-16'), task: "회의" },
  { date: null, startDate: new Date('2024-10-15'), endDate: new Date('2024-10-15'), task: "프로젝트 마감" },
  { date: null, startDate: new Date('2024-10-20'), endDate: new Date('2024-10-20'), task: "출장" },
]

const DummyTaskData = [
  { content: "Task1", id: 1728734799700, status: "진행 중" },
  { content: "Task2", id: 1728734804683, status: "기획 중" },
  { content: "Task3", id: 1728734775936, status: "완료" },
  { content: "Task4", id: 1728734790002, status: "기획 중" }
];

const DummyLinkData = [
  {
    imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Font_Awesome_5_brands_github.svg/800px-Font_Awesome_5_brands_github.svg.png',
    name: 'GitHub',
    url: 'https://github.com/2024-Wolf'
  },
  {
    imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
    name: 'Figma',
    url: 'https://www.figma.com/design/rM1Gynrm58vcLKV0TnLQeB/Final-Project?node-id=0-1&node-type=canvas&t=BDG3dMm1HoLkkbv8-0'
  }
];

const TodoContent = ({ github, figma }) => {
  const [tasks, setTasks] = useState(DummyTaskData || []);
  const [scheduleList, setScheduleList] = useState(DummyCalenderData || []);
  const [links, setLinks] = useState(DummyLinkData || []);

  const [newTask, setNewTask] = useState('');
  const [newSchedule, setNewSchedule] = useState([{ date: null, task: '' }]);
  const [newLink, setNewLink] = useState({ imgSrc: '', name: '', url: '' });

  const [editingTaskIndex, setEditingTaskIndex] = useState(null);
  const [editingLinkIndex, setEditingLinkIndex] = useState(null);


  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [isEditingTask, setIsEditingTask] = useState(false);
  const [isEditingSchedule, setIsEditingSchedule] = useState(false);

  const inputRefs = useRef([]); // 여러 개의 ref를 저장할 배열


  const [githubLink, setGithubLink] = useState((DummyLinkData.find(link => link.name === 'GitHub').url) || '');
  const [figmaLink, setFigmaLink] = useState((DummyLinkData.find(link => link.name === 'Figma').url) || '');

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


  const handleScheduleSubmit = (event) => {
    // 비어 있지 않은 일정만 필터링
    event.preventDefault();

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

  // 링크 수정 시작
  const editLinkStart = (index) => {
    setEditingLinkIndex(index);
    setNewLink(links[index]); // 수정할 링크 데이터를 newLink로 설정
  };

  // 링크 수정 완료
  const editLinkFinish = (event) => {
    event.preventDefault();
    const updatedLinks = links.map((link, index) =>
      index === editingLinkIndex ? newLink : link
    );
    setLinks(updatedLinks);
    setEditingLinkIndex(null);
    setNewLink({ name: '', url: '' }); // 입력 필드 초기화
  };

  // 링크 수정 취소
  const editLinkCancel = (event) => {
    event.preventDefault();
    setEditingLinkIndex(null);
    setNewLink({ name: '', url: '' }); // 입력 필드 초기화
  };

  // 링크 수정 초기화
  const editLinkRefresh = (event) => {
    event.preventDefault();

    if (window.confirm("내용을 초기화 하시겠습니까?")) {
      // 초기화 한다고 하면
      const updatedLinks = links.map((link, index) => {
        if (index === editingLinkIndex) {
          return { ...link, url: '' };
        }
        return link;
      });

      setLinks(updatedLinks);
      setEditingLinkIndex(null);
      setNewLink({ name: '', url: '' });
    } else {
      return; // 초기화하지 않으면 함수 종료
    }

  };

  // URL 유효성 검사
  const isValidURL = (urlString) => {
    try {
      new URL(urlString);
      return true;
    } catch (_) {
      return false;
    }
  };

  return (
    <TodoContainer>
      <ListGroup>
        {/* 일정 리스트 상단 */}
        <TodoHeader>
          <H3Title>일정 리스트</H3Title>
          <Violet500LineButton
            type="button"
            onClick={openModal}>
            일정 등록
          </Violet500LineButton>
        </TodoHeader>

        {/* 일정 등록 모달 */}
        <ModalForm onClose={closeModal}
          isModalOpen={modalIsOpen}
          onSubmit={handleScheduleSubmit}
          focusRef={inputRefs}
        >
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
                  ref={inputRefs}
                  type="text"
                  value={newSchedule[0].task}
                  onChange={(e) => handleNewScheduleChange(0, 'task', e.target.value)}
                  placeholder="일정을 입력하세요"
                  style={{
                    fontSize: '14px',
                    color: 'var(--black700)',
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
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
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

      <ListGroup>
        <TodoHeader>
          <H3Title>할 일 리스트</H3Title>
          <Violet500LineButton
            type="button"
            onClick={openTaskModal}>
            할 일 등록
          </Violet500LineButton>
        </TodoHeader>

        {/* 할 일 등록 모달 */}
        <ModalForm onClose={closeTaskModal} isModalOpen={isTaskModalOpen}
          onSubmit={handleTaskSubmit}
          focusRef={inputRefs}
        >
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
              ref={inputRefs}
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


        {/* 할일 리스트 드래그 앤 드롭 */}
        <DragDropContext onDragEnd={onDragEnd}>
          <ColumnContainer>
            {['기획 중', '진행 중', '완료'].map((status) => (
              <Droppable droppableId={status} key={status}>
                {(provided) => (
                  <>
                    <hr style={{
                      borderBottom: '1px solid var(--black300)',
                      width: '90%',
                      margin: '10px auto 0px auto',
                    }} />
                    <Column ref={provided.innerRef} {...provided.droppableProps} style={{ padding: '10px', gap: '10px' }}>
                      {/* '기획 중', '진행 중', '완료' 제목 */}
                      <TaskStatus>{status}</TaskStatus>
                      {/* 할 일 목록 리스트 */}
                      {tasks
                        .filter((task) => task.status === status)
                        .map((task, index) => (
                          <Draggable key={task.id} draggableId={String(task.id)} index={index}>
                            {(provided) => (
                              <TodoItem ref={provided.innerRef} {...provided.draggableProps}>
                                {/* 드래그 아이콘 */}
                                <DragHandle {...provided.dragHandleProps}>☰</DragHandle>
                                {/* 할 일 내용 */}
                                <span style={{ width: '100%', marginTop: '4px' }}>
                                  {task.content}
                                </span>
                                <div style={{
                                  display: 'flex',
                                  justifyContent: 'center',
                                  alignItems: 'start', marginTop: '4px'

                                }}>
                                  {/* 수정 버튼 */}
                                  <button onClick={() => handleEditTask(index)}
                                    style={{
                                      fontSize: '15px', backgroundColor: 'transparent'
                                    }}>✒️</button>
                                  {/* 삭제 버튼 */}
                                  <DeleteIcon
                                    onClick={() => {
                                      if (window.confirm("할 일을 삭제하시겠습니까?")) {
                                        handleDeleteTask(index);
                                      }
                                    }}
                                    size={15}
                                    style={{
                                      width: '15px', height: '15px', marginTop: '1px'
                                    }}
                                  />
                                </div>
                              </TodoItem>
                            )}
                          </Draggable>
                        ))}
                      {provided.placeholder}
                    </Column>
                  </>
                )}
              </Droppable>
            ))}
          </ColumnContainer>
        </DragDropContext>
      </ListGroup>

      <ListGroup>
        {/* Link Input */}
        <H3Title>공유 링크</H3Title>
        <div style={{ display: 'flex', width: '100%', gap: '10px', flexDirection: 'column' }}>
          {links.map((link, index) => (
            <LinkInputForm onSubmit={editLinkFinish} key={index}>
              <span style={{
                width: '30px', textAlign: 'center', marginTop: '4px'
              }}>
                <img
                  src={link.imgSrc}
                  alt={`${link.name}-img`}
                  width="25"
                  height="25" />
              </span>
              {editingLinkIndex === index ? (
                <LinkInputDirection>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'flex-start',
                      width: '100%',
                      flexDirection: 'column',
                      gap: '3px'
                    }}
                  >
                    <InputText
                      style={{
                        border: '2px solid var(--violet500)',
                        fontSize: '14px',
                        color: 'black'
                      }}
                      type="text"
                      placeholder="링크를 입력하세요"
                      value={newLink.url}
                      onChange={(e) => setNewLink({ ...newLink, url: e.target.value })}
                    />
                    {!isValidURL(newLink.url) &&
                      <span
                        style={{
                          fontSize: '12px', color: '#ED4E51', marginLeft: '5px'
                        }}>
                        유효한 링크를 입력하세요
                      </span>}
                  </div>
                  <LinkButtonGroup>
                    <RefreshIcon type="button" onClick={editLinkRefresh} />
                    <Violet500LineButton type="button" onClick={editLinkCancel} >
                      취소
                    </Violet500LineButton>
                    <Violet400BackgroundButton onClick={editLinkFinish} disabled={!isValidURL(newLink.url)}>
                      완료
                    </Violet400BackgroundButton>
                  </LinkButtonGroup>
                </LinkInputDirection>
              ) : (
                <>
                  <ALinkText
                    style={{ border: '2px solid rgba(255, 255, 255, 0)' }}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer">
                    {link.url}
                  </ALinkText>
                  <Violet500LineButton onClick={() => editLinkStart(index)}>
                    수정
                  </Violet500LineButton>
                </>
              )}
            </LinkInputForm>
          ))
          }
        </div>
      </ListGroup>
    </TodoContainer>
  );
};


export default TodoContent;
