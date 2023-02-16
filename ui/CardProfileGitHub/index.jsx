import React, { useEffect, useState } from 'react';
import axios from 'axios';

import {
  CardProfileGitHubContainer,
  CardProfileGitHubWrapper,
  CardProfileGitHubImage,
  CardProfileGitHubTitle,
  CardProfileGitHubParagraph,
  CardProfileGitHubList,
  CardProfileGitHubListItem,
  CardProfileGitHubListStrong,
  CardProfileGitHubListSpan,
  CardProfileGitHubButton,
} from './style.js';

import { GithubLogo } from 'phosphor-react';

export function CardProfileGitHub({ username }) {
  const [githubUser, setGitHubUser] = useState(null);

  useEffect(() => {
    async function fetchGitHubUser() {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      setGitHubUser(response.data);
    }
    fetchGitHubUser();
  }, [username]);

  return (
    <CardProfileGitHubContainer>
      {githubUser ? (
        <CardProfileGitHubWrapper>
          <CardProfileGitHubImage
            src={githubUser.avatar_url}
            alt={githubUser.name}
          />
          <CardProfileGitHubTitle>{githubUser.name}</CardProfileGitHubTitle>
          <CardProfileGitHubParagraph>
            {githubUser.bio}
          </CardProfileGitHubParagraph>
          <CardProfileGitHubList>
            <CardProfileGitHubListItem>
              <CardProfileGitHubListStrong>
                {githubUser.followers}
              </CardProfileGitHubListStrong>
              <CardProfileGitHubListSpan>Seguidores</CardProfileGitHubListSpan>
            </CardProfileGitHubListItem>
            <CardProfileGitHubListItem>
              <CardProfileGitHubListStrong>
                {githubUser.following}
              </CardProfileGitHubListStrong>
              <CardProfileGitHubListSpan>Seguindo</CardProfileGitHubListSpan>
            </CardProfileGitHubListItem>
          </CardProfileGitHubList>
          <CardProfileGitHubButton href={githubUser.html_url}>
            GitHub <GithubLogo size={28} />
          </CardProfileGitHubButton>
        </CardProfileGitHubWrapper>
      ) : (
        <p>Carregando...</p>
      )}
    </CardProfileGitHubContainer>
  );
}
