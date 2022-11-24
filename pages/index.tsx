// Imports
import type { NextPage } from "next";
import { useState } from "react";

// Functions
const Home: NextPage = () => {
  // State
  const [answer, setAnswer] = useState(0);

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
    console.log(question);
  };

  return (
    <>
      <h1>Hello, world!</h1>
    </>
  );
};

// Exports
export default Home;
