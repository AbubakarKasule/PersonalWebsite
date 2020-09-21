import React, { Component } from 'react';
import {
  Typography,
} from '@material-ui/core';
// import coverPhoto from '../../img/cardCover.png';

/*
style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: '2px',
        margin: 30,
        width: 600,
        height: 450,
        backgroundColor: '#F3F7F5',
        backgroundImage: `url(${coverPhoto})`,
      }}
*/
class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {}; // nothing here yet
  }

  render() {
    return (
      <div style={this.props.styl}>
        <Typography align="left"
          style={{
            color: 'black', fontSize: 32, fontFamily: 'Raleway', padding: 5, width: '90%', whiteSpace: 'pre',
          }}
        >
          {this.props.item.title}
        </Typography>
        <Typography align="center"
          color="textSecondary"
          style={{
            fontSize: 14, fontFamily: 'Raleway', padding: 5, whiteSpace: 'pre',
          }}
        >
          {this.props.item.period}
        </Typography>
        <Typography align="center"
          color="textSecondary"
          style={{
            fontSize: 18, fontFamily: 'Raleway', padding: 5, whiteSpace: 'pre',
          }}
        >
          {this.props.item.subtitle}
        </Typography>
        <Typography align="center"
          style={{
            color: 'black', fontSize: 14, fontFamily: 'Raleway', whiteSpace: 'pre', width: '90%',
          }}
        >
          {this.props.item.description}
        </Typography>
      </div>
    );
  }
}

export default ListItem;
