import React from 'react'
import data from '../../../constants/data'
import './Sponsors.css'
const Sponsors = () => {
  return (
    <>
<section  id='sponsors'>
    <div className='container'>
        <div className='section-title'data-aos="zoom-in-up" data-aos-duration="3000">
            <h1 className='big' style={{color: "rgb(255, 174, 66)"}}>Sponsors</h1> 
        </div>
        <div className='sponsors-content grid py-6' >
            {
              data.sponsor.map((spons,index)=>{
            return (
                <div className='sponsors-item text-center' key={index}>
                    <img src = {spons.img} alt="spons images" className='mx-auto' data-aos="zoom-in-up" data-aos-duration="3000" style={{ border: "2px solid rgb(255, 174, 66"}}></img>
                </div>
            )
              })  
            }
        </div>
    </div>
</section>
</>
  )
}

export default Sponsors