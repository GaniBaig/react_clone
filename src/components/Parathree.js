import React from 'react';
import "./Parathree.css";
import { BiChevronRight } from "react-icons/bi";
function Parathree(props) {
    return (
        <div className='parathree'>
            <h1 className="parathreeh1">Get in touch with our experts today to grow your business</h1>
            <button className='parathreebtn'>Contact Us<BiChevronRight className='bi-icon'/></button>
        </div>
    );
}

export default Parathree;