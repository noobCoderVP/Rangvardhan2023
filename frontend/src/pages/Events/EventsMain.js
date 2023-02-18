import React from "react";
import "./EventsMain.css";
import VirtualEvents from "../../images/Virtual Events.png";
import AnnualEvents from "../../images/Annual Event.png";
import DecemberToRemember from "../../images/December To Remember - Events - Rangawardhan VJTI.jpg";
import "./event.css";
import rangakatta from "./rangakatta.jpg";
import bhatkanti from "./bhatkanti.jpg";
import shubharambh from "./shubharambh.JPG";

const EventsMain = () => {
  return (
    <div className="wholeevent" style={{ color: "black", outline: "none" }}>
      <section className="event1">
        <div className="yearly_events">
        <div className="section-title" data-aos="zoom-in-up"  >
        <h3 className=" past" style={{paddingTop:"2vw"}} >
          Our  Events
        </h3>
      </div>
        </div>
        <section id="all_events">
          <section className="allevents">
            <div className="events">
              <div className="allevent_card">
                <div className="event_info">
                  <div className="event_info_img">
                    <img src={shubharambh} alt="" />
                  </div>
                  <div className="event_info_name">
                    <h4 style={{fontFamily:"Gotu"}}>शुभारंभ</h4>
                    <h5  style={{fontFamily:"Gotu"}}>
                    अनेक वर्ष सातत्याने मराठीचा गौरव करत आलेला रंगवर्धन, २०२२-२३ मध्ये नवा इतिहास रचण्यासाठी सज्ज झाला. या सोनेरी पर्वाच्या शुभारंभाच्या सोहळ्याचे साक्षीदार झाले ते म्हणजे मराठी BIG BOSS महेश मांजरेकर सर.त्यानंतर झालेल्या नाट्यवर्धन च्या दमदार अश्या Harlequin या एकांकिकेने तर शुभारंभाला एक नवे जोशच दिले!एवढेच नव्हे तर DJच्या तालात साऱ्यांनी मौज करत रंगवर्धन २०२२-२३च्या या पर्वाचा एक नव्या संकल्पनेसह शुभारंभ केला व एका नव्या मराठी अध्यायाची सुरुवात झाली..
                    </h5>
                  </div>
                </div>
              </div>
              <div className="allevent_card">
                <div className="event_info">
                  <div className="event_info_img">
                    <img src={rangakatta} alt="" />
                  </div>
                  <div className="event_info_name">
                    <h4  style={{fontFamily:"Gotu"}}>रंगा कट्टा</h4>
                    <h5>
                    शुभारंभाच्या एका भव्य दिव्य सोहळ्या नंतर व्ही.जे.टी.आय महाविद्यालयात रंगवर्धन २०२२-२३ च्या परिवाराने रंगाकट्टा हा उपक्रम राबवला! अभियांत्रिकी च्या या विश्वात प्रथम वर्षीय विद्यार्थी आणि थेट द्वितीय वर्षात प्रवेश घेणाऱ्या विद्यार्थ्यांमध्ये रंगवर्धनने विरंगुळा व उत्साह तर निर्माण केलेच, पण त्या बरोबर त्यांचे कला, गुण, छंद जोपसण्यात ही मदत केली.आपला सांस्कृतिक वारसा सांगत सर्वांची ओळख करून घेत त्यांच्यात एक नवा उत्साह निर्माण करण्यासाठी रंगा कट्टा सारखा असा हा आगळवेगळा कट्टा जमवला गेला….
                    </h5>
                  </div>
                </div>
              </div>
              <div className="allevent_card">
                <div className="event_info">
                  <div className="event_info_img">
                    <img src={bhatkanti} alt="" />
                  </div>
                  <div className="event_info_name">
                    <h4  style={{fontFamily:"Gotu"}}>भटकंती </h4>
                    <h5>
                    एकमेकांसोबत परिचय करून २०२२-२३ चा रंगवर्धन परिवार भक्कम करत, हा प्रवास आनंदाचा बनवायला भटकंती चा कार्यक्रम आखण्यात आला. खजिना शोधण्यासाठी सर्व treasure hunters चे संघ आपल्या महाविद्यालयाची भटकंती करत, रहस्ये सोडवट अंतिम खजिन्या पर्यंत पोहचण्याचा प्रयत्न करत होते. यात आता वेगवेगळे संघ होतेच आणि त्यांची नावे पण तशीच मजेदार होती कोणी नटरंग, जोगवा तर कोणी दुनियादारी! अशी ही दुनियादारी शिकवत भटकंतीने सर्व स्पर्धकांना रंगवर्धनशी एकरूप केले......
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </section>
      <div
        className="events_tab"
        style={{ color: "black", backgroundColor: "#000", outline: "none" }}
      ></div>
      <div className="section-title" data-aos="zoom-in-up">
        <h3 className="past" style={{ marginTop: "5%" }}>
          Our Past Events
        </h3>
      </div>
      <div className="events-container">
        <div className="wrapper">
          <div className="card">
            <a href="/decembertoremember">
              <img src={DecemberToRemember} alt="" />
              <div className="info">
                <h1 className="info-t">December to Remember</h1>
              </div>
            </a>
          </div>
          <div className="card">
            <a href="/annualevents">
              <img src={AnnualEvents} alt="" />
              <div className="info">
                <h1 className="info-t">Annual Events</h1>
              </div>
            </a>
          </div>
          <div className="card">
            <a href="/halloffame">
              <img src={VirtualEvents} alt="" />
              <div className="info">
                <h1 className="info-t">Hall of Fame</h1>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsMain;
