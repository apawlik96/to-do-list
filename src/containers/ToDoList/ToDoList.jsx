import { Task } from "../../components/Task/Task.jsx";
import {
  StyledWrapper,
  StyledWrapperSelect,
  StyledParagraph,
  StyledWrapperSelectButtonGroup,
  StyledWrapperSelectButtonGroupSeparated,
  StyledButtonClearCompletedTask,
  StyledWrapperNewTask,
  StyledFilterButton,
} from "./ToDoList.styles.js";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddIcon from "@mui/icons-material/Add";

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
  const [filterTask, setFilterTask] = useState("all");

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
    if (newTask.trim() === "") {
      return;
    }

    const newTaskObject = {
      id: uuidv4(),
      text: newTask,
      checked: false,
    };

    setTasks(tasks.concat(newTaskObject));
    setNewTask("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddNewTask();
    }
  };

  const handleClearCompletedTasks = () => {
    setTasks(tasks.filter((task) => !task.checked));
  };

  const handleFilterTask = () => {
    switch (filterTask) {
      case "all":
        return tasks;
      case "active":
        return tasks.filter((task) => !task.checked);
      case "completed":
        return tasks.filter((task) => task.checked);
      default:
        return tasks;
    }
  };

  return (
    <>
      <StyledWrapperNewTask>
        <button onClick={handleAddNewTask}>
          <AddIcon />
        </button>
        <input
          type="text"
          placeholder="Create a new todo..."
          value={newTask}
          onKeyDown={handleKeyDown}
          onChange={(e) => setNewTask(e.target.value)}
        />
      </StyledWrapperNewTask>

      <StyledWrapper>
        {handleFilterTask().map((task) => (
          <Task
            id={task.id}
            text={task.text}
            checked={task.checked}
            onCheck={handleTaskMark}
            onDelete={handleDeleteTask}
          />
        ))}

        <StyledWrapperSelect>
          <StyledParagraph>
            {tasks.filter((task) => task.checked).length} items left
          </StyledParagraph>
          <StyledWrapperSelectButtonGroup>
            <StyledFilterButton
              isActive={filterTask === "all"}
              onClick={() => setFilterTask("all")}
            >
              All
            </StyledFilterButton>
            <StyledFilterButton
              isActive={filterTask === "active"}
              onClick={() => setFilterTask("active")}
            >
              Active
            </StyledFilterButton>
            <StyledFilterButton
              isActive={filterTask === "completed"}
              onClick={() => setFilterTask("completed")}
            >
              Completed
            </StyledFilterButton>
          </StyledWrapperSelectButtonGroup>
          <StyledButtonClearCompletedTask onClick={handleClearCompletedTasks}>
            Clear Completed
          </StyledButtonClearCompletedTask>
        </StyledWrapperSelect>
      </StyledWrapper>

      <StyledWrapperSelectButtonGroupSeparated>
        <StyledFilterButton
          isActive={filterTask === "all"}
          onClick={() => setFilterTask("all")}
        >
          All
        </StyledFilterButton>
        <StyledFilterButton
          isActive={filterTask === "active"}
          onClick={() => setFilterTask("active")}
        >
          Active
        </StyledFilterButton>
        <StyledFilterButton
          isActive={filterTask === "completed"}
          onClick={() => setFilterTask("completed")}
        >
          Completed
        </StyledFilterButton>
      </StyledWrapperSelectButtonGroupSeparated>
    </>
  );
};
