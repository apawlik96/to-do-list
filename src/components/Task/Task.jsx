import CloseIcon from "@mui/icons-material/Close";
import {
  StyledWrapper,
  StyledParagraph,
  StyledInput,
  StyledButton,
  StyledParagraphDate,
  StyledInputText,
} from "./Task.styles.js";
import { useState } from "react";

export const Task = ({
  id,
  text,
  checked,
  onCheck,
  onDelete,
  dateAdded,
  onEdit,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newInputText, setNewInputText] = useState(text);

  const handleEditInputText = () => {
    setIsEditing(false);
    onEdit(id, newInputText);
  };

  return (
    <>
      <StyledWrapper>
        <StyledInput
          type="checkbox"
          checked={checked}
          onChange={() => onCheck(id)}
        />
        {isEditing ? (
          <StyledInputText
            type="text"
            value={newInputText}
            onChange={(e) => setNewInputText(e.target.value)}
            onBlur={handleEditInputText}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleEditInputText();
              }
            }}
          />
        ) : (
          <StyledParagraph
            isMarked={checked}
            onDoubleClick={() => setIsEditing(true)}
          >
            {text}
          </StyledParagraph>
        )}
        <StyledParagraphDate>{dateAdded}</StyledParagraphDate>
        <StyledButton aria-label="delete-button" onClick={() => onDelete(id)}>
          <CloseIcon />
        </StyledButton>
      </StyledWrapper>
    </>
  );
};
