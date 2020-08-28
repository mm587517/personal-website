import React from 'react';
import { IconSection } from '../IconSection/IconSection';

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

  return (
    <>
      <IconSection icons={languages} />
      <IconSection icons={frameworks} />
    </>
  );
};
