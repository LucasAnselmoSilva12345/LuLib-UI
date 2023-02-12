import styled from 'styled-components'

export const Blank = styled.a`
  background-color: #7950f2;
  color: #f1f1f1;
  width: 40%;
  padding: 8px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 0.25rem;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
  &:hover {
    filter: opacity(70%);
  }
`;