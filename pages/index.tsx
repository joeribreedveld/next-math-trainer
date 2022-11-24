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

  return (
    <>
      <h1>Hello, world!</h1>
    </>
  );
};

// Exports
export default Home;
