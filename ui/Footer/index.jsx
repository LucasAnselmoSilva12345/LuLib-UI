import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  DiscordLogo,
  GitBranch,
  LinkedinLogo,
  TwitterLogo,
} from 'phosphor-react';

import {
  FooterContainer,
  ContainerStructure,
  NameAuthor,
  ContainerStructureListSocialNetwork,
  Icon,
} from './style.js';

export function Footer({ name, discord, twitter, linkedin, git }) {
  return (
    <FooterContainer>
      <ContainerStructure>
        <NameAuthor>{name}</NameAuthor>

        <div>
          <ContainerStructureListSocialNetwork>
            <li>
              <Icon href={discord}>
                <DiscordLogo weight="light" />
              </Icon>
            </li>
            <li>
              <Icon href={twitter}>
                <TwitterLogo weight="light" />
              </Icon>
            </li>
            <li>
              <Icon href={linkedin}>
                <LinkedinLogo weight="light" />
              </Icon>
            </li>
            <li>
              <Icon href={git}>
                <GitBranch weight="light" />
              </Icon>
            </li>
          </ContainerStructureListSocialNetwork>
        </div>
      </ContainerStructure>
    </FooterContainer>
  );
}
