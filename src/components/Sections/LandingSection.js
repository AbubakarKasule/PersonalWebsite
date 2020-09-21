import React from 'react';
import {
  Avatar,
  Typography,
} from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import coverPhoto from '../../img/cardCover.png';
import profilePhoto from '../../img/profile.jpeg';

function LandingSection(props) {
  let styles;

  if (props.mobile) {
    styles = {
      container: {
        display: 'flex',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        flexDirection: 'column',
        position: 'relative',
      },
      card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignContent: 'center',
        alignItems: 'center',
        borderRadius: '5px',
        marginTop: 100,
        boxShadow: '5px 5px 15px 5px',
        width: '95vw',
        height: '70vh',
        position: 'absolute',
        backgroundImage: `url(${coverPhoto})`,
      },
      avatar: {
        width: 200,
        height: 200,
      },
      name: {
        color: 'black',
        fontSize: 24,
        fontFamily: 'Raleway',
        textAlign: 'center',
        textShadow: 'unset',
      },
      divider: {
        display: 'block',
        marginTop: 0.5,
        marginBottom: 0.5,
        marginLeft: 'auto',
        marginRight: 'auto',
        borderStyle: 'inset',
        borderWidth: 1,
        width: '90%',
        color: 'black',
      },
      profession: {
        color: 'black',
        fontSize: 16,
        fontFamily: 'Raleway',
        textAlign: 'center',
        textShadow: 'unset',
      },
      mobile: {
        color: 'black',
        fontSize: 18,
        fontFamily: 'Raleway',
        textShadow: 'unset',
      },
      email: {
        color: 'black',
        fontSize: 18,
        fontFamily: 'Raleway',
      },
      socials: {
        display: 'flex',
        justifyContent: 'space-around',
        alignContent: 'center',
        width: '30%',
        color: '#92B4A7',
      },
      icon: {
        color: '#192420',
      },
    };
  } else {
    styles = {
      container: {
        display: 'flex',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        flexDirection: 'column',
        position: 'relative',
      },
      card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignContent: 'center',
        alignItems: 'center',
        borderRadius: '5px',
        marginTop: 150,
        boxShadow: '5px 5px 15px 5px',
        width: 500,
        height: 500,
        position: 'absolute',
        backgroundImage: `url(${coverPhoto})`,
      },
      avatar: {
        width: 200,
        height: 200,
      },
      name: {
        color: 'black',
        fontSize: 24,
        fontFamily: 'Raleway',
        textAlign: 'center',
        textShadow: 'unset',
      },
      divider: {
        display: 'block',
        marginTop: 0.5,
        marginBottom: 0.5,
        marginLeft: 'auto',
        marginRight: 'auto',
        borderStyle: 'inset',
        borderWidth: 1,
        width: '90%',
        color: 'black',
      },
      profession: {
        color: 'black',
        fontSize: 16,
        fontFamily: 'Raleway',
        textAlign: 'center',
        textShadow: 'unset',
      },
      mobile: {
        color: 'black',
        fontSize: 18,
        fontFamily: 'Raleway',
        textShadow: 'unset',
      },
      email: {
        color: 'black',
        fontSize: 18,
        fontFamily: 'Raleway',
      },
      socials: {
        display: 'flex',
        justifyContent: 'space-around',
        alignContent: 'center',
        width: '30%',
        color: '#92B4A7',
      },
      icon: {
        color: '#192420',
      },
    };
  }

  console.log(props.lightMode);

  return (
    <div style={styles.container}>
      <div style={{
        backgroundImage: `url(${props.lightMode ? 'https://media.giphy.com/media/3ov9jJuT2pEVMRMas0/giphy.gif' : 'https://media.giphy.com/media/k5GcybwY1yybmGwrFg/giphy.gif'})`,
        backgroundSize: 'cover',
        position: 'absolute',
        width: '100%',
        minHeight: '100%',
        top: 0,
        padding: 0,
        margin: 0,
      }}
      />
      <div style={styles.card}>
        <div />
        <div />
        <Avatar style={styles.avatar} alt="Only picture of me in existance" src={profilePhoto} />
        <Typography align="center" style={styles.name}>
          ABUBAKAR KASULE
        </Typography>
        <hr style={styles.divider} />
        <Typography align="center" style={styles.profession}>
          Software Engineer, Full Stack Web Developer, Data Enthusiast
        </Typography>
        <Typography align="center" style={styles.mobile}>
          Mobile: +1 (857)-318-9959
        </Typography>
        <Typography align="center" style={styles.email}>
          Email: abubakar.i.kasule.21@dartmouth.edu
        </Typography>
        <div style={styles.socials}>
          <a href="https://www.linkedin.com/in/abubakar-kasule-a531a518b/">
            <LinkedInIcon fontSize="large" style={styles.icon} />
          </a>
          <a href="https://github.com/AbubakarKasule">
            <GitHubIcon fontSize="large" style={styles.icon} />
          </a>
        </div>
        <div />
      </div>
    </div>
  );
}

export default LandingSection;
