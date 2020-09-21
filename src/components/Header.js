import React from 'react';
import { Link } from 'react-router-dom';
import { fallDown as Menu } from 'react-burger-menu';
import Brightness7Icon from '@material-ui/icons/Brightness7'; // Sun
import Brightness3Icon from '@material-ui/icons/Brightness3'; // Moon

// Hamburger borrowed from https://www.digitalocean.com/community/tutorials/react-react-burger-menu-sidebar

function Header({ mobile, change, lightMode }) {
  if (mobile) {
    return (
      <Menu>
        <Link to="/">Home</Link>
        <Link to="/about_me">About Me</Link>
        <Link to="/education">Education</Link>
        <Link to="/work_history">Work History</Link>
        <Link to="/leadership">Leadership</Link>
        <Link to="/relevant_coursework">Coursework</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/skills">Skills</Link>
        {lightMode
          ? <Brightness3Icon className="switch" onClick={change} fontSize="large" />
          : <Brightness7Icon className="switch" onClick={change} fontSize="large" />}
      </Menu>
    );
  } else {
    return (
      <div
        style={{
          height: 130,
          width: '100vw',
          display: 'flex',
          alignContent: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          paddingTop: 0,
        }}
      >
        <ul style={{
          margin: 0,
          padding: 0,
        }}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about_me">About Me</Link>
          </li>
          <li>
            <Link to="/education">Education</Link>
          </li>
          <li>
            <Link to="/work_history">Work History</Link>
          </li>
          <li>
            {lightMode
              ? <Brightness3Icon className="switch" onClick={change} fontSize="large" />
              : <Brightness7Icon className="switch" onClick={change} fontSize="large" />}
          </li>
          <li>
            <Link to="/leadership">Leadership</Link>
          </li>
          <li>
            <Link to="/relevant_coursework">Coursework</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
