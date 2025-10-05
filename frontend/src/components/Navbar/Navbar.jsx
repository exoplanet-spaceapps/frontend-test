import React from "react";
import { Link } from "react-router-dom";
import Logo2 from "../../assets/unnamed-Photoroom.png";

const Navbar = () => {
  return (
    <>
      <nav
        data-aos="fade-down"
        className="fixed top-0 right-0 w-full z-50 bg-black/10 backdrop-blur-sm py-4 sm:py-0"
      >
        <div className="container">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-4 text-white font-bold text-2xl">
              <img src={Logo2} alt="Exoplanet Explorer" className="w-10" />
              <span>Exoplanet Explorer</span>
            </Link>
            <div className="text-white hidden sm:block">
              <ul className="flex items-center gap-6 text-xl py-4 ">
                <li>
                  <a href="#">About</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
