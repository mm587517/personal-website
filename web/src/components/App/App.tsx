import React from 'react';
import { Container, H1, OverContainer } from './App.style';
import { ThemeProvider } from 'styled-components';
import { Theme } from '../../Theme/theme';
import { Name } from '../../assets/svgs/Name/Name';
import { Resume } from '../Resume/Resume';

function App() {
  const logo = document.querySelectorAll('#logo path');
  console.log(logo);
  return (
    <ThemeProvider theme={Theme}>
      <OverContainer>
        <Container color='primary'>
          <Name />
        </Container>
        <Resume />
      </OverContainer>
    </ThemeProvider>
  );
}

export default App;
