import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Question from "../Question/Question";

const QuizContainer = () => {
  const quizsData = useLoaderData();
  const [right, setRight] = useState(0);
  const [wrong, setwrong] = useState(0);

  const clearData=()=>{
    setRight(0);
    setwrong(0);
  }

  return (
    <div className="mt-5 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 text-violet-500">
      <div className="mb-5">
        <h1 className="text-4xl font-bold">Quiz of {quizsData.data.name}</h1>
      </div>
      {/* sum of ans right or rang */}
      <div className="card w-96 mb-6 bg-base-100 shadow-xl mx-auto">
        <div className="card-body">
          <h2 className="card-title text-2xl text-black">Your Result :</h2>
          <h4 className="text-xl text-[green]">Right Answer's: {right}</h4>
          <h4 className="text-xl text-[red]">wrong Answer's: {wrong}</h4>
          <div>
            <button
            onClick={clearData}
             className="learn-more">
                
              <span className="circle bg-violet-500" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text">Clear</span>
            </button>
          </div>
        </div>
      </div>
      <div>
        {quizsData.data.questions.map((questionData, index) => (
          <Question
            key={questionData.id}
            questionData={questionData}
            index={index}
            setwrong={setwrong}
            setRight={setRight}
            wrong={wrong}
            right={right}
          ></Question>
        ))}
      </div>
    </div>
  );
};

export default QuizContainer;
