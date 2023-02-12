import styled from 'styled-components';

export const Button = styled.button`
  background-color: #1c7ed6;
  color: #f1f1f1;
  width: 20%;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: 0;
  border-radius: 0.25rem;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    filter: opacity(70%);
  }
`;
