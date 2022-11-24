// Imports
import type { NextPage } from "next";
import { useState, useEffect } from "react";

// Functions
const Home: NextPage = () => {
  // State
  const [answer, setAnswer] = useState(0);
  const [question, setQuestion] = useState("");
  const [numberLimit, setNumberLimit] = useState(10);

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
    const num1 = Math.floor(Math.random() * numberLimit);
    const num2 = Math.floor(Math.random() * numberLimit);

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

  // Handle change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Get value
    const value = e.target.value;

    // Check if value is answer
    if (value == answer.toString()) {
      // Handle correct answer
      // Log correct
      console.log("Correct!");

      // Generate new question
      generateQuestion();

      // Clear input
      e.target.value = "";
    }
  };

  // useEffect
  useEffect(() => {
    // Generate question
    generateQuestion();
  }, []);

  return (
    <>
      <h1>{question}</h1>
      <form>
        <input type="number" onChange={handleChange} name="answer" />
      </form>
    </>
  );
};

// Exports
export default Home;
