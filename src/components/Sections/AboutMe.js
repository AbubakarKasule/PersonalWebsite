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
        position: 'relative',
        paddingTop: 60,
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
        position: 'relative',
        paddingTop: 60,
      };
    }

    return (
      <div className="blurredBackground"
        style={{
          display: 'flex',
          alignItems: 'center',
          width: '100vw',
          minHeight: '100vh',
          flexDirection: 'column',
          position: 'relative',
          justifyContent: 'center',
          zIndex: 1,
        }}
      >
        <div style={{
          backgroundImage: `url(${this.props.lightMode ? 'https://media.giphy.com/media/3ov9jJuT2pEVMRMas0/giphy.gif' : 'https://media.giphy.com/media/k5GcybwY1yybmGwrFg/giphy.gif'})`,
          filter: 'blur(8px)',
          backgroundSize: 'cover',
          position: 'absolute',
          width: '100%',
          minHeight: '100%',
          top: 0,
          padding: 0,
          margin: 0,
        }}
        />
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
