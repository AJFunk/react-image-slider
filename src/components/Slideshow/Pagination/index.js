import React, { Component } from 'react';
import './Pagination.css';

class Pagination extends Component {

  constructor() {
    super()
    this.renderNumbers = this.renderNumbers.bind(this)
  }

  renderNumbers() {
    const currentSlide = this.props.currentSlide;
    let nums = [];
    let el = '';
    for (let i = currentSlide; i < currentSlide + 9; i++) {
      nums.push(i)
    }
    return nums.map((e,i) =>
      <div key={i} className='num' onClick={this.props.goTo.bind(this, e)}>{e}</div>
    )
  }

  render() {
    return (
      <div className='pagination'>
        <p>Current slide = {this.props.currentSlide}</p>
        {this.renderNumbers()}
      </div>
    );
  }
}

export default Pagination;
