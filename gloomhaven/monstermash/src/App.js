import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './Global';
import { theme } from './Theme';
import InputField from './Components/Field/inputField.js';
import Header from './Components/header';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <InputField />
    </ThemeProvider>
  );
}
export default App;

