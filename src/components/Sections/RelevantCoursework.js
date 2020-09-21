/* eslint-disable max-len */
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

class RelevantCoursework extends Component {
  listItems = [
    {
      title: 'Computer Science 52: Full-Stack Web Development',
      subtitle: 'Skills developed:',
      period: 'Taken during Spring 2020',
      description: 'This class helped me develop my web development skills. I learned how to build front end applications for the web using vanilla javascript and HTML aswell as javascript frameworks like React. I also learned about mobile and desktop development using technologies like React Native and Electron. Api/Backend development was also part of our sylabus. I learned to create api endpoints aswell as how to create and manage databases. I later went on to be a TA for this class to further develop my Full-Stack skills.',
    },
    {
      title: 'Computer Science 50: Software Design and Implementation',
      subtitle: 'Skills developed:',
      period: 'Taken during Winter 2019',
      description: 'This class helped me develop my software development skills. I learned techniques for building large, reliable, maintainable, and understandable software systems. We primarily coded in C for this class. I also mastered use of version-control systems such Git during this class. A major portion of this class was the group project where each team was supposed to build a maze solving algorithm and a GUI display for our solutions. My group ended up tied with another group for fastest algorithm in the class. I later went on to be a TA for this class to further develop my skills.',
    },
    {
      title: 'Computer Science 74: Machine Learning and Statistical Data Analysis',
      subtitle: 'Skills developed:',
      period: 'Taken during Spring 2020',
      description: 'I learned supervised and unsupervised machine learning, statistical inference and prediction, and data mining in this class. I also learned how to apply these techniques to a wide variety of real world data sets. A wide variety of algorithms were taught in this class, including K-nearest neighbors, naive Bayes, decision trees, support vector machines, logistic regression, K-means, mixtures of Gaussians, principal components analysis.',
    },
    {
      title: 'Computer Science 70.01: Foundations of Applied Computer Science',
      subtitle: 'Skills developed:',
      period: 'Taken during Winter 2019',
      description: 'This class helped me develop my Linear Algebra, Machine Learning, and general programing skills. During this couse, I developed a Matrix Library in C++. My professor wanted us to optimize the functions we wrote for our libraries and taught us many tricks to help us do so.',
    },
    {
      title: 'Computer Science 10: Problem Solving via Object-Oriented Programming',
      subtitle: 'Skills developed:',
      period: 'Taken during Spring 2019',
      description: 'In this course, developed skills in solving computational problems. Topics covered include abstraction (how to hide details), modularity (how to decompose problems), data structures (how to efficiently organize data), and algorithms (procedures for solving problems). Laboratory assignments were implemented using object-oriented programming techniques. This class was taught in Java.',
    },
    {
      title: 'Biology 11: Emerging Infectious Diseases: How Microbes Rule the World',
      subtitle: 'Course Description: ',
      period: 'Taken during Winter 2018',
      description: 'Emerging infectious diseases, which have shaped the course of humanity and caused untold suffering and death, will continue to challenge society as long as humans and microbes co-exist. This course will explore why infectious diseases emerge and re-emerge. The viruses, bacteria and eukaryotes that cause these diseases continually evolve in response to their hosts. Dynamic interactions between rapidly evolving infectious agents and changes in the environment and in host behavior provide such agents with favorable new ecological niches. In addition, dramatic increases in the worldwide movement of people and goods drive the globalization of disease.',
    },
    {
      title: 'Biology 12: Cell Structure and Function',
      subtitle: 'Course Description: ',
      period: 'Taken during Spring 2018',
      description: 'This class provided a foundation in the fundamental mechanisms that govern the structure and function of eukaryotic cells. Topics include membrane transport, energy conversion, signal transduction, protein targeting, cell motility and the cytoskeleton, and the cell cycle. Emphasis will be placed on discussion of the experimental basis for understanding cell function. The laboratory section will provide students with hands-on experience in modern laboratory techniques including microscopy, cell fractionation, and protein purification.',
    },
    {
      title: 'Biology 41: Cells into Organs: Assembly, Function and Disease',
      subtitle: 'Course Description: ',
      period: 'Taken during Fall 2018',
      description: 'How do cells organize into the myriad forms of tissues and work together to perform specific physiological functions? In this course, we will use epithelial tissues as an example to explore these fundamental questions. Epithelia are among the most common types of tissue organization in animals. They line the cavities, ducts and surfaces of all the major organ systems and provide a variety of functions such as secretion, protection and sensing. During development, epithelial tissues also function in morphogenetic processes that guide the formation of body patterns. Defects in epithelial growth control and function play a major role in human diseases such as cystic fibrosis and cancer. The goal of this course is to understand the form, dynamics and function of epithelial tissues, and how dysregulation of epithelia can lead to various human diseases.',
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

export default RelevantCoursework;
