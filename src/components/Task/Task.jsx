import CloseIcon from "@mui/icons-material/Close";
import {
  StyledWrapper,
  StyledParagraph,
  StyledInput,
  StyledButton,
  StyledParagraphDate,
} from "./Task.styles.js";

export const Task = ({ id, text, checked, onCheck, onDelete, dateAdded }) => {
  return (
    <>
      <StyledWrapper>
        <StyledInput
          type="checkbox"
          checked={checked}
          onChange={() => onCheck(id)}
        />
        <StyledParagraph isMarked={checked}>{text}</StyledParagraph>
        <StyledParagraphDate>{dateAdded}</StyledParagraphDate>
        <StyledButton onClick={() => onDelete(id)}>
          <CloseIcon />
        </StyledButton>
      </StyledWrapper>
    </>
  );
};
