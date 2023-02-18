import React from "react";
import "./event.css";
import img from "./images";

const DecemberToRemember = () => {
  return (
    <div>
      <section className="major_events">
        <section>
          <div>
            <h1
              style={{
                color: "#fff",
                backgroundImage: 'linear-gradient(270deg, #28b8d5 0%,#020344 100%)',
                paddingTop:'3%'
              }}
            >
              <div className="past" style={{fontSize:'180%'}}>  दैदिप्यवान</div>
              <span
                style={{
                  color: "#FFDB58",
                  fontSize: "22px",
                  fontWeight: "bold",
                }}
              >
                
              </span>
              <div className="past" style={{margin:'1%',fontSize:'180%'}}>रंगवर्धन</div>
              <div className="past"  style={{fontSize:'180%'}}>सोहळा ! </div>
            </h1>
          </div>
          <section id="day_1">
            <section class="day1">
              <div class="event_day">
                <h3 className="past" style={{fontSize:'160%'}} >
                  दिवस - १
                </h3>
              </div>
              <div class="events">
                <div class="event_card">
                  <div class="event_info">
                    <div class="event_info_img">
                      <img src={img.inaug} alt="" />
                    </div>
                    <div class="event_info_name">
                      <h4>महाउद्घाटन सोहळा</h4>
                      <h5 className="dectoremhead">
                      असे म्हणतात की’ पहिली छाप ही शेवटची छाप असते; आणि रंगवर्धनची पहिली छाप तर महाउद्घाटन सोहळ्यात दिसते.ढोल-ताशांच्या गजरात, टाळ मृदुंगाच्या निनादात पालखी वारीचे प्रदर्शन सर्वांसमोर केले जाते.हा सुंदर सोहळा पाहून पुढचे ३ दिवस रंगवर्धनमध्ये सहभागी होण्याची उत्सुकता सर्वांच्या चेहऱ्यावरती दिसून येते.
                      </h5>
                    </div>
                  </div>
                </div>
                <div class="event_card">
                  <div class="event_info">
                    <div class="event_info_img">
                      <img src={img.palakhi} alt="" />
                    </div>
                    <div class="event_info_name" style={{paddingBottom:'8%',paddingTop:'2%'}}>
                      <h4>पालखी सोहळा</h4>
                      <h5 className="dectoremhead">
                        नटरंग देवताचे स्मरण करून दरवर्षी VJTI तसेच मुंबई मधील
                        विविध महाविद्यालयातील स्पर्धक आपली नृत्य कला सिद्ध
                        करण्यासाठी ‘नृत्याविष्कार’ या रंगवर्धन आयोजित
                        कार्यक्रमात सहभागी होतात. सर्व प्रकारच्या संगीतांवर,
                        नृत्य पद्धती पाहून आपले डोळे दिपवण्याची संधी प्रेक्षक
                        कधीही सोडत नाहीत !
                      </h5>
                    </div>
                  </div>
                </div>
                <div class="event_card">
                  <div class="event_info">
                    <div class="event_info_img">
                      <img src={img.abhangmaifil} alt="" />
                    </div>
                    <div class="event_info_name">
                      <h4>पारंपरिक अभंग मैफिल</h4>
                      <h5>
                      कधीही भंग न होणारे म्हणजेच ‘अभंग’.आजच्या २१व्या शतकात संत परंपरा, वारकरी, किर्तन अशा दुर्मिळ संस्कृतींची जाणीव ठेवून रंगवर्धनने ‘पारंपरिक अभंग मैफिल’ असा कार्यक्रम साजरा केला. पारंपरिक अभंगांनी भरलेली ही मैफिल साऱ्यांठी दैदीप्यमान ठरली.पांडूरंग आणि विठ्ठलाचं नाम मुखी घेत संपूर्ण व्हीजेटीआय देह-भान हरपून या मैफिलीत मंत्रमुग्ध झालं.
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>
          <section id="day_1">
            <section class="day1" >
              <div class="event_day">
                <h3 className="past"  style={{fontSize:'160%'}}>
                  दिवस - २
                </h3>
              </div>
              <div class="events">
                <div class="event_card">
                  <div class="event_info">
                    <div class="event_info_img">
                      <img src={img.squid} alt="" />
                    </div>
                    <div class="event_info_name">
                      <h4>पारंपरिक Squid Game</h4>
                      <h5 className="dectoremhead">
                      संस्कृती आणि परंपरेला धरून रंगवर्धनने आधूनिक काळातील 'स्क्विड गेम्'ला पारंपारिक देत ‘पारंपरिक Squid Game’ हा खेळ आखला. लोगो टिअरिंग, संगीत खुर्ची, लगोरी, हॅापस्कॅाच, रिले : आंधळी दिशादर्शक शर्यत, लिंबू चमचा, तीन पायाची शर्यत आणि शेवटी भटकंती ह्या अनुक्रमात खेळ खेळले गेले.
                      </h5>
                    </div>
                  </div>
                </div>
                <div class="event_card">
                  <div class="event_info">
                    <div class="event_info_img">
                      <img src={img.nrityavishkar} alt="" />
                    </div>
                    <div class="event_info_name">
                      <h4 >आंतरविभागीय नृत्याविष्कार</h4>
                      <h5>
                      परंपरेपासून आधूनिक पर्यंत सगळ्या नृत्य प्रकारांवर भर देत रंगवर्धनने हा उपक्रम केला. व्हीजेटीआय च्या प्रत्येक विभागातून एक असे सर्व विभागातून एकूण ११ सादरीकरणं केली गेली. एकापेक्षा एक नृत्य अदाकारीने, मराठी गाण्यांवर नृत्य करून, स्पर्धकांनी सर्र्वांना घायाळ केलं!
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>
          <section id="day_1">
            <section class="day1">
              <div class="event_day">
                <h3 className="past"  style={{fontSize:'160%'}}>
                  दिवस -३
                </h3>
              </div>
              <div class="events">
                <div class="event_card">
                  <div class="event_info">
                    <div class="event_info_img">
                      <img src={img.sing} alt="" />
                    </div>
                    <div class="event_info_name">
                      <h4>गाणे तराणे</h4>
                      <h5>
                      संगीतकार व गायकाच्या सुसंवादी आवाजाला दाद देण्यासाठी रंगवर्धन तर्फे ‘गाणे तराणे’ आयोजीत केले जाते.आपल्या तसेच इतर महाविद्यालयातील विद्यार्थी इथे येऊन आपली  गायनकला सादर करतात. शास्त्रीय संगीतासह पारंपारिक संगीतांनी भरलेला हा कार्यक्रम प्रेक्षकांचे काण तृप्त करणारा ठरतो.
                      </h5>
                    </div>
                  </div>
                </div>
                <div class="event_card">
                  <div class="event_info">
                    <div class="event_info_img">
                      <img src={img.standup} alt="" />
                    </div>
                    <div class="event_info_name">
                      <h4>Standup Comedy</h4>
                      <h5>
                        चार दिवसांचा भव्य दिव्य दिमाखदार सोहळ्याची सुरुवात
                        करणारा कार्यक्रम म्हणजे उद्घाटन सोहळा ! दीप्रज्वलनाने
                        सुरुवात होऊन, पालखी घेऊन स्वतः प्रमुख पाहुणे जाताना,
                        भजनाच्या सुमधुर आवाजात, ढाेल ताशांच्या गजरात, मर्दानी
                        खेळांच्या चित्तथरारक दृश्यात डोळ्यांचे पारणे फेडणारा असा
                        एक अद्भुत सोहळा !
                      </h5>
                    </div>
                  </div>
                </div>
                <div class="event_card">
                  <div class="event_info">
                    <div class="event_info_img">
                      <img src={img.skit} alt="" />
                    </div>
                    <div class="event_info_name">
                      <h4>Skit Competition</h4>
                      <h5>
                        नटरंग देवताचे स्मरण करून दरवर्षी VJTI तसेच मुंबई मधील
                        विविध महाविद्यालयातील स्पर्धक आपली नृत्य कला सिद्ध
                        करण्यासाठी ‘नृत्याविष्कार’ या रंगवर्धन आयोजित
                        कार्यक्रमात सहभागी होतात. सर्व प्रकारच्या संगीतांवर,
                        नृत्य पद्धती पाहून आपले डोळे दिपवण्याची संधी प्रेक्षक
                        कधीही सोडत नाहीत !
                      </h5>
                    </div>
                  </div>
                </div>
                <div class="event_card">
                  <div class="event_info">
                    <div class="event_info_img">
                      <img src={img.bakshis} alt="" />
                    </div>
                    <div class="event_info_name">
                      <h4 >बक्षिस वितरण सोहळा</h4>
                      <h5 className="dectoremhead">
                      सुत्रसंचालनाच्या मधूर वाणीसह, कानावर पडणाऱ्या टाळ्यांच्या कडकडाटासह आणि जिंकण्याच्या जल्लोषात सर्व प्रमुख पाहुण्यांच्या हस्ते विजेत्यांचं रंगवर्धनतर्फे अभिनंदन करण्यात आलं. सन्मानचिन्ह, रोख रक्कम पारितोषिकेसह छत्रपती शिवाजी महाराजांच्या जीवनावरील ऐतिहासिक पुस्तके वारसा जपत पुनःश्च हरिओम् करण्यासाठी विजेत्यांना देण्यात आली.
                      </h5>
                    </div>
                  </div>
                </div>
                <div class="event_card">
                  <div class="event_info">
                    <div class="event_info_img">
                      <img src={img.sparshband} alt="" />
                    </div>
                    <div class="event_info_name">
                      <h4>स्पर्श दि बॅण्ड</h4>
                      <h5>
                      स्पर्श : दि बॅण्ड हा मुंबईतील मराठीसाठी प्रसिद्ध असलेला सर्वोत्तम ग्रुप! रंगवर्धनने या वर्षी ‘स्पर्श दि बॅण्ड’ तर्फे बॅण्ड कॅान्सर्टचे आयोजन केले.यावेळी तर पहिल्यांदाच बॅण्ड आयोजित करत मराठी गाण्यांवर थिरकायला लावणारं रंगवर्धन वेगळंच होतं. व्हीजेटीआय प्रांगणातील कोपरा न कोपरा भरत, सगळे रंगवर्धनला समारोप देत,आनंद व्यक्त करत, कुठलाही भेदभाव न करता ह्या कॅान्सर्टमध्ये सहभागी होत होते. 
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </section>
      </section>
    </div>
  );
};

export default DecemberToRemember;
