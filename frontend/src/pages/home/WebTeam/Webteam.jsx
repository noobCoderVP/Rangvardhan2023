import React from "react";
import './webteam.css'
import d from '../../../constants/data'
import { FaEnvelope, FaInstagram, FaLinkedin } from "react-icons/fa";



const Webteam = () => {
  return (
    <div className="container">
        <div className="section-title" data-aos="zoom-in-up" style={{borderRadius:'10px'}}>
          <h2 className="past" style={{margin:"3%"}}>WebDev Team</h2>
        </div>
        <div className="team-content py-2 grid" data-aos="zoom-in-up">
          {d.teams.map((teams, index) => {
            return (
              <div className="team-card" key={index}>
              <div className="team-box">
                <img
                  src={teams.img}
                  alt="team members"
                  className="mx-auto img"
                ></img>
                <div className="team-info">
                  <div className="team-social-links">
                    <a href={teams.m}><FaEnvelope/></a>
                    <a href={teams.i}><FaInstagram/></a>
                    <a href={teams.l}><FaLinkedin/></a>
                  </div>
                </div>
              </div>
              <div className="name" >{teams.name}</div>
              <div className="post" >{teams.Post}</div>
            </div>
            
            );
          })}
        </div>
      </div>
  )
}

export default Webteam;