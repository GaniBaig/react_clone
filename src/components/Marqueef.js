import React from "react";
import logo1 from  "./Pictures/logo1.svg";
import logo2 from  "./Pictures/logo2.svg";
import logo4 from  "./Pictures/logo4.svg";
import logo5 from  "./Pictures/logo5.jpg";
import logo6 from  "./Pictures/logo6.png";
import logo7 from  "./Pictures/logo7.webp";
import logo8 from  "./Pictures/logo8.png";
import logo9 from  "./Pictures/logo9.svg";
import "./Marqueef.css";
import Navbar from "./Navbar";
export default function Marqueef() {
    return(
       <div>
            <h1 className='parares'>Our customers <span className='paras'>love </span>us </h1>
       
            <div ref={Navbar.myRef} className="marquee-container">

            <div className="marquee-container2">
            <img className="marquee-img" src={logo1}></img>
            </div>
            <div className="marquee-container2">
            <img className="marquee-img" src={logo2}></img>
            </div>
            <div className="marquee-container2">
            <img className="marquee-img" src={logo4}></img>
            </div>
            <div className="marquee-container2">
            <img className="marquee-img" src={logo5}></img>
            </div>
            <div className="marquee-container2">
            <img className="marquee-img" src={logo6}></img>
            </div>
            <div className="marquee-container2">
            <img className="marquee-img" src={logo7}></img>
            </div>
            <div className="marquee-container2">
            <img className="marquee-img" src={logo8}></img>
            </div>
            <div className="marquee-container2">
            <img className="marquee-img" src={logo9}></img>
            </div>
            <div className="marquee-container2">
            <img className="marquee-img" src={logo2}></img>
            </div>
            <div className="marquee-container2">
            <img className="marquee-img" src={logo4}></img>
            </div>
            <div className="marquee-container2">
            <img className="marquee-img" src={logo1}></img>
            </div>
            <div className="marquee-container2">
            <img className="marquee-img" src={logo5}></img>
            </div>
            <div className="marquee-container2">
            <img className="marquee-img" src={logo6}></img>
            </div>
            <div className="marquee-container2">
            <img className="marquee-img" src={logo7}></img>
            </div>
            <div className="marquee-container2">
            <img className="marquee-img" src={logo8}></img>
            </div>
            <div className="marquee-container2">
            <img className="marquee-img" src={logo9}></img>
            </div>
            
            </div>
   
            <h1 className='parares'>Testimonials</h1>
        </div>
    );
}









