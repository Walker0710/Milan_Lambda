import React from "react";
import Multiple_Choice from "../components/Multiple_Choice";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Infero_question = () => {
  const questionData = {
    question: "What is the rating of MSR_Siddarth on CF?",
    options: ["4000", "5000", "6000", "7000"],
    correctAnswer: "7000",
  };
  return (
    <>
      <Navbar />
      <div class="flex flex-col h-screen">
        <div class="flex-1">
          <div>
            <Multiple_Choice
              question={questionData.question}
              options={questionData.options}
              correctAnswer={questionData.correctAnswer}
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Infero_question;
