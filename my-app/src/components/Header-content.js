import React, { Component } from 'react';
import '../App.css';

class Content extends Component {
  render() {
    return (
      <div className="header_container">
        <div className="content_container">
            <div className="content_title">Lorem Ipsum</div>
            <div className="content_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis quas autem praesentium consequatur dolore beatae voluptatem nostrum aspernatur numquam qui rem illum, dolorum dicta commodi voluptas ullam voluptates ipsa ex!</div>
            <button className="content_button">Deftar Sekarang</button>
        </div>
        <div className="wa"></div>
      </div>
    );
  }
}

export default Content;