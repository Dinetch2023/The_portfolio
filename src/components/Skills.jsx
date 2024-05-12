import React from "react";
import "./Skills.css"; // Importez votre fichier CSS
import Navbar from "./Navbar";

function Skills() {
  return (
    <div name="skills" className="skills-container">
      {/* Container */}
      <div className="skills-content">
        <div className="skills-header">
          <p className="skills-title">Compétences</p>
          <p className="skills-description">
            J'aime plonger et apprendre de nouvelles choses. <br /> Voici une
            liste des technologies avec lesquelles j'ai travaillé :
          </p>
        </div>
        <div className="skills-grid">
          <div className="skill-category">
            <p className="skill-category-title">Langages de programmation</p>
            <div className="skill-item">HTML</div>
            <div className="skill-item">CSS</div>
            <div className="skill-item">JavaScript</div>
          </div>
          <div className="skill-category">
            <p className="skill-category-title">Frameworks et bibliothèques</p>
            <div className="skill-item">React</div>
          </div>
          <div className="skill-category">
            <p className="skill-category-title">Outils de développement</p>
            <div className="skill-item">GitHub</div>
            <div className="skill-item">Node.js</div>
            <div className="skill-item">Webpack</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
