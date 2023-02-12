import styled from 'styled-components';

export const FooterContainer = styled.footer`
  border-top: 0.25rem solid #228be6;
`;

export const ContainerStructure = styled.div`
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 0;
  }
`;

export const NameAuthor = styled.h1`
  color: #a0a8af;
  font-size: 1.5rem;

  @media (min-width: 992px) {
    font-size: 1.25rem;
  }
`;

export const ContainerStructureListSocialNetwork = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
`;

export const Icon = styled.a`
  font-size: 1.25rem;
  color: #adb5bd;
  transition: ease-in-out;
  &:hover {
    filter: opacity(60%);
  }
`;
