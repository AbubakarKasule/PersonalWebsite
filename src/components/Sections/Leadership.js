import React, { Component } from 'react';
import {
  Fab,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import ListItem from './ListItem';

class Leadership extends Component {
  listItems = [
    {
      title: 'Community Outreach Officer',
      subtitle: 'Dartmouth College: Dartmouth African Students Association Executive Board \nHanover – NH',
      period: '(2019 - Present)',
      // eslint-disable-next-line max-len
      description: '• Responsible for maintaining the DASA presence on campus through engagement with individual students. \n• Organized orientation programming and maintained connections with DASA alumni as well as fostering and maintaining connections with African students in other branches of Dartmouth (Thayer, Tuck, Geisel).\n• Engagement with DASA has doubled since I have been Community Outreach Officer.',
    },
  ];

  constructor(props) {
    super(props);
    this.state = { currentIndex: 0 }; // nothing here yet

    if (this.props.mobile) {
      this.styles = {
        container: {
          display: 'flex',
          alignItems: 'center',
          width: '100vw',
          flexDirection: 'column',
          position: 'relative',
        },
        card: {
          display: 'flex',
          flexDirection: 'column',
          width: '190%',
          padding: 0,
          margin: 0,
          position: 'absolute',
          top: 112,
          justifyContent: 'center',
          alignItems: 'center',
        },
      };
    } else {
      this.styles = {
        container: {
          display: 'flex',
          alignItems: 'center',
          width: '100vw',
          flexDirection: 'column',
          position: 'relative',
        },
        card: {
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          padding: 0,
          margin: 0,
          position: 'absolute',
          top: 150,
          justifyContent: 'center',
          alignItems: 'center',
        },
      };
    }
  }

  prev = () => {
    this.setState((prevState) => {
      if (prevState.currentIndex === 0) {
        return ({ currentIndex: this.listItems.length - 1 });
      } else {
        return ({ currentIndex: prevState.currentIndex - 1 });
      }
    });
  };

  next = () => {
    this.setState((prevState) => {
      if (prevState.currentIndex === this.listItems.length - 1) {
        return ({ currentIndex: 0 });
      } else {
        return ({ currentIndex: prevState.currentIndex + 1 });
      }
    });
  };

  render() {
    const item = this.listItems[this.state.currentIndex];
    return (
      <div className="This One" style={this.styles.container}>
        <div style={{
          backgroundImage: `url(${this.props.lightMode ? 'https://media.giphy.com/media/3ov9jJuT2pEVMRMas0/giphy.gif' : 'https://media.giphy.com/media/k5GcybwY1yybmGwrFg/giphy.gif'})`,
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
        <div style={this.styles.card}>
          <Card style={{ width: '50%' }}>
            <CardContent style={{ width: '100%' }}>
              <Typography align="center"
                style={{
                  color: 'black', fontSize: 32, fontFamily: 'Raleway', whiteSpace: 'pre-wrap', maxWidth: '90%',
                }}
              >
                {item.title}
              </Typography>
              <Typography align="center"
                color="textSecondary"
                style={{
                  fontSize: 14, fontFamily: 'Raleway', whiteSpace: 'pre-wrap', maxWidth: '90%',
                }}
              >
                {item.period}
              </Typography>
              <Typography align="center"
                color="textSecondary"
                style={{
                  fontSize: 18, fontFamily: 'Raleway', whiteSpace: 'pre-wrap', maxWidth: '90%',
                }}
              >
                {item.subtitle}
              </Typography>
              <Typography align="center"
                style={{
                  color: 'black', fontSize: 14, fontFamily: 'Raleway', whiteSpace: 'pre-wrap', maxWidth: '90%',
                }}
              >
                {item.description}
              </Typography>
            </CardContent>
            <CardActions style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgb(240,240,240)',
            }}
            >
              <div style={{
                display: 'flex',
                flexDirection: 'row',
                width: 600,
                padding: 0,
                margin: 0,
                justifyContent: 'space-around',
                alignItems: 'center',
              }}
              >
                <Fab size="large"
                  color="primary"
                  onClick={() => { this.prev(); }}
                >
                  <ChevronLeftIcon />
                </Fab>
                <Fab size="large"
                  color="primary"
                  onClick={() => { this.next(); }}
                >
                  <ChevronRightIcon />
                </Fab>
              </div>
            </CardActions>
          </Card>
        </div>
      </div>
    );
  }
}

export default Leadership;
