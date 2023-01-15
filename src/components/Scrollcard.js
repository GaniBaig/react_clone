import React from 'react';
import { useInView} from 'react-intersection-observer';
import {useEffect,useState } from "react";
import bullet from "./Pictures/bullet.svg"
import "./Scrollcard.css";
import video1 from "./Videos/video-1.mp4"
import video2 from "./Videos/video-2.mp4"
import video3 from "./Videos/video-3.mp4"
import video4 from "./Videos/video-4.mp4"
import video5 from "./Videos/video-5.mp4"
function Scrollcard(props) {
const {ref:myRef,inView:myElementIsVisible}=useInView();
const {ref:myRef1,inView:myElementIsVisible1}=useInView();
const {ref:myRef2,inView:myElementIsVisible2}=useInView();
const {ref:myRef3,inView:myElementIsVisible3}=useInView();
const {ref:myRef4,inView:myElementIsVisible4}=useInView();
const {ref:myRef5,inView:myElementIsVisible5}=useInView();
const [fix,setFix]=useState(false);
const [scrollam, setScroll] = useState(0);
const [fix1,setFix1]=useState(false);
const [fix2,setFix2]=useState(false);
const [fix3,setFix3]=useState(false);
const [fix4,setFix4]=useState(false);
const [fix5,setFix5]=useState(false);

    useEffect(() => {

        let progressBarHandler = () => {
            
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrollam = `${0.7+(totalScroll / windowHeight)*1.3-0.9}`;

            setScroll(scrollam);
        }

        window.addEventListener("scroll", progressBarHandler);

        return () => window.removeEventListener("scroll", progressBarHandler);
    });
    function setFixed(){
        if (window.scrollY>=3200){
         setFix(true)}
         else{
           setFix(false)
         }
        }
        window.addEventListener("scroll",setFixed)
        function setFixed1(){
            if (window.scrollY>=1600){
             setFix1(true)}
             else{
               setFix1(false)
             }
            }
           window.addEventListener("scroll",setFixed1)
           function setFixed2(){
            if (window.scrollY>=2400){
             setFix2(true)}
             else{
               setFix2(false)
             }
            }
           window.addEventListener("scroll",setFixed2)
           function setFixed3(){
            if (window.scrollY>=3000){
             setFix3(true)}
             else{
               setFix3(false)
             }
            }
           window.addEventListener("scroll",setFixed3)
           function setFixed4(){
            if (window.scrollY>=3600){
             setFix4(true)}
             else{
               setFix4(false)
             }
            }
           window.addEventListener("scroll",setFixed4)
           function setFixed5(){
            if (window.scrollY>=4300){
             setFix5(true)}
             else{
               setFix5(false)
             }
            }
           window.addEventListener("scroll",setFixed5)
    return (
        <div className='Main-progress'>
            
             <div className="App-container">
            <div id={myElementIsVisible1||myElementIsVisible2||myElementIsVisible3||myElementIsVisible4||myElementIsVisible5?"progressBarContainer":"progressBarContainer-no"}>
            <div id="progressBar" style={{transform: `scale(${(scrollam)*2}, 1)`, opacity: 100}}>
                
            </div>
            </div>
            <div className={myElementIsVisible1||myElementIsVisible2||myElementIsVisible3||myElementIsVisible4||myElementIsVisible5?"progressbar-text":"progressbar-text-no"}>
                <p className={(myElementIsVisible1)?'txt':"notxt"} id="txt1">Shopfront integrations with 360° visibility</p>
                <p className={(myElementIsVisible2)?'txt':"notxt"} id="txt2">Store only what you need</p>
                <p className={(myElementIsVisible3)?'txt':"notxt"} id="txt3">ML powered routing to meet your SLAs</p>
                <p className={(myElementIsVisible4)?'txt':"notxt"} id="txt4">Automated shipping with track & trace</p>
                <p className={(myElementIsVisible5)?'txt':"notxt"} id="txt5">Easy returns with cash management</p>
            </div>
        </div>
            <div id='flex-container'>
                <div className={myElementIsVisible1||myElementIsVisible2||myElementIsVisible3||myElementIsVisible4||myElementIsVisible5?"video-container":"video-containerno"}>
                <video width="100%" height="auto" autoplay="autoplay" loop="loop" preload="" muted="muted" className={myElementIsVisible1?"video1":"video-no1"} src={video1}></video>
                <video width="100%" height="auto" autoplay="autoplay" loop="loop" preload="" muted="muted" className={myElementIsVisible2?"video2":"video-no2"} src={video2}></video>
                <video width="100%" height="auto" autoplay="autoplay" loop="loop" preload="" muted="muted" className={myElementIsVisible3?"video3":"video-no3"} src={video3}></video>
                <video width="100%" height="auto" autoplay="autoplay" loop="loop" preload="" muted="muted" className={myElementIsVisible4?"video4":"video-no4"} src={video4}></video>
                </div>
                <div ref={myRef} className='flex-content'>
                    
                    <div ref={myRef1} id="flex-inner1">
                        <h1  className="flexh1">Get started with all e-commerce enabler platforms and see the order move through various stages of fulfilment</h1>

                        <p className="flexp-small">Connect your ecommerce site with Blowhorn in minutes & ship faster than ever</p>
                        <ul className='flex-ul'>
                        <li className="flex-li"><img className="bullet-class" src={bullet}></img><p>
                        Single click integration</p></li>

                        <li className="flex-li"><img className="bullet-class" src={bullet}></img><p>
                        Start shipping in a day</p></li>
                        <li className="flex-li"><img className="bullet-class" src={bullet}></img><p>
                        Automated order tracking</p></li>
                        <li className="flex-li"><img className="bullet-class" src={bullet}></img><p>
                        Instant proof of delivery</p></li>
                       </ul>
                    </div>
                    <div  ref={myRef2} id="flex-inner2">
                        <h1 className="flexh1">Bring in only the inventory that your order needs and replenish on-demand</h1>
                        <p className="flexp-small">Never run out of stock with automated alerts on top selling SKUs</p>
                        <ul className='flex-ul'>
                        <li className="flex-li"><img className="bullet-class" src={bullet}></img><p>
                        Track best selling products</p></li>
                        <li className="flex-li"><img className="bullet-class" src={bullet}></img><p>
                        Quick restocking</p></li>
                        <li className="flex-li"><img className="bullet-class" src={bullet}></img><p>
                        Manage inventory from anywhere</p></li>
                        <li className="flex-li"><img className="bullet-class" src={bullet}></img><p>
                        Ship in autopilot mode</p></li>
                       </ul>
                    </div>
                    <div ref={myRef3} id="flex-inner3">
                        <h1 className="flexh1">Our clock starts from the time order is placed till it reaches your customer’s doorstep</h1>

                        <p className="flexp-small">AI-powered route optimization helps achieve delivery in a few hours</p>
                        <ul className='flex-ul'>
                        <li className="flex-li"><img className="bullet-class" src={bullet}></img><p>
                        Micro-warehouses near your customers</p></li>

                        <li className="flex-li"><img className="bullet-class" src={bullet}></img><p>
                        Multiple deliveries at one go</p></li>
                        <li className="flex-li"><img className="bullet-class" src={bullet}></img><p>
                        Energy-efficient deliveries</p></li>
                        <li className="flex-li"><img className="bullet-class" src={bullet}></img><p>
                        Lean & green packaging</p></li>
                       </ul>
                    </div>
                    <div ref={myRef4} id="flex-inner4">
                        <h1 className="flexh1">Fulfilment is on auto-pilot mode, sit back and relax</h1>

                        <p className="flexp-small">Whitelabel logistics to keep your brand in the spotlight</p>
                        <ul className='flex-ul'>
                        <li className="flex-li"><img className="bullet-class" src={bullet}></img><p>
                        Micro-warehouses near your customers</p></li>

                        <li className="flex-li"><img className="bullet-class" src={bullet}></img><p>
                        Real-time tracking</p></li>
                        <li className="flex-li"><img className="bullet-class" src={bullet}></img><p>
                        Instant SMS alerts</p></li>
                        <li className="flex-li"><img className="bullet-class" src={bullet}></img><p>
                        Flexible delivery times</p></li>
                       </ul>
                    </div>
                    <div className="flex-container">
                    <div className="video-container2">
                    <video width="100%" height="auto" autoplay="autoplay" loop="loop" preload="" muted="muted" className={myElementIsVisible4?"video-no5":"video"} src={video5}></video>
                    </div>
                    <div ref={myRef5} id="flex-inner5">
                        <h1 className="flexh1">Manage your returns with a simple click, the cash is settled into your account without any intervention</h1>
                        <ul className='flex-ul'>
                        <li className="flex-li"><img className="bullet-class" src={bullet}></img><p>
                        Scan & pay on delivery</p></li>

                        <li className="flex-li"><img className="bullet-class" src={bullet}></img><p>
                        SMS paylinks sent before delivery</p></li>
                        <li className="flex-li"><img className="bullet-class" src={bullet}></img><p>
                        Direct settlement with merchant accounts</p></li>
                        <li className="flex-li"><img className="bullet-class" src={bullet}></img><p>
                        Easy returns</p></li>
                       </ul>
                    </div>
                    
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Scrollcard;