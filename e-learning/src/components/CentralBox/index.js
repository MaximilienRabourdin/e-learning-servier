import React, { useState } from "react";
import CentralBoxStyled from "./CentralBoxStyled";
import LinearProgress from "@mui/material/LinearProgress";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import slides from "../../data/slides";

function CentralBox() {
  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    if (currentPage < slides.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const progressBarValue = ((currentPage - 1) / slides.length) * 100;

  return (
    <CentralBoxStyled>
      <div className="all-box">
        <nav className="sidebar">
          <ul className="all_button">
            <li className="button">
              <img alt="icon" src="./menu_icon.svg" />
              <a className="text-button">Menu</a>
            </li>
            <li className="button">
              <img alt="icon" src="./abbreviation_icon.png" />
              <a className="text-button">Abbreviations</a>
            </li>
            <li className="button">
              <img alt="icon" src="./reference_icon.png" />
              <a className="text-button">References</a>
            </li>
            <li className="button">
              <img alt="icon" src="./help_icon.png" />
              <a className="text-button">Aide</a>
            </li>
          </ul>
        </nav>

        <div className="right_section">
          {/* Affichage du contenu de la slide actuelle */}
          <div className="slide_content">
            <h1 className="slide_title">{slides[currentPage - 1].title}</h1>
            {/* Vérification du type de la slide pour afficher le contenu approprié */}
            {slides[currentPage - 1].type === "presentation" && (
              <>
                <h3 className="slide_subtitle">
                  {slides[currentPage - 1].subtitle}
                </h3>
                <p>{slides[currentPage - 1].text}</p>
              </>
            )}

            {slides[currentPage - 1].type === "imageWithVoiceOver" && (
              <div className="image_with_voice_over_section">
                <audio controls>
                  <source src={slides[currentPage - 1].voiceOver} />
                </audio>
                <img
                  src={slides[currentPage - 1].imageSrc}
                  alt={slides[currentPage - 1].imageAlt}
                />
              </div>
            )}

            {slides[currentPage - 1].type === "video" && (
              <div className="video_section">
                <video controls>
                  <source src={slides[currentPage - 1].videoSrc} />
                </video>
              </div>
            )}

            {slides[currentPage - 1].type === "objectives" && (
              <div className="objectives_section">
                <ul>
                  {slides[currentPage - 1].objectivesList.map(
                    (objective, index) => (
                      <li key={index}>{objective}</li>
                    )
                  )}
                </ul>
              </div>
            )}

            {slides[currentPage - 1].type === "patientPresentation" && (
              <div className="patient_presentation_section">
                <img
                  src={slides[currentPage - 1].imageSrc}
                  alt={slides[currentPage - 1].imageAlt}
                />
                <p>{slides[currentPage - 1].patientInfo.gender}</p>
                <p>{slides[currentPage - 1].patientInfo.age}</p>
                <p>
                  Facteurs de risque cardiovasculaires :{" "}
                  {slides[currentPage - 1].patientInfo.riskFactors.join(", ")}
                </p>
                <p>
                  Motifs de consultation :{" "}
                  {slides[currentPage - 1].patientInfo.consultationReasons.join(
                    ", "
                  )}
                </p>
                <p>{slides[currentPage - 1].patientInfo.additionalInfo}</p>
              </div>
            )}

            {/* Ajoutez d'autres conditions pour les autres types de diapositives ici... */}

            {/* Ajoutez ici les autres types de contenu pour les autres types de diapositives */}
          </div>
          <div className="step_bar">
            <button
              className="previous_button"
              disabled={currentPage === 1}
              onClick={handlePreviousPage}
            >
              <IoIosArrowBack /> Précédent
            </button>
            <LinearProgress
              className="linear_progress"
              variant="determinate"
              value={progressBarValue}
            />
            <button
              className="next_button"
              disabled={currentPage === slides.length}
              onClick={handleNextPage}
            >
              Suivant <IoIosArrowForward />
            </button>
            <div></div>
          </div>
        </div>
      </div>
    </CentralBoxStyled>
  );
}

export default CentralBox;
