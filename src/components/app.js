/* eslint-disable max-len */
import React from 'react';
// eslint-disable-next-line object-curly-newline
import { BrowserRouter as Router } from 'react-router-dom';
import { useMediaQuery } from '@material-ui/core';
import useForceUpdate from 'use-force-update';
import Container from './Container';
import Header from './Header';
import '../style.scss';

let lightMode = false;

function App() {
  const mobile = useMediaQuery('(max-width:1000px)');
  const forceUpdate = useForceUpdate();

  const change = () => {
    lightMode = lightMode !== true;
    forceUpdate();
  };

  return (
    <div style={{
      backgroundImage: lightMode ? 'url(\'https://media.giphy.com/media/xTiTnGRBGReKsBf7W0/giphy.gif\')' : 'linear-gradient(0deg, rgba(64,159,168,1) 0%, rgba(58,154,158,1) 20%, rgba(6,77,132,1) 85%, rgba(4,51,87,1) 100%)',
      // background: lightMode ? 'linear-gradient(0deg, hsla(42, 93%, 57%, 1) 0%, hsla(358, 78%, 62%, 1) 100%)' : 'linear-gradient(180deg, hsla(270, 94%, 25%, 1) 0%, hsla(158, 94%, 49%, 1) 100%)',
      padding: 0,
      margin: 0,
      width: '100vw',
      height: '100vh',
      overflowX: 'hidden',
    }}
    >
      <Router>
        <div>
          <Header mobile={mobile} change={change} lightMode={lightMode} />
          <Container mobile={mobile} lightMode={lightMode} />
        </div>
      </Router>
    </div>
  );
}

export default App;
