import React from "react";
import "./About.css"; // Importez votre fichier CSS
import Navbar from "./Navbar";

function About() {
  return (
    <div name="about" id="about" className="about-container">
      <div className="about-content">
        <div className="about-header">
          <p className="about-title">À propos</p>
        </div>
        <div className="about-description">
          <div className="about-text">
            <p>
              Bonjour. Je suis Amandine ETCHART, enchantée de vous rencontrer.{" "}
              <br />
              N'hésitez pas à explorer mon portfolio.
            </p>
          </div>
          <div className="about-text">
            <p>
              Issue d'une reconversion professionelle. <br />
              Développeuse de logiciels avec de l'expérience dans la
              construction d'applications Web réactives et évolutives. <br /> Je
              maîtrise les principes et les pratiques de l'UI/UX.
            </p>
          </div>
          <div className="about-text">
            <p>
              Je suis passionnée par l'apprentissage continu et j'aime
              travailler sur des projets stimulants qui me permettent de
              repousser mes limites.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
