import styled from 'styled-components';

export const Div = styled.div `
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

export const P = styled.p `
  flex: 1;
  padding: 0 20px;
  font-size: 1.2rem;

  @media (max-width: 550px) {
    font-size: 1rem;
  }
`;

export const Input = styled.input `
  appearance: none;
  width: 20px;
  height: 20px;
  background-color: #272a46;
  border-radius: 50%;
  border: 2px solid #494c6b;
  cursor: pointer;
  display: inline-block;
  position: relative;
  outline: none;
  transition: all 0.3s ease;

  &:checked {
    background: linear-gradient(to bottom right, rgb(0, 132, 255), violet);
    border-color: #2e9acc;
}
`

export const Button = styled.button `
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
