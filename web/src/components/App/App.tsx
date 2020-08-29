import React from 'react';
import { Container, H1, OverContainer, Test } from './App.style';
import { ThemeProvider } from 'styled-components';
import { Theme } from '../../Theme/theme';
import { Name } from '../../assets/svgs/Name/Name';
import { Resume } from '../Resume/Resume';
import { StylesProvider } from '@material-ui/core/styles';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <StylesProvider injectFirst>
        <OverContainer>
          <Container color='primary'>
            <Name />
          </Container>
          <Resume />
        </OverContainer>
      </StylesProvider>
    </ThemeProvider>
  );
}

export default App;
