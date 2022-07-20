const quizdata = [
  {
    question: "What is the most used programming language in 2019",
    a: "java",
    b: "Javascript",
    c: "python",
    d: "c",
    correct: "b",
  },
  {
    question: "Who is the President of US?",
    a: "Florin pop",
    b: "Donald Trump",
    c: "Ivan Saldano",
    d: "Mihai Andheri",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
  {
    question: "What year was React launched?",
    a: "2016",
    b: "2013",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
  {
    question: "What year was MongoDB launched?",
    a: "1996",
    b: "2009",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
  {
    question: "What year was NodeJS launched?",
    a: "1996",
    b: "2009",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];

const quiz = document.getElementById("quiz");
const Answeer = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();
function loadQuiz() {
  deselectedAnswer();
  const currentQuizData = quizdata[currentQuiz];

  questionEl.innerHTML = currentQuizData.question;
  a_text.innerHTML = currentQuizData.a;
  b_text.innerHTML = currentQuizData.b;
  c_text.innerHTML = currentQuizData.c;
  d_text.innerHTML = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  Answeer.forEach((Answeer1) => {
    if (Answeer1.checked) {
      answer = Answeer1.id;
    }
  });
  return answer;
}

function deselectedAnswer() {
  Answeer.forEach((Answeer1) => {
    Answeer1.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  //check to see the answer
  const answer = getSelected();
  if (answer) {
    if (answer === quizdata[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizdata.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2> You answered correctly ${score} / ${quizdata.length} questions. </h2>
    
            <button onclick="location.reload()"> Reload</button>`;
    }
  }
});
