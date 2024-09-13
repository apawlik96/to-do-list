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
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import AddIcon from "@mui/icons-material/Add";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../../theme";
import cookie from "cookie";

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
  const [newTaskInput, setNewTaskInput] = useState("");
  const [filteringType, setFilteringType] = useState();
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const saveTasksToCookies = (tasks) => {
    document.cookie = cookie.serialize("tasks", JSON.stringify(tasks));
  };

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const cookies = cookie.parse(document.cookie || "");
    const storedTasks = cookies.tasks;
    const parsedTasks = JSON.parse(storedTasks);
    setTasks(parsedTasks);
  }, []);

  const handleTaskMark = (id) => {
    const taskMark = tasks.map((task) =>
      task.id === id ? { ...task, checked: !task.checked } : task
    );
    setTasks(taskMark);
    saveTasksToCookies(taskMark);
  };

  const handleDeleteTask = (id) => {
    const newTasksList = tasks.filter((task) => task.id !== id);
    setTasks(newTasksList);
    saveTasksToCookies(newTasksList);
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

    const newTasksArray = tasks.concat(newTaskObject);
    setTasks(newTasksArray);
    saveTasksToCookies(newTasksArray);
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
    saveTasksToCookies(filteredTasks);
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
