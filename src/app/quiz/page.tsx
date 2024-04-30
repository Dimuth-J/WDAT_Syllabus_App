"use client"

// pages/quiz.tsx
import { useState } from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

interface Question {
  id: number;
  questionText: string;
  options: { text: string; isCorrect: boolean }[];
}

const questions: Question[] = [
  {
    id: 1,
    questionText: "What is the primary method of creating routes in Next.js as explained in the video ?",
    options: [
      { text: "Using a configuration file", isCorrect: false },
      { text: "By creating folders and files within the app folder", isCorrect: true },
      { text: "Manually registering each route in the router", isCorrect: false },
      { text: "Using an external routing library", isCorrect: false },
    ],
  },
  {
    id: 2,
    questionText: "According to the video, how does Next.js handle routes that do not match any existing files or folders ?",
    options: [
      { text: "It redirects to the home page", isCorrect: false },
      { text: "It displays a custom error page", isCorrect: false },
      { text: "It sends a 404 error response", isCorrect: true },
      { text: "It attempts to dynamically create the route", isCorrect: false },
    ],
  },
  {
    id: 3,
    questionText: "What file does the video mention that is used to specify layout configurations in Next.js ?",
    options: [
      { text: "next.config.js", isCorrect: false },
      { text: "layout.js", isCorrect: true },
      { text: "app.js", isCorrect: false },
      { text: "router.js.js", isCorrect: false },
    ],
  },
];

const QuizComponent = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);
  const question: Question = questions[currentQuestionIndex];

  const handleAnswer = (isCorrect: boolean, optionIndex: number) => {
    setIsAnswerCorrect(isCorrect);
    setSelectedOptionIndex(optionIndex);
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestionIndex + 1;
    setTimeout(() => {
      setSelectedOptionIndex(null);
      setIsAnswerCorrect(null);
      if (nextQuestion < questions.length) {
        setCurrentQuestionIndex(nextQuestion);
      } else {
        alert(`Quiz finished! Your score is ${score + (isCorrect ? 1 : 0)}`);
      }
    }, 2000);  // delay to show feedback icon and correct answer before moving to next question
  };

  return (
    <div className="p-4">
      <div className="mb-4">
        <p className="text-lg font-semibold">{question.questionText}</p>
      </div>
      <div>
        {question.options.map((option, index) => (
          <button
            key={index}
            className={`block bg-blue-200 text-black p-1 rounded my-1 hover:bg-blue-700 hover:text-white items-center justify-between ${
              selectedOptionIndex === index ? "bg-green-200" : ""
            }`}
            onClick={() => handleAnswer(option.isCorrect, index)}
          >
            {option.text}
            {selectedOptionIndex === index && isAnswerCorrect && <FaCheckCircle className='ms-5' color="green" size="24" />}
            {selectedOptionIndex === index && !isAnswerCorrect && <FaTimesCircle color="red" size="24" />}
          </button>
        ))}
      </div>
    </div>
  );
};

const QuizPage = () => {
  return (
    <div className="mt-5">
      <h1 className="text-xl font-bold">Take the Quiz!</h1>
      <QuizComponent />
    </div>
  );
};

export default QuizPage;
