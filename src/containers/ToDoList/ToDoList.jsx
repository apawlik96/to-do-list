import { Task } from "../../components/Task/Task.jsx";
import {
  StyledWrapper,
  StyledWrapperSelect,
  StyledParagraph,
  StyledWrapperSelectButtonGroup,
  StyledWrapperSelectButtonGroupSeparated,
  StyledButtonClearCompletedTask,
  StyledWrapperNewTask,
} from "./ToDoList.styles.js";
import { useState } from "react";

export const ToDoList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Complete online JavaScript course", checked: false },
    { id: 2, text: "Jog around the park 3x", checked: false },
    { id: 3, text: "10 minutes meditation", checked: false },
    { id: 4, text: "Read for 1 hour", checked: false },
    { id: 5, text: "Pick up groceries", checked: false },
    { id: 6, text: "Complete Todo App on Frontend Mentor", checked: false },
  ]);
  const [newTask, setNewTask] = useState("");

  const handleTaskMark = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, checked: !task.checked } : task
      )
    );
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleAddNewTask = () => {
    if (newTask.trim() !== "") {
      const newTaskObject = {
        id: tasks[tasks.length - 1].id + 1,
        text: newTask,
        checked: false,
      };
      setTasks(tasks.concat(newTaskObject));
      setNewTask("");
    }
  };

  return (
    <>
      <StyledWrapperNewTask>
        <button onClick={handleAddNewTask}></button>
        <input
          type="text"
          placeholder="Create a new todo..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
      </StyledWrapperNewTask>

      <StyledWrapper>
        {tasks.map((task) => (
          <Task
            id={task.id}
            text={task.text}
            checked={task.checked}
            onCheck={handleTaskMark}
            onDelete={handleDeleteTask}
          />
        ))}

        <StyledWrapperSelect>
          <StyledParagraph>Items left</StyledParagraph>
          <StyledWrapperSelectButtonGroup>
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
          </StyledWrapperSelectButtonGroup>
          <StyledButtonClearCompletedTask>
            Clear Completed
          </StyledButtonClearCompletedTask>
        </StyledWrapperSelect>
      </StyledWrapper>

      <StyledWrapperSelectButtonGroupSeparated>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </StyledWrapperSelectButtonGroupSeparated>
    </>
  );
};
