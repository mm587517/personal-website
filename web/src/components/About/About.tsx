import React from 'react';
import { InfoCard } from '../InfoCard/InfoCard';

export const About = () => {
  const qr = require('../../assets/Logos/githubqr.png');

  const cards = [
    {
      color: '#f69314',
      title: 'Contact',
      info: [
        '36 South Court Street',
        'Apt. 306',
        'Athens, OH 45701',
        'mm587517@ohio.edu',
        'Github: mm587517',
      ],
      url: qr,
    },

    {
      color: '#CD0A0A',
      title: 'Education',
      info: [
        'Ohio University',
        'Honors Tutorial College',
        'Computer Science',
        'Minor: Mathematics',
        'Expected Graduation: May 2022',
        'Overall GPA:(4.00 scale) 3.86',
      ],
      url: undefined,
    },

    {
      color: '#4592AF',
      title: 'Skills',
      info: [
        ' Scrum & Agile teamwork',
        ' Fluently billingual in English & Spanish',
        'Organization & communication',
      ],
      url: undefined,
    },
  ];

  return <InfoCard cards={cards} />;
};
