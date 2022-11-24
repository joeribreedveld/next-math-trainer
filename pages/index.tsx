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
  const generateOperator = async () => {
    // Generate random number
    const num = await Math.floor(Math.random() * 4);
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

  // Validate answer
  const generateAnswer = ({ operator, num1, num2 }: any) => {
    switch (operator) {
      case "+":
        return num1 + num2;
        break;
      case "-":
        return num1 - num2;
        break;
      case "*":
        return num1 * num2;
        break;
      case "/":
        return num1 / num2;
        break;
    }
  };

  // Generate question
  const generateQuestion = async () => {
    // Generate random numbers
    const num1 = await Math.floor(Math.random() * numberLimit);
    const num2 = await Math.floor(Math.random() * numberLimit);

    // Generate operator
    const operator = await generateOperator();

    // Generate question
    const question = `${num1} ${operator} ${num2}`;

    // Generate answer
    const answer = await generateAnswer({ operator, num1, num2 });

    // Validate answer
    if (answer % 1 != 0) {
      // Reset question
      generateQuestion();
    }

    // Set state
    setQuestion(question);
    setAnswer(answer);
  };

  // Handle correct answer
  const handleCorrect = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Log correct
    console.log("Correct!");

    // Generate new question
    generateQuestion();

    // Clear input
    e.target.value = "";
  };

  // Handle change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Check if answer is correct
    if (parseInt(e.target.value) === answer) {
      handleCorrect(e);
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
