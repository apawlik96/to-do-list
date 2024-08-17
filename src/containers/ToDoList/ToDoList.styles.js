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