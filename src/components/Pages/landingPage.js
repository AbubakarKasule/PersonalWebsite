import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import LandingSection from '../Sections/LandingSection';
import AboutMe from '../Sections/AboutMe';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {}; // nothing here yet
  }

  render() {
    return (
      <div
        style={{
          display: 'flex', alignItems: 'center', flexDirection: 'column', position: 'relative', width: '100vw', height: '100vh',
        }}
      >
        <Carousel>
          <Carousel.Item>
            <LandingSection />
          </Carousel.Item>
          <Carousel.Item>
            <AboutMe />
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default LandingPage;
