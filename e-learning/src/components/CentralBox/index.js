import React, { useState } from "react";
import CentralBoxStyled from "./CentralBoxStyled";
import LinearProgress from "@mui/material/LinearProgress";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import slides from "../../data/slides";
import SlidePatientHistory from "./SlidePatientHistory";

import { CSSTransition } from "react-transition-group";

function CentralBox() {
  const [currentPage, setCurrentPage] = useState(1);
  const [clickCounts, setClickCounts] = useState(Array(slides.length).fill(0));
  const [selectedAnswerCount, setSelectedAnswerCount] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(slides.length).fill([]));
  const [userHasAnswered, setUserHasAnswered] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState([
    {
      id: 8,
      type: "quizz",
      title: "Question 1",
      text: "Quel est votre hypothèse diagnostique ?",
      answers: [
        {
          text: "Cœur pulmonaire chronique",
          correct: false,
          selected: false,
        },
        {
          text: "Cardiopathie carcinoïde",
          correct: true,
          selected: false,
        },
        {
          text: "Cardiopathie rhumatismale",
          correct: false,
          selected: false,
        },
        {
          text: "Valvulopathie médicamenteuse",
          correct: false,
          selected: false,
        },
      ],
    },
    {
      id: 12,
      type: "quizz",
      title: "Question 2",
      text: "Au vu de ce bilan, quel autre examen préconiseriez-vous ?",
      answers: [
        {
          text: "IRM cardiaque",
          correct: false,
          selected: false,
        },
        {
          text: "Électrocardiogramme",
          correct: false,
          selected: false,
        },
        {
          text: "Dosage de la chromogranine A",
          correct: false,
          selected: false,
        },
        {
          text: "Dosage du BNP",
          correct: false,
          selected: false,
        },
        {
          text: "Scanner thoraco-abdomino pelvien",
          correct: true,
          selected: false,
        },
      ],
    },
    {
      id: 16,
      type: "quizz",
      title: "Question 3",
      text: "Quels sont les marqueurs biologiques à doser pour le diagnostic et le suivi d’une cardiopathie carcinoïde ? 2 réponses possibles",
      answers: [
        {
          text: "NT-proBNP",
          correct: true,
          selected: false,
        },
        {
          text: "Troponine T",
          correct: false,
          selected: false,
        },
        {
          text: "Chromogranine A",
          correct: false,
          selected: false,
        },
        {
          text: "Métabolite de la sérotonine (5-HIAA)",
          correct: true,
          selected: false,
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
  const isQuizzSlide = slides[currentPage - 1].type === "quizz";

  return (
    <CentralBoxStyled stepBarWidth={stepBarWidth}>
      <div
        className={`all-box ${
          slides[currentPage - 1].type === "quizz"
            ? "quizz-container"
            : slides[currentPage - 1].type === "conclusions"
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
            <li
              className={`button ${currentPage === 4 ? "active" : ""}`}
            >
              <img alt="icon" src="./exit_button.svg" />
              <a className="text-button_exit" href='/accueil_cas_clinique_cardiopathie_carcinoïde'>Quitter</a>
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
          {slides.map((slide, index) => (
            <CSSTransition key={index} classNames="slide-fade" timeout={500}>
              <div
                className={`slide_content ${
                  currentPage === index + 1 ? "show" : ""
                }`}
              >
                <h1
                  className={`slide_title ${isQuizzSlide ? "quizz-title" : ""}`}
                >
                  {slides[currentPage - 1].title}
                </h1>

                {slides[currentPage - 1].type === "default" && (
                  <>
                    <div className="presentation_slide">
                      <p>
                        <b> {slides[currentPage - 1].subtitle}</b>
                      </p>
                      <p> {slides[currentPage - 1].author} </p>
                      <p> {slides[currentPage - 1].text} </p>
                      <b>
                        {" "}
                        <p className="subtitle2">
                          {" "}
                          {slides[currentPage - 1].subtitle2}{" "}
                        </p>{" "}
                      </b>
                      <p className="text2"> {slides[currentPage - 1].text2} </p>

                      <p className="subtext">
                        {" "}
                        {slides[currentPage - 1].subtext}{" "}
                      </p>
                    </div>
                  </>
                )}
                {slides[currentPage - 1].type === "instruction" && (
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
                            abréviations des slides
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
                            références des slides
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
                          <h5> Quitter </h5>
                          <p className="description_button_text">
                            {" "}
                            Cliquez sur ce bouton revenir au choix des modules
                          </p>
                        </div>
                      </div>

                      <div className="instruction_navigation">
                        <p> Utilisez les flèches pour changer de slides </p>
                      </div>
                    </div>
                  </>
                )}
                {slides[currentPage - 1].type === "presentation" && (
                  <>
                    <div className="presentation_slide">
                      <p>{slides[currentPage - 1].subtitle}</p>
                      <p> {slides[currentPage - 1].author} </p>
                      <p> {slides[currentPage - 1].text} </p>
                      <p> {slides[currentPage - 1].subtext} </p>
                    </div>
                  </>
                )}
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
                    <img
                      className="enlargedImage"
                      src={slides[currentPage - 1].imageSrc}
                      alt={slides[currentPage - 1].imageAlt}
                      // onClick={() =>
                      //   handleImageClick(slides[currentPage - 1].imageSrc)
                      // }
                    />
                  </div>
                )}
                {slides[currentPage - 1].type === "video" && (
                  <section className="video_section">
                    <video controls>
                      <source src={slides[currentPage - 1].videoSrc} />
                    </video>
                  </section>
                )}
                {slides[currentPage - 1].type === "objectives" && (
                  <div className="objectives_section">
                    <p className="objectives_section_title">
                      {slides[currentPage - 1].text}
                    </p>
                    <ul className="objective_group">
                      {slides[currentPage - 1].objectivesList.map(
                        (objective, index) => (
                          <li className="objective" key={index}>
                            <span className="objective_number">
                              {slides[currentPage - 1].objectivesNumber[index]}.
                            </span>{" "}
                            {objective}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                )}
           {slides[currentPage - 1].type === "quizz" && (
  <div className="quizz_slide">
    <p className="quizz_title">
      {slides[currentPage - 1].text}
    </p>
    <ul id="quizz">
      {slides[currentPage - 1].answers.map((answer, index) => (
        <li key={index}>
          <button
            className={`answer_button ${
              userAnswers[currentPage - 1]?.includes(index)
                ? answer.correct
                  ? "correct"
                  : "incorrect"
                : ""
            } ${
              clickCounts[currentPage - 1] >= (slides[currentPage - 1].id === 16 ? 2 : 1) && answer.correct
                ? "correct"
                : ""
            }`}
            onClick={() => {
              handleAnswerClick(
                slides[currentPage - 1].id,
                index,
                answer.correct
              );
              if (clickCounts[currentPage - 1] < (slides[currentPage - 1].id === 16 ? 2 : 1)) {
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
      ))}
    </ul>
    <p className="subtext">{slides[currentPage - 1].subtext}</p>
  </div>
)}



                {/* Afficher les bonnes réponses lorsque l'utilisateur clique sur le bouton */}
                

                {slides[currentPage - 1].type === "imageWithText" && (
                  <>
                    <p>{slides[currentPage - 1].text}</p>
                    <img
                      className={`enlargedImage ${isZoomed ? "zoomed" : ""}`}
                      src={slides[currentPage - 1].images[0].src}
                      alt={slides[currentPage - 1].images[0].alt}
                      onClick={handleImageClickZoom}
                    />
                    <div className="additional_info">
                      <p>{slides[currentPage - 1].subtext}</p>
                    </div>
                  </>
                )}
                {slides[currentPage - 1].type === "text_cardiopathie" && (
                  <>
                    <div className="cardiopathie_section">
                      <p className="cardiopathie_section_left">
                        {slides[currentPage - 1].text}
                      </p>
                      <p className="cardiopathie_section_right">
                        {slides[currentPage - 1].text2}
                      </p>
                    </div>

                    <div className="additional_info_text_cardiopathie">
                      <p className="subtext">
                        {slides[currentPage - 1].subtext}
                      </p>
                    </div>
                  </>
                )}
                {slides[currentPage - 1].type === "patientPresentation" && (
                  <div className="patient_presentation_section">
                    <img
                      className="image_patienteZ"
                      src={slides[currentPage - 1].imageSrc}
                      alt={slides[currentPage - 1].imageAlt}
                    />
                    <div className="text_patienteZ">
                      <p>
                        {slides[currentPage - 1].patientInfo.gender},{" "}
                        {slides[currentPage - 1].patientInfo.age}
                      </p>{" "}
                      <p>
                        <b> Facteurs de risque cardiovasculaires : </b> <br />
                        {slides[currentPage - 1].patientInfo.riskFactors.join(
                          ", "
                        )}
                      </p>
                      <p>
                        <b> Motifs de consultation : </b> <br />
                        {slides[
                          currentPage - 1
                        ].patientInfo.consultationReasons.join(", ")}
                      </p>
                      <p className="additional_info">
                        {" "}
                        {
                          slides[currentPage - 1].patientInfo.additionalInfo
                        }{" "}
                      </p>
                    </div>
                  </div>
                )}
                {slides[currentPage - 1].type === "examen_medical" && (
                  <>
                    <div className="examenmedical_section">
                      <div className="examenmedical_section_left">
                        <img
                          className="examenmedical_img"
                          src={slides[currentPage - 1].imageSrc}
                          alt="image d'examens"
                        />
                      </div>
                      <div className="examenmedical_section_center">
                        <p> {slides[currentPage - 1].text} </p>
                      </div>
                      <div className="examenmedical_section_right">
                        <p> {slides[currentPage - 1].text2} </p>
                      </div>
                    </div>
                    <p className="subtext">
                      {" "}
                      {slides[currentPage - 1].subtext}{" "}
                    </p>
                  </>
                )}

                {slides[currentPage - 1].type === "storycontinu" && (
                  <>
                    <div className="image_with_text_slide">
                      <div className="image_section">
                        <img
                          src={slides[currentPage - 1].imageSrc}
                          alt={slides[currentPage - 1].title}
                        />
                        <p className="image_credit">
                          {slides[currentPage - 1].creditPicture}
                        </p>
                      </div>
                      <div className="text_section">
                        <h3>{slides[currentPage - 1].subtitle}</h3>
                        <p>{slides[currentPage - 1].text}</p>
                        <h3>{slides[currentPage - 1].subtitle2}</h3>
                        <p>{slides[currentPage - 1].text2}</p>
                        <div className="additional_info">
                          <p>{slides[currentPage - 1].subtext}</p>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {slides[currentPage - 1].type === "patientHistory" && (
                  <SlidePatientHistory slideData={slides[currentPage - 1]} />
                )}
                {slides[currentPage - 1].type === "bilan" && (
                  <div className="all_presentation_slide">
                    <div className="image_presentation_slide">
                      <img
                        className="coeur_image_presention"
                        src={slides[currentPage - 1].imageSrc}
                        alt={slides[currentPage - 1].title}
                      />
                    </div>
                    <div className="text_presentation_slide">
                      <p>{slides[currentPage - 1].text}</p>

                      <p className="additional_info">
                        {" "}
                        {slides[currentPage - 1].subtext}{" "}
                      </p>
                    </div>
                  </div>
                )}
                {slides[currentPage - 1].type === "cardiopathie carcinoïde" && (
                  <>
                    <div className="cardiopathie_section">
                      <div className="cardiopathie_section_text1">
                        {" "}
                        <h3>{slides[currentPage - 1].subtitle}</h3>
                        <p>{slides[currentPage - 1].text}</p>{" "}
                      </div>
                      <div className="cardiopathie_section_text2">
                        <h3>{slides[currentPage - 1].subtitle2}</h3>
                        <p>{slides[currentPage - 1].text2}</p>
                      </div>
                      <div className="cardiopathie_section_text3">
                        <h3>{slides[currentPage - 1].subtitle3}</h3>
                        <p>{slides[currentPage - 1].text3}</p>
                      </div>
                    </div>
                    <div className="info_additio">
                      <p className="additional_info">
                        {" "}
                        {slides[currentPage - 1].subtext}{" "}
                      </p>
                      <p className="additional_references">
                        {" "}
                        {slides[currentPage - 1].subtext2}{" "}
                      </p>
                    </div>
                  </>
                )}
                {slides[currentPage - 1].type === "conclusions" && (
                  <div className="all_conclusions">
                    <div className="conclusion_section">
                      <p className="conclusion_text">
                        {slides[currentPage - 1].text}
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
              disabled={currentPage === slides.length}
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
            <h4>Abréviations</h4>
            <p>
              BNP : peptide 5-HIAA : acide 5-hydroxy-indol-acétique
              natriurétique de type B <br />
              FC : fréquence cardiaque <br />
              FR : fréquence respiratoire <br /> FOP : foramen ovale perméable{" "}
              <br />
              HTA : hypertension artérielle <br />
              IRM : imagerie par résonance magnétique <br />
              NT-proBNP : N-terminal pro Brain Natriuretic Peptide <br />
              RHJ : reflux hépatojugulaire <br />
              SaO2 : saturation artérielle en oxygène <br />
              TA : tension artérielle <br />
              TDM : tomodensitométrie <br />
              TSVJ : turgescence spontanée des veines jugulaires <br />
              VD : ventricule droit <br />
              VG : ventricule gauche
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
              Bhattacharyya S, Toumpanakis C, Burke M, Taylor AM, Caplin ME,
              Davar J. Features of carcinoid heart disease identified by 2- and
              3-dimensional echocardiography and cardiac MRI.{" "}
              <i>Circulation. Cardiovascular Imaging</i>. 2010;3(1):103-111.
              doi:
              <a href="https://doi.org/10.1161/CIRCIMAGING.109.886846">
                10.1161/CIRCIMAGING.109.886846
              </a>
              <br />
              <br />
              Davar J, Connolly HM, Caplin ME, et al. Diagnosing and Managing
              Carcinoid Heart Disease in Patients With Neuroendocrine Tumors.
              <i>Journal of the American College of Cardiology</i>.
              2017;69(10):1288‑1304. doi:
              <a href="https://doi.org/10.1016/j.jacc.2016.12.030">
                10.1016/j.jacc.2016.12.030
              </a>
              <br />
              <br />
              Kulke MH, Mayer RJ. Carcinoid tumors.{" "}
              <i>The New England Journal of Medicine</i>. 1999;340(11):858-868.
              doi:
              <a href="https://doi.org/10.1056/NEJM199903183401107">
                10.1056/NEJM199903183401107
              </a>
              <br />
              <br />
              Lyon AR, López-Fernández T, Couch LS, et al. 2022 ESC Guidelines
              on cardio-oncology developed in collaboration with the European
              Hematology Association (EHA), the European Society for Therapeutic
              Radiology and Oncology (ESTRO) and the International
              Cardio-Oncology Society (IC-OS): Developed by the task force on
              cardio-oncology of the{" "}
              <i>European Society of Cardiology (ESC) </i>. European Heart
              Journal. 2022;0:1-133. doi:
              <a href="https://doi.org/10.1093/eurheartj/ehac244">
                10.1093/eurheartj/ehac244
              </a>
              <br />
              <br />
              Mansencal N, Mitry E, Forissier JF, et al. Assessment of patent
              foramen ovale in carcinoid heart disease.{" "}
              <i>The American Heart Journal</i>. 2006;151(5):1129.e1-6. doi:
              <a href="https://doi.org/10.1016/j.ahj.2006.02.019">
                10.1016/j.ahj.2006.02.019
              </a>
              <br />
              <br />
              Møller JE, Connolly HM, Rubin J, Seward JB, Modesto K, Pellikka
              PA. Factors associated with progression of carcinoid heart
              disease. <i>The New England Journal of Medicine</i>.
              2003;348(11):1005‑1015. doi:
              <a href="https://doi.org/10.1056/NEJMoa021451">
                10.1056/NEJMoa021451
              </a>
              <br />
              <br />
              Møller JE, Pellikka PA, Bernheim AM, Schaff HV, Rubin J, Connolly
              HM. Prognosis of carcinoid heart disease: analysis of 200 cases
              over two decades. <i>Circulation</i>. 2005;112(21):3320-3327. doi:
              <a href="https://doi.org/10.1161/CIRCULATIONAHA.105.553750">
                10.1161/CIRCULATIONAHA.105.553750
              </a>
              <br />
              Pellikka PA, Tajik AJ, Khandheria BK, et al. Carcinoid heart
              disease. Clinical and echocardiographic spectrum in 74 patients.
              Circulation. 1993;87(4):1188-1196. doi:
              <a href="https://doi.org/10.1161/01.CIR.87.4.1188">
                10.1161/01.CIR.87.4.1188
              </a>
              <br />
              <br />
              Ram P, Penalver JL, Lo KBU, Rangaswami J, Pressman GS. Carcinoid
              Heart Disease: Review of Current Knowledge.{" "}
              <i>Texas Heart Institute Journal.</i> 2019;46(1):21‑27. doi:
              <a href="https://doi.org/10.14503/THIJ-17-6562">
                10.14503/THIJ-17-6562
              </a>
              <br />
              <br />
              Roberts WC. A unique heart disease associated with a unique
              cancer: carcinoid heart disease.{" "}
              <i>The American Journal of Cardiology</i>. 1997;80(2):251-256.
              doi:
              <a href="https://doi.org/10.1016/s0002-9149(97)00340-8">
                10.1016/s0002-9149(97)00340-8
              </a>
            </p>
            {/* <button className="close-button" onClick={handleClosePopup}>
              Ok
            </button> */}
          </div>
        </div>
      )}
      x
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
                    slides
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
                    slides
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
                <p> Utilisez les flèches pour changer de slides </p>
              </div>
            </div>

            {/* <button className="close-button" onClick={handleClosePopup}>
              Ok
            </button> */}
          </div>
        </div>
      )}
    </CentralBoxStyled>
  );
}

export default CentralBox;
