/* eslint-disable max-len */
import React, { Component } from 'react';
import {
  Card,
  CardActions,
  CardContent,
  Collapse,
  Typography,
  IconButton,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class Projects extends Component {
  listItems = [
    {
      title: 'Project Iminsi',
      subtitle: 'Description:',
      period: 'Developed during Spring 2020 (Possible Expansions coming)',
      description: 'Project Iminsi was an Afro-centric news app developed using React Native. Africa has a chronic media problem. It is very difficult to know what is happening in other countries in Africa without relying on western news coverage. Iminsi is the first all-African news app. The app uses the power of crowdsourcing to deliver a platform of reliable, local African news. It was developed by myself and 5 other students as our final project for CS52. \n\nHere are some links related to this project: ',
      links: [
        {
          url: 'https://github.com/AbubakarKasule/project-iminsi',
          name: 'Front-end repo',
        },
      ],
    },
    {
      title: 'My Matrix Library',
      subtitle: 'Description:',
      period: 'Developed during Winter 2020',
      description: 'I developed this library in C++. The matrix class stored the dimensions of the matrix as ints and the data contained within the matrix as a vector. I created member class functions to handle all the needed operations such as matrix-matrix multiplication, matrix-scalar multiplication, and matrix-transpose. \n\nHere are some links related to this project: ',
      links: [
        {
          url: 'https://github.com/AbubakarKasule/My-Matrix-Library',
          name: 'Project repo',
        },
      ],
    },
    {
      title: 'The Blue Blog',
      subtitle: 'Description:',
      period: 'Developed during Spring 2020',
      description: 'Blog Website with user authentication developed using React Js. I developed the frontend and backend of this project. \n\nHere are some links related to this project: ',
      links: [
        {
          url: 'https://github.com/AbubakarKasule/lab4-platform-client-AbubakarKasule',
          name: 'Front-end repo',
        },
        {
          url: 'https://github.com/AbubakarKasule/lab5-platform-api-AbubakarKasule',
          name: 'Back-end repo',
        },
        {
          url: 'http://abubakarkasule-cs52-lab4_blog.surge.sh/',
          name: 'Deployed site',
        },
      ],
    },
    {
      title: 'Ongoing research for the Sustainable Health Lab',
      subtitle: 'Description:',
      period: 'Developed during Summer 2020 (Ongoing)',
      description: 'I am developing a server that extracts a patient/user\'s medicare data from the Center for Medicare and Medicaid Services (CMS) Medicare claims data using the Blue Button 2.0 API and organizes the data into an internal database. I had to develop a data pipeline to process the data recieved from the Blubutton API into the correct shape for our internal database. \n\nHere are some links related to this project: ',
      links: [
        {
          url: '#',
          name: 'N/A',
        },
      ],
    },
    {
      title: 'Maze solver',
      subtitle: 'Description:',
      period: 'Developed during Winter 2020',
      description: 'Me and my team built a maze solving algorithm and GUI display for our solutions. Our algorithm used several heuristics, primarily the right hand rule, to solve the maze. My group ended up tied with another group for fastest algorithm in the class. \n\nHere are some links related to this project: ',
      links: [
        {
          url: 'https://github.com/AbubakarKasule/Maze-Solver',
          name: 'Project repo',
        },
      ],
    },
    {
      title: 'Mini Search Engine with a Crawler, Indexer and Querier',
      subtitle: 'Description:',
      period: 'Developed during Winter 2020',
      description: '\n\nHere are some links related to this project: ',
      links: [
        {
          url: '#',
          name: 'N/A',
        },
      ],
    },
    {
      title: 'This Website',
      subtitle: 'Description:',
      period: 'Developed during Summer 2020',
      description: 'Made a personal website using react. \n\nHere are some links related to this project: ',
      links: [
        {
          url: '#',
          name: 'N/A',
        },
      ],
    },
  ];

  constructor(props) {
    super(props);
    this.expanded = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < this.listItems.length; i++) {
      this.expanded.push(false);
    }

    this.state = { exp: this.expanded }; // nothing here yet

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

  handleExpandClick = (i) => {
    const temp = [...this.state.exp];
    temp[i] = temp[i] !== true;
    this.setState((prevState) => {
      return ({ exp: temp });
    });
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
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'rgb(240,240,240)',
                  width: '100%',
                }}
                >
                  <IconButton
                    onClick={() => { this.handleExpandClick(index); }}
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                </CardActions>
                <Collapse in={this.state.exp[index]} timeout="auto" unmountOnExit style={{ width: '100%' }}>
                  <CardContent style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'rgb(240,240,240)',
                    width: '100%',
                  }}
                  >
                    <div style={{
                      display: 'flex', width: '100%', flexDirection: 'column', alignItems: 'center',
                    }}
                    >
                      {item.links.map((link) => { return (<a href={link.url} className="project-links">{link.name}</a>); })}
                    </div>
                  </CardContent>
                </Collapse>
              </Card>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Projects;
