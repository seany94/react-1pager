import React, { Component } from 'react';
import '../App.css';

class Body extends Component {
  render() {
    return (
      <div>
        <div className="body_title">Find your dream University !</div>
        <div className="body_button_container">
            <button className="body_button"><img src={require('../images/vector.png')} alt=""/><span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>Country</button>
            -
            <button className="body_button"><img src={require('../images/vector1.png')} alt=""/><span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>Level of Study</button>
            -
            <button className="body_button"><img src={require('../images/vector2.png')} alt=""/><span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>Programme</button>
            -
            <button className="body_button"><img src={require('../images/vector3.png')} alt=""/><span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>Duration</button>
            <button className="body_button_red">Find Now</button>
        </div>
        <hr className="line"/>
        <div className="countries_container">
            <div className="arrow_container1">
                <img src={require('../images/vector5.png')} alt=""/>
            </div>
            <div className="country_site">
                <img src="https://images.unsplash.com/photo-1500380804539-4e1e8c1e7118?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80" alt=""/>
                <div className="flag1">
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1280px-Flag_of_the_United_Kingdom.svg.png" alt=""/>
                    <br/>
                    United Kingdom
                </div>
            </div>
            <div className="country_site">
                <img src="https://images.unsplash.com/photo-1518235506717-e1ed3306a89b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt=""/>
                <div className="flag2">
                    <img src="https://cdn-images-1.medium.com/max/1235/0*o0-6o1W1DKmI5LbX.png" alt=""/>
                    <br/>
                    USA
                </div>
            </div>
            <div className="country_site">
                <img src="https://4.bp.blogspot.com/-FVBKqldnD5E/V_DsmYXZwYI/AAAAAAAA9bI/XH0wbWJs-78KpZhXmZiSeHEbs5VzsfyhgCPcB/s1600/%25E0%25B8%25A3%25E0%25B8%25B5%25E0%25B8%25A7%25E0%25B8%25B4%25E0%25B8%25A7%25E0%25B8%259E%25E0%25B8%25B2%25E0%25B9%2580%25E0%25B8%2597%25E0%25B8%25B5%25E0%25B9%2588%25E0%25B8%25A2%25E0%25B8%25A7%25E0%25B9%2580%25E0%25B8%25A1%25E0%25B8%25B7%25E0%25B8%25AD%25E0%25B8%2587%2BZermatt%2B19.jpg" alt=""/>
                <div className="flag3">
                    <img src="http://pngriver.com/wp-content/uploads/2018/04/Download-Switzerland-Flag-PNG.png" alt=""/>
                    <br/>
                    Switzerland
                </div>
            </div>
            <div className="country_site">
                <img src="https://www.yp.sg/wp-content/uploads/2018/11/fancycrave-225468-unsplash.jpg" alt=""/>
                <div className="flag4">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Singapore.svg" alt=""/>
                    <br/>
                    Singapore
                </div>
            </div>
            <div className="arrow_container2">
                <img src={require('../images/vector4.png')} alt=""/>
            </div>
        </div>
        <div className="services_container">
            <div className="services">
                Our Services
                <div className="service_container">
                    <div className="service">
                        <img src={require('../images/counselling.png')} alt=""/>
                        <br/>
                        Counselling
                    </div>
                    <div className="service">
                        <img src={require('../images/union.png')} alt=""/>
                        <br/>
                        Application assitance
                    </div>
                    <div className="service">
                        <img src={require('../images/visa.png')} alt=""/>
                        <br/>
                        Visa application
                    </div>
                    <div className="service">
                        <img src={require('../images/home.png')} alt=""/>
                        <br/>
                        Homestay accomodation
                    </div>
                    <div className="service_more">
                        <a href="#">See more service ></a>
                    </div>
                </div>
            </div>
        </div>
        <div className="application">
            Application Process
            <div className="process">
                <img src={require('../images/application.png')} alt=""/>
            </div>
            <div className="process_container">
                <div className="process1">
                    <div className="process_title">
                        Contact Access Education
                    </div>
                    <div className="process_desc">
                        You can contact us over email, over the phone, or visit us in one of our offices.
                    </div>
                </div>
                <div className="process2">
                    <div className="process_title">
                        Speak to a Consultant
                    </div>
                    <div className="process_desc">
                        You will be assigned your own education consultant and can talk to them about your situation and what you are looking for.
                    </div>
                </div>
                <div className="process3">
                    <div className="process_title">
                        Consultant suggests University
                    </div>
                    <div className="process_desc">
                        After a conversation, your consultant will consider your situation and suggest the best option for you.
                    </div>
                </div>
                <div className="process4">
                    <div className="process_title">
                        Access Education submits application
                    </div>
                    <div className="process_desc">
                        Once you have sent us all your documents, we will make an application for you!
                    </div>
                </div>
                <div className="process5">
                    <div className="process_title">
                        Receive Offer
                    </div>
                </div>
            </div>
        </div>
        <div className="testimonial_container">
            <div className="testimonial">
                <div className="testimonial_header">Testimonials</div>
                <div className="testimonial_content">
                    <div className="arrow_container1">
                        <img src={require('../images/vector5.png')} alt=""/>
                    </div>
                    <img src={require('../images/group.png')} alt=""/>
                    <div className="testimonial_content_container">
                        <div className="testimonial_title">
                            Sharon Lin - UC Berkeley
                        </div>
                        <div className="testimonial_desc">
                            Nama saya Sharon Lin, lulusan dari Ipeka International tahun 2015. Saat lulus SMA rencananya saya mau daftar Community College supaya bisa transfer ke UC Berkeley. Saat mau daftar ke De Anza & Foothill Colllege, saya dibantu Meggy dari Access Education sehingga proses masuk ke Community College dari SMA jadi mudah dan lancar. Meggy sangat helpful dalam menjawab pertanyaan-pertanyaan saya dan juga mempermudahkan proses pendaftaran ke Community College. Setelah belajar 2 tahun di De Anza College, saya berhasil transfer ke Universitas impian saya UC Berkeley.
                        </div>
                    </div>
                    <div className="arrow_container2">
                        <img src={require('../images/vector4.png')} alt=""/>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Body;