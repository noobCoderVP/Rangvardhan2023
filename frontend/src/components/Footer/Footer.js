import React from "react";
import "./Footer.css";
import styled from "styled-components";
import {
  FaTwitter,
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Logo = styled.a`
  display: flex;
  align-items: center;
  width: 2rem;
  height: auto;
  cursor: pointer;
  img {
    margin-right: 0.5rem;
  }
`;

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="row">
          <div className="col">
            <Logo>
              {/* <img src={logo} alt="Rangawardhan" /> */}
              <h1 className="text-upper header-title animate-charcter ">रंगवर्धन</h1>
            </Logo>{" "}
            <p style={{fontSize:'15px',lineHeight:'25px'}}>रंगवर्धन: मराठी सांस्कृतिक रंगमंच, व्हीजेटीआय, मुंबई ! मराठी कलावंतांना, गौरवास्पद काम करणाऱ्या अद्वितीय व्यक्तिमत्त्वांना तसेच अभियंत्यांच्या कलागुणांना वाव देणारं आणि राजभाषेचा आवाज टिकवणारं एक मुक्त व्यासपीठ !</p>
          </div>
          <div className="col">
            <h3>
              Office{" "}
              <div className="underline">
                <span></span>
              </div>
            </h3>
            <p>VJTI college</p>
            <p>Matunga, Mumbai-400019, Maharashtra, India</p>
            <p className="email-id">rangawardhanfest@gmail.com</p>
            
          </div>
          <div className="col">
            <h3>
              Links
              <div className="underline">
                <span></span>
              </div>
            </h3>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/events">Events</a>
              </li>
              <li>
                <a href="/team">Our Team</a>
              </li>
              
            </ul>
          </div>
          <div className="col">
            
           
            <div className="social-icons">
              <a href="https://twitter.com/Rangawardhan/" target="blank">
                <div className="social-icon">
                  {" "}
                  <FaTwitter />
                </div>
              </a>
              <a href="https://www.instagram.com/rangawardhan/" target="blank">
                <div className="social-icon">
                  <FaInstagram />
                </div>{" "}
              </a>
              <a href="https://www.youtube.com/c/Rangawardhan/featured" target="blank">
                <div className="social-icon">
                  <FaYoutube />
                </div>
              </a>

              <a href="https://www.facebook.com/Rangawardhan" target="blank">
                <div className="social-icon">
                  {" "}
                  <FaFacebook />
                </div>
              </a>

              <a href="https://www.linkedin.com/school/rangawardhan/about/" target="blank">
                <div className="social-icon">
                  <FaLinkedin />
                </div>
              </a>
            </div>
          </div>
        </div>
        <hr />
        <p className="copyright">Rangawardhan, Copyright &#169; 2023</p>
      </footer>
    </div>
  );
};

export default Footer;
