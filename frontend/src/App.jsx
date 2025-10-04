import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero.jsx";
import HeroCard from "./components/HeroCard/HeroCard.jsx";
import planetVideo from "./assets/GSFC_20190627_TESS_m13223_L98-59b_Full_Rotation~orig.mp4";
import Rapidscat from "./components/Rapidscat/Rapidscat.jsx";
import Satelite from "./components/Satelite/Satelite.jsx";
import Footer5 from "./components/Footer/Footer5.jsx";
import DataPortal from "./components/DataPortal/DataPortal.jsx";
import Visualizer from "./pages/Visualizer/Visualizer.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

const LandingPage = () => (
  <>
    <HeroCard />
    <Rapidscat />
    <Satelite />
  </>
);

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="">
      <Routes>
        <Route path="/" element={
          <>
            <div className="h-[700px] relative">
              <video
                autoPlay
                loop
                muted
                className="fixed right-0 top-0 h-[700px] w-full object-cover z-[-1]"
              >
                <source src={planetVideo} type="video/mp4" />
              </video>
              <Navbar />
              <Hero />
            </div>
            <LandingPage />
            <Footer5 />
          </>
        } />
        <Route path="/byod" element={
          <>
            <div className="h-[700px] relative">
              <video
                autoPlay
                loop
                muted
                className="fixed right-0 top-0 h-[700px] w-full object-cover z-[-1]"
              >
                <source src={planetVideo} type="video/mp4" />
              </video>
              <Navbar />
              <DataPortal />
            </div>
            <Footer5 />
          </>
        } />
        <Route path="/visualizer" element={<Visualizer />} />
      </Routes>
    </div>
  );
};

export default App;
