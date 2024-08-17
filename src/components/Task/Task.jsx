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

  const handleCheckboxChange = () => {
    setIsTaskMarked((prevMarkTask) => !prevMarkTask);
  };

  return (
    <StyledWrapper>
      <StyledInput
        type="checkbox"
        checked={isTaskMarked}
        onChange={handleCheckboxChange}
      />
      <StyledParagraph isMarked={isTaskMarked}>{text}</StyledParagraph>

      <StyledButton>
        <CloseIcon />
      </StyledButton>
    </StyledWrapper>
  );
};
