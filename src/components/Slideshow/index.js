import React, { Component } from 'react';
import axios from 'axios'
import './Slideshow.css';
import Slides from './Slides'
import Controls from './Controls'
import Loader from '../Loader'
import Pagination from './Pagination'

class Slideshow extends Component {

  constructor() {
    super()
    const images = [];

    this.state = {
      currentSlide: 0,
      images,
      page: 1,
      loading: false,
      clicked: false
    }

    this.next = this.next.bind(this)
    this.prev = this.prev.bind(this)
    this.fetchImages = this.fetchImages.bind(this)
    this.renderLoader = this.renderLoader.bind(this)
    this.timer = this.timer.bind(this)
    this.goTo = this.goTo.bind(this)
  }

  componentDidMount() {
    this.fetchImages()
    this.timer()
  }

  fetchImages(next) {
    this.setState({
      loading: true
    })
    return axios
      .get('https://api.unsplash.com/photos', {
        params: {
          page: this.state.page,
          client_id: '6bb5bb78cfde81736048d37f2d3399d5024a6a5be277ad88a4b1a366a5e4f77f'
        }
      })
      .then(data => {
        console.log("DATA", data.data);
        this.setState({
          images: this.state.images.concat(data.data),
          page: this.state.page + 1,
          loading: false
        }, () => {
          if(next) this.setState({
            currentSlide: this.state.currentSlide + 1
          })
        })
      })
      .catch(err => {
        // need to handle error
        this.setState({
          loading: false
        })
        alert('Something went wrong');
        console.log(err);
      })
  }

  timer() {
    setInterval(() => {
      if(this.state.clicked) {
        this.setState({
          clicked: false
        })
      } else {
        this.next()
      }
    }, 10000)
  }

  next() {
    const next = this.state.currentSlide + 1;
    if (next > this.state.images.length - 1) {
      this.fetchImages(true)
    } else {
      this.setState({
        currentSlide: next,
        clicked: true
      })
    }
  }

  prev() {
    let prev = this.state.currentSlide - 1;
    if (prev < 0) prev = this.state.images.length - 1;
    this.setState({
      currentSlide: prev,
      clicked: true
    })
  }

  goTo(i) {
    console.log(i);
  }

  renderLoader() {
    if(this.state.loading) return <Loader />
    return;
  }

  render() {
    const { images, currentSlide } = this.state;
    return (
      <div className='slideshow'>
        {this.renderLoader()}
        <Slides images={images} currentSlide={currentSlide+1}/>
        <Controls prev={this.prev} next={this.next}/>
        <Pagination currentSlide={currentSlide+1} goTo={this.goTo}/>
      </div>
    );
  }
}

export default Slideshow;
