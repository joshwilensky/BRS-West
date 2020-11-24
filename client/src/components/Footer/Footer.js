import React, { Component } from "react";
import { SocialIcon } from 'react-social-icons';
import './Footer.css'

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-lg-3 mr-auto my-md-4 my-0 mt-4 mb-1">
                            <h5 className="content">Footer Content</h5>
                            <p>Here you can use rows and columns to organize your footer content.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit amet numquam iure provident voluptate
                            esse quasi, veritatis totam voluptas nostrum.</p>
                        </div>
                        <hr className="clearfix w-100 d-md-none"></hr>
                        <div className="col-md-2 col-lg-2 mx-auto my-md-4 my-0 mt-4 mb-1">
                            <h5 className="content">About</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <p>
                                        <a href="#!">PROJECTS</a>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <a href="#!">ABOUT US</a>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <a href="#!">BLOG</a>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <a href="#!">AWARDS</a>
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <hr className="clearfix w-100 d-md-none"></hr>
                        <div class="col-md-4 col-lg-3 mx-auto my-md-4 my-0 mt-4 mb-1">
                            <h5 class="content">Address</h5>

                            <ul class="list-unstyled">
                                <li>
                                    <p>
                                        <i class="fas fa-home"></i>21011 95th Ave. South Boca Raton, FL 33428</p>
                                </li>
                                <li>
                                    <p>
                                        <i class="fas fa-envelope"></i>rrb@brsonline.org</p>
                                </li>
                                <li>
                                    <p>
                                        <i class="fas fa-phone"></i>C: (561) 909-0234</p>
                                </li>
                                <li>
                                    <p>
                                        <i class="fas fa-print"></i>O: (561) 394-0394</p>
                                </li>
                            </ul>
                        </div>
                        <hr className="clearfix w-100 d-md-none"></hr>
                        <div class="col-md-2 col-lg-2 text-center mx-auto my-4" >
                            <h5 class="content">Follow Us</h5>
                            <p>
                                <SocialIcon url="http://facebook.com/in/brswest" bgColor="#3b5998" id="social" />
                            </p>
                            <p>
                                <SocialIcon url="http://twitter.com/in/brswest" id="social" />
                            </p>
                            <p>
                                <SocialIcon url="http://instagram.com/in/brswest" bgColor="#c13584" id="social" />
                            </p>







                        </div>
                    </div>
                </div>
                <div class="footer-copyright text-center py-3">© 2020 Copyright: <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
                </div>
            </div >



        );
    }
}

export default Footer;