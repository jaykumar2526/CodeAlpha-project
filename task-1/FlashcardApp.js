// Flashcard data structure
let flashcards = JSON.parse(localStorage.getItem('flashcards')) || [];
let currentFlashcardIndex = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;

// DOM elements
const questionInput = document.getElementById('question');
const answerInput = document.getElementById('answer');
const addFlashcardButton = document.getElementById('add-flashcard');
const flashcardDisplay = document.getElementById('flashcard-display');
const flashcardQuestion = document.getElementById('flashcard-question');
const flashcardAnswer = document.getElementById('flashcard-answer');
const showAnswerButton = document.getElementById('show-answer');
const correctAnswerButton = document.getElementById('correct-answer');
const wrongAnswerButton = document.getElementById('wrong-answer');
const nextFlashcardButton = document.getElementById('next-flashcard');
const scoreDisplay = document.getElementById('score');

// Add flashcard
addFlashcardButton.addEventListener('click', () => {
  const question = questionInput.value.trim();
  const answer = answerInput.value.trim();

  if (question && answer) {
    flashcards.push({ question, answer });
    localStorage.setItem('flashcards', JSON.stringify(flashcards));
    questionInput.value = '';
    answerInput.value = '';
    alert('Flashcard added!');
  } else {
    alert('Please enter both a question and an answer.');
  }
});

// Display flashcard
function displayFlashcard() {
  if (flashcards.length > 0) {
    const currentFlashcard = flashcards[currentFlashcardIndex];
    flashcardQuestion.textContent = currentFlashcard.question;
    flashcardAnswer.style.display = 'none';
    flashcardAnswer.textContent = currentFlashcard.answer;
  } else {
    flashcardQuestion.textContent = 'No flashcards available.';
    flashcardAnswer.style.display = 'none';
  }
}

// Show answer
showAnswerButton.addEventListener('click', () => {
  flashcardAnswer.style.display = 'block';
});

// Correct answer
correctAnswerButton.addEventListener('click', () => {
  correctAnswers++;
  updateScore();
  nextFlashcard();
});

// Wrong answer
wrongAnswerButton.addEventListener('click', () => {
  incorrectAnswers++;
  updateScore();
  nextFlashcard();
});

// Next flashcard
nextFlashcardButton.addEventListener('click', () => {
  nextFlashcard();
});

function nextFlashcard() {
  if (currentFlashcardIndex < flashcards.length - 1) {
    currentFlashcardIndex++;
  } else {
    currentFlashcardIndex = 0;
  }
  displayFlashcard();
}

// Update score
function updateScore() {
  scoreDisplay.textContent = `Correct: ${correctAnswers} | Incorrect: ${incorrectAnswers}`;
}

// Initial display
displayFlashcard();
updateScore();
