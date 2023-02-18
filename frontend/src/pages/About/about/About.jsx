import "./about.css";
import aboutimage from "./aboutimage.jpg"

const About = () => {
  return (
   <div className="a">
      <div className="a-left">
        {/* <div className="a-card bg"></div> */}
        <div className="a-card">
          <img
            src={aboutimage} style={{ border: "3px solid rgb(255, 174, 66"}}
            alt=""
            className="a-img" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
          />
        </div>
      </div>
      <div className="a-right">
        <p className="a-sub " data-aos="fade-left" data-aos-duration="1500" style={{color:"white"}}>
        ‘मराठी वाड़्मय मंडळ’ नावाने मराठीचा जागर अनेक वर्ष करत २००१ मध्ये याला प्रत्येक मराठी माणसाच्या जीवनात रंग भरणारं म्हणून ‘रंगवर्धन’ नामकरण करण्यात आलं. अनेक वर्षांच्या अखंड प्रयत्नांनी रंगवर्धनने फक्त महाविद्यालयातच नव्हे तर मुंबईतील मानाच्या मराठी सोहळ्यात आपलं नाव कोरलं. 
        </p>
        <p className="a-desc " data-aos="fade-left" data-aos-duration="2000" style={{color:"white"}}>
        तमाम महाराष्ट्रातील रसिक प्रेक्षक आणि राष्ट्रीय पातळीवर नाट्य सादर करणाऱ्या अनेक महाविद्यालयांना, महाराष्ट्रातील उत्तम गायकांना आणि मराठी सिनेसृष्टीतील अनेक गुणवंत कलाकारांना भुरळ पडली आहे. या प्रवासात अभियंत्यांसह महाराष्ट्रातील असंख्य दिग्गजांनी उपस्थिती लावून रंगवर्धनच्या यशोगाथेस हातभार लावला. मनोरंजनासह प्रबोधन आणि प्रोत्साहन, मार्गदर्शनपर कार्य रंगवर्धन नेहमीच करत आलं आहे.
        </p>
      </div>
      </div>
  );
};

export default About;
