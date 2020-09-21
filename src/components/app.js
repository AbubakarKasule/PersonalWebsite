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
      // backgroundImage: `url(${lightMode ? 'https://thumbs.gfycat.com/FormalWhichGypsymoth-small.gif' : 'https://thumbs.gfycat.com/FormalWhichGypsymoth-size_restricted.gif'})`,
      background: lightMode ? 'linear-gradient(0deg, hsla(42, 93%, 57%, 1) 0%, hsla(358, 78%, 62%, 1) 100%)' : 'linear-gradient(180deg, hsla(270, 94%, 25%, 1) 0%, hsla(158, 94%, 49%, 1) 100%)',
      backgroundSize: 'cover',
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
