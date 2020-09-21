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
  const mobile = useMediaQuery('(max-width:600px)');
  const forceUpdate = useForceUpdate();

  const change = () => {
    lightMode = lightMode !== true;
    forceUpdate();
    console.log('k');
  };

  return (
    <Router>
      <div>
        <Container mobile={mobile} lightMode={lightMode} />
        <Header mobile={mobile} change={change} lightMode={lightMode} />
      </div>
    </Router>
  );
}

export default App;
