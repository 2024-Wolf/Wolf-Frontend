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

import React, { useState, useRef, useEffect } from 'react';
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
import {
  deleteLinks,
  deleteSchedule,
  deleteTask, getLinks,
  getSchedule,
  getTasks, registerLinks,
  registerSchedule,
  registerTask, updateLinks,
  updateSchedule,
  updateTask
} from '../Apis/GroupPostApi';


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

const DummyLinkData = [
  {
    imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Font_Awesome_5_brands_github.svg/800px-Font_Awesome_5_brands_github.svg.png',
    linkType: 'GitHub',
    linkUrl: 'https://github.com/2024-Wolf'
  },
  {
    imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
    linkType: 'Figma',
    linkUrl: 'https://www.figma.com/design/rM1Gynrm58vcLKV0TnLQeB/Final-Project?node-id=0-1&node-type=canvas&t=BDG3dMm1HoLkkbv8-0'
  }
];

const TodoContent = ({ groupPostId, github, figma }) => {
  const [tasks, setTasks] = useState([]);
  const [scheduleList, setScheduleList] = useState([]);
  const [links, setLinks] = useState({github: '', figma: '', notion: '', velog: ''});

  const [newTask, setNewTask] = useState('');
  const [newSchedule, setNewSchedule] = useState([{id:0, details: '', startDate: null, endDate: null }]);
  const [newLink, setNewLink] = useState('');

  const [editingTaskIndex, setEditingTaskIndex] = useState(null);
  const [editingScheduleIndex, setEditingScheduleIndex] = useState(null);
  const [editingLinkType, setEditingLinkType] = useState(null);


  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [isEditingTask, setIsEditingTask] = useState(false);
  const [isEditingSchedule, setIsEditingSchedule] = useState(false);


  const inputRefs = useRef([]); // 여러 개의 ref를 저장할 배열


  // const [githubLink, setGithubLink] = useState((DummyLinkData.find(link => link.linkType === 'GitHub').linkUrl) || '');
  // const [figmaLink, setFigmaLink] = useState((DummyLinkData.find(link => link.linkType === 'Figma').linkUrl) || '');

  // 할 일 목록 조회
  async function saveTasks(groupId) {
    await new Promise((resolve) => setTimeout(resolve, 300));
    await getTasks(groupId)
      .then(function (response) {
        if (response?.data.length > 0) setTasks(response?.data);
      })
  }
  // 일정 목록 조회
  async function saveSchedule(groupId) {
    await new Promise((resolve) => setTimeout(resolve, 300));
    await getSchedule(groupId)
        .then(function (response) {
          if (response?.data.length > 0) setScheduleList(response?.data);
        })
  }
  // 공유 링크 조회
  async function saveLinks(groupId) {
    await new Promise((resolve) => setTimeout(resolve, 300));
    await getLinks(groupId)
        .then(function (response) {
          // if (response?.data.length > 0) {
            setLinks(prevLinks => {
              const updatedLinks = { ...prevLinks };

              Object.keys(updatedLinks).forEach(key => {
                const matchingItem = response.data.find(item => item.linkType === key);

                updatedLinks[key] = matchingItem ? matchingItem : '';
              });

              return updatedLinks;
            });
          // }
        })
  }


  useEffect(() => {
    saveTasks(groupPostId);
    saveSchedule(groupPostId);
    saveLinks(groupPostId);
    console.log(links);
  }, [isTaskModalOpen, modalIsOpen, editingLinkType]);

  useEffect(() => {
  }, [scheduleList, tasks, links]);

  const openModal = () => setModalIsOpen(true);
  const openTaskModal = () => setIsTaskModalOpen(true);

  const closeTaskModal = () => {
    setIsEditingTask(false);
    setEditingTaskIndex(null);
    setNewTask('');
    setIsTaskModalOpen(false);
  };

  const closeModal = () => {
    setIsEditingSchedule(false);
    setEditingScheduleIndex(null);
    setNewSchedule([{id:0, details: '', startDate: null, endDate: null }]);
    setModalIsOpen(false);
  }

  // const addScheduleField = () => {
  //
  //   setNewSchedule(prevSchedule => [
  //     ...prevSchedule,
  //     { id:0, details: null, startDate: null, endDate: null }
  //   ]);
  // };
  //
  // const delScheduleField = (index) => {
  //   setNewSchedule(newSchedule.filter((_, i) => i !== index));
  // };


  const handleScheduleSubmit = (event) => {
    // 비어 있지 않은 일정만 필터링
    event.preventDefault();

    const nonEmptySchedules = newSchedule.filter(
        (schedule) => schedule.details.trim() !== '' && schedule.startDate && schedule.endDate
    );
    if (nonEmptySchedules.length > 0) {

      if (isEditingSchedule) {
        // 스케줄 수정 모드일 때
        let scheduleToEdit = scheduleList.filter(schedule => schedule.id === editingScheduleIndex)[0];
        scheduleToEdit.details = newSchedule[0].details;
        scheduleToEdit.startDate = newSchedule[0].startDate;
        scheduleToEdit.endDate = newSchedule[0].endDate;
        updateSchedule(scheduleToEdit)
            .then(function (response) {
              closeModal();
            });
      } else {
        // 새로운 일정 추가
        if (newSchedule[0].details.trim()) {
          registerSchedule(groupPostId, newSchedule[0])
              .then(function (response) {
                closeModal();
              });
        }
      }
      // 상태 초기화
      setNewSchedule([{id:0, details: '', startDate: null, endDate: null }]); // 초기값 변경
      closeModal(); // 모달 닫기
      setEditingScheduleIndex(null); // 일정 수정 모드 초기화
      setIsEditingSchedule(false); // 스케줄 수정 모드 초기화
    } else {
      alert("일정 정보를 입력하세요.");
    }
  };


  const handleDeleteSchedule = (id) => {
    async function deleteFunc(id) {
      await deleteSchedule(id);
      saveSchedule(groupPostId);
    }
    deleteFunc(id);
    setScheduleList([])
  };

  const handleEditSchedule = (id) => {
    const scheduleToEdit = scheduleList.filter(schedule => schedule.id === id)[0];
    setNewSchedule([scheduleToEdit]);
    setIsEditingSchedule(true);
    setEditingScheduleIndex(id);
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
      let taskToEdit = tasks.filter(task => task.id === editingTaskIndex)[0];
      taskToEdit.details = newTask;
      updateTask(taskToEdit)
        .then(function (response) {
          closeTaskModal();
        });
    } else {
      // 추가 모드일 경우
      if (newTask.trim()) {
        registerTask(groupPostId, newTask)
          .then(function (response) {
            closeTaskModal();
          });
      }
    }
  };


  const onDragEnd = (result) => {
    if (!result.destination) return;

    const movedTask = tasks.filter(task => task.id === Number(result.draggableId))[0];
    movedTask.status = result.destination.droppableId;

    async function moveTask(task) {
      await updateTask(task);
      saveTasks(groupPostId);
    }

    moveTask(movedTask);
  };

  const handleDeleteTask = (id) => {
    async function deleteFunc(id) {
      await deleteTask(id);
      saveTasks(groupPostId);
    }
    deleteFunc(id);
    setTasks([]);
  };

  const handleEditTask = (id) => {
    const taskToEdit = tasks.filter(task => task.id === id)[0];
    setNewTask(taskToEdit.details);
    setIsEditingTask(true);
    setEditingTaskIndex(id);
    openTaskModal();
  };

  // 링크 수정 시작
  const editLinkStart = (key) => {
    const linkToEdit = links[key];
    setEditingLinkType(key);
    setNewLink(linkToEdit.linkUrl); // 수정할 링크 데이터를 newLink로 설정
  };

  // 링크 수정 완료
  const handelLinkEdit = (event, key) => {
    event.preventDefault();
    const linkToEdit = links[key];
    console.log(links)
    console.log(linkToEdit)
    if (linkToEdit === ''){
      if (newLink.trim()) {
        registerLinks(groupPostId, key, newLink)
            .then(function (response) {
            });
      }
    }
    else{
      console.log("수정으로 판단" + newLink)
      linkToEdit.linkUrl = newLink;
      console.log(linkToEdit.linkType)
      updateLinks(groupPostId, linkToEdit)
          .then(function (response) {
            setEditingLinkType(null);
            setNewLink(''); // 입력 필드 초기화
          });
    }

  };

  // 링크 수정 취소
  const editLinkCancel = (event) => {
    event.preventDefault();
    setEditingLinkType(null);
    setNewLink(''); // 입력 필드 초기화
  };

  // 링크 수정 초기화
  const editLinkRefresh = (event, key) => {
    event.preventDefault();
    if (window.confirm("내용을 초기화 하시겠습니까?")) {
      // 초기화 한다고 하면
      async function deleteFunc(id) {
        await deleteLinks(groupPostId, id);
        saveLinks(groupPostId);
      }
      deleteFunc(links[key].linkId);
      setLinks({github: '', figma: '', notion: '', velog: ''});
      setEditingLinkType(null);
      setNewLink('');
    }
  };

  // URL 유효성 검사
  const isValidURL = (linkUrlString) => {
    try {
      new URL(linkUrlString);
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
                  value={newSchedule[0].details}
                  onChange={(e) => handleNewScheduleChange(0, 'details', e.target.value)}
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
                {/*{newSchedule.length > 1 && (*/}
                {/*  <DeleteIcon*/}
                {/*    style={{*/}
                {/*      width: '16px', height: '16px', color: 'var(--violet500)'*/}
                {/*    }}*/}
                {/*    type='button'*/}
                {/*    onClick={() => {*/}
                {/*      if (window.confirm("일정을 삭제하시겠습니까?")) {*/}
                {/*        delScheduleField(index);*/}
                {/*      }*/}
                {/*    }}*/}
                {/*  />*/}
                {/*)}*/}
              </ScheduleItem>
            ))}
          </ModalContent>
          {/*<TodoPlus onClick={addScheduleField}>*/}
          {/*  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">*/}
          {/*    <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />*/}
          {/*  </svg>*/}
          {/*</TodoPlus>*/}
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
              placeholder={"할 일을 입력하세요"}
              style={{ width: '100%', padding: '10px', fontSize: '16px', marginBottom: '30px' }}
            />
          </ModalContent>

          <ButtonGroupRight>
            <Violet500LineButton onClick={handleTaskSubmit}>
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
                          <Draggable key={task.id} draggableId={String(task.id)}>
                            {(provided) => (
                              <TodoItem ref={provided.innerRef} {...provided.draggableProps}>
                                {/* 드래그 아이콘 */}
                                <DragHandle {...provided.dragHandleProps}>☰</DragHandle>
                                {/* 할 일 내용 */}
                                <span style={{ width: '100%', marginTop: '4px' }}>
                                  {task.details}
                                </span>
                                <div style={{
                                  display: 'flex',
                                  justifyContent: 'center',
                                  alignItems: 'start', marginTop: '4px'

                                }}>
                                  {/* 수정 버튼 */}
                                  <button onClick={() => handleEditTask(task.id)}
                                    style={{
                                      fontSize: '15px', backgroundColor: 'transparent'
                                    }}>✒️</button>
                                  {/* 삭제 버튼 */}
                                  <DeleteIcon
                                    onClick={() => {
                                      if (window.confirm("할 일을 삭제하시겠습니까?")) {
                                        handleDeleteTask(task.id);
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
        <TodoHeader>
          <H3Title>공유 링크</H3Title>
        </TodoHeader>

        <div style={{ display: 'flex', width: '100%', gap: '10px', flexDirection: 'column' }}>
          {Object.entries(links).map(([key, value], index) => (
            <LinkInputForm onSubmit={(e) => handelLinkEdit(e, key)} key={key}>
              <span style={{
                width: '30px', textAlign: 'center', marginTop: '4px'
              }}>
                <img
                  // src={link.imgSrc}
                  alt={`${key}-img`}
                  width="25"
                  height="25" />
              </span>
              {editingLinkType === key ? (
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
                      value={newLink}
                      onChange={(e) => setNewLink(e.target.value)}
                    />
                    {!isValidURL(newLink) &&
                      <span
                        style={{
                          fontSize: '12px', color: '#ED4E51', marginLeft: '5px'
                        }}>
                        유효한 링크를 입력하세요
                      </span>}
                  </div>
                  <LinkButtonGroup>
                    <RefreshIcon type="button" onClick={(e) => editLinkRefresh(e, key)} />
                    <Violet500LineButton type="button" onClick={editLinkCancel} >
                      취소
                    </Violet500LineButton>
                    <Violet400BackgroundButton disabled={!isValidURL(newLink)}>
                      완료
                    </Violet400BackgroundButton>
                  </LinkButtonGroup>
                </LinkInputDirection>
              ) : (
                <>
                  <ALinkText
                    style={{ border: '2px solid rgba(255, 255, 255, 0)' }}
                    href={value.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer">
                    {value.linkUrl}
                  </ALinkText>
                  <Violet500LineButton onClick={() => editLinkStart(key)}>
                    {value === '' ? '등록' : '수정'}
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
