// Imports
import type { NextPage } from "next";
import { useState, useEffect } from "react";

// Functions
const Home: NextPage = () => {
  // State
  const [answer, setAnswer] = useState(0);
  const [question, setQuestion] = useState("");
  const [numberLimit, setNumberLimit] = useState(10);
  const [learned, setLearned] = useState([""]);

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
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        return num1 / num2;
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

    // Add question and answer together
    const questionAndAnswer = `${question} = ${answer}`;

    // Add to learned
    setLearned([...learned, questionAndAnswer]);
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
      <header className="h-16 fixed bg-gray-100 w-full flex items-center px-16">
        <h1>Math Trainer</h1>
      </header>
      <main className="min-h-screen p-16 pt-32 w-full">
        <section className="shadow-xl rounded-2xl p-16 md:text-center flex md:justify-center flex-col md:items-center md:w-1/2 mb-16">
          <h1 className="text-4xl md:text-6xl mb-8 font-bold">{question}</h1>
          <form className="">
            <input
              className="text-4xl md:text-6xl outline-none appearance-none w-32 font-bold text-blue-400 opacity-1 placeholder:text-blue-300 cursor-pointer caret-transparent"
              type="number"
              onChange={handleChange}
              name="answer"
              placeholder="0"
            />
          </form>
        </section>
        <section>
          <h2 className="text-xl mb-4">Learned questions</h2>
          <ul>
            {learned.map((question) => {
              return <li key={question}>{question}</li>;
            })}
          </ul>
        </section>
      </main>
      <footer className="h-16 bg-gray-100 w-full px-16 flex items-center">
        Footer
      </footer>
    </>
  );
};

// Exports
export default Home;
