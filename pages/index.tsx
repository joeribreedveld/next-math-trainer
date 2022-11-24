// Imports
import type { NextPage } from "next";
import { useState, useEffect } from "react";

// Functions
const Home: NextPage = () => {
  // State
  const [answer, setAnswer] = useState(0);
  const [question, setQuestion] = useState("");

  // Functions
  // Generate operator
  const generateOperator = () => {
    // Generate random number
    const num = Math.floor(Math.random() * 4);
    // Choose operator
    switch (num) {
      case 0:
        return "+";
      case 1:
        return "-";
      case 2:
        return "*";
      case 3:
        return "/";
    }
  };

  // Generate question
  const generateQuestion = () => {
    // Generate random numbers
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);

    // Generate operator
    const operator = generateOperator();

    // Generate question
    const question = `${num1} ${operator} ${num2}`;

    // Calculate answer with operator case
    switch (operator) {
      case "+":
        setAnswer(num1 + num2);
        break;
      case "-":
        setAnswer(num1 - num2);
        break;
      case "*":
        setAnswer(num1 * num2);
        break;
      case "/":
        setAnswer(num1 / num2);
        break;
    }

    // Set question
    setQuestion(question);
  };

  // useEffect
  useEffect(() => {
    // Generate question
    generateQuestion();
  }, []);

  return (
    <>
      <h1>{question}</h1>
    </>
  );
};

// Exports
export default Home;
