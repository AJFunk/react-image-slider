import React, { Component } from 'react';
import './Slide.css';

class Slide extends Component {
  render() {
    const classes = this.props.active ? 'slide active' : 'slide'
    const {
      imagePath,
      imageAlt,
      title,
      subtitle,
      text,
      actionHref,
      action
    } = this.props;

    return (
      <div className={classes}>
        <img src={imagePath} alt={imageAlt} />
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>{text}</p>
        <a href={actionHref}>{action}</a>
      </div>
    );
  }
}

export default Slide;
