import React, { useState } from "react";
import Swal from 'sweetalert2'
import Option from "../Option/Option";

const Question = ({ questionData,index }) => {
  const { correctAnswer, id, options, question } = questionData;
  const showAnswer=()=>{
    Swal.fire(`Ans:  ${correctAnswer}`)
  }
  

  return (
    <div className="card w-full bg-base-100 shadow-xl mb-4 p-3">
      <div className="mb-4">
        <div className="flex justify-between">
          <h3 className="text-xl">
            {" "}
            Quiz-{index} <span>{question}</span>
          </h3>
          <button
          onClick={showAnswer}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 mb-3 px-2">
        {options.map((option) => (
          <Option key={option} option={option}></Option>
        ))}
      </div>
    </div>
  );
};

export default Question;
