import React from 'react';
import { IconSection } from '../IconSection/IconSection';

import Paper from '@material-ui/core/Paper';
import { About } from '../About/About';

export const Resume = () => {
  const android = require('../../assets/Logos/android.png');
  const js = require('../../assets/Logos/js-logo.png');
  const ts = require('../../assets/Logos/ts-logo.png');
  const c = require('../../assets/Logos/c++.png');
  const java = require('../../assets/Logos/java.png');
  const ver = require('../../assets/Logos/verilog.png');

  const node = require('../../assets/Logos/nodejs.png');
  const react = require('../../assets/Logos/react.png');
  const redux = require('../../assets/Logos/redux.png');
  const apollo = require('../../assets/Logos/apollo.png');
  const graph = require('../../assets/Logos/graphql.png');

  const aws = require('../../assets/Logos/aws.png');
  const git = require('../../assets/Logos/github.png');
  const docker = require('../../assets/Logos/docker.png');
  const figma = require('../../assets/Logos/figma.png');
  const postman = require('../../assets/Logos/postman.png');
  const aso = require('../../assets/Logos/android.png');
  const vs = require('../../assets/Logos/vscode.png');
  const intell = require('../../assets/Logos/intellij.png');
  const data = require('../../assets/Logos/datagrip.png');
  const ubuntu = require('../../assets/Logos/ubuntu.png');
  const linux = require('../../assets/Logos/linux.png');
  const windows = require('../../assets/Logos/windows.png');

  const languages = [
    {
      name: 'JavaScript',
      url: js,
    },
    {
      name: 'TypeScript',
      url: ts,
    },
    {
      name: 'C++',
      url: c,
    },
    {
      name: 'Java',
      url: java,
    },
    {
      name: 'Verilog',
      url: ver,
    },
  ];

  const frameworks = [
    {
      name: 'NodeJS',
      url: node,
    },
    {
      name: 'React',
      url: react,
    },
    {
      name: 'Redux',
      url: redux,
    },
    {
      name: 'Apollo',
      url: apollo,
    },
    {
      name: 'GraphQL',
      url: graph,
    },
  ];

  const tools = [
    {
      name: 'AWS',
      url: aws,
    },
    {
      name: 'Github',
      url: git,
    },
    {
      name: 'Docker',
      url: docker,
    },
    {
      name: 'Figma',
      url: figma,
    },
    {
      name: 'Postman',
      url: postman,
    },
    {
      name: 'Android Studio',
      url: aso,
    },
    {
      name: 'IntelliJ',
      url: intell,
    },
    {
      name: 'Datagrip',
      url: data,
    },
    {
      name: 'Ubuntu',
      url: ubuntu,
    },
    {
      name: 'Linux',
      url: linux,
    },
    {
      name: 'Windows',
      url: windows,
    },
  ];

  return (
    <>
      <About />
      <IconSection icons={languages} />
      <IconSection icons={frameworks} />
    </>
  );
};
