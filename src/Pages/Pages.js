import React from 'react';
import Navbar from "../components/Navbar"
import Paraone from '../components/Paraone';
import Paratwo from '../components/Paratwo';
import Parathree from '../components/Parathree';
import Grid from '../components/Grid';
import Marqueef from '../components/Marqueef';
import Cardsgrid from '../components/Cardsgrid';
import Footer from '../components/Footer';
import Scrollcard from '../components/Scrollcard';
import Responsiveimg from '../components/Responsiveimage';
import { BrowserRouter as Router } from 'react-router-dom';
import {FloatButton} from "antd";
import {MessageFilled} from "@ant-design/icons";
import {AiOutlineWhatsApp,AiFillMessage,AiOutlineMessage,AiFillPlusCircle} from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import { HiMagnifyingGlass } from "react-icons/hi2";
import "./Pages.css"
GrLocation
function Pages(props) {
    return (
        <Router>
            <div className="float1">
            <FloatButton.Group className='float1' icon={<MessageFilled/>} style={{right:50}} trigger="hover">
                <FloatButton icon={<AiOutlineWhatsApp/>} shape="circle" tooltip="Connect on whatsapp"/>
                <FloatButton icon={<AiOutlineMessage/>} shape="circle" tooltip="Message us"/>
            </FloatButton.Group>
            <FloatButton icon={<GrLocation/>} shape="circle" style={{left:50}}/>
            </div>
            <div className='float2'>
            <FloatButton.Group className='float2' icon={<AiFillPlusCircle/>} style={{right:50}} trigger="hover">
                <FloatButton icon={<AiOutlineWhatsApp/>} shape="circle" tooltip="Connect on whatsapp"/>
                <FloatButton icon={<AiOutlineMessage/>} shape="circle" tooltip="Message us"/>
                <FloatButton icon={<GrLocation/>} shape="circle" tooltip="Track Order"/>
                <FloatButton icon={<HiMagnifyingGlass/>} shape="circle" tooltip="Serviceability"/>
            </FloatButton.Group>
            
            </div>
            <Navbar/>
            <Paraone/>
            <Paratwo/> 
            <Scrollcard/>
            <Grid/>
            <Responsiveimg/>
            <Marqueef/>
            <Cardsgrid/>
            <Parathree/>
            <Footer/>
        </Router>
    );
}

export default Pages;