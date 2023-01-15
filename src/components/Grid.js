import React from 'react';
import "./Grid.css";
import img1 from "./Pictures/cardimage.svg";
import img2 from "./Pictures/cardimg1.svg";
import img3 from "./Pictures/cardimg2.svg";
import img4 from "./Pictures/cardimg3.svg";
import img5 from "./Pictures/cardimg4.svg";
import img6 from "./Pictures/cardimg5.svg";
import img7 from "./Pictures/cardimg6.svg";
function Grid(props) {
    return (
        <div>
            <div className="container">
                <div className="card1">
                    <div className='para3-2'>
                        <h1 className='para3h1'>Grow your brand with the <span className="para3s">largest</span> same day delivery platform</h1>
                        <div className='btndiv'><button className='btn3'>Get Started</button></div>
                            <img className="imgcard" src={img1}></img>
                    </div>
                </div>
                <div className="card2">
                    <div className="subcard2">
                        <div className="child2">
                            <img className="imgcard2" src={img2}></img>
                            <h2 className="childh2">One stop shop</h2>
                            <p className="parachild">One dashboard bundled with OMS, WMS and TMS for simplifying order-to-cash journey and <span className="childspan">it’s free forever</span></p>
                        </div>
                        <div className="child2">
                            <img className="imgcard2" src={img3}></img>
                            <h2 className="childh2">Pay per use</h2>
                            <p className="parachild">You only pay for the orders we deliver, no hidden charges, no storage costs</p>
                        </div>
                    </div>
                    <div className="subcard2">
                        <div className="child2">
                            <img className="imgcard2" src={img4}></img>
                            <h2 className="childh2">Easy integration</h2>
                            <p className="parachild">Ready channel integrations and developer friendly APIs to get started <span className="childspan">in less than 48 hours</span></p>
                        </div>
                        <div className="child2">
                            <img className="imgcard2" src={img5}></img>
                            <h2 className="childh2">Reliability at any scale</h2>
                            <p className="parachild">We do 250K+ deliveries everyday, 100% of them within 24 hours across 100+ cities. Take your brand <span className="childspan">to newer geographies </span>on our same day network</p>
                        </div>
                    </div>
                    <div className="subcard2">
                        <div className="child2">
                            <img className="imgcard2" src={img6}></img>
                            <h2 className="childh2">Solution oriented</h2>
                            <p className="parachild">We understand every brand operates supply chain differently, so we consult and do a solution design <span className="childspan">the spiky demand</span></p>
                        </div>
                        <div className="child2">
                            <img className="imgcard2" src={img7}></img>
                            <h2 className="childh2">Manage unpredictability</h2>
                            <p className="parachild">With campaigns, live-commerce and festivity sales that you define, we manage <span className="childspan">it’s free forever</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Grid;