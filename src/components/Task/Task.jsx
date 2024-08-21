import CloseIcon from "@mui/icons-material/Close";
import {
  StyledWrapper,
  StyledParagraph,
  StyledInput,
  StyledButton,
} from "./Task.styles.js";

export const Task = ({ id, text, checked, onCheck, onDelete }) => {
  return (
    <>
      <StyledWrapper>
        <StyledInput
          type="checkbox"
          checked={checked}
          onChange={() => onCheck(id)}
        />
        <StyledParagraph isMarked={checked}>{text}</StyledParagraph>
        <StyledButton onClick={() => onDelete(id)}>
          <CloseIcon />
        </StyledButton>
      </StyledWrapper>
    </>
  );
};
