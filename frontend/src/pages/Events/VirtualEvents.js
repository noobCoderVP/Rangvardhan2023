import React from "react";
import img from "./images";
import "./event.css";

const VirtualEvents = () => {
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(270deg, #28b8d5 0%,#020344 100%)",
      }}
    >
      <section>
        <div
          class="minor_events"
          style={{
            backgroundImage: "linear-gradient(270deg, #28b8d5 0%,#020344 100%)",
          }}
        >
          <h1 class="heading">
            <span className="past">&ensp;रंगवर्धन २०२१-२२&ensp;</span>
          </h1>
        </div>
        <div
          class="minor_events"
          style={{
            backgroundImage: "linear-gradient(270deg, #28b8d5 0%,#020344 100%)",
          }}
        >
          <h1 class="heading" className="past">
            गप्पा आणि बरंच काही
          </h1>
        </div>
        <section
          id="online"
          style={{
            backgroundImage: "linear-gradient(270deg, #28b8d5 0%,#020344 100%)",
          }}
        >
          <section class="day1">
            <div class="allevents">
              <div class="event_card">
                <div class="event_info">
                  <a
                    href="https://youtube.com/c/Rangawardhan"
                    target="blank"
                    style={{ textDecoration: "none" }}
                  >
                    <div class="event_info_img">
                      <img src={img.tushar} alt="" />
                      {/* <div
                        class="overlay fa fa-youtube-play red-color"
                        aria-hidden="true"
                      >
                        <p>Youtube</p>
                      </div> */}
                    </div>
                    <div class="event_info_name">
                      <h4>तुषार गाांधी</h4>
                      <h5>भारतीय लेखक</h5>
                    </div>
                  </a>
                </div>
              </div>
              <div class="event_card">
                <div class="event_info">
                  <a
                    href="https://youtu.be/RaeCaDcVGbA
                    "
                    target="blank"
                    style={{ textDecoration: "none" }}
                  >
                    <div class="event_info_img">
                      <img src={img.subhodhbhave} alt="" />
                      <div
                        class="overlay fa fa-youtube-play red-color"
                        aria-hidden="true"
                      >
                        {" "}
                        Youtube
                      </div>
                    </div>
                    <div class="event_info_name">
                      <h4>सुबोध भावे</h4>
                      <h5>मराठी अभिनेते</h5>
                    </div>
                  </a>
                </div>
              </div>
              <div class="event_card">
                <div class="event_info">
                  <a
                    href="https://youtu.be/GNFsZfSecBg"
                    target="blank"
                    style={{ textDecoration: "none" }}
                  >
                    <div class="event_info_img">
                      <img src={img.dilip} alt="" />
                      <div
                        class="overlay fa fa-youtube-play red-color"
                        aria-hidden="true"
                      >
                        {" "}
                        Youtube
                      </div>
                    </div>
                    <div class="event_info_name">
                      <h4>दिलीप प्रभावळकर</h4>
                      <h5>मराठी अभिनेते</h5>
                    </div>
                  </a>
                </div>
              </div>
              <div class="event_card">
                <div class="event_info">
                  <a
                    href="https://youtu.be/rw4QcDk4lOw"
                    target="blank"
                    style={{ textDecoration: "none" }}
                  >
                    <div class="event_info_img">
                      <img src={img.shripal} alt="" />
                      <div
                        class="overlay fa fa-youtube-play red-color"
                        aria-hidden="true"
                      >
                        {" "}
                        Youtube
                      </div>
                    </div>
                    <div class="event_info_name">
                      <h4>श्रीपाल सबनीस</h4>
                      <h5>मराठी लेखक, अभ्यासक व समीक्षक</h5>
                    </div>
                  </a>
                </div>
              </div>
              <div class="event_card">
                <div class="event_info">
                  <a
                    href="https://youtu.be/lOW3Q9x13kY"
                    target="blank"
                    style={{ textDecoration: "none" }}
                  >
                    <div class="event_info_img">
                      <img src={img.shivani} alt="" />
                      <div
                        class="overlay fa fa-youtube-play red-color"
                        aria-hidden="true"
                      >
                        {" "}
                        Youtube
                      </div>
                    </div>
                    <div class="event_info_name">
                      <h4>शिवानी बावकर</h4>
                      <h5>मराठी अभिनेत्री</h5>
                    </div>
                  </a>
                </div>
              </div>
              <div class="event_card">
                <div class="event_info">
                  <a
                    href="https://youtube.com/c/Rangawardhan"
                    target="blank"
                    style={{ textDecoration: "none" }}
                  >
                    <div class="event_info_img">
                      <img src={img.mestry} alt="" />
                      <div
                        class="overlay fa fa-youtube-play red-color"
                        aria-hidden="true"
                      >
                        {" "}
                        Youtube
                      </div>
                    </div>
                    <div class="event_info_name">
                      <h4>विनोद मेस्त्री</h4>
                      <h5>लेखक , सार्वजनिक वक्ता ,जीवन-व्यवसाय प्रशिक्षक</h5>
                    </div>
                  </a>
                </div>
              </div>
              <div class="event_card">
                <div class="event_info">
                  <a
                    href="https://youtu.be/n2B1Uq0KEtM"
                    target="blank"
                    style={{ textDecoration: "none" }}
                  >
                    <div class="event_info_img">
                      <img src={img.pranay} alt="" />
                      <div
                        class="overlay fa fa-youtube-play red-color"
                        aria-hidden="true"
                      >
                        {" "}
                        Youtube
                      </div>
                    </div>
                    <div class="event_info_name">
                      <h4>प्रणय सखदेव</h4>
                      <h5>मराठी लेखक, कवी, बालसाहित्यिक</h5>
                    </div>
                  </a>
                </div>
              </div>
              <div class="event_card">
                <div class="event_info">
                  <a
                    href="https://youtube.com/c/Rangawardhan"
                    target="blank"
                    style={{ textDecoration: "none" }}
                  >
                    <div class="event_info_img">
                      <img src={img.kashir} alt="" />
                      <div
                        class="overlay fa fa-youtube-play red-color"
                        aria-hidden="true"
                      >
                        {" "}
                        Youtube
                      </div>
                    </div>
                    <div class="event_info_name">
                      <h4>ज्ञानदेव काशिद</h4>
                      <h5>वक्ता</h5>
                    </div>
                  </a>
                </div>
              </div>
              <div class="event_card">
                <div class="event_info">
                  <a
                    href="https://youtu.be/mIie50tPGKY
                    "
                    target="blank"
                    style={{ textDecoration: "none" }}
                  >
                    <div class="event_info_img">
                      <img src={img.saurabhkarde} alt="" />
                      <div
                        class="overlay fa fa-youtube-play red-color"
                        aria-hidden="true"
                      >
                        {" "}
                        Youtube
                      </div>
                    </div>
                    <div class="event_info_name">
                      <h4>सौरभ कर्डे</h4>
                      <h5>शिवव्याख्याते</h5>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </section>
      </section>

      
      <section>
      <div class="minor_events" style={{
            backgroundImage: "linear-gradient(270deg, #28b8d5 0%,#020344 100%)",
          }}>
      <h1 class="heading">
            <span className="past">&ensp;रंगवर्धन २०२०-२१&ensp;</span>
          </h1>
      </div>
      <div class="minor_events" style={{
            backgroundImage: "linear-gradient(270deg, #28b8d5 0%,#020344 100%)",
          }}>
        <h1 class="heading" className="past">गप्पा आणि बरंच काही</h1>
      </div>
      <section id="online" style={{
            backgroundImage: "linear-gradient(270deg, #28b8d5 0%,#020344 100%)",
          }}>
        <section class="day1">
          <div class="allevents">
            <div class="event_card">
              <div class="event_info">
                <a href="https://youtu.be/B9U6yXV7T5o" target="blank" style={{textDecoration:'none'}}>
                  <div class="event_info_img">
                    <img src={img.rajeeva} alt=""/>
                    <div class="overlay fa fa-youtube-play red-color" aria-hidden="true"><p> Youtube</p>
                    </div>
                  </div>
                  <div class="event_info_name">
                    <h4>डाॅ.राजीव करंदीकर</h4>
                    <h5>गणितज्ज्ञ, संख्याशास्त्रज्ञ</h5>
                  </div>
                </a>
              </div>
            </div>
            <div class="event_card">
              <div class="event_info">
                <a href="https://youtu.be/vqWemOpjCYU" target="blank" style={{textDecoration:"none"}}>
                  <div class="event_info_img">
                    <img src={img.yashvant} alt=""/>
                    <div class="overlay fa fa-youtube-play red-color" aria-hidden="true"> Youtube</div>
                  </div>
                  <div class="event_info_name">
                    <h4>श्री.यशवंत कानेटकर</h4>
                    <h5>संगणकशास्त्रीय लेखक</h5>
                  </div>
                </a>
              </div>
            </div>
            <div class="event_card">
              <div class="event_info">
                <a href="https://youtu.be/3uHmaGz60-Y" target="blank" style={{textDecoration:'none'}}>
                  <div class="event_info_img">
                    <img src={img.sush} alt=""/>
                    <div class="overlay fa fa-youtube-play red-color" aria-hidden="true"> Youtube</div>
                  </div>
                  <div class="event_info_name">
                    <h4>सुशांत घाडगे</h4>
                    <h5>मराठी विनोदी कलाकार</h5>
                  </div>
                </a>
              </div>
            </div>
            <div class="event_card">
              <div class="event_info">
                <a href="https://youtu.be/aEO7aKWXGY4" target="blank" style={{textDecoration:'none'}}>
                  <div class="event_info_img">
                    <img src={img.dnyanadakadam} alt=""/>
                    <div class="overlay fa fa-youtube-play red-color" aria-hidden="true"> Youtube</div>
                  </div>
                  <div class="event_info_name">
                    <h4>ज्ञानदा कदम</h4>
                    <h5>वरिष्ठ मराठी पत्रकार</h5>
                  </div>
                </a>
              </div>
            </div>
            <div class="event_card">
              <div class="event_info">
                <a href="https://youtu.be/FtOvJVZ6lGo"target="blank" style={{textDecoration:'none'}}>
                  <div class="event_info_img">
                    <img src={img.sheetal} alt=""/>
                    <div class="overlay fa fa-youtube-play red-color" aria-hidden="true"> Youtube</div>
                  </div>
                  <div class="event_info_name">
                    <h4>शितल महाजन</h4>
                    <h5>पद्मश्री विजेत्या,भारतीय क्रीडापटू</h5>
                  </div>
                </a>
              </div>
            </div>
            <div class="event_card">
              <div class="event_info">
                <a href="https://youtu.be/gAM4Nf3X250"target="blank" style={{textDecoration:'none'}}>
                  <div class="event_info_img">
                    <img src={img.veena} alt=""/>
                    <div class="overlay fa fa-youtube-play red-color" aria-hidden="true"> Youtube</div>
                  </div>
                  <div class="event_info_name">
                    <h4>वीणा पाटील</h4>
                    <h5>VEENA WORLD, संस्थापक</h5>
                  </div>
                </a>
              </div>
            </div>
            <div class="event_card">
              <div class="event_info">
                <a href="https://youtu.be/ORHB5uSmWJU"target="blank" style={{textDecoration:'none'}}>
                  <div class="event_info_img">
                    <img src={img.kavita} alt=""/>
                    <div class="overlay fa fa-youtube-play red-color" aria-hidden="true"> Youtube</div>
                  </div>
                  <div class="event_info_name">
                    <h4>कविता लाड</h4>
                    <h5>मराठी, अभिनेत्री</h5>
                  </div>
                </a>
              </div>
            </div>
            <div class="event_card">
              <div class="event_info">
                <a href="https://youtu.be/bQWHSJNt-rQ"target="blank" style={{textDecoration:'none'}}>
                  <div class="event_info_img">
                    <img src={img.snehal} alt=""/>
                    <div class="overlay fa fa-youtube-play red-color" aria-hidden="true"> Youtube</div>
                  </div>
                  <div class="event_info_name">
                    <h4>स्नेहल प्रधान</h4>
                    <h5>भारतीय क्रिकेटपटू</h5>
                  </div>
                </a>
              </div>
            </div>
            <div class="event_card">
              <div class="event_info">
                <a href="https://youtu.be/rSTF7qjU74A"target="blank" style={{textDecoration:'none'}}>
                  <div class="event_info_img">
                    <img src={img.supriya} alt=""/>
                    <div class="overlay fa fa-youtube-play red-color" aria-hidden="true"> Youtube</div>
                  </div>
                  <div class="event_info_name">
                    <h4>सौ. सुप्रिया सुळे</h4>
                    <h5>संसदरत्न, खासदार</h5>
                  </div>
                </a>
              </div>
            </div>
            <div class="event_card">
              <div class="event_info">
                <a href="https://youtu.be/Lwrh-hfhX8c"target="blank" style={{textDecoration:'none'}}>
                  <div class="event_info_img">
                    <img src={img.ankita} alt=""/>
                    <div class="overlay fa fa-youtube-play red-color" aria-hidden="true"> Youtube</div>
                  </div>
                  <div class="event_info_name">
                    <h4>अंकिता वाकेकर</h4>
                    <h5>यूपीएस - सीएसई २०१९, ५४७ क्र.</h5>
                  </div>
                </a>
              </div>
            </div>
            <div class="event_card">
              <div class="event_info">
                <a href="https://youtu.be/nfnRZ6DQ0Rw"target="blank" style={{textDecoration:'none'}}>
                  <div class="event_info_img">
                    <img src={img.jayant} alt="jayantnaralikar"/>
                    <div class="overlay fa fa-youtube-play red-color" aria-hidden="true"> Youtube</div>
                  </div>
                  <div class="event_info_name">
                    <h4>श्री. जयंत नारळीकर</h4>
                    <h5>खगोलशास्त्रज्ञ, पद्मभूषण, पद्मविभूषण</h5>
                  </div>
                </a>
              </div>
            </div>
            <div class="event_card">
              <div class="event_info">
                <a href="https://youtu.be/zyRZiZ7pJMc"target="blank" style={{textDecoration:'none'}}>
                  <div class="event_info_img">
                    <img src={img.ramdan} alt=""/>
                    <div class="overlay fa fa-youtube-play red-color" aria-hidden="true"> Youtube</div>
                  </div>
                  <div class="event_info_name">
                    <h4>श्री. रामदास पाध्ये</h4>
                    <h5>बोलक्या बाहुल्यांचे अभिनेता</h5>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </section>
    </section>

      <section>
        <div
          class="minor_events"
          style={{
            backgroundImage: "linear-gradient(270deg, #28b8d5 0%,#020344 100%)",
          }}
        >
          <h1 className="past">घे उंच भरारी</h1>
        </div>
        <section
          id="online"
          style={{
            backgroundImage: "linear-gradient(270deg, #28b8d5 0%,#020344 100%)",
          }}
        >
          <section class="day1">
            <div class="allevents">
              <div class="event_card">
                <div class="event_info">
                  <a
                    href="https://youtu.be/Zlhl13l-Lt4"
                    target="blank"
                    style={{ textDecoration: "none" }}
                  >
                    <div class="event_info_img">
                      <img src={img.dr} alt="" />
                      <div
                        class="overlay fa fa-youtube-play red-color"
                        aria-hidden="true"
                      >
                        {" "}
                        Youtube
                      </div>
                    </div>
                    <div class="event_info_name">
                      <h4>डॉ. अभय बंग</h4>
                      <h5>संशोधक, पद्मश्री महाराष्ट्रभूषण</h5>
                    </div>
                  </a>
                </div>
              </div>
              <div class="event_card">
                <div class="event_info">
                  <a
                    href="https://youtu.be/NzDOKe9quTw"
                    target="blank"
                    style={{ textDecoration: "none" }}
                  >
                    <div class="event_info_img">
                      <img src={img.sharad} alt="" />
                      <div
                        class="overlay fa fa-youtube-play red-color"
                        aria-hidden="true"
                      >
                        {" "}
                        Youtube
                      </div>
                    </div>
                    <div class="event_info_name">
                      <h4>श्री.शरद तांदळे</h4>
                      <h5>उद्योजक , प्रेरक वक्ते</h5>
                    </div>
                  </a>
                </div>
              </div>
              <div class="event_card">
                <div class="event_info">
                  <a
                    href="https://youtu.be/zv1zTZQEFL8"
                    target="blank"
                    style={{ textDecoration: "none" }}
                  >
                    <div class="event_info_img">
                      <img src={img.rajesh} alt="" />
                      <div
                        class="overlay fa fa-youtube-play red-color"
                        aria-hidden="true"
                      >
                        {" "}
                        Youtube
                      </div>
                    </div>
                    <div class="event_info_name">
                      <h4>राजेश पाटील</h4>
                      <h5>IAS अधिकारी (२००५ बॅच)</h5>
                    </div>
                  </a>
                </div>
              </div>
              <div class="event_card">
                <div class="event_info">
                  <a
                    href="https://youtu.be/qVLxdhDxptU"
                    target="blank"
                    style={{ textDecoration: "none" }}
                  >
                    <div class="event_info_img">
                      <img src={img.raj} alt="" />
                      <div
                        class="overlay fa fa-youtube-play red-color"
                        aria-hidden="true"
                      >
                        {" "}
                        Youtube
                      </div>
                    </div>
                    <div class="event_info_name">
                      <h4>डॉ. राजेंद्र भारुड</h4>
                      <h5>IAS अधिकारी (२०१३ बॅच)</h5>
                    </div>
                  </a>
                </div>
              </div>
              <div class="event_card">
                <div class="event_info">
                  <a
                    href="https://youtu.be/Gm15V1BZ6xg"
                    target="blank"
                    style={{ textDecoration: "none" }}
                  >
                    <div class="event_info_img">
                      <img src={img.ash} alt="" />
                      <div
                        class="overlay fa fa-youtube-play red-color"
                        aria-hidden="true"
                      >
                        {" "}
                        Youtube
                      </div>
                    </div>
                    <div class="event_info_name">
                      <h4>आशुतोष पत्की</h4>
                      <h5>मराठी अभिनेते</h5>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </section>
      </section>
    </div>
  );
};

export default VirtualEvents;
