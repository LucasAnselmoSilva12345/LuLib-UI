import styled from 'styled-components';

export const CardProfileGitHubContainer = styled.div`
  padding: 0.125rem 1rem;
`;

export const CardProfileGitHubWrapper = styled.section`
  box-shadow: 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.2);
  max-width: 400px;
  margin: auto;
  text-align: center;
  font-family: arial;
`;

export const CardProfileGitHubImage = styled.img`
  width: 100%;
`;

export const CardProfileGitHubTitle = styled.h1`
  margin: 0.5rem;
  color: #1f2937;
  font-size: 1.5rem;
`;

export const CardProfileGitHubParagraph = styled.p`
  color: #6b7280;
  font-size: 1rem;
`;

export const CardProfileGitHubList = styled.ul`
  list-style-type: none;
  padding: 0 1.25rem 0.5rem 1.25rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CardProfileGitHubListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
`;

export const CardProfileGitHubListStrong = styled.strong`
  color: #374151;
  font-size: 1.25rem;
  font-weight: bold;
`;

export const CardProfileGitHubListSpan = styled.span`
  color: #475569;
  font-size: 1.25rem;
  font-weight: bold;
`;

export const CardProfileGitHubButton = styled.a`
  border: none;
  outline: 0;
  padding: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: white;
  background-color: #171717;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 1.125rem;

  &:hover {
    opacity: 0.7;
  }
`;
