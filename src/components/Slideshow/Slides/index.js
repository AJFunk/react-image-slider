import React, { Component } from 'react';
import './Slides.css';
import Slide from '../Slide'


class Slides extends Component {
  render() {
    console.log('SLIDES', this.props);
    const slides = this.props.images.map((e, index) => {
      const active = this.props.currentSlide === index;
      return (
        <Slide active={active} key={e.id} imagePath={e.imagePath} imageAlt={e.imageAlt} title={e.title} subtitle={e.subtitle} text={e.text} action={e.action} actionHref={e.actionHref} />
      );
    });

    return (
      <div className="slides">
        {slides}
      </div>
    );
  }
}

export default Slides;
