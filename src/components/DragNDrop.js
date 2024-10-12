import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

// 스타일 컴포넌트
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  width: 100%;
`;

const Column = styled.div`
  background-color: #f8f9fa;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 30%;
  padding: 10px;
`;

const Task = styled.div`
  padding: 10px;
  margin: 5px 0;
  background-color: #e2e3e5;
  border: 1px solid #ccc;
  border-radius: 3px;
  display: flex;
  justify-content: space-between;
`;

const DragHandle = styled.div`
  cursor: grab;
  margin-right: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  padding: 10px;
  width: 100%;
  background-color: #5c6bc0;
  color: white;
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: #3f51b5;
  }
`;

const DragNDrop = () => {
    const [tasks, setTasks] = useState({
        planning: [],
        inProgress: [],
        completed: [],
    });
    const [newTask, setNewTask] = useState('');

    const handleAddTask = () => {
        if (newTask.trim()) {
            setTasks((prev) => ({
                ...prev,
                planning: [...prev.planning, { id: Date.now(), content: newTask }],
            }));
            setNewTask('');
        }
    };

    const handleOnDragEnd = (result) => {
        if (!result.destination) return;

        const sourceColumn = result.source.droppableId;
        const destinationColumn = result.destination.droppableId;

        const sourceTasks = Array.from(tasks[sourceColumn]);
        const [removed] = sourceTasks.splice(result.source.index, 1);

        const destinationTasks = Array.from(tasks[destinationColumn]);
        destinationTasks.splice(result.destination.index, 0, removed);

        setTasks((prev) => ({
            ...prev,
            [sourceColumn]: sourceTasks,
            [destinationColumn]: destinationTasks,
        }));
    };

    return (
        <Container>
            <Input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="할 일을 입력하세요"
            />
            <Button onClick={handleAddTask}>추가</Button>

            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="planning">
                    {(provided) => (
                        <Column ref={provided.innerRef} {...provided.droppableProps}>
                            <h3>기획중</h3>
                            {tasks.planning.map((task, index) => (
                                <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
                                    {(provided) => (
                                        <Task ref={provided.innerRef} {...provided.draggableProps}>
                                            <DragHandle {...provided.dragHandleProps}>☰</DragHandle>
                                            {task.content}
                                        </Task>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </Column>
                    )}
                </Droppable>

                <Droppable droppableId="inProgress">
                    {(provided) => (
                        <Column ref={provided.innerRef} {...provided.droppableProps}>
                            <h3>진행중</h3>
                            {tasks.inProgress.map((task, index) => (
                                <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
                                    {(provided) => (
                                        <Task ref={provided.innerRef} {...provided.draggableProps}>
                                            <DragHandle {...provided.dragHandleProps}>☰</DragHandle>
                                            {task.content}
                                        </Task>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </Column>
                    )}
                </Droppable>

                <Droppable droppableId="completed">
                    {(provided) => (
                        <Column ref={provided.innerRef} {...provided.droppableProps}>
                            <h3>완료</h3>
                            {tasks.completed.map((task, index) => (
                                <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
                                    {(provided) => (
                                        <Task ref={provided.innerRef} {...provided.draggableProps}>
                                            <DragHandle {...provided.dragHandleProps}>☰</DragHandle>
                                            {task.content}
                                        </Task>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </Column>
                    )}
                </Droppable>
            </DragDropContext>
        </Container>
    );
};

export default DragNDrop;
