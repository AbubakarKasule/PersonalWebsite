import React, { Component } from 'react';
import {
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@material-ui/core';

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
    this.state = {}; // nothing here yet

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

  render() {
    return (
      <div className="This One" style={this.styles.container}>
        <div style={this.styles.card}>
          {this.listItems.map((item) => {
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
                  width: '100%',
                }}
                />
              </Card>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Leadership;
