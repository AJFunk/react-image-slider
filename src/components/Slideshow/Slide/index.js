import React, { Component } from 'react';
import './Slide.css';

class Slide extends Component {
  render() {
    const classes = this.props.active ? 'slide active animated fadeIn' : 'slide'
    const {
      url
    } = this.props;

    return (
      <div className={classes}>
        <img src={url} alt='placeholder'/>
      </div>
    );
  }
}

export default Slide;
