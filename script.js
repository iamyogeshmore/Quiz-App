document.addEventListener("DOMContentLoaded", function () {
  const quizData = [
    {
      question: "Which country is home to the kangaroo?",
      options: ["Australia", "Brazil", "Canada", "India"],
      correctAnswer: "Australia",
    },
    {
      question: "What is the chemical symbol for water?",
      options: ["O", "W", "H2O", "Wt"],
      correctAnswer: "H2O",
    },
    {
      question: 'Who painted the "Mona Lisa"?',
      options: [
        "Vincent van Gogh",
        "Leonardo da Vinci",
        "Pablo Picasso",
        "Claude Monet",
      ],
      correctAnswer: "Leonardo da Vinci",
    },
    {
      question:
        'Which planet is known as the "Morning Star" or "Evening Star"?',
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      correctAnswer: "Venus",
    },
    {
      question: "What is the largest organ in the human body?",
      options: ["Brain", "Liver", "Heart", "Skin"],
      correctAnswer: "Skin",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Mars", "Venus", "Jupiter", "Saturn"],
      correctAnswer: "Mars",
    },
    {
      question: 'Who wrote the play "Romeo and Juliet"?',
      options: [
        "William Shakespeare",
        "Jane Austen",
        "Charles Dickens",
        "Mark Twain",
      ],
      correctAnswer: "William Shakespeare",
    },
    {
      question: "What is the largest mammal in the world?",
      options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
      correctAnswer: "Blue Whale",
    },
    {
      question: "In which city is the famous Taj Mahal located?",
      options: ["Mumbai", "Agra", "Delhi", "Jaipur"],
      correctAnswer: "Agra",
    },
    {
      question: 'Which element has the chemical symbol "Fe"?',
      options: ["Iron", "Gold", "Silver", "Copper"],
      correctAnswer: "Iron",
    },
  ];

  let currentQuestion = 0;
  let score = 0;
  let quizCompleted = false;

  function displayQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");

    if (currentQuestion < quizData.length) {
      const currentQuizData = quizData[currentQuestion];
      questionElement.textContent = currentQuizData.question;

      optionsElement.innerHTML = "";
      currentQuizData.options.forEach((option) => {
        const optionElement = document.createElement("button");
        optionElement.textContent = option;
        optionElement.onclick = () => checkAnswer(option);
        optionsElement.appendChild(optionElement);
      });
    } else {
      endQuiz();
    }
  }

  function checkAnswer(selectedOption) {
    const currentQuizData = quizData[currentQuestion];

    if (selectedOption === currentQuizData.correctAnswer) {
      score++;
      alert("Correct!");
    } else {
      alert(
        `Incorrect. The correct answer is: ${currentQuizData.correctAnswer}`
      );
    }

    currentQuestion++;
    displayQuestion();
  }

  function endQuiz() {
    const container = document.querySelector(".container");
    container.innerHTML = `
        <h1 class="result">Quiz Completed</h1>
        <p class="score">Your Score: ${score} out of ${quizData.length}</p>
      `;
    quizCompleted = true;
  }

  displayQuestion();
});
