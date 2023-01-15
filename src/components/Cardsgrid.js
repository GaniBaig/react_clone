import React from 'react';
import "./Cardsgrid.css";
import icon from "./Pictures/icon.png";
import icon1 from "./Pictures/icon1.png"
import icon2 from "./Pictures/icon2.png"
import Slider from 'react-elastic-carousel'
import icon3 from "./Pictures/icon3.png"
import icon4 from "./Pictures/icon4.png";


function Cardsgrid(props) {
    
    return (
        <div>
            <div className="slidercard1">
    <Slider enableAutoPlay autoPlaySpeed={10000}  loop breakpoint={800}  className="Slider"
    breakPoints={ [
        { width: 850, itemsToShow: 2 , pagination: true},
        { width: 1150, itemsToShow: 2, itemsToScroll: 1 },
        { width: 1450, itemsToShow: 2 , pagination: true},
        { width: 1750, itemsToShow: 2 , pagination: true},
      ]}>
         
                
                <div className="grd-rows">
                    <div className="grd-1">
                    <h1 className="grd-h1">"Absolutely Seamless"</h1>
                    <p className="grd-p">
Over the last year Blowhorn and its experienced team of Logisticians and customer care experts have helped us in executing our last mile delivery of non perishable gifts with aplomb. The <span className='spbold'>process so far has been absolutely seamless where Blowhorn team has taken full ownership</span> of each and every gift order handed over to them for delivery.</p>
                    </div>
                    <div className="grd-2">
                    <div className='grdcrd-container'>
                    <img className="img-icon" src={icon}></img>
                    </div>
                    <div className="grdcrd-container">
                    <span className="grdcrd-h1">Gaurav Arora</span>
                    <p className='grdcrd-p'>Vice President</p>
                    </div>
                    <div className='grdcrd-container'>
                    <img id="cardiconimg" src={icon1}></img>
                    </div>
                    </div>
                </div>
                <div className="grd-rows">
                    <div className="grd-1">
                    <h1 className="grd-h1">"No better option in the market than Blowhorn"</h1>
                    <p className="grd-p">
                    To provide same day delivery to our customers in metro cities, there is no better option in the market than Blowhorn</p>
                    </div>
                    <div className="grd-2">
                    <div className='grdcrd-container'>
                    <img className="img-icon" src={icon}></img>
                    </div>
                    <div className="grdcrd-container">
                    <span className="grdcrd-h1">Mukesh Regar</span>
                    <p className='grdcrd-p'>Warehouse & Distribution Manager</p>
                    </div>
                    <div className='grdcrd-container'>
                    <img id="cardiconimg" src={icon2}></img>
                    </div>
                    </div>
                
              </div>
                
                <div className="grd-rows">
                    <div className="grd-1">
                    <h1 className="grd-h1">"Top across all metrics"</h1>
                    <p className="grd-p">
                    Delhivery tracks performance of each partners and Blowhorn has always been at top across all metrices, predominantly due to good market supply and good professional team which manages their fleet.</p>
                    </div>
                    <div className="grd-2">
                    <div className='grdcrd-container'>
                    <img className="img-icon" src={icon}></img>
                    </div>
                    <div className="grdcrd-container">
                    <span className="grdcrd-h1">Sabysachi Rana</span>
                    <p className='grdcrd-p'>Director - Fleet Commercial</p>
                    </div>
                    <div className='grdcrd-container'>
                    <img id="cardiconimg" src={icon3}></img>
                    </div>
                    </div>
                </div>
                <div className="grd-rows">
                    <div className="grd-1">
                    <h1 className="grd-h1">"Seamless one day delivery"</h1>
                    <p className="grd-p">
                    Blowhorn has seamless one day delivery in Mumbai and Pune, are very responsive to calls and queries and I am happy to be associated with them as my delivery partner</p>
                    </div>
                    <div className="grd-2">
                    <div className='grdcrd-container'>
                    <img className="img-icon" src={icon}></img>
                    </div>
                    <div className="grdcrd-container">
                    <span className="grdcrd-h1">Devendra Chawla</span>
                    <p className='grdcrd-p'>Founder</p>
                    </div>
                    <div className='grdcrd-container'>
                    <img id="cardiconimg" src={icon4}></img>
                    </div>
                    </div>
                </div>
                
    </Slider>
        </div>
        <div className="slidercard2">
        <Slider enableAutoPlay autoPlaySpeed={10000}  itemsToShow={1}  loop breakpoint={800}  className="Slider">
         
         <div className="grd-rows">
             <div className="grd-1">
             <h1 className="grd-h1">"Absolutely Seamless"</h1>
             <p className="grd-p">
Over the last year Blowhorn and its experienced team of Logisticians and customer care experts have helped us in executing our last mile delivery of non perishable gifts with aplomb. The <span className='spbold'>process so far has been absolutely seamless where Blowhorn team has taken full ownership</span> of each and every gift order handed over to them for delivery.</p>
             </div>
             <div className="grd-2">
             <div className='grdcrd-container'>
             <img className="img-icon" src={icon}></img>
             </div>
             <div className="grdcrd-container">
             <span className="grdcrd-h1">Gaurav Arora</span>
             <p className='grdcrd-p'>Vice President</p>
             </div>
             <div className='grdcrd-container'>
             <img id="cardiconimg" src={icon1}></img>
             </div>
             </div>
         </div>
         <div className="grd-rows">
             <div className="grd-1">
             <h1 className="grd-h1">"No better option in the market than Blowhorn"</h1>
             <p className="grd-p">
             To provide same day delivery to our customers in metro cities, there is no better option in the market than Blowhorn</p>
             </div>
             <div className="grd-2">
             <div className='grdcrd-container'>
             <img className="img-icon" src={icon}></img>
             </div>
             <div className="grdcrd-container">
             <span className="grdcrd-h1">Mukesh Regar</span>
             <p className='grdcrd-p'>Warehouse & Distribution Manager</p>
             </div>
             <div className='grdcrd-container'>
             <img id="cardiconimg" src={icon2}></img>
             </div>
             </div>
         </div>
         <div className="grd-rows">
             <div className="grd-1">
             <h1 className="grd-h1">"Top across all metrics"</h1>
             <p className="grd-p">
             Delhivery tracks performance of each partners and Blowhorn has always been at top across all metrices, predominantly due to good market supply and good professional team which manages their fleet.</p>
             </div>
             <div className="grd-2">
             <div className='grdcrd-container'>
             <img className="img-icon" src={icon}></img>
             </div>
             <div className="grdcrd-container">
             <span className="grdcrd-h1">Sabysachi Rana</span>
             <p className='grdcrd-p'>Director - Fleet Commercial</p>
             </div>
             <div className='grdcrd-container'>
             <img id="cardiconimg" src={icon3}></img>
             </div>
             </div>
         </div>
         <div className="grd-rows">
             <div className="grd-1">
             <h1 className="grd-h1">"Seamless one day delivery"</h1>
             <p className="grd-p">
             Blowhorn has seamless one day delivery in Mumbai and Pune, are very responsive to calls and queries and I am happy to be associated with them as my delivery partner</p>
             </div>
             <div className="grd-2">
             <div className='grdcrd-container'>
             <img className="img-icon" src={icon}></img>
             </div>
             <div className="grdcrd-container">
             <span className="grdcrd-h1">Devendra Chawla</span>
             <p className='grdcrd-p'>Founder</p>
             </div>
             <div className='grdcrd-container'>
             <img id="cardiconimg" src={icon4}></img>
             </div>
             </div>
         </div>
         
</Slider>
</div>
        </div>

    );
}

export default Cardsgrid;