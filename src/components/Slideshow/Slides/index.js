import React, { Component } from 'react';
import './Slides.css';
import Slide from '../Slide'


class Slides extends Component {
  render() {
    console.log('SLIDES', this.props);
    const slides = this.props.images.map((e, index) => {
      const active = this.props.currentSlide === index;
      return (
        <Slide active={active} key={e.id} url={e.urls.regular} />
      );
    });

    return (
      <div className="slides">
        <h6>Image #{this.props.currentSlide+1}</h6>
        {slides}
      </div>
    );
  }
}

export default Slides;
