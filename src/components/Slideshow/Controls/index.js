import React, { Component } from 'react';
import './Controls.css';

class Controls extends Component {

  render() {
    return (
      <div className="controls">
        <div className="toggle prev" onClick={this.props.prev}>Prev</div>
        <div className="toggle next" onClick={this.props.next}>Next</div>
      </div>
    );
  }
}

export default Controls;
