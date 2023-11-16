import React, { useState } from "react";
import AmyloseModuleStyled from "./AmyloseModuleStyled";
import LinearProgress from "@mui/material/LinearProgress";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import amylose_slide from "../../data/amylose_slides";
import SlidePatientHistory from "./SlidePatientHistory";

import { CSSTransition } from "react-transition-group";

function AmyloseModule() {
  const [currentPage, setCurrentPage] = useState(1);
  const [clickCounts, setClickCounts] = useState(
    Array(amylose_slide.length).fill(0)
  );
  const [selectedAnswerCount, setSelectedAnswerCount] = useState(0);
  const [userAnswers, setUserAnswers] = useState(
    Array(amylose_slide.length).fill([])
  );
  const [userHasAnswered, setUserHasAnswered] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState([
    {
      id: 9,
      type: "quizz",
      title: "Question 1",
      text: "Quel diagnostic évoquez-vous ?",
      answers: [
        {
          text: "Insuffisance cardiaque à FEVG préservée",
          correct: false,
        },
        {
          text: "Cardiomyopathie hypertrophique",
          correct: false,
        },
        {
          text: "Rétrécissement aortique calcifié",
          correct: false,
        },
        {
          text: "Amylose à chaînes légères (AL)",
          correct: true,
        },
      ],
    },
    {
      id: 11,
      type: "quizzmultiple",
      title: "Question 2",
      text: "Quels examens demanderiez-vous pour confirmer ce diagnostic ? Trois réponses possibles",
      answers: [
        {
          text: "Examens biologique",
          correct: true,
        },
        {
          text: "Biopsies et analyses histologiques (infiltration amyloïde)",
          correct: true,
        },
        {
          text: "Scanner abdominal",
          correct: false,
        },
        {
          text: "IRM cardiaque",
          correct: true,
        },
        {
          text: "Coronarographie",
          correct: false,
        },
        {
          text: "Holter ECG",
          correct: false,
        },
      ],
    },
    {
      id: 16,
      type: "quizz",
      title: "Question 3",
      text: "Quels sont les marqueurs pronostiques de l’amylose AL ? Trois réponses possibles",
      answers: [
        {
          text: "Elévation de la troponine T et du NT-proBNP",
          correct: true,
        },
        {
          text: "Diminution du débit de filtration glomérulaire",
          correct: false,
        },
        {
          text: "Altération du strain longitudinal",
          correct: true,
        },
        {
          text: "Altération de la FEVG",
          correct: false,
        },
        {
          text: "Réhaussement tardif à l’IRM",
          correct: true,
        },
        {
          text: "Elargissement des complexes QRS",
          correct: false,
        },
      ],
    },
  ]);

  const totalSlides = 20;
  const stepBarWidth = (currentPage / totalSlides) * 100;

  const [showMenuPopup, setShowMenuPopup] = useState(false);
  const [showReferencesPopup, setShowReferencesPopup] = useState(false);
  const [showAidePopup, setShowAidePopup] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showAbbreviationPopup, setShowAbbreviationPopup] = useState(false);
  const [enlargedImage, setEnlargedImage] = useState(null);

  const handleAnswerClick = (quizId, answerIndex, isCorrect) => {
    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentPage - 1] = [answerIndex];
    setUserAnswers(newUserAnswers);
    setUserHasAnswered(true);
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

  const handleCloseEnlargedImage = () => {
    setEnlargedImage(null);
  };

  const handleMenuClick = () => {
    setCurrentPage(1);
    setShowMenuPopup(false);
  };

  // Mettre en place le zoom
  const [isZoomed, setIsZoomed] = useState(false);

  const handleImageClickZoom = () => {
    // Inversez l'état du zoom lorsque l'utilisateur clique sur l'image
    setIsZoomed(!isZoomed);
  };

  // Supposons que "isQuizzSlide" soit un booléen indiquant si la diapositive est de type "quizz".
  const isQuizzSlide = amylose_slide[currentPage - 1].type === "quizz";

  return (
    <AmyloseModuleStyled>
      <div
        className={`all-box ${
          amylose_slide[currentPage - 1].type === "quizz"
            ? "quizz-container"
            : amylose_slide[currentPage - 1].type === "conclusions"
            ? "conclusions-container"
            : ""
        }`}
      >
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
            <li className={`button ${currentPage === 4 ? "active" : ""}`}>
              <a
                className="link-button_exit"
                href="/accueil_cas_clinique_cardiopathie_carcinoïde"
              >
                <img
                  alt="icon"
                  src="./exit_button.svg"
                  href="/accueil_cas_clinique_cardiopathie_carcinoïde"
                />
                <p
                  className="text-button_exit"
                  href="/accueil_cas_clinique_cardiopathie_carcinoïde"
                >
                  Quitter
                </p>
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
        <b>{amylose_slide[currentPage - 1].subtitle}</b>
      </p>
      <p>{amylose_slide[currentPage - 1].text}</p>
      <p>
        <b>{amylose_slide[currentPage - 1].subtitle2}</b>
      </p>
      <p className="text2">{amylose_slide[currentPage - 1].text2}</p>
      <p className="subtitle3">
        <b>{amylose_slide[currentPage - 1].subtitle3}</b>
      </p>
      <p className="text3"> {amylose_slide[currentPage - 1].text3} </p>
      <p className="subtext">{amylose_slide[currentPage - 1].subtext}</p>
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
                            src="./exit_button.svg"
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
                      // onClick={() =>
                      //   handleImageClick(
                      //     amylose_slide[currentPage - 1].imageSrc
                      //   )
                      // }
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
                    <ul className="objective_group">
                      {amylose_slide[currentPage - 1].objectivesList.map(
                        (objective, index) => (
                          <li className="objective" key={index}>
                            <span className="objective_number">
                              {
                                amylose_slide[currentPage - 1].objectivesNumber[
                                  index
                                ]
                              }
                              .
                            </span>{" "}
                            {objective}
                          </li>
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
                        <p className="text_blue">
                          {" "}
                          <b>
                            {" "}
                            - Suivi de structure ou <i> speckle </i> tracking
                            (analyse de la déformation du myocarde){" "}
                          </b>{" "}
                        </p>
                        <br />
                        <p>
                          Le{" "}
                          <b className="text_blue">
                            {" "}
                            <i> strain </i>{" "}
                          </b>{" "}
                          est le degré de déformation du myocarde durant le
                          cycle cardiaque
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
                  {amylose_slide[currentPage - 1]?.answers?.map(
                    (answer, index) => (
                      <li key={index}>
                        <button
                          className={`answer_button ${
                            userAnswers[currentPage - 1]?.includes(index)
                              ? answer.correct
                                ? "correct"
                                : "incorrect"
                              : ""
                          } ${
                            clickCounts[currentPage - 1] >=
                              (amylose_slide[currentPage - 1]?.id === 16 ||
                              amylose_slide[currentPage - 1]?.id === 11
                                ? 3
                                : 1) && answer.correct
                              ? "correct"
                              : ""
                          }`}
                          onClick={() => {
                            handleAnswerClick(
                              amylose_slide[currentPage - 1]?.id,
                              index,
                              answer.correct
                            );
                            if (
                              clickCounts[currentPage - 1] <
                              (amylose_slide[currentPage - 1]?.id === 16 ||
                              amylose_slide[currentPage - 1]?.id === 11
                                ? 3
                                : 1)
                            ) {
                              const updatedClickCounts = [...clickCounts];
                              updatedClickCounts[currentPage - 1]++;
                              setClickCounts(updatedClickCounts);
                            }
                          }}
                          disabled={
                            userAnswers[currentPage - 1] !== undefined &&
                            (userAnswers[currentPage - 1].length >= 2 ||
                              (selectedAnswerCount >= 2 && !answer.correct))
                          }
                        >
                          {answer.text}
                        </button>
                      </li>
                    )
                  )}
                </ul>
                <p className="subtext">{amylose_slide[currentPage - 1].subtext}</p>
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
                        id="image_ett"
                        className={`enlargedImage ${isZoomed ? "zoomed" : ""}`}
                        src={amylose_slide[currentPage - 1].images[0].src}
                        alt={amylose_slide[currentPage - 1].images[0].alt}
                        onClick={handleImageClickZoom}
                      />
                      <img
                        id="image_ett"
                        className={`enlargedImage ${isZoomed ? "zoomed" : ""}`}
                        src={amylose_slide[currentPage - 1].images[1].src}
                        alt={amylose_slide[currentPage - 1].images[1].alt}
                        onClick={handleImageClickZoom}
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
                    <div className="cardiopathie_section_amylose">
                      <div className="cardiopathie_text_amylose">
                        <p>{amylose_slide[currentPage - 1].text}</p>
                      </div>
                      {/* <div className="cardiopathie_image">
                        <img
                          src={amylose_slide[currentPage - 1].imageSrc}
                          alt={amylose_slide[currentPage - 1].imageAlt}
                        />
                        <p>{amylose_slide[currentPage - 1].imageText}</p>
                      </div> */}
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
                    <ul className="reasons_consultations_patient">
                      <div className="consultationReasons">
                        {
                          amylose_slide[currentPage - 1].patientInfo
                            .consultationReasons
                        }
                      </div>
                      <div>
                        {
                          amylose_slide[currentPage - 1].patientInfo
                            .consultationReasons2
                        }
                      </div>
                    </ul>

                  <div className="consultationReasons_subtext">
                  <p className="subtext">
                      {amylose_slide[currentPage - 1].subtext}
                    </p> 
                  </div>
                   

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
                  <div>
                    <div className="information_slide_coupe">
                      <div className="information_image">
                        <img
                          src={amylose_slide[currentPage - 1].imageSrc}
                          alt={amylose_slide[currentPage - 1].imageAlt}
                        />
                      </div>

                      <div className="information_text">
                        {amylose_slide[currentPage - 1].text}
                       
                      </div>
                    </div>
                    <p className="subtext"> {amylose_slide[currentPage - 1].subtext} </p>

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
                    <div className="cardiopathie_carcinoïde_section">
                      <div className="cardiopathie_image_section">
                        <img
                          className="cardiopathie_image"
                          src={amylose_slide[currentPage - 1].imageSrc}
                          alt="image en attente"
                        />
                      </div>

                      <div className="traitement_text">
                        <h3 className="traitement_subtitle">
                          {amylose_slide[currentPage - 1].subtitle}
                        </h3>
                        <p>{amylose_slide[currentPage - 1].text}</p>
                        <h3>{amylose_slide[currentPage - 1].subtitle2}</h3>
                        <p>{amylose_slide[currentPage - 1].text2}</p>
                        <p className="pierre_angulaire">
                          {amylose_slide[currentPage - 1].text3}
                        </p>
                      </div>
                    </div>
                  </>
                )}

                {amylose_slide[currentPage - 1].type === "conclusions" && (
                  <div className="all_conclusions">
                    <div className="conclusion_section">
                      <p className="conclusion_text">
                        {amylose_slide[currentPage - 1].text}
                      </p>
                    </div>
                  </div>
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
        <a href="/"
> 
        <img
          className="servier_logo"
          src="/servier_logo.png"
          alt="Servier Logo"
        />
        </a>
        <img
          className="springerhealthcare_logo"
          src="/springer.svg"
          alt="Springer logo"
        />{" "}
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
              ECG : électrocardiogramme <br />
              FEVG : fraction d’éjection du ventricule <br />
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
