import React, { Component } from 'react';
import '../App.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer_container">
        <div className="footer_content">
            <img src={require('../images/vectormap.png')} alt=""/>
            <div className="footer_text">Daftar universitas terkemuka di luar negeri untuk penerimaan 2019
                <br/>
                <button className="footer_button">REGISTER NOW</button>
            </div>
        </div>
        <div className="footer_end"></div>
      </div>
    );
  }
}

export default Footer;