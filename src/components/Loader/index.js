import React, { Component } from 'react';
import image from './loader.gif'
import './Loader.css';

class Loader extends Component {
  render() {
    return (
      <div className='loader'>
        <img src={image} alt='loading img'/>
      </div>
    );
  }
}

export default Loader;
