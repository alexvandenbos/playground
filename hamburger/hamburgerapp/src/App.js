// App.js
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import Burger from './components/Burger/Burger';
import Menu from './components/Menu/Menu';
import { useState } from 'react';

function App() {
  const [open, setOpen] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
      <div>
        <h1>Mijn Hamburger Menu</h1>
      </div>
    </ThemeProvider>
  );
}
export default App;
