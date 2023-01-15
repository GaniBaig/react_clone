import React from 'react';
import largeimg from "./Pictures/largeimage.svg"
import smallimg from "./Pictures/smallimage.svg"
import "./Responsiveimage.css"

function Responsiveimg() {
    return (
        <div className='responseimg'>
                <h1 className='pararesponsive'>How can same day delivery <span className='paras'>accelerate</span> your brand?</h1>
                <img src={largeimg} className='largeimage'></img>
                <img src={smallimg} className='smallimage'></img>
        </div>
    );
}

export default Responsiveimg