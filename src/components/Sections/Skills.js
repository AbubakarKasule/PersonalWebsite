/* eslint-disable max-len */
import React, { Component } from 'react';
import {
  Avatar,
  Fab,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
// import ListItem from './ListItem';

class Skills extends Component {
  listItems = [
    {
      title: 'React',
      url: 'https://miro.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png',
      rating: 4,
    },
    {
      title: 'Bash',
      url: 'https://tecadmin.net/tutorial/wp-content/uploads/2017/09/bash-logo.jpg',
      rating: 4,
    },
    {
      title: 'Python',
      url: 'https://www.domoticall.com/wp-content/uploads/2017/05/python-logo.png',
      rating: 4,
    },
    {
      title: 'Javascript',
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/768px-Unofficial_JavaScript_logo_2.svg.png',
      rating: 4,
    },
    {
      title: 'HTML',
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png',
      rating: 4,
    },
    {
      title: 'React Native',
      url: 'https://www.manhattanmobile.com/wp-content/uploads/2018/08/react-native-workshop.jpg',
      rating: 4,
    },
    {
      title: 'C',
      url: 'https://www.pngkit.com/png/detail/101-1010012_c-programming-icon-c-programming-language-logo.png',
      rating: 3,
    },
    {
      title: 'CSS',
      url: 'https://cdn.worldvectorlogo.com/logos/css3.svg',
      rating: 3,
    },
    {
      title: 'C++',
      url: 'https://i.pinimg.com/originals/99/f8/87/99f887833c475448723d3c9ac16c179b.png',
      rating: 2,
    },
    {
      title: 'Java',
      url: 'https://www.pngkit.com/png/detail/101-1010012_c-programming-icon-c-programming-language-logo.png',
      rating: 3,
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

  renderRating = (rating) => {
    const temp = [];
    let i;
    for (i = 0; i < 5; i += 1) {
      if (i < rating) {
        temp.push(<StarIcon fontSize="large" className="emoji" />);
      } else {
        temp.push(<StarBorderIcon fontSize="large" className="emoji" />);
      }
    }

    return temp;
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
          <Card style={{
            width: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center',
          }}
          >
            <CardContent style={{
              display: 'flex', width: '100%', flexDirection: 'column', alignItems: 'center', justifyItems: 'center',
            }}
            >
              <Typography align="center"
                style={{
                  color: 'black', fontSize: 32, fontFamily: 'Raleway', whiteSpace: 'pre-wrap', maxWidth: '90%',
                }}
              >
                {item.title}
              </Typography>
              <Avatar style={{
                width: 300,
                height: 300,
              }}
                alt="logo"
                src={item.url}
              />
              <Typography align="center"
                color="textSecondary"
                style={{
                  fontSize: 18, fontFamily: 'Raleway', whiteSpace: 'pre-wrap', maxWidth: '90%',
                }}
              >
                Proficiency
              </Typography>
              <div style={{
                display: 'flex', width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
              }}
              >
                {this.renderRating(item.rating).map((emoji) => { return emoji; })}
              </div>
            </CardContent>
            <CardActions style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgb(240,240,240)',
              width: '100%',
            }}
            >
              <div style={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
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

export default Skills;
