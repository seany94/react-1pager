import React, { Component } from 'react';
import '../App.css';

class Nav extends Component {
  render() {
    return (
      <div className="nav_container">
        <img src="http://accesseducation.co.id/wp-content/uploads/2018/12/NEW-ACCESS-Logo-FA-01-opt.png" className="logo" alt=""/>
        <ul>
          <li><a className="active" href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Countries</a></li>
          <li><a href="#">Service</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><img src="https://cdn.shopify.com/s/files/1/0707/3783/products/indonesia-flag_grande.jpg?v=1418057756"></img><img src="http://dvgrabgui.sourceforge.net/en/pict/drapeau_en.png"></img></li>
        </ul>
      </div>
    );
  }
}

export default Nav;