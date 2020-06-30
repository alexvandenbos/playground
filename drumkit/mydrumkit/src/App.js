import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './Global';
import { theme } from './Theme';
import Menu from './Components/Menu/Menu';

const titleStyle = {
  margin: '50px',
}

function App() {
  return (

    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <div style={titleStyle}>
          <h1 >My Drumkit</h1>
        </div>
        <Menu style={{ textAlign: 'center' }} />
      </ThemeProvider>

    </div>
  );
}

export default App;
