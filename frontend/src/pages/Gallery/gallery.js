import React,{useState} from 'react';
import './gallery.css'
import {FaTimes}from 'react-icons/fa';
import canteen from './img/canteen.jpg';
import rang from './img/rangoli.jpg';
import abhang from './img/abhang.JPG';
import abc from './img/abc.JPG';
import ias from './img/ias.JPG';
import jija from './img/jija.JPG';
import audi from './img/audi.JPG';
import audi4 from './img/audi4.JPG';
import audi5 from './img/audi5.JPG';
import d3 from './img/d3.JPG';
import consti from './img/consti.JPG';
import can from './img/can.JPG';
import ncc from './img/ncc.jpg';
import bhav from './img/bhav.JPG';
import dhol from './img/dhol.JPG';
import dj1 from './img/dj1.JPG';
import dj4 from './img/dj4.JPG';
import tyteam from './img/tyteam.JPG';
import syteam from './img/syteam.JPG';
import team from './img/team.JPG';
import s1 from './img/s1.JPG';
import s2 from './img/s2.JPG';
import s3 from './img/s3.JPG';
import p1 from './img/p1.JPG';
import p2 from './img/p2.JPG';
import p3 from './img/p3.JPG';
import spran from './img/spran.JPG';
import spr from './img/spr.JPG';
import saudi from './img/saudi.JPG';
import sahil from './img/sahil.JPG';
import sar from './img/sarswati.JPG';
import sq3 from './img/stage.jpg';
import sq4 from './img/sq4.jpg';
import sq5 from './img/sq5.jpg';
import sq6 from './img/sq6.jpg';
import lag from './img/lagori.JPG';
import open from './img/open.JPG';
import n1 from './img/n1.JPG';
import n2 from './img/n2.JPG';
import n3 from './img/n3.JPG';
import n4 from './img/n4.JPG';
import n6 from './img/n6.JPG';
import n7 from './img/n7.JPG';
import n8 from './img/n8.JPG';
import n10 from './img/n10.JPG';
import yoda from './img/yoda.jpeg';
import yoda2 from './img/yoda2.jpeg';
import dk from './img/dk.jpeg';
import tabala from './img/tabala.jpg';
import white from './img/white.JPG';
import tshirt from './img/tshirt.JPG';
import end3 from './img/end3.JPG';
import end2 from './img/end2.JPG';
import end from './img/end.JPG';
import zenda1 from './img/zenda1.jpg';
import laugh1 from './img/laugh1.jpg';
import happyf from './img/happyf.jpg';
import gappa from './img/gappa.jpg';
import guest from './img/guest.jpg';
import pretty from './img/pretty.jpg';
import croud1 from './img/croud1.JPG';
import taal1 from './img/taal1.jpg';
import shubham1 from './img/shubham1.jpg';
import epic from './img/epic.jpg';
import bhatkanti from './img/bhatkanti.jpg';
import girlsd from './img/girlsd.jpg';
import grpd from './img/grpd.jpg';
import dindi from './img/dindi.jpg';
import vasu from './img/vasu.jpg';




const Gallery = () => {


const[model,setModel] = useState(false);
const[tempimgSrc, setTempImgSrc] = useState('');

const getImg=(imgSrc)=>{
   // console.warn(imgSrc);
   setTempImgSrc(imgSrc);
   setModel(true);

}
  return (
    <>
    
    <div className={model? "model open" : "model"}>
        <img src={tempimgSrc} alt=''/>
       <FaTimes  onClick={()=> setModel(false)}/>
    </div>

    {/* <div className="header_content">
    <img src={cant} style={{width: '100%',height:'600px'}} alt=''/>
        <div className="scroll-container">
          <div className="chevron"></div>
          <div className="chevron"></div>
          <div className="chevron"></div>
          <span className="text1" style={{color: 'black',fontWeight: 'bold',fontSize: '30px'}}>Scroll down</span>
        </div>
      </div> */}
    
   
    <div className="gallery" >
        {/* {data.map((item,index)=>{ */}

               <div className="pics"  onClick={()=>getImg(canteen)}>
                     <img src={canteen} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(rang)} >
                     <img src={rang} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(zenda1)}>
                     <img src={zenda1} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(abc)} >
                     <img src={abc} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(yoda)} >
                     <img src={yoda} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(gappa)}>
                     <img src={gappa} style={{width: '100%'}} alt=''/>
                </div>
                               
                <div className="pics"  onClick={()=>getImg(tyteam)}>
                     <img src={tyteam} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(yoda2)} >
                     <img src={yoda2} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(dhol)}>
                     <img src={dhol} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(tshirt)}>
                     <img src={tshirt} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(open)}>
                     <img src={open} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(dindi)}>
                     <img src={dindi} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(grpd)}>
                     <img src={grpd} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(ncc)}>
                     <img src={ncc} style={{width: '100%'}} alt=''/>
                </div>

                <div className="pics"  onClick={()=>getImg(ias)}>
                     <img src={ias} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(n2)}>
                     <img src={n2} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(tabala)}>
                     <img src={tabala} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(abhang)}>
                     <img src={abhang} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(jija)}>
                     <img src={jija} style={{width: '100%'}} alt=''/>
                </div>
                
                <div className="pics"  onClick={()=>getImg(white)}>
                     <img src={white} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(epic)}>
                     <img src={epic} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(croud1)}>
                     <img src={croud1} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(happyf)}>
                     <img src={happyf} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(vasu)}>
                     <img src={vasu} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(audi)}>
                     <img src={audi} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(d3)}>
                     <img src={d3} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(shubham1)}>
                     <img src={shubham1} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(consti)}>
                     <img src={consti} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(taal1)}>
                     <img src={taal1} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(bhatkanti)}>
                     <img src={bhatkanti} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(can)}>
                     <img src={can} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(girlsd)}>
                     <img src={girlsd} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(dj1)}>
                     <img src={dj1} style={{width: '100%'}} alt=''/>
                </div>                      
                <div className="pics"  onClick={()=>getImg(dj4)}>
                     <img src={dj4} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(dk)}>
                     <img src={dk} style={{width: '100%'}} alt=''/>
                </div>
                         
                <div className="pics"  onClick={()=>getImg(audi4)}>
                     <img src={audi4} style={{width: '100%'}} alt=''/>
                </div>              
                <div className="pics"  onClick={()=>getImg(team)}>
                     <img src={team} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(syteam)}>
                     <img src={syteam} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(s1)}>
                     <img src={s1} style={{width: '100%'}} alt=''/>
                </div>                      
                <div className="pics"  onClick={()=>getImg(s2)}>
                     <img src={s2} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(s3)}>
                     <img src={s3} style={{width: '100%'}} alt=''/>
                </div>
                
                <div className="pics"  onClick={()=>getImg(spr)}>
                     <img src={spr} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(spran)}>
                     <img src={spran} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(saudi)}>
                     <img src={saudi} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(guest)}>
                     <img src={guest} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(p3)}>
                     <img src={p3} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(laugh1)}>
                     <img src={laugh1} style={{width: '100%'}} alt=''/>
                </div> 
                <div className="pics"  onClick={()=>getImg(p1)}>
                     <img src={p1} style={{width: '100%'}} alt=''/>
                </div>                      
                <div className="pics"  onClick={()=>getImg(p2)}>
                     <img src={p2} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(pretty)}>
                     <img src={pretty} style={{width: '100%'}} alt=''/>
                </div> 
                <div className="pics"  onClick={()=>getImg(audi5)}>
                     <img src={audi5} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(sahil)}>
                     <img src={sahil} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(sar)}>
                     <img src={sar} style={{width: '100%'}} alt=''/>
                </div>
               
                <div className="pics"  onClick={()=>getImg(sq3)}>
                     <img src={sq3} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(end3)}>
                     <img src={end3} style={{width: '100%'}} alt=''/>
                </div>                      
                <div className="pics"  onClick={()=>getImg(end2)}>
                     <img src={end2} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(end)}>
                     <img src={end} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(bhav)}>
                     <img src={bhav} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(sq4)}>
                     <img src={sq4} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(sq5)}>
                     <img src={sq5} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(sq6)}>
                     <img src={sq6} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(lag)}>
                     <img src={lag} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(n1)}>
                     <img src={n1} style={{width: '100%'}} alt=''/>
                </div>
               
                <div className="pics"  onClick={()=>getImg(n3)}>
                     <img src={n3} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(n4)}>
                     <img src={n4} style={{width: '100%'}} alt=''/>
                </div>
                
                <div className="pics"  onClick={()=>getImg(n6)}>
                     <img src={n6} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(n7)}>
                     <img src={n7} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(n8)}>
                     <img src={n8} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(n10)}>
                     <img src={n10} style={{width: '100%'}} alt=''/>
                </div>
                

            {/* )
         }) } */}
    </div> 
    
    </>
  )
}

export default Gallery
