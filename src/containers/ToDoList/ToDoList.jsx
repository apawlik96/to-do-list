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
  StyledWrapperTitle,
  StyledWrapperReorderList,
} from "./ToDoList.styles.js";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddIcon from "@mui/icons-material/Add";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../../theme";

const FilterType = {
  ACTIVE: "active",
  COMPLETED: "completed",
};

const ButtonFilter = ({ filteringType, setFilteringType }) => {
  return (
    <>
      <StyledFilterButton
        isActive={!filteringType}
        onClick={() => setFilteringType(null)}
      >
        All
      </StyledFilterButton>
      <StyledFilterButton
        isActive={filteringType === FilterType.ACTIVE}
        onClick={() => setFilteringType(FilterType.ACTIVE)}
      >
        Active
      </StyledFilterButton>
      <StyledFilterButton
        isActive={filteringType === FilterType.COMPLETED}
        onClick={() => setFilteringType(FilterType.COMPLETED)}
      >
        Completed
      </StyledFilterButton>
    </>
  );
};

export const ToDoList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Complete online JavaScript course", checked: false },
    { id: 2, text: "Jog around the park 3x", checked: false },
    { id: 3, text: "10 minutes meditation", checked: false },
    { id: 4, text: "Read for 1 hour", checked: false },
    { id: 5, text: "Pick up groceries", checked: false },
    { id: 6, text: "Complete Todo App on Frontend Mentor", checked: false },
  ]);
  const [newTaskInput, setNewTaskInput] = useState("");
  const [filteringType, setFilteringType] = useState();
  const [isDarkTheme, setIsDarkTheme] = useState(true);

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
    if (newTaskInput.trim() === "") {
      return;
    }

    const newTaskObject = {
      id: uuidv4(),
      text: newTaskInput,
      checked: false,
    };

    setTasks(tasks.concat(newTaskObject));
    setNewTaskInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddNewTask();
    }
  };

  const clearCompletedTasks = () => {
    const myFilter = taskFilters[FilterType.ACTIVE];
    const filteredTasks = tasks.filter(myFilter);
    setTasks(filteredTasks);
  };

  const taskFilters = {
    [FilterType.ACTIVE]: (task) => !task.checked,
    [FilterType.COMPLETED]: (task) => task.checked,
  };

  const filteredTasks = filteringType
    ? tasks.filter(taskFilters[filteringType])
    : tasks;

  const handleThemeChange = () => {
    setIsDarkTheme((prevState) => !prevState);
    document.body.classList.toggle("light-theme", isDarkTheme);
  };

  const ThemeChangingIcon = isDarkTheme ? LightModeIcon : DarkModeIcon;

  return (
    <>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <StyledWrapperTitle>
          <h1>Todo</h1>
          <button onClick={handleThemeChange}>
            <ThemeChangingIcon style={{ fontSize: 40, color: "#fff" }} />
          </button>
        </StyledWrapperTitle>
        <StyledWrapperNewTask>
          <button onClick={handleAddNewTask}>
            <AddIcon />
          </button>
          <input
            type="text"
            placeholder="Create a new todo..."
            value={newTaskInput}
            onKeyDown={handleKeyDown}
            onChange={(e) => setNewTaskInput(e.target.value)}
          />
        </StyledWrapperNewTask>

        <StyledWrapper>
          {filteredTasks.map((task) => (
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
              {tasks.filter(taskFilters[FilterType.COMPLETED]).length} items
              left
            </StyledParagraph>
            <StyledWrapperSelectButtonGroup>
              <ButtonFilter
                filteringType={filteringType}
                setFilteringType={setFilteringType}
              />
            </StyledWrapperSelectButtonGroup>
            <StyledButtonClearCompletedTask onClick={clearCompletedTasks}>
              Clear Completed
            </StyledButtonClearCompletedTask>
          </StyledWrapperSelect>
        </StyledWrapper>

        <StyledWrapperSelectButtonGroupSeparated>
          <ButtonFilter
            filteringType={filteringType}
            setFilteringType={setFilteringType}
          />
        </StyledWrapperSelectButtonGroupSeparated>

        <StyledWrapperReorderList>
          <p>Drag and drop to reorder list</p>
        </StyledWrapperReorderList>
      </ThemeProvider>
    </>
  );
};
