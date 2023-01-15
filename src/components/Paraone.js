import React from 'react';
import './Paraone.css';
import pic from "./Pictures/image 1.png";
function Paraone(props) {
    return (
        <div>
             <div className='para1'>
                <h1 className='parah1-1'>Start selling <span className='paras'>today</span></h1>
                <h1 className='parah1'>with superfast deliveries.</h1>
                <p className='parap'>Delight your customers with <span className='paras'>unparalleled fulfilment experience</span> while growing your business</p>
            </div>
            <img className="paraimg1" src={pic}></img>
        </div>
    );
}

export default Paraone;