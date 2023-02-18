import React from 'react'
import ReactPlayer from "react-player";
import "./Theme.css";
import parisparsh from "../../img/parisparsh.png"
const Theme = () => {
  return (
    <>
    <h1 className="animate-charcter center" data-aos="fade-right" data-aos-duration="3000">परीस स्पर्श मराठी संस्कृतीचा</h1>
    <div className="itheme">
    <div className="i-left">
      <div className="i-left-wrapper">
            <img className='centerimg' src={parisparsh}  data-aos="fade-right" data-aos-duration="2000" alt='' />
        <p className="i-desc" data-aos="fade-right" data-aos-duration="2000" style={{color:"white"}}>
        परीस एक असा धातू  जो लोखंडाला स्पर्श करताच त्याचे रूपांतर सोन्यात करतो. असाच काहीसा स्पर्श आपल्या मराठी संस्कृतीचा आहे. विविध चालीरितींनी नटलेली वैभवशाली अशी आपली संस्कृती जी स्पर्शून गेल्यावर ज्याला स्पर्शीले त्यास उज्वल करते, स्वतःबद्दल विश्वास निर्माण करत जगण्याचा आनंद कळवते ! हाच स्पर्श अनुभवून देण्यासाठी रंगवर्धन २०२२-२३ घेऊन येत आहे संकल्पना-
        </p>
        <p className="i-desc" style={{color:"white",textAlign:'center'}}>॥परीस स्पर्श मराठी संस्कृतीचा॥</p>
      </div>
    </div>
    <div className="i-right">
      <ReactPlayer url="https://www.youtube.com/watch?v=ZgYfb7YGktg" style={{ border: "2px solid rgb(255, 174, 66"}} className="video" controls={true}  data-aos="zoom-in" data-aos-duration="3000" />
    </div>
  </div>
  </>
  )
}

export default Theme
