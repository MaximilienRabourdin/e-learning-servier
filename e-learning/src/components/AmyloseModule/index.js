import React, { useState } from "react";
import AmyloseModuleStyled from "./AmyloseModuleStyled";
import LinearProgress from "@mui/material/LinearProgress";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import amylose_slide from "../../data/amylose_slides";
import SlidePatientHistory from "./SlidePatientHistory";

import { CSSTransition } from "react-transition-group";

function AmyloseModule() {
  const [currentPage, setCurrentPage] = useState(1);
  const [showMenuPopup, setShowMenuPopup] = useState(false);
  const [showReferencesPopup, setShowReferencesPopup] = useState(false);
  const [showAidePopup, setShowAidePopup] = useState(false);
  const [showAbbreviationPopup, setShowAbbreviationPopup] = useState(false);
  const [enlargedImage, setEnlargedImage] = useState(null);

  const handleAnswerClick = (quizId, answerIndex, correct) => {
    setQuizAnswers((prevAnswers) => ({
      ...prevAnswers,
      [quizId]: correct,
    }));
  };

  const handleNextPage = () => {
    if (currentPage < amylose_slide.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const progressBarValue = ((currentPage - 1) / amylose_slide.length) * 100;

  const handleMenuButtonClick = () => {
    setShowMenuPopup(true);
  };

  const handleReferencesButtonClick = () => {
    setShowReferencesPopup(true);
  };

  const handleAideButtonClick = () => {
    setShowAidePopup(true);
  };

  const handleClosePopup = (event) => {
    const popupDivs = document.querySelectorAll(".popup-content");
    if (Array.from(popupDivs).every((div) => !div.contains(event.target))) {
      setShowMenuPopup(false);
      setShowReferencesPopup(false);
      setShowAidePopup(false);
      setShowAbbreviationPopup(false);
    }
  };

  const handleAbbreviationButtonClick = () => {
    setShowAbbreviationPopup(true);
  };

  const handleImageClick = (imageSrc) => {
    setEnlargedImage(imageSrc);
  };

  const handleCloseEnlargedImage = () => {
    setEnlargedImage(null);
  };

  const handleMenuClick = () => {
    setCurrentPage(1);
    setShowMenuPopup(false);
  };

  // choix multiple pour le quizz

  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleQuizzAnswer = (answerText) => {
    if (selectedAnswers.includes(answerText)) {
      setSelectedAnswers(selectedAnswers.filter((text) => text !== answerText));
    } else if (selectedAnswers.length < 3) {
      setSelectedAnswers([...selectedAnswers, answerText]);
    }

    if (selectedAnswers.length === 2) {
      setShowAnswer(true);
    }
  };

  const [quizAnswers, setQuizAnswers] = useState({});

  const handleQuizzMultipleAnswer = (slideId, index, correct) => {
    if (!quizAnswers[slideId]) {
      setQuizAnswers({ ...quizAnswers, [slideId]: [] });
    }

    if (quizAnswers[slideId].includes(index)) {
      setQuizAnswers({
        ...quizAnswers,
        [slideId]: quizAnswers[slideId].filter((item) => item !== index),
      });
    } else {
      if (quizAnswers[slideId].length < 3) {
        setQuizAnswers({
          ...quizAnswers,
          [slideId]: [...quizAnswers[slideId], index],
        });
      }
    }
  };

  return (
    <AmyloseModuleStyled>
      <div className="all-box">
        <nav className="sidebar">
          <ul className="all_button">
            <li
              onClick={handleMenuClick} // Appelle la fonction handleMenuClick lors du clic
              className={`button ${currentPage === 1 ? "active" : ""}`}
            >
              <img className="enlargedImage" alt="icon" src="./menu_icon.svg" />
              <a className="text-button">Menu</a>
            </li>
            <li
              onClick={handleAbbreviationButtonClick}
              className={`button ${currentPage === 2 ? "active" : ""}`}
            >
              <img alt="icon" src="./abreviation_icon.svg" />
              <a className="text-button">Abréviations</a>
            </li>
            <li
              onClick={handleReferencesButtonClick}
              className={`button ${currentPage === 3 ? "active" : ""}`}
            >
              <img alt="icon" src="./references_icon.svg" />
              <a className="text-button">References</a>
            </li>
            <li
              onClick={handleAideButtonClick}
              className={`button ${currentPage === 4 ? "active" : ""}`}
            >
              <img alt="icon" src="./aide_icon.svg" />
              <a className="text-button">Aide</a>
            </li>
            <li className="button" href='/'>
              <img alt="icon" src="./exit.svg" />
              <a className="text-button" href="/">
                Quitter
              </a>
            </li>
          </ul>
        </nav>

        {enlargedImage && (
          <div
            className="enlarged-image-overlay"
            onClick={handleCloseEnlargedImage}
          >
            <div className="enlarged-image-container">
              <img
                src={enlargedImage}
                alt="Enlarged"
                className="enlarged-image"
              />
              <button
                className="close-enlarged-button"
                onClick={handleCloseEnlargedImage}
              >
                Fermer
              </button>
            </div>
          </div>
        )}

        <div className="right_section">
          {amylose_slide.map((slide, index) => (
            <CSSTransition key={index} classNames="slide-fade" timeout={500}>
              <div
                className={`slide_content ${
                  currentPage === index + 1 ? "show" : ""
                }`}
              >
                <h1 className="slide_title">
                  {amylose_slide[currentPage - 1].title}
                </h1>

                {amylose_slide[currentPage - 1].type === "default" && (
                  <>
                    <div className="presentation_slide">
                      <p>
                        <b> {amylose_slide[currentPage - 1].subtitle}</b>
                      </p>
                      <p> {amylose_slide[currentPage - 1].author} </p>
                      <p> {amylose_slide[currentPage - 1].text} </p>
                      <b>
                        {" "}
                        <p className="subtitle2">
                          {" "}
                          {amylose_slide[currentPage - 1].subtitle2}{" "}
                        </p>{" "}
                      </b>
                      <p className="text2">
                        {" "}
                        {amylose_slide[currentPage - 1].text2}{" "}
                      </p>

                      <p className="subtext">
                        {" "}
                        {amylose_slide[currentPage - 1].subtext}{" "}
                      </p>
                    </div>
                  </>
                )}

{amylose_slide[currentPage - 1].type === "conclusion" && (
                  <>
                    <div className="conclusion_slide">
                      <p>
                        <b> {amylose_slide[currentPage - 1].subtitle}</b>
                      </p>
                      <p> {amylose_slide[currentPage - 1].author} </p>
                      <p> {amylose_slide[currentPage - 1].text} </p>
                      <b>
                        {" "}
                        <p className="subtitle2">
                          {" "}
                          {amylose_slide[currentPage - 1].subtitle2}{" "}
                        </p>{" "}
                      </b>
                      <p className="text2">
                        {" "}
                        {amylose_slide[currentPage - 1].text2}{" "}
                      </p>

                      <p className="subtext">
                        {" "}
                        {amylose_slide[currentPage - 1].subtext}{" "}
                      </p>
                    </div>
                  </>
                )}

                {amylose_slide[currentPage - 1].type === "instruction" && (
                  <>
                    <div className="all_instruction_slide">
                      <div className="instruction_control_buttonside">
                        <div className="button_instruction">
                          <img
                            className="enlargedImage"
                            alt="icon"
                            src="./menu_icon.svg"
                          />
                          <a className="text_button_instruction">Menu</a>
                        </div>
                        <div className="description_button">
                          <h5> Menu</h5>
                          <p className="description_button_text">
                            {" "}
                            Cliquez sur ce bouton pour revenir sur la première
                            slide
                          </p>
                        </div>
                      </div>
                      <div className="instruction_control_buttonside">
                        <div className="button_instruction">
                          <img
                            className="enlargedImage"
                            alt="icon"
                            src="./abreviation_icon.svg"
                          />
                          <a className="text_button_instruction">
                            Abréviations
                          </a>
                        </div>
                        <div className="description_button">
                          <h5> Abréviations</h5>
                          <p className="description_button_text">
                            {" "}
                            Cliquez sur ce bouton pour avoir toutes les
                            descriptions
                          </p>
                        </div>
                      </div>
                      <div className="instruction_control_buttonside">
                        <div className="button_instruction">
                          <img
                            className="enlargedImage"
                            alt="icon"
                            src="./references_icon.svg"
                          />
                          <a className="text_button_instruction">Références</a>
                        </div>
                        <div className="description_button">
                          <h5> Références</h5>
                          <p className="description_button_text">
                            {" "}
                            Cliquez sur ce bouton pour avoir toutes les
                            références
                          </p>
                        </div>
                      </div>
                      <div className="instruction_control_buttonside">
                        <div className="button_instruction">
                          <img
                            className="enlargedImage"
                            alt="icon"
                            src="./aide_icon.svg"
                          />
                          <a className="text_button_instruction">Aide</a>
                        </div>
                        <div className="description_button">
                          <h5> Aide</h5>
                          <p className="description_button_text">
                            {" "}
                            Cliquez sur ce bouton pour avoir la légende des
                            boutons de contrôls
                          </p>
                        </div>
                      </div>

                      <div className="instruction_control_buttonside">
                        <div className="button_instruction">
                          <img
                            className="enlargedImage"
                            alt="icon"
                            src="./exit.svg"
                          />
                          <a className="text_button_instruction">Quitter</a>
                        </div>
                        <div className="description_button">
                          <h5> Quitter</h5>
                          <p className="description_button_text">
                            {" "}
                            Cliquez sur ce bouton revenir au choix des modules
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {amylose_slide[currentPage - 1].type === "presentation" && (
                  <>
                    <div className="presentation_slide">
                      <p>{amylose_slide[currentPage - 1].subtitle}</p>
                      <p> {amylose_slide[currentPage - 1].author} </p>
                      <p> {amylose_slide[currentPage - 1].text} </p>
                      <p> {amylose_slide[currentPage - 1].subtext} </p>
                    </div>
                  </>
                )}

                {amylose_slide[currentPage - 1].type === "presentation" && (
                  <>
                    <h3 className="slide_subtitle">
                      {amylose_slide[currentPage - 1].subtitle}
                    </h3>
                    <p>{amylose_slide[currentPage - 1].text}</p>
                  </>
                )}
                {amylose_slide[currentPage - 1].type ===
                  "imageWithVoiceOver" && (
                  <div className="image_with_voice_over_section">
                    <img
                      className="enlargedImage"
                      src={amylose_slide[currentPage - 1].imageSrc}
                      alt={amylose_slide[currentPage - 1].imageAlt}
                      onClick={() =>
                        handleImageClick(
                          amylose_slide[currentPage - 1].imageSrc
                        )
                      }
                    />
                  </div>
                )}

                {amylose_slide[currentPage - 1].type === "video" && (
                  <section className="video_section">
                    <video controls>
                      <source src={amylose_slide[currentPage - 1].videoSrc} />
                    </video>
                  </section>
                )}

                {amylose_slide[currentPage - 1].type === "objectives" && (
                  <div className="objectives_section">
                    <p className="objectives_section_title">
                      {amylose_slide[currentPage - 1].text}
                    </p>
                    <ul className="list_objectives">
                      {amylose_slide[currentPage - 1].objectivesList.map(
                        (objective, index) => (
                          <li key={index}>{objective}</li>
                        )
                      )}
                    </ul>
                  </div>
                )}

                {amylose_slide[currentPage - 1].type ===
                  "mesuredechocardiographie" && (
                  <div className="mesuredechocardiographie_section">
                    <div className="mesuredechocardiographie_content">
                      <div className="mesuredechocardiographie_text">
                        <ul>
                          {amylose_slide[currentPage - 1].categorie.mesures.map(
                            (mesure, index) => (
                              <li key={index}>
                                <p className="mesuredechocardiographie_title">
                                  {mesure.titre}
                                </p>
                                <ul>
                                  {mesure.parametres.map((parametre, index) => (
                                    <li key={index}>{parametre}</li>
                                  ))}
                                </ul>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                      <div className="echocardiographie_image_container">
                        <img
                          src={amylose_slide[currentPage - 1].imageSrc}
                          alt={amylose_slide[currentPage - 1].imageAlt}
                          className="echocardiographie_image"
                        />
                      </div>
                    </div>

                    <p className="subtext_echocardiographie">
                      {amylose_slide[currentPage - 1].categorie.subtext}
                    </p>
                  </div>
                )}

                {amylose_slide[currentPage - 1].type ===
                  "et_imagerie_deformation" && (
                  <div className="imagerie_section">
                    <div className="mesuredechocardiographie_content">
                      <div className="mesuredechocardiographie_text">
                        <p className="blue_text">
                          <b>
                            {" "}
                            - Suivi de structure ou speckle tracking (analyse de
                            la déformation du myocarde){" "}
                          </b>
                        </p>
                        <br />
                        <p>
                          Le <b className="text_blue"> strain </b> est le degré
                          de déformation du myocarde durant le cycle cardiaque
                        </p>
                        <p>
                          {" "}
                          - Contraction (strain positif) et relaxation (strain
                          négatif)
                        </p>
                        <br />
                        <p>
                          3 types de strains en fonction de l’orientation des
                          fibres musculaires :
                          <b className="text_blue">
                            {" "}
                            longitudinal, radial et circonférentiel{" "}
                          </b>
                        </p>
                        <br />
                        <p>
                          {" "}
                          - Strain global = moyenne des strain des segments
                          individuels
                        </p>
                        <p>
                          {" "}
                          - Différences régionales dans la fonction contractile
                        </p>
                        <br />
                        <p>
                          {" "}
                          <b className="text_blue"> Strain longitudinal </b> =
                          marqueur robuste de la fonction cardiaque
                        </p>
                      </div>
                      <div className="echocardiographie_image_container">
                        <img
                          src={amylose_slide[currentPage - 1].imageSrc}
                          alt={amylose_slide[currentPage - 1].imageAlt}
                          className="echocardiographie_image"
                        />
                      </div>
                    </div>

                    <p className="subtext_echocardiographie">
                      {amylose_slide[currentPage - 1].subtext}
                    </p>
                  </div>
                )}

                {amylose_slide[currentPage - 1].type === "quizz" && (
                  <div className="quizz_slide">
                      <p className="quizz_title">
                      {amylose_slide[currentPage - 1].text}
                    </p>
                    <ul id="quizz">
                      {amylose_slide[currentPage - 1].answers.map(
                        (answer, index) => (
                          <li key={index}>
                            <button
                              className={`answer_button ${
                                quizAnswers[
                                  amylose_slide[currentPage - 1].id
                                ] !== undefined &&
                                (quizAnswers[
                                  amylose_slide[currentPage - 1].id
                                ] === answer.correct
                                  ? "correct"
                                  : "incorrect")
                              }`}
                              onClick={() =>
                                handleAnswerClick(
                                  amylose_slide[currentPage - 1].id,
                                  index,
                                  answer.correct
                                )
                              }
                              disabled={
                                quizAnswers[
                                  amylose_slide[currentPage - 1].id
                                ] !== undefined
                              }
                            >
                              {answer.text}
                            </button>
                          </li>
                        )
                      )}
                    </ul>
                    <p className="subtext">
                      {amylose_slide[currentPage - 1].subtext}
                    </p>
                  </div>
                )}

                {amylose_slide[currentPage - 1].type === "quizzmultiple" && (
                  <div className="quizz_slide">
                    <p className="quizz_title">
                      {amylose_slide[currentPage - 1].text}
                    </p>
                    <ul id="quizz">
                      {amylose_slide[currentPage - 1].answers.map(
                        (answer, index) => (
                          <li
                            className={`choice_answer ${
                              answer.correct &&
                              quizAnswers[amylose_slide[currentPage - 1].id]
                                ?.length >= 3
                                ? "correct"
                                : ""
                            }`}
                            key={index}
                          >
                            <label>
                              <input
                                type="checkbox"
                                value={answer.text}
                                onChange={() =>
                                  handleQuizzMultipleAnswer(
                                    amylose_slide[currentPage - 1].id,
                                    index,
                                    answer.correct
                                  )
                                }
                                checked={
                                  quizAnswers[
                                    amylose_slide[currentPage - 1].id
                                  ]?.includes(index) || false
                                }
                                disabled={
                                  quizAnswers[amylose_slide[currentPage - 1].id]
                                    ?.length >= 3 &&
                                  !quizAnswers[
                                    amylose_slide[currentPage - 1].id
                                  ]?.includes(index)
                                }
                              />
                              <span>{answer.text}</span>
                            </label>
                          </li>
                        )
                      )}
                    </ul>
                    <p className="subtext">
                      {amylose_slide[currentPage - 1].subtext}
                    </p>
                  </div>
                )}

                {amylose_slide[currentPage - 1].type === "imageWithText" && (
                  <>
                    <div className="ett">
                      <p className="text_ett">
                        {" "}
                        {amylose_slide[currentPage - 1].text1}{" "}
                      </p>
                      <p className="text_ett">
                        {" "}
                        {amylose_slide[currentPage - 1].text2}{" "}
                      </p>
                    </div>
                    <div className="image_ett_section">
                      <img
                        className="enlargedImage"
                        className="image_ett"
                        src={amylose_slide[currentPage - 1].images[0].src}
                        alt={amylose_slide[currentPage - 1].images[0].alt}
                      />
                      <img
                        className="enlargedImage"
                        className="image_ett"
                        src={amylose_slide[currentPage - 1].images[1].src}
                        alt={amylose_slide[currentPage - 1].images[1].alt}
                      />
                    </div>
                    <div className="additional_info">
                      <p>{amylose_slide[currentPage - 1].subtext}</p>
                    </div>
                  </>
                )}

                {amylose_slide[currentPage - 1].type ===
                  "text_cardiopathie" && (
                  <>
                    <div className="cardiopathie_section">
                      <p>{amylose_slide[currentPage - 1].text}</p>
                      <div className="additional_info">
                        <p className="subtext">
                          {amylose_slide[currentPage - 1].subtext}
                        </p>
                      </div>
                    </div>
                  </>
                )}
                {amylose_slide[currentPage - 1].type ===
                  "patientPresentation" && (
                  <div className="patient_presentation_section">
                    <img
                      className="image_patienteX" // Ajustez la classe CSS si nécessaire
                      src={amylose_slide[currentPage - 1].imageSrc}
                      alt={amylose_slide[currentPage - 1].imageAlt}
                    />
                    <ul>
                      <li>{amylose_slide[currentPage - 1].patientInfo.age}</li>
                      <li>
                        {amylose_slide[currentPage - 1].patientInfo.gender}
                      </li>

                      <li>
                        {
                          amylose_slide[currentPage - 1].patientInfo
                            .medicalHistory
                        }
                      </li>
                      <li> 
                      {amylose_slide[currentPage - 1].patientInfo.consultationReasons
                        }
                      </li>
                    </ul>
                  </div>
                )}

                {amylose_slide[currentPage - 1].type === "examen_medical" && (
                  <>
                    <div className="examenmedical_section">
                      <div className="examenmedical_section_left">
                        {amylose_slide[currentPage - 1].text}
                      </div>
                      <div className="examenmedical_section_right">
                        <img
                          src={amylose_slide[currentPage - 1].images[0].src}
                          alt={amylose_slide[currentPage - 1].images[0].alt}
                        />
                      </div>
                    </div>
                    <p className="subtext">
                      {amylose_slide[currentPage - 1].subtext}
                    </p>
                  </>
                )}

                {amylose_slide[currentPage - 1].type === "patientHistory" && (
                  <SlidePatientHistory
                    slideData={amylose_slide[currentPage - 1]}
                  />
                )}

                {amylose_slide[currentPage - 1].type === "bilan" && (
                  <>
                    <div className="presentation_slide">
                      <p>
                        {" "}
                        <b> {amylose_slide[currentPage - 1].text} </b>{" "}
                      </p>

                      <p className="additional_info">
                        {" "}
                        {amylose_slide[currentPage - 1].subtext}{" "}
                      </p>
                    </div>
                  </>
                )}

                {amylose_slide[currentPage - 1].type === "information" && (
                  <>
                    <div className="information_slide">
                      {amylose_slide[currentPage - 1].text}

                      <p className="additional_info" id="add_info">
                        {amylose_slide[currentPage - 1].subtext}
                      </p>
                    </div>
                  </>
                )}

                {amylose_slide[currentPage - 1].type === "informationX" && (
                  <div className="information_slideX">
                    <div className="information_textX">
                      {amylose_slide[currentPage - 1].text.map(
                        (block, index) => (
                          <div className="information_section" key={index}>
                            <h3>
                              {" "}
                              <b> {block.title} </b>{" "}
                            </h3>
                            {block.content}
                          </div>
                        )
                      )}
                    </div>
                    <div className="imageX_section">
                      <img
                        className="informationX_image"
                        src={amylose_slide[currentPage - 1].image}
                        alt="image en attente"
                      />
                      <p>Electrophorèse des protéines sériques </p>
                    </div>
                  </div>
                )}

                {amylose_slide[currentPage - 1].type === "interet_imagerie" && (
                  <>
                    <h4 className="title_interet_imagerie">
                      {" "}
                      {amylose_slide[currentPage - 1].subtitle}
                    </h4>
                    <div className="interet_imagerie_slide">
                      <div className="interet_imagerie_left_side">
                        <p>{amylose_slide[currentPage - 1].text}</p>
                      </div>
                      <div className="interet_imagerie_right_side">
                        {amylose_slide[currentPage - 1].text2}
                      </div>
                    </div>
                    <p className="additional_info" id="add_info">
                      {amylose_slide[currentPage - 1].reference}
                    </p>
                  </>
                )}

                {amylose_slide[currentPage - 1].type ===
                  "cardiopathie carcinoïde" && (
                  <>
                    <div className="cardiopathie_section">
                      <h3 className="traitement_subtitle">{amylose_slide[currentPage - 1].subtitle}</h3>
                      <p>{amylose_slide[currentPage - 1].text}</p>
                      <h3>{amylose_slide[currentPage - 1].subtitle2}</h3>
                      <p>{amylose_slide[currentPage - 1].text2}</p>
                      <p className="pierre_angulaire">{amylose_slide[currentPage - 1].text3}</p>
                    </div>
                  </>
                )}
              </div>
            </CSSTransition>
          ))}
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
              disabled={currentPage === amylose_slide.length}
              onClick={handleNextPage}
            >
              <IoIosArrowForward />
              Suivant
            </button>
          </div>
        </div>
      </div>
      <div className="logo_section">
        <img
          className="servier_logo"
          src="/servier_logo.png"
          alt="Servier Logo"
        />
      </div>
      {showMenuPopup && (
        <div className="popup-overlay" onClick={handleClosePopup}>
          <div className="popup-content">
            <h4>Menu Popup</h4>

            {/* <button className="close-button" onClick={handleClosePopup}>
              Ok
            </button> */}
          </div>
        </div>
      )}
      {showAbbreviationPopup && (
        <div className="popup-overlay" onClick={handleClosePopup}>
          <div className="popup-content">
            <h4 style={{ color: "#0089e3" }}>Abréviations</h4>
            <p>
              ECG : électrocardiogramme FEVG : fraction d’éjection du ventricule
              gauche <br />
              HTAP : hypertension artérielle pulmonaire <br />
              HVG :hypertrophie ventriculaire gauche <br />
              IRM : imagerie par résonance magnétique <br />
              NT-proBNP : N-terminal pro Brain Natriuretic Peptide <br />
              VD: ventricule droit <br />
              VG : ventricule gauche <br />
            </p>
            {/* <button className="close-button" onClick={handleClosePopup}>
              Ok
            </button> */}
          </div>
        </div>
      )}
      {showReferencesPopup && (
        <div className="popup-overlay" onClick={handleClosePopup}>
          <div className="popup-content" id="references">
            <h4>Références</h4>

            <p>
              Cohen OC, Ismael A, Pawarova B, et al. Longitudinal strain is an
              independent predictor of survival and response to therapy in
              patients with systemic AL amyloidosis. Eur Heart J.
              2022;43(4):333‑341. doi:
              <a href="https://doi.org/10.1093/eurheartj/ehab507">
                10.1093/eurheartj/ehab507
              </a>
              <br />
              <br />
              Desport E, Bridoux F, Sirac C, et al. AL Amyloidosis. Orphanet
              Journal of Rare Diseases. 2012;7(1):54. doi:
              <a href="https://doi.org/10.1186/1750-1172-7-54">
                10.1186/1750-1172-7-54
              </a>
              <br />
              <br />
              Dispenzieri A, Gertz MA, Kyle RA, et al. Serum cardiac troponins
              and N-terminal pro-brain natriuretic peptide: a staging system for
              primary systemic amyloidosis. J Clin Oncol. 2004;22(18):3751‑3757.
              doi:
              <a href="https://doi.org/10.1200/JCO.2004.03.029">
                10.1200/JCO.2004.03.029
              </a>
              <br />
              <br />
              Elouardighi Kaoutar. Place de l’IRM dans le diagnostic de
              l’amylose cardiaque: Expérience CHU RABAT - Université Mohammed V
              RABAT 2020
              <br />
              <br />
              Garcia-Pavia P, Rapezzi C, Adler Y, et al. Diagnosis and treatment
              of cardiac amyloidosis: a position statement of the ESC Working
              Group on Myocardial and Pericardial Diseases. Eur Heart J.
              2021;42(16):1554‑1568. doi:
              <a href="https://doi.org/10.1093/eurheartj/ehab072">
                10.1093/eurheartj/ehab072
              </a>
              <br />
              <br />
              McDonagh TA, Metra M, Adamo M, et al. 2021 ESC Guidelines for the
              diagnosis and treatment of acute and chronic heart failure. Eur
              Heart J. 2021;42(36):3599‑3726. doi:
              <a href="https://doi.org/10.1093/eurheartj/ehab368">
                10.1093/eurheartj/ehab368
              </a>
            </p>
            {/* <button className="close-button" onClick={handleClosePopup}>
        Ok
      </button> */}
          </div>
        </div>
      )}

      {showAidePopup && (
        <div className="popup-overlay" onClick={handleClosePopup}>
          <div className="popup-content">
            <div className="all_instruction_slide">
              <div className="instruction_control_buttonside">
                <div className="button_instruction">
                  <img
                    className="enlargedImage"
                    alt="icon"
                    src="./menu_icon.svg"
                  />
                  <a className="text_button_instruction">Menu</a>
                </div>
                <div className="description_button">
                  <h5> Menu</h5>
                  <p className="description_button_text">
                    {" "}
                    Cliquez sur ce bouton pour revenir sur la première slide
                  </p>
                </div>
              </div>
              <div className="instruction_control_buttonside">
                <div className="button_instruction">
                  <img
                    className="enlargedImage"
                    alt="icon"
                    src="./abreviation_icon.svg"
                  />
                  <a className="text_button_instruction">Abréviations</a>
                </div>
                <div className="description_button">
                  <h5> Abréviations</h5>
                  <p className="description_button_text">
                    {" "}
                    Cliquez sur ce bouton pour avoir toutes les abréviations des
                    amylose_slide
                  </p>
                </div>
              </div>
              <div className="instruction_control_buttonside">
                <div className="button_instruction">
                  <img
                    className="enlargedImage"
                    alt="icon"
                    src="./references_icon.svg"
                  />
                  <a className="text_button_instruction">Références</a>
                </div>
                <div className="description_button">
                  <h5> Références</h5>
                  <p className="description_button_text">
                    {" "}
                    Cliquez sur ce bouton pour avoir toutes les références des
                    amylose_slide
                  </p>
                </div>
              </div>
              <div className="instruction_control_buttonside">
                <div className="button_instruction">
                  <img
                    className="enlargedImage"
                    alt="icon"
                    src="./aide_icon.svg"
                  />
                  <a className="text_button_instruction">Aide</a>
                </div>
                <div className="description_button">
                  <h5> Aide</h5>
                  <p className="description_button_text">
                    {" "}
                    Cliquez sur ce bouton pour avoir la légende des boutons de
                    contrôls
                  </p>
                </div>
              </div>

              <div className="instruction_navigation">
                <p> Utilisez les flèches pour changer de amylose_slide </p>
              </div>
            </div>

            {/* <button className="close-button" onClick={handleClosePopup}>
              Ok
            </button> */}
          </div>
        </div>
      )}
    </AmyloseModuleStyled>
  );
}

export default AmyloseModule;
