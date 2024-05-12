import React from "react";
import moi from "../assets/moi.png";
import { Link } from "react-scroll";
import Navbar from "./Navbar";

import "./Home.css"; // Importez votre fichier CSS

function Home() {
  return (
    <div name="home" className="home-container">
      <div className="home-content">
        <div className="home-text">
          <div className="home-text-content">
            <h2 className="home-title">Je suis un Web Developer JavaScript</h2>
            <p className="home-description">
              Je me forme avec la Wild Code School pour une reconversion
              professionnelle optimale. <br /> Actuellement, j'aime travailler
              sur des applications web en utilisant des technologies comme
              React, Next.js.
            </p>
            <div>
              <Link to="about" smooth duration={500} className="home-button">
                À propos de moi
              </Link>
            </div>
          </div>
          <div>
            <img src={moi} alt="mon profil" className="home-image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
