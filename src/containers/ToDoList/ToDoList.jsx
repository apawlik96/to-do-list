import { Task } from "../../components/Task/Task.jsx";
import {
  Div,
  DivSelect,
  P,
  DivSelectButtonGroup,
  DivSelectButtonGroupSeparated,
  ButtonClearCompletedTask,
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
      <Div>
        {tasks.map((task) => (
          <Task text={task} />
        ))}

        <DivSelect>
          <P>Items left</P>
          <DivSelectButtonGroup>
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
          </DivSelectButtonGroup>
          <ButtonClearCompletedTask>Clear Completed</ButtonClearCompletedTask>
        </DivSelect>
      </Div>

      <DivSelectButtonGroupSeparated>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </DivSelectButtonGroupSeparated>
    </>
  );
};
