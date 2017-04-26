import React, { Component } from 'react';
import './Slideshow.css';
import Slides from './Slides'
import Controls from './Controls'

class Slideshow extends Component {

  constructor() {
    super()
    const images = [
      {
        id         : "slide1",
        imagePath  : "https://images.unsplash.com/photo-1474470172489-c75ce5cbf836?dpr=1&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=&bg=",
        imageAlt   : "Slide 1 Image",
        title      : "Slide 1",
        subtitle   : "Slide 1 Image SubTitle",
        text       : "Slide 1 Image Text",
        action     : "Slide 1 Image Action",
        actionHref : "href"
      },
      {
        id         : "slide2",
        imagePath  : "https://images.unsplash.com/photo-1474470172489-c75ce5cbf836?dpr=1&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=&bg=",
        imageAlt   : "Slide 2 Image",
        title      : "Slide 2",
        subtitle   : "Slide 2 Image SubTitle",
        text       : "Slide 2 Image Text",
        action     : "Slide 2 Image Action",
        actionHref : "href"
      },
      {
        id         : "slide3",
        imagePath  : "https://images.unsplash.com/photo-1474470172489-c75ce5cbf836?dpr=1&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=&bg=",
        imageAlt   : "Slide 3 Image",
        title      : "Slide 3",
        subtitle   : "Slide 3 Image SubTitle",
        text       : "Slide 3 Image Text",
        action     : "Slide 3 Image Action",
        actionHref : "href"
      },
    ];

    this.state = {
      currentSlide: 0,
      images
    }

    this.next = this.next.bind(this)
    this.prev = this.prev.bind(this)
  }

  next() {
    console.log("next");
    const current = this.state.currentSlide;
    let next = current + 1;
    if (next > this.state.images.length - 1) {
      next = 0;
    }
    this.setState({
      currentSlide: next
    })
  }

  prev() {
    console.log("prev");
    const current = this.state.currentSlide;
    let prev = current - 1;
    if (prev < 0) prev = this.state.images.length - 1;
    this.setState({
      currentSlide: prev
    })
  }

  // toggleSlide(id) {
  //   console.log("toggleSlide");
  //   let index = state.images.map(e => el.id);
  //   let currentIndex = index.indexOf(id);
  //   state.currentSlide = currentIndex;
  //   render(state);
  // }

  render() {
    console.log(this.state);
    return (
      <div className='slideshow'>
        <h1>Slideshow</h1>
        <Slides images={this.state.images} currentSlide={this.state.currentSlide}/>
        <Controls prev={this.prev} next={this.next}/>
      </div>
    );
  }
}

export default Slideshow;
