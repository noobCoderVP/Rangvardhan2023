import React from "react";
import images from "./images.js"
const Prices = () => {
  const [header] = React.useState({
    subHeading: "संचालक मंडळी",
  });
  const [state] = React.useState([
    {
      id: 1,
      heading: "प्रतिक देवकते",
      img:`${images.pratik}`,
      desc: 'VJTI Drama Committee Head',
      contact:'https://wa.me/9405111418'
    },
    {
      id: 2,
      heading: "आयुष देशपांडे",
      img: `${images.aayush}`,
      desc: 'Drama CO-Ordinator',
      contact:'https://wa.me/9405111418'
    },
    {
      id: 3,
      heading: "अमित कापसे",
      img:`${images.amit}`,
      desc: 'Drama CO-Ordinator',
      contact:'https://wa.me/9405111418'
    },
  ]);
  return (
    <div className="prices">
      <div className="container">
        <div className="common">
          <h1 className="animate-charcter">{header.subHeading}</h1>
          <div className="commonBorder"></div>
        </div>
        <div className="row">
          {state.map((prices) => (
            <div className="col-4" key={prices.id} data-aos="zoom-in-left" data-aos-duration="2000" >
              <div className="price">
                <div className="priceHeading">{prices.heading}</div>
                <img src = {prices.img} alt="natya images" data-aos="zoom-in-up" data-aos-duration="3000"  style={{ border: "2px solid rgb(255, 174, 66",margin:"5%"}}></img>
                <div style={{fontWeight:"4vh"}}>{prices.desc}</div>
                <div className="price__btn">
                  <a href={prices.contact} className="btn btn-outline">
                    Contact
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Prices;
