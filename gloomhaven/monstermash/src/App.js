import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './Global';
import { theme } from './Theme';
import SetField from './Components/Field/setField.js';
import Header from './Components/header';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <SetField />
    </ThemeProvider>
  );
}
export default App;

