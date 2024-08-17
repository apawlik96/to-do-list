import CloseIcon from "@mui/icons-material/Close";
import {
  StyledWrapper,
  StyledParagraph,
  StyledInput,
  StyledButton,
} from "./Task.styles.js";
import { useState } from "react";

export const Task = ({ text }) => {
  const [isTaskMarked, setIsTaskMarked] = useState(false);
  const [isTaskDeleted, setIsTaskDeleted] = useState(false);

  const handleCheckboxChange = () => {
    setIsTaskMarked((prevMarkTask) => !prevMarkTask);
  };

  const handleDeleteTask = () => {
    setIsTaskDeleted(true);
  };

  return (
    <>
      {!isTaskDeleted ? (
        <StyledWrapper>
          <StyledInput
            type="checkbox"
            checked={isTaskMarked}
            onChange={handleCheckboxChange}
          />
          <StyledParagraph isMarked={isTaskMarked}>{text}</StyledParagraph>

          <StyledButton onClick={handleDeleteTask}>
            <CloseIcon />
          </StyledButton>
        </StyledWrapper>
      ) : null}
    </>
  );
};
