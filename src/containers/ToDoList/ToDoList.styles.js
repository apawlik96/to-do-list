import styled from 'styled-components';

export const StyledWrapper = styled.div `
  color: #fff;
  font-weight: 300;
  background-color: #272a46;
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
  
  button {
    background-color: transparent;
    border: none;
    color: #494c6b;
    font-weight: 500;
    padding: 0 5px;
    transition: all 0.3s ease;

    &:hover {
      color: #2e9acc;
      cursor: pointer;
    }
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
    background-color: #272a46;
    padding: 25px;
    margin-top: 2rem;
    border-radius: 10px;
  }

  button {
    background-color: transparent;
    border: none;
    color: #494c6b;
    font-weight: 500;
    padding: 0 10px;
    transition: all 0.3s ease;
  
    &:hover {
      color: #2e9acc;
      cursor: pointer;
    }
  }
}
`

export const StyledButtonClearCompletedTask = styled.button `
  background-color: transparent;
  border: none;
  color: #494c6b;
  font-weight: 400;
  transition: all 0.3s ease;

  &:hover {
    color: #2e9acc;
    cursor: pointer;
  }
`

export const StyledWrapperNewTask = styled.div `
  color: #fff;
  font-weight: 300;
  background-color: #272a46;
  border-radius: 10px;
  margin-bottom: 3rem;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    width: 25px;
    height: 25px;
    background-color: #272a46;
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
        color: #ffffff;
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
    color: #fff;

    &::placeholder {
      color: #494c6b; 
    }
  }
`