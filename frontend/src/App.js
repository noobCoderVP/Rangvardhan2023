import React from "react";
import "./App.css";
import Sponsors from "./pages/Sponsor/Sponsor";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./pages/home/Home";
import EventsMain from "./pages/Events/EventsMain";
import DecemberToRemember from "./pages/Events/DecemberToRemember";
import AnnualEvents from "./pages/Events/AnnualEvents";
import VirtualEvents from "./pages/Events/VirtualEvents";
import ContactUs from "./pages/ContactUs/ContactUs";
import AboutMain from "./pages/About/AboutMain";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Ourteam from "./pages/Team/OurTeam/OurTeam";
import CoreCommittee from "./pages/Team/CoreCommittee/CoreCommittee";
import Gallery from "./pages/Gallery/gallery";
import "./js/script";
import Natya from "./pages/Natyavardhan/Natyavardhan";

AOS.init();
function App() {
    return (
        <>
            <Router>
                <div className="App">
                    <Navbar />
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/about" element={<AboutMain />} />
                        <Route path="/sponsors" element={<Sponsors />} />
                        <Route path="/team" element={<Ourteam />} />
                        <Route
                            path="/corecommittee"
                            element={<CoreCommittee />}
                        />
                        <Route path="/events" element={<EventsMain />} />
                        <Route
                            path="/decembertoremember"
                            element={<DecemberToRemember />}
                        />
                        <Route
                            path="/annualevents"
                            element={<AnnualEvents />}
                        />
                        <Route path="/halloffame" element={<VirtualEvents />} />
                        <Route path="/contact" element={<ContactUs />} />
                        <Route path="/gallery" element={<Gallery />} />
                        <Route path="/natyavardhan" element={<Natya />} />
                    </Routes>
                </div>
            </Router>
            <Footer />
        </>
    );
}

export default App;
