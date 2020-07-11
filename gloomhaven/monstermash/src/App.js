import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './Global';
import { theme } from './Theme';
import SetMonster from './Components/Monster/setMonster.js';
import Header from './Components/header';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <SetMonster />
    </ThemeProvider>
  );
}
export default App;

