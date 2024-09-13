import styled from 'styled-components';

export const StyledWrapper = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #494c6b;
  padding: 25px;
  font-size: 1.2rem;
  transition: all 0.3s ease;

  &:hover {
    button {
      visibility: visible;
    }
  }
`;
export const StyledParagraph = styled.p `
  flex: 1;
  padding: 0 20px;
  font-size: 1.2rem;
  color: ${({ theme, isMarked }) => (isMarked ? theme.colorTaskParagraphMark : theme.colorTaskParagraph)};
  text-decoration: ${({ isMarked }) => (isMarked ? 'line-through' : 'none')};

  @media (max-width: 550px) {
    font-size: 1rem;
  }
`;

export const StyledInput = styled.input `
  flex: 0;
  padding: 10px; 
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #494c6b;
  cursor: pointer;
  display: inline-block;
  position: relative;
  outline: none;
  transition: all 0.3s ease;

  &:hover {
    border-color: #2e9acc;
  }

  &:checked {
    background: linear-gradient(to bottom right, rgb(0, 132, 255), violet);
    border-color: #2e9acc;
}
`

export const StyledButton = styled.button `
  visibility: hidden;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: #494c6b;
  padding-left: 1.5rem;
  transition: all 0.3s ease;

  @media (max-width: 550px) {
    visibility: visible;
  }
`

export const StyledParagraphDate = styled.p `
  color: #494c6b;
  font-size: 1rem;
`