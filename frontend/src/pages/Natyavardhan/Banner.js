import React from "react";
const Banner = () => {
  const [state] = React.useState({
    title: "नाट्यवर्धन",
    text:
      "​",
    image: "/images/audi.jpg",
  });
  return (
    <header className="header1">
      <div className="container">
        <div className="row">
        <div className="col-6">
            <div className="header__content">
              <div className="header__section">
                <h1  className="past">{state.title}</h1>
                {/* <p>{state.text}</p> */}
              </div>
            </div>
         </div>
          <div className="col-6">
            <div className="banner__img" style={{maxWidth: "40px"}}>
              <img src={state.image} alt="man" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
