import { Task } from "../../components/Task/Task.jsx";
import {
  StyledWrapper,
  StyledWrapperSelect,
  StyledParagraph,
  StyledWrapperSelectButtonGroup,
  StyledWrapperSelectButtonGroupSeparated,
  StyledButtonClearCompletedTask,
} from "./ToDoList.styles.js";

export const ToDoList = () => {
  const tasks = [
    "Complete online JavaScript course",
    "Jog around the park 3x",
    "10 minutes meditation",
    "Read for 1 hour",
    "Pick up groceries",
    "Complete Todo App on Frontend Mentor",
  ];

  return (
    <>
      <StyledWrapper>
        {tasks.map((task) => (
          <Task text={task} />
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
