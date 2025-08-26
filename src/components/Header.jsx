// ------------------ Imports ------------------
import 'boxicons/css/boxicons.min.css';
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { BorderBeam } from "@/components/magicui/BorderBeam";
import { AuroraText } from "@/components/magicui/AuroraText";

// ------------------ Component ------------------
const Header = () => {
  const location = useLocation();

  // ------------------ Mobile Menu Functions ------------------
  const toggleMobileMenu = () => {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu?.classList.toggle('hidden');
  };

  const closeMobileMenu = () => {
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.add('hidden');
    }
  };

  // ------------------ Active Link Style ------------------
  const navLinkClass = (path) =>
    `text-base tracking-wider transition-colors hover:text-[#4D4DFF] ${
      location.pathname === path ? "text-[#4D4DFF]" : ""
    }`;

  return (
    <header className="flex justify-between items-center py-4 px-4 lg:px-20">
      
      {/* Logo */}
      <Link to="/">
        <AuroraText className="text-4xl md:text-4xl lg:text-5xl font-light m-0 2xl:ml-44">
          HSC CARE
        </AuroraText>
      </Link>

      {/* ------------------ Desktop Navigation ------------------ */}
      <div className="relative inline-block rounded-lg overflow-hidden border border-gray-900">
        <BorderBeam duration={8} size={100} className="absolute inset-0 pointer-events-none from-transparent via-[#3737e7] to-transparent rounded-lg" />
        <BorderBeam duration={8} delay={4} size={100} className="absolute inset-0 pointer-events-none from-transparent via-[#4D4DFF] to-transparent rounded-lg" />
        
        <nav className="hidden md:flex items-center gap-12 2xl:mr-3 relative z-10 px-6 py-3">
          <Link className={navLinkClass("/")} to="/">Home</Link>
          <Link className={navLinkClass("/carousel")} to="/carousel">Carousel</Link>
          <Link className={navLinkClass("/aboutus")} to="/aboutus">About Us</Link>
          <Link className={navLinkClass("/ourteachers")} to="/ourteachers">Our Teachers</Link>
          <Link className={navLinkClass("/whyus")} to="/whyus">Why Us</Link>
        </nav>
      </div>

      {/* ------------------ Contact Us Button ------------------ */}
      <Link
        to="/contact"
        className={`hidden md:inline-flex relative items-center justify-center bg-black py-3 px-8 rounded-full font-medium tracking-wide text-sm sm:text-lg hover:bg-slate-700 transition-colors duration-300 z-50 2xl:mr-48 overflow-hidden ${
          location.pathname === "/contact" ? "text-[#4D4DFF]" : "text-black"
        }`}
      >
        <BorderBeam duration={5} size={80} className="absolute inset-0 pointer-events-none from-transparent via-[#eee4e4] to-transparent" style={{ borderRadius: '9999px' }} />
        <span className="relative z-10 flex items-center gap-1">
          <AuroraText>Contact Us</AuroraText>
          <i className="bx bx-log-in text-white"></i>
        </span>
      </Link>

      {/* ------------------ Mobile Menu Button ------------------ */}
      <button onClick={toggleMobileMenu} className="md:hidden text-3xl p-2 z-50">
        <i className='bx bx-menu'></i>
      </button>

      {/* ------------------ Mobile Menu ------------------ */}
      <div
        id="mobileMenu"
        className="hidden fixed top-0 bottom-0 right-0 left-0 pt-20 md:hidden z-40 bg-black bg-opacity-30 backdrop-blur-md"
      >
        <nav className="flex flex-col gap-6 items-center">
          <Link className={navLinkClass("/")} to="/" onClick={closeMobileMenu}>Home</Link>
          <Link className={navLinkClass("/carousel")} to="/carousel" onClick={closeMobileMenu}>Carousel</Link>
          <Link className={navLinkClass("/aboutus")} to="/aboutus" onClick={closeMobileMenu}>About Us</Link>
          <Link className={navLinkClass("/ourteachers")} to="/ourteachers" onClick={closeMobileMenu}>Our Teachers</Link>
          <Link className={navLinkClass("/whyus")} to="/whyus" onClick={closeMobileMenu}>Why Us</Link>
          
          {/* Mobile Contact Button */}
          <Link
            to="/contact"
            onClick={closeMobileMenu}
            className="relative w-[95%] sm:w-48 h-10 rounded-full overflow-hidden flex items-center justify-center z-50"
          >
            <BorderBeam duration={6} size={100} className="absolute inset-0 from-transparent via-[#eee4e4] to-transparent" />
            <BorderBeam beamHeight={300} duration={6} delay={3} size={100} className="absolute inset-0 from-transparent via-purple-500 to-transparent" />
            <div className="absolute inset-[3px] bg-[#161515] rounded-full flex items-center justify-center gap-2 text-white z-10">
              <i className="bx bx-log-in"></i>
              <AuroraText>Contact Us</AuroraText>
            </div>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
