/* eslint-disable max-len */
import React, { Component } from 'react';
import {
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@material-ui/core';

class WorkHistory extends Component {
  listItems = [
    {
      title: 'Teaching Assistant: \nSoftware Design and Development',
      subtitle: 'Dartmouth College: Computer Science Department \nHanover – NH',
      period: '(March 2020 - June 2020)',
      description: '• Lead weakly review sessions to help students with assignments \n• Teaching Assistants are also responsible for grading assignments',
    },
    {
      title: 'Teaching Assistant: \nFull-Stack Web Development',
      subtitle: 'Dartmouth College: Computer Science Department \nHanover – NH',
      period: '(June 2020 - August 2020)',
      description: '• Lead weakly review sessions to help students with assignments \n• Teaching Assistants are also responsible for grading assignments',
    },
    {
      title: 'Research Assistant',
      subtitle: 'Dartmouth College: Sustainable Health Lab \nHanover – NH',
      period: '(Summer 2020)',
      description: '• Developed a program to extract Center for Medicare and Medicaid Services (CMS) Medicare claims data using the Blue Button 2.0 API and organized the data into an internal database. \n• This program is intended to lay the groundwork for a web application to allow patients to access their Medicare claims data and use it to enhance clinical decision-making during a healthcare visit.',
    },
    {
      title: 'Student Operations Technician',
      subtitle: 'Dartmouth College: Classroom Technology Services \nHanover – NH',
      period: '(June 2019 - January 2020)',
      description: '• Ensure all classroom audio and visual equipment are fully functional every morning. Troubleshoots classroom equipment if it fails during academic hours. \n• Authored training articles for other technicians to properly service technology used inside Dartmouth classrooms and other Student Operations Technician duties, such as Audio setups, Crestron UIs, Audio Signal flow, and event management. \n• My articles are going to be used as a part of Classroom Technology Services’ new student-worker training program.',
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
                <CardContent CardContent
                  style={{
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

export default WorkHistory;
