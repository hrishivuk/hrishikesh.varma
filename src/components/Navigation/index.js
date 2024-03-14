import React, { useState, useEffect } from "react";
import logo from "../../assets/logos/logo2.svg";
import { Link } from "react-scroll";
import Button from "../Button";
import { FaBars, FaTimes } from "react-icons/fa";

function Navigation() {
  const [activeSection, setActiveSection] = useState("");
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSectionId = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 70;
        const sectionBottom = section.offsetTop + section.offsetHeight - 70;
        const scrollPosition = window.scrollY;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          currentSectionId = section.id;
        }
      });

      setActiveSection(currentSectionId);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-blackPrimary text-whitePrimary flex justify-between items-center py-4 px-6 z-10">
      <div className="flex items-center gap-8">
        <img src={logo} alt="logo" className="h-10 w-auto" />
        <div className={`hidden md:flex items-center gap-6 ${showMenu ? "hidden" : ""}`}>
          <NavLink to="home" active={activeSection === "home"}>
            Home
          </NavLink>
          <NavLink to="about" active={activeSection === "about"}>
            About Me
          </NavLink>
          <NavLink to="resume" active={activeSection === "resume"}>
            Resume
          </NavLink>
          <NavLink to="works" active={activeSection === "works"}>
            Works
          </NavLink>
        </div>
      </div>
      <div className="md:hidden">
        {showMenu ? (
          <FaTimes className="text-whitePrimary text-2xl cursor-pointer" onClick={toggleMenu} />
        ) : (
          <FaBars className="text-whitePrimary text-2xl cursor-pointer" onClick={toggleMenu} />
        )}
      </div>
      <div className={`md:hidden ${showMenu ? "block" : "hidden"}`}>
        <div className="flex flex-col items-center gap-4">
          <NavLink to="home" active={activeSection === "home"} onClick={toggleMenu}>
            Home
          </NavLink>
          <NavLink to="about" active={activeSection === "about"} onClick={toggleMenu}>
            About Me
          </NavLink>
          <NavLink to="resume" active={activeSection === "resume"} onClick={toggleMenu}>
            Resume
          </NavLink>
          <NavLink to="works" active={activeSection === "works"} onClick={toggleMenu}>
            Works
          </NavLink>
          <NavLink to="contact" onClick={toggleMenu}>
            <Button className="bg-whiteSecondary text-blackSecondary">
              Contact Me
            </Button>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

// Custom NavLink component for smooth scrolling
const NavLink = ({ to, children, active, onClick }) => (
  <Link
    to={to}
    spy={true}
    smooth={true}
    offset={-70} // Adjust the offset according to your layout
    duration={500}
    className={`cursor-pointer hover:text-imageBackground transition-colors duration-300 p-3 ${
      active ? "text-gray-300" : ""
    }`}
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Navigation;
