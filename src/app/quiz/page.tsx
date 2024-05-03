"use client"


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
    questionText: "What is the primary method of creating routes in Next.js as explained in the video?",
    options: [
      { text: "1.) Using a configuration file", isCorrect: false },
      { text: "2.) By creating folders and files within the app folder", isCorrect: true },
      { text: "3.) Manually registering each route in the router", isCorrect: false },
      { text: "4.) Using an external routing library", isCorrect: false },
    ],
  },
  {
    id: 2,
    questionText: "According to the video, how does Next.js handle routes that do not match any existing files or folders?",
    options: [
      { text: "1.) It redirects to the home page", isCorrect: false },
      { text: "2.) It displays a custom error page", isCorrect: false },
      { text: "3.) It sends a 404 error response", isCorrect: true },
      { text: "4.) It attempts to dynamically create the route", isCorrect: false },
    ],
  },
  {
    id: 3,
    questionText: "What file does the video mention that is used to specify layout configurations in Next.js?",
    options: [
      { text: "1.) next.config.js", isCorrect: false },
      { text: "2.) layout.js", isCorrect: true },
      { text: "3.) app.js", isCorrect: false },
      { text: "4.) router.js", isCorrect: false },
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
    }, 2000); // delay to show feedback icon and correct answer before moving to next question
  };

  return (
    <div className="px-4 py-2">
      <div className="mb-4">
        <p className="text-lg sm:text-base font-semibold">{question.questionText}</p>
      </div>
      <div>
        {question.options.map((option, index) => (
          <button
            key={index}
            className={`w-full text-left text-black p-1 rounded  transition-colors duration-300 hover:bg-teal-500 hover:text-white ${
              selectedOptionIndex === index ? (isAnswerCorrect ? "bg-green-400" : "bg-red-300") : ""
            }`}
            onClick={() => handleAnswer(option.isCorrect, index)}
          >
            {option.text}
            {selectedOptionIndex === index && isAnswerCorrect !== null && (
              isAnswerCorrect ? <FaCheckCircle className="float-right text-green-700" size="24" /> :
              <FaTimesCircle className="float-right text-red-600" size="24" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

const QuizPage = () => {
  return (
    <div className="container mx-auto mt-5 p-4">
      <h1 className="text-2xl sm:text-xl font-bold text-center">Take the Quiz!</h1>
      <QuizComponent />
    </div>
  );
};

export default QuizPage;
