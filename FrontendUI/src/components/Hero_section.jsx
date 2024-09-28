import React from "react";
import Updates from "./Updates";
import LiveQuizzesSection from "./Livequiz";

const Hero_section = () => {
  return (
    <>
      <div className="text-center">
        <h1 className="text-4xl font-bold pb-10 pt-10">
            Welcome to 'NAME'
        </h1>
        <p className="text-[#999999] text-xl pb-10">
           Test your knowledge, challenge your friends, and learn something new with our exciting quizzes!  
        </p>
        <button class="btn btn-md lg:btn-lg bg-black text-white hover:text-black">
          <a href="/play">Play Now</a>
        </button>
        <LiveQuizzesSection />
        <Updates />
      </div>
    </>
  );
};

export default Hero_section;
