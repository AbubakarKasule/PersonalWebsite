import React, { Component } from 'react';
// import ListItem from './ListItem';

class AboutMe extends Component {
  constructor(props) {
    super(props);
    this.state = {}; // nothing here yet
  }

  render() {
    let style;
    if (this.props.lightMode) {
      style = {
        fontFamily: 'Raleway',
        fontSize: 40,
        fontWeight: 600,
        color: 'black',
        textAlign: 'center',
        width: '90%',
        zIndex: 2,
        position: 'absolute',
        top: 50,
      };
    } else {
      style = {
        fontFamily: 'Raleway',
        fontSize: 40,
        fontWeight: 600,
        color: '#E7EFEB',
        textAlign: 'center',
        width: '90%',
        zIndex: 2,
        position: 'absolute',
        top: 50,
      };
    }

    return (
      <div className="blurredBackground"
        style={{
          display: 'flex',
          alignItems: 'center',
          width: '100vw',
          minHeight: '50vh',
          flexDirection: 'column',
          position: 'relative',
          justifyContent: 'center',
        }}
      >
        <p style={style}>
          Hi! I&apos;m Abubakar, a software engineer and Full-Stack web developer.
          I enjoy creating applications and websites that I find both useful and beautiful (on the inside and outside).
          I have experience creating data pipelines to manipulate large datasets.
          I am also interested in Health/Biology so tackling health issues using Computer Science is a professional goal of mine.
        </p>
      </div>
    );
  }
}

export default AboutMe;
