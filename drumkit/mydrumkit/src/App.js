import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './Global';
import { theme } from './Theme';
import { SoundsRegistry } from './Sounds/Registry'

const titleStyle = {
  margin: '50px',
}
function App() {
  console.log(SoundsRegistry)
  window.addEventListener('keydown', function (e) {
    console.log(e.keyCode)
    const audiofile = document.querySelector(`audio[data-key='${e.keyCode}']`)
    audiofile.play()
    console.log(audiofile)
  })
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <div style={titleStyle}>
          <h1 >My Drumkit</h1>
          <menu>
            <div className="key">
              <kbd>a</kbd>
            </div>
          </menu>
          <audio data-key="65"><source src="boom.wav"></source></audio>
        </div>
      </ThemeProvider>

    </div>
  );
}

export default App;
