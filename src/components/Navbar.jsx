import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="navbar-container">
      <div>
        <h1 className="navbar-brand">EA</h1>
      </div>
      <ul className={nav ? "navbar-menu active" : "navbar-menu"}>
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      <div onClick={handleClick} className="navbar-toggle">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      <div className="navbar-social">
        <ul>
          <li className="navbar-social-item">
            <a href="https://www.linkedin.com/in/amandineetchartdinetch/">
              <FaLinkedin size={30} />
              <span>Linkedin</span>
            </a>
          </li>
          <li className="navbar-social-item">
            <a href="https://github.com/Dinetch2023">
              <FaGithub size={30} />
              <span>Github</span>
            </a>
          </li>
          <li className="navbar-social-item">
            <a href="mailto:dinetch2023@gmail.com">
              <HiOutlineMail size={30} />
              <span>Email</span>
            </a>
          </li>
          <li className="navbar-social-item">
            <a href="tel:+33626612914">
              <BsFillPersonLinesFill size={30} />
              <span>Phone</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
