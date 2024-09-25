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
import TabContentsWrapper from "../TabContentsWrapper";
import LinkInput from "../Input/Link/LinkInput";

const TodoContainer = styled(TabContentsWrapper)`
    padding: 40px;
    background-color: white;
`;

const ScheduleContainer = styled.div`
    padding: 20px;
    width: 100%;
    background-color: var(--violet200);
    
    ol {
        list-style-type: decimal;
        padding-left: 20px;

    } 
    
    li {
        font-size: 18px;
        margin-bottom: 10px;
        font-weight: 500;
    }
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
    font-weight: 500;
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
    display: flex;
    justify-content: flex-end; 
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
    width: 100%;
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

const TodoContent = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [newSchedule, setNewSchedule] = useState('');
    const [scheduleList, setScheduleList] = useState(["ERD 작성", "header/footer/sidebar 구성하기"]);
    const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
    const [githubLink, setGithubLink] = useState('');
    const [figmaLink, setFigmaLink] = useState('');

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    const openTaskModal = () => setIsTaskModalOpen(true);
    const closeTaskModal = () => setIsTaskModalOpen(false);

    const handleTaskSubmit = () => {
        if (!newTask.trim()) {
            alert("할 일을 입력해주세요.");
            return;
        }
        setTasks([{ id: tasks.length + 1, content: newTask, status: '기획 중' }, ...tasks]);
        setNewTask('');
        closeTaskModal();
    };

    const handleScheduleSubmit = () => {
        if (!newSchedule.trim()) {
            alert("일정을 입력해주세요.");
            return;
        }
        setScheduleList([...scheduleList, newSchedule]);
        setNewSchedule('');
        closeModal();
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
            <ScheduleContainer>
                <TodoHeader>
                    <TodoTitle>일정 리스트</TodoTitle>
                    <ButtonGroup>
                        <TodoButton onClick={() => alert('달력보기 기능은 다른분께서 구현예정이십니다!')}>달력 보기</TodoButton>
                        <TodoButton onClick={openModal}>일정 등록</TodoButton>
                    </ButtonGroup>
                </TodoHeader>
                <ol>
                    {scheduleList.map((schedule, index) => (
                        <li key={index}>
                            {schedule} <CalendarIcon/>
                        </li>
                    ))}
                </ol>
            </ScheduleContainer>

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

            <ButtonGroupRight>
                <TodoButton onClick={openTaskModal}>할 일 등록</TodoButton>
            </ButtonGroupRight>

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

            <DragDropContext onDragEnd={onDragEnd}>
                <ColumnContainer>
                    {['기획 중', '진행 중', '완료'].map((status) => (
                        <Droppable droppableId={status} key={status}>
                            {(provided) => (
                                <Column ref={provided.innerRef} {...provided.droppableProps}>
                                    <StatusButton>{status}</StatusButton>
                                    {tasks.filter((task) => task.status === status).map((task, index) => (
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

            <LinkInputTitle>공유 링크</LinkInputTitle>
            <LinkInputContainer>
                <LinkInput iconSrc={"https://cdn-icons-png.flaticon.com/512/25/25231.png"} iconAlt={"github"} inputValue={githubLink} onInputChange={(e) => setGithubLink(e.target.value)} />
                <LinkInput iconSrc={"https://cdn-icons-png.flaticon.com/512/25/25231.png"} iconAlt={"figma"} inputValue={figmaLink} onInputChange={(e) => setFigmaLink(e.target.value)} />
            </LinkInputContainer>
        </TodoContainer>
    );
};



export default TodoContent;
