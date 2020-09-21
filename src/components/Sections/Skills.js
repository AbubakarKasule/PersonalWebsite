/* eslint-disable max-len */
import React, { Component } from 'react';
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@material-ui/core';
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
      url: 'https://www.sketchappsources.com/resources/source-image/python-logo.png',
      rating: 4,
    },
    {
      title: 'Javascript',
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/768px-Unofficial_JavaScript_logo_2.svg.png',
      rating: 4,
    },
    {
      title: 'HTML',
      url: 'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_640.png',
      rating: 4,
    },
    {
      title: 'React Native',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQEQKr7IIHX50osjX-livC8V58s-zMt2ZWglQ&usqp=CAU',
      rating: 4,
    },
    {
      title: 'C',
      url: 'https://cdn.iconscout.com/icon/free/png-512/c-programming-569564.png',
      rating: 3,
    },
    {
      title: 'CSS',
      url: 'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png',
      rating: 3,
    },
    {
      title: 'C++',
      url: 'https://i.pinimg.com/originals/99/f8/87/99f887833c475448723d3c9ac16c179b.png',
      rating: 2,
    },
    {
      title: 'Java',
      url: 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg',
      rating: 3,
    },
  ];

  constructor(props) {
    super(props);
    this.state = { }; // nothing here yet

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
          top: 50,
          justifyContent: 'center',
          alignItems: 'center',
        },
      };
    }
  }

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
    return (
      <div className="This One" style={this.styles.container}>
        <div style={this.styles.card}>
          {this.listItems.map((item, index) => {
            return (
              <Card key={item.title}
                style={{
                  width: '50%', marginBottom: 20, display: 'flex', flexDirection: 'column', alignItems: 'center',
                }}
              >
                <CardContent style={{
                  width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center',
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
                    Comfort Level
                  </Typography>
                </CardContent>
                <CardActions style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'rgb(240,240,240)',
                  width: '100%',
                }}
                >
                  <div style={{
                    display: 'flex', width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
                  }}
                  >
                    {this.renderRating(item.rating).map((emoji) => { return emoji; })}
                  </div>
                </CardActions>
              </Card>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Skills;
