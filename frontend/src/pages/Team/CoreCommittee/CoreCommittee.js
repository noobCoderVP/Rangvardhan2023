import "./CoreCommittee.css";
import React from "react";
import data from "./data";
import d from "../../../constants/data";
import { FaEnvelope, FaInstagram, FaLinkedin } from "react-icons/fa";

const CoreCommittee = () => {
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(270deg, #28b8d5 0%,#020344 100%)",
      }}
    >
      <div className="container" style={{ marginTop: "20px" }}>
        <div
          className="section-title "
          data-aos="zoom-in-up"
          style={{ borderRadius: "10px" }}
        >
          <h2 className="past">Our Team</h2>
        </div>
        <div className="team-content py-2 grid" data-aos="zoom-in-up">
          {data.teams.map((teams, index) => {
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
                      <a href={teams.m}>
                        <FaEnvelope />
                      </a>
                      <a href={teams.i}>
                        <FaInstagram />
                      </a>
                      <a href={teams.l}>
                        <FaLinkedin />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="name">{teams.name}</div>
                <div className="post">{teams.Post}</div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="container">
        <div
          className="section-title "
          data-aos="zoom-in-up"
          style={{ borderRadius: "10px" }}
        >
          <h2 className="past">Chief Officers</h2>
        </div>
        <div className="team-content py-2 grid" data-aos="zoom-in-up">
          {data.sectorHeads.map((teams, index) => {
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
                    <a href={teams.m}>
                        <FaEnvelope />
                      </a>
                      <a href={teams.i}>
                        <FaInstagram />
                      </a>
                      <a href={teams.l}>
                        <FaLinkedin />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="name">{teams.name}</div>
                <div className="post">{teams.Post}</div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="container" style={{ marginBottom: "50px" }}>
        <div
          className="section-title"
          data-aos="zoom-in-up"
          style={{ borderRadius: "10px" }}
        >
          <h2 className="past">WebDev Team</h2>
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
                    <a href={teams.m}>
                        <FaEnvelope />
                      </a>
                      <a href={teams.i}>
                        <FaInstagram />
                      </a>
                      <a href={teams.l}>
                        <FaLinkedin />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="name">{teams.name}</div>
                <div className="post">{teams.Post}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CoreCommittee;
