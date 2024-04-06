const questions = [
  {
    question: "which is the largest animal in the world",
    answers: [
      {
        Text: "shark",
        Correct: "false",
      },
      {
        Text: "Blue Whale",
        Correct: "true",
      },
      {
        Text: "Elephent",
        Correct: "false",
      },
      {
        Text: "Giraffe",
        Correct: "false",
      },
    ],
  },
  {
    question: "which is the largest desert in the world",
    answers: [
      {
        Text: "Kalhari",
        Correct: "false",
      },
      {
        Text: "gobi",
        Correct: "false",
      },
      {
        Text: "sahara",
        Correct: "false",
      },
      {
        Text: "Antarcatica",
        Correct: "true",
      },
    ],
  },
  {
    question: "which is the smallest continent in the world",
    answers: [
      {
        Text: "Asia",
        Correct: "false",
      },
      {
        Text: "Australia",
        Correct: "true",
      },
      {
        Text: "Aectic",
        Correct: "false",
      },
      {
        Text: "Africa",
        Correct: "false",
      },
    ],
  },
  {
    question: "which is the smallest continent in the world",
    answers: [
      {
        Text: "Asia",
        Correct: "false",
      },
      {
        Text: "Australia",
        Correct: "true",
      },
      {
        Text: "Aectic",
        Correct: "false",
      },
      {
        Text: "Africa",
        Correct: "false",
      },
    ],
  },
];

const questionElement = document.getElementById("Questions");
const answerElement = document.getElementById("answer-boxes");

const Nextbutton = document.getElementById("nextButton");
let currentquestionIndex = 0;
let Score = 0;

function showQuestions() {
  reserState();
  let currentquestion = questions[currentquestionIndex];
  let questionNo = currentquestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentquestion.question;
  currentquestion.answers.forEach((answer) => {
    const div = document.createElement("div");
    div.innerHTML = answer.Text;
    div.classList.add("box");
    answerElement.appendChild(div);
    if (answer.Correct) {
      div.dataset.Correct = answer.Correct;
    }
    div.addEventListener("click", selectAnswer);
  });
}

function startQuiz() {
  currentquestionIndex = 0;
  Score = 0;
  Nextbutton.innerHTML = "Next";
  showQuestions();
}

function reserState() {
  Nextbutton.style.display = "NONE";
  while (answerElement.firstChild) {
    answerElement.removeChild(answerElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.Correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    Score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerElement.children).forEach((button) => {
    if (button.dataset.Correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = "true";
  });
  Nextbutton.style.display = "initial";
}

function showScore() {
  reserState();
  questionElement.innerHTML = `you scored : ${Score} out of ${questions.length}`;
  Nextbutton.innerHTML = "Play Again";
  Nextbutton.style.display = "initial";
}
function handleNexButton() {
  currentquestionIndex++;
  if (currentquestionIndex < questions.length) {
    showQuestions();
  } else {
    showScore();
  }
}

Nextbutton.addEventListener("click", () => {
  if (currentquestionIndex < questions.length) {
    handleNexButton();
  }
});

startQuiz();
