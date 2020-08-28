import React from 'react';
import { Container, H1 } from './App.style';
import { ThemeProvider } from 'styled-components';
import { Theme } from '../../Theme/theme';
import { Name } from '../../assets/svgs/Name/Name';

function App() {
  const logo = document.querySelectorAll('#logo path');
  console.log(logo);
  return (
    <ThemeProvider theme={Theme}>
      <Container color='primary'>
        <Name />
      </Container>
    </ThemeProvider>
  );
}

export default App;
