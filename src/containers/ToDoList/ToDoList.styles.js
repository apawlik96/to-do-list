import styled from 'styled-components';

export const StyledWrapper = styled.div `
  color: ${({ theme }) => theme.colorToDoList};
  font-weight: 300;
  background-color: ${({ theme }) => theme.backgroundColorToDoList};
  border-radius: 10px;
`

export const StyledWrapperSelect = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
  font-size: 12px;
`

export const StyledParagraph = styled.p `
  color: #494c6b;
  font-weight: 400;
`

export const StyledWrapperSelectButtonGroup = styled.div `
  @media (max-width: 550px) {
    display: none;
  }
`

export const StyledFilterButton = styled.button `
  background-color: transparent;
  border: none;
  color: ${({ theme, isActive }) => (isActive ? '#2e9acc' : theme.colorButtonFilter)};
  font-weight: 500;
  padding: 0 5px;
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colorButtonFilterHover};
    cursor: pointer;
  }
`

export const StyledWrapperSelectButtonGroupSeparated = styled.div `
  @media (min-width: 550px) {
    display: none;
  }

  @media (max-width: 550px) {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.backgroundColorToDoList};
    padding: 25px;
    margin-top: 2rem;
    border-radius: 10px;
  }

  button {
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.colorButtonFilter};
    font-weight: 500;
    padding: 0 10px;
    transition: all 0.3s ease;
  
    &:hover {
      color: ${({ theme }) => theme.colorButtonFilterHover};
      cursor: pointer;
    }
  }
}
`

export const StyledButtonClearCompletedTask = styled.button `
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colorButtonFilter};
  font-weight: 400;
  transition: all 0.3s ease;

  &:hover {
    color: #2e9acc;
    cursor: pointer;
  }
`

export const StyledWrapperNewTask = styled.div `
  font-weight: 300;
  background-color: ${({ theme }) => theme.backgroundColorToDoList};
  border-radius: 10px;
  margin-bottom: 3rem;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    width: 25px;
    height: 25px;
    background-color: transparent;
    border-radius: 50%;
    border: 2px solid #494c6b;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    outline: none;

    svg {
      color: #494c6b;
      transition: all 0.3s ease;
    }

    &:hover {
      svg {
        color: ${({ theme }) => theme.colorToDoList};
      }
    }
  }

  }

  input {
    flex: 1;
    padding: 0 20px;
    font-size: 1.2rem;
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.colorToDoList};

    &::placeholder {
      color: #494c6b;
    }
  }
`

export const StyledWrapperTitle = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 3rem 0;

  h1 {
    text-transform: uppercase;
    color: #fff;
    letter-spacing: 15px;
    font-weight: 600;
    font-size: 3rem;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`

export const StyledWrapperReorderList = styled.div `
  margin: 3rem 0;
  display: flex;
  text-align: center;
  justify-content: center;
  color: #4e5064;
`

export const StyledWrapperButtonSortDates = styled.div `
  border-bottom: 1px solid #494c6b;
  padding: 15px;
  display: flex;
  justify-content: end;
  color: ${({ theme }) => theme.colorButtonFilter};

  button{
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.colorButtonFilter};
    cursor: pointer;
    font-size: 1rem;
    transition: all 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colorButtonFilterHover};
    }
  }
`

export const StyledWrapperCompletedTasks = styled.div `
  color: ${({ theme }) => theme.colorToDoList};
  font-weight: 300;
  background-color: ${({ theme }) => theme.backgroundColorToDoList};
  border-radius: 10px;
  margin-bottom: 3rem;
  padding: 1.5rem;

  span {
    font-size: 1.2rem;
    letter-spacing: 1px;
  }
`