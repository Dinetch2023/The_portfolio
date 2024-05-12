import React from "react";
import code1 from "../assets/P1.png";
import code2 from "../assets/P2.png";
import code3 from "../assets/P3.jpg";
import "./Works.css"; // Importer votre fichier CSS

function WorksComponent() {
  return (
    <div name="work" className="works-container">
      <div className="works-header">
        <p className="works-title">Projets</p>
        <p className="works-description">
          Découvrez quelques-uns de mes travaux les plus récents
        </p>
      </div>
      <div className="works-grid-container">
        <div className="works-grid">
          {/* Grid Item 1 */}
          <div className="work-item">
            <div
              style={{ backgroundImage: `url(${code1})` }}
              className="content-div"
            >
              <div className="hover-content">
                <span className="work-item-title">Application CBT</span>
                <p className="work-item-description">
                  Une application web CBT construite avec React et MongoDB
                </p>
                <div className="work-item-buttons">
                  <a
                    href="/"
                    className="work-item-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                  </a>
                  <a
                    href="/"
                    className="work-item-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Grid Item 2 */}
          <div className="work-item">
            <div
              style={{ backgroundImage: `url(${code2})` }}
              className="content-div"
            >
              <div className="hover-content">
                <span className="work-item-title">Autre Application</span>
                <p className="work-item-description">
                  Une autre application web construite avec React et MongoDB
                </p>
                <div className="work-item-buttons">
                  <a
                    href="/"
                    className="work-item-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                  </a>
                  <a
                    href="/"
                    className="work-item-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Grid Item 3 */}
          <div className="work-item">
            <div
              style={{ backgroundImage: `url(${code3})` }}
              className="content-div"
            >
              <div className="hover-content">
                <span className="work-item-title">
                  Encore une autre Application
                </span>
                <p className="work-item-description">
                  Encore une autre application web construite avec React
                </p>
                <div className="work-item-buttons">
                  <a
                    href="/"
                    className="work-item-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                  </a>
                  <a
                    href="/"
                    className="work-item-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorksComponent;
