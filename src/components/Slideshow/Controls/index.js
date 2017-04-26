import React, { Component } from 'react';
import './Controls.css';

class Controls extends Component {

  render() {
    return (
      <div className='controls'>
        <button className='btn btn-primary control-btn prev' onClick={this.props.prev}>Prev</button>
        <button className='btn btn-primary control-btn next' onClick={this.props.next}>Next</button>
      </div>
    );
  }
}

export default Controls;
