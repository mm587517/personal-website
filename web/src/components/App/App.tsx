import React from 'react';
import { ImgContainer, H1 } from './App.style';

const BACKGROUND = require('../../assets/background.png');

function App() {
  return (
    <>
      <ImgContainer address={BACKGROUND}>
        <H1>MARCELO MORALES</H1>
      </ImgContainer>
      <H1>hello there</H1>
    </>
  );
}

export default App;
