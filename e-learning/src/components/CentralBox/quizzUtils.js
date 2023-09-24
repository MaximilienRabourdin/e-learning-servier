// quizzUtils.js

// Fonction qui vérifie si le nombre minimum de réponses a été donné
export const hasMinimumAnswers = (quizId, quizAnswers) => {
    const answers = quizAnswers[quizId] || [];
    return answers.length >= 3;
  };
  
  // Fonction qui vérifie si une réponse est sélectionnée
  export const isAnswerSelected = (quizId, answerIndex, quizAnswers) => {
    const answers = quizAnswers[quizId] || [];
    return answers.includes(answerIndex);
  };
  
  // Fonction qui ajoute ou supprime une réponse
  export const toggleAnswer = (quizId, answerIndex, quizAnswers) => {
    const answers = quizAnswers[quizId] || [];
    const updatedAnswers = [...answers];
    
    // Si la réponse est déjà sélectionnée, la supprimer
    if (updatedAnswers.includes(answerIndex)) {
      updatedAnswers.splice(updatedAnswers.indexOf(answerIndex), 1);
    } else {
      // Sinon, l'ajouter
      updatedAnswers.push(answerIndex);
    }
  
    return {
      ...quizAnswers,
      [quizId]: updatedAnswers,
    };
  };