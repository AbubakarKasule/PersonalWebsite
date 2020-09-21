import React from 'react';
// import ListItem from './ListItem';

function Education(props) {
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
        justifyContent: 'flex-start',
      },
      block: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        height: '50%',
        paddingTop: 100,
        width: '90%',
      },
      text1: {
        fontFamily: 'Raleway',
        fontSize: 50,
        color: 'white',
        borderRadius: 10,
        textAlign: 'center',
      },
      text2: {
        fontFamily: 'Raleway',
        fontSize: 35,
        color: 'white',
        textAlign: 'center',
      },
      text3: {
        fontFamily: 'Raleway',
        fontSize: 25,
        color: 'white',
        textAlign: 'center',
      },
      text4: {
        fontFamily: 'Raleway',
        fontSize: 30,
        color: 'white',
        textAlign: 'center',
        borderRadius: 10,
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
      block: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        position: 'absolute',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
      },
      text1: {
        fontFamily: 'Raleway',
        fontSize: 100,
        color: 'white',
        borderRadius: 10,
        textAlign: 'center',
      },
      text2: {
        fontFamily: 'Raleway',
        fontSize: 70,
        color: 'white',
        textAlign: 'center',
      },
      text3: {
        fontFamily: 'Raleway',
        fontSize: 50,
        color: 'white',
        textAlign: 'center',
      },
      text4: {
        fontFamily: 'Raleway',
        fontSize: 60,
        color: 'white',
        textAlign: 'center',
        borderRadius: 10,
      },
    };
  }

  return (
    <div style={styles.container}>
      <div style={{
        backgroundImage: `url(${props.lightMode ? 'https://media.giphy.com/media/3ov9jJuT2pEVMRMas0/giphy.gif' : 'https://media.giphy.com/media/k5GcybwY1yybmGwrFg/giphy.gif'})`,
        filter: 'blur(8px)',
        backgroundSize: 'cover',
        position: 'absolute',
        width: '100%',
        minHeight: '100vh',
        top: 0,
        padding: 0,
        margin: 0,
      }}
      />
      <div style={styles.block}>
        <span style={styles.text1}>
          Dartmouth College
        </span>
        <span style={styles.text2}>
          Hanover, NH
        </span>
        <span style={styles.text3}>
          SEPT 2017 - June 2021
        </span>
        <span style={styles.text4}>
          Bachelor of Arts, <br />Major in Computer Science <br />Minor in Biology
        </span>
      </div>
    </div>
  );
}

export default Education;
