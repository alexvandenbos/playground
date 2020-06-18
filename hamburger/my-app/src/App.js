import React from 'react';
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <h1>Hello. This is burger menu tutorial</h1>
        <img src="https://image.flaticon.com/icons/svg/2016/2016012.svg" alt="burger icon" />
        <small>Icon made by Freepik from www.flaticon.com</small>
      </div>
    </ThemeProvider>
  );
}

export default App;
