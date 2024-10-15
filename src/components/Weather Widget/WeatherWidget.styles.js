import styled from "styled-components";

export const StyledWrapper = styled.div `
  display: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.backgroundColorToDoList};
  color: ${({ theme }) => theme.colorToDoList};
  padding: 1rem;
  margin-bottom: 3rem;

  h1 {
    text-align: center;
    padding-bottom: 1rem;
    font-size: 1.5rem;
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: 1px;
  }

  ul {
    list-style: none;
    display: flex;
    justify-content: center;
  }

  li {
    font-size: 14px;
    margin: 15px;
    }


  @media (max-width: 550px) {
    ul {
      padding-top: 1rem;
      flex-direction: column;
      text-align: center;
    }
    li {
      margin: 5px;
    }
}
`;

export const StyledTemperatureUnitParagraph = styled.span`
cursor: pointer;
color: ${({ theme, isActive }) => (isActive ? theme.colorToDoList : theme.colorButtonFilter)};
`;

export const StyledWrapperWeather = styled.div `
  text-align: center;
  margin-right: 1rem;
  font-size: 1.4rem;
`;