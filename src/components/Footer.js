import React from 'react';
import "./Footer.css"
import img from "./Pictures/blowhorn.png"
import { IoLogoTwitter,
    IoLogoYoutube,
    IoLogoInstagram,
    IoLogoFacebook,
    IoLogoLinkedin } from "react-icons/io5";

function Footer(props) {
    return (
        <div className='footer-header'>
            <div className="footer">
                <div className="footer-grid">
                    <div className="rows-footer-grid">
                        <ul className="footer-ul">
                            <li><img src={img} className="footerimg"></img></li>
                            <li>Same day delivery for your brand</li>
                            <li>Write to us</li>
                            <li><a href="#">shoutout@blowhorn.com</a></li>
                            <li><a href="#">080 45683500</a></li>
                            <li>Follow us</li>
                            <li className='imgicons'>
                                <span><IoLogoTwitter/></span>
                                <span>< IoLogoYoutube/></span>
                                <span><IoLogoInstagram/></span>
                                <span><IoLogoFacebook/></span>
                                <span><IoLogoLinkedin/></span></li>
                        </ul>

                    </div>
                    <div className="rows-footer-grid">
                    <ul className="footer-ul">
                            <li>  Our Solutions</li>
                            <li><a href="#">Integrated Fulfilment</a></li>
                            <li><a href="#">Hyperlocal</a></li>
                            <li><a href="#">Transportation</a></li>
                        </ul> 
                    </div>
                    <div className="rows-footer-grid">
                    <ul className="footer-ul">
                            <li>Company</li>
                            <li><a href="#">Our Story</a></li>
                            <li><a href="#">Press</a></li>
                            <li><a href="#">People & Values</a></li>
                            <li><a href="#">Join Us</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="rows-footer-grid">
                    <ul className="footer-ul">
                            <li> Resources</li>
                            <li><a href="#">FAQs</a></li>
                            <li><a href="#">Get the Blowhorn App</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">System Status</a></li>
                        </ul>
                    </div>
                </div>
                <hr></hr>
                <div className="small-footer">
                    <p>Copyright 2023 © Blowhorn. All rights reserved.</p>
                    <p><span>Terms of Use</span>
                    <span>Privacy Policy</span></p>
                </div>
            </div>
        </div>
    );
}

export default Footer;