import React, { useState, useEffect } from "react";
import CentralBoxStyled from "./CentralBoxStyled";
import LinearProgress from '@mui/material/LinearProgress';

function CentralBox() {
  const [currentPage, setCurrentPage] = useState(1);
  const [quizData, setQuizData] = useState([
    {
      question: "Question 1",
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      correctAnswerIndex: 0,
      userAnswerIndex: null,
    },
    {
      question: "Question 2",
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      correctAnswerIndex: 1,
      userAnswerIndex: null,
    },
    {
      question: "Question 3",
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      correctAnswerIndex: 2,
      userAnswerIndex: null,
    },
  ]);

  const handleAnswerSelection = (questionIndex, answerIndex) => {
    const updatedQuizData = [...quizData];
    updatedQuizData[questionIndex].userAnswerIndex = answerIndex;
    setQuizData(updatedQuizData);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentPage < quizData.length) {
        setCurrentPage(currentPage + 1);
      }
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [currentPage, quizData]);

  const progressBarValue = ((currentPage - 1) / quizData.length) * 100;

  const renderQuiz = (questionIndex) => {
    const question = quizData[questionIndex];
    return (
      <div>
        <h2>{question.question}</h2>
        <ul>
          {question.options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleAnswerSelection(questionIndex, index)}
              style={{
                backgroundColor:
                  question.userAnswerIndex === index
                    ? index === question.correctAnswerIndex
                      ? "green"
                      : "red"
                    : "",
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    );
  };

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
              <img alt="icon" src="./menu_icon.svg" />
              <a className="text-button">Abbreviations</a>
            </li>
            <li className="button">
              <img alt="icon" src="./menu_icon.svg" />
              <a className="text-button">References</a>
            </li>
            <li className="button">
              <img alt="icon" src="./menu_icon.svg" />
              <a className="text-button">Aide</a>
            </li>
          </ul>
        </nav>
        <div className="right_section">
          <div className="title_section">
            <p className="title_page">
              Présentation du cas clinique interactif
            </p>
          </div>
          <div className="quiz_section">
            {currentPage <= quizData.length && renderQuiz(currentPage - 1)}
          </div>
          <div className="step_bar">
            <LinearProgress variant="determinate" value={progressBarValue} />
            <div>
              <button
                disabled={currentPage === 1}
                onClick={handlePreviousPage}
              >
                Precedent
              </button>
              <button
                disabled={currentPage === quizData.length}
                onClick={handleNextPage}
              >
                Suivant
              </button>
            </div>
          </div>
        </div>
      </div>
    </CentralBoxStyled>
  );
}

export default CentralBox;
