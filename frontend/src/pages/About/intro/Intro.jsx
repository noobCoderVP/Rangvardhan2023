import "./intro.css";
import ReactPlayer from "react-player";


const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
              <h1 className="animate-charcter center" data-aos="fade-right" data-aos-duration="3000">रंगवर्धन</h1>
          <p className="i-desc test" data-aos="fade-right" data-aos-duration="2000" style={{color:"white"}}>
          वीरमाता जिजाबाई टेक्नॉलॉजिकल इन्स्टिट्यूट मध्ये गेल्या २१ वर्षापासून अविरत कार्यरत असणारी रंगवर्धन ही एक मराठी संस्कृती जपणारी आणि राजभाषेचा आवाज टिकवणारी समिती ! मराठी संस्कृतीचा सन्मान करणारं मराठी व्यासपीठ म्हणून नेहमीच प्रत्येक मराठी मनात रंगवर्धनने घर केलं आहे. देशातील एक सर्वोत्तम अभियांत्रिकी महाविद्यालय असूनही मराठीसाठी काम करण्यास रंगवर्धन बांधिल आहे. मराठी कलावंतांना, गौरवास्पद काम करणाऱ्या अद्वितीय व्यक्तिमत्त्वांना तसेच अभियंत्यांच्या कलागुणांना वाव देणारं रंगवर्धन !
          </p>
        </div>
      </div>
      <div className="i-right">
        <ReactPlayer url="https://www.youtube.com/watch?v=LNyfc1-2FDA" style={{ border: "2px solid rgb(255, 174, 66"}} className="video" controls={true}  data-aos="zoom-in" data-aos-duration="3000" />
      </div>
    </div>
  );
};

export default Intro;
