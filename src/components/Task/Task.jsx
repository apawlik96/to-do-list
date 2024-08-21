import CloseIcon from "@mui/icons-material/Close";
import {
  StyledWrapper,
  StyledParagraph,
  StyledInput,
  StyledButton,
} from "./Task.styles.js";

export const Task = ({ id, text, checked, onChange, onClick }) => {
  return (
    <>
      <StyledWrapper>
        <StyledInput
          type="checkbox"
          checked={checked}
          onChange={() => onChange(id)}
        />
        <StyledParagraph isMarked={checked}>{text}</StyledParagraph>
        <StyledButton onClick={() => onClick(id)}>
          <CloseIcon />
        </StyledButton>
      </StyledWrapper>
    </>
  );
};
