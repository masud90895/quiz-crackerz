import React, { useState } from "react";
import Swal from "sweetalert2";

const Option = ({
  option,
  correctAnswer,
  setRight,
  setwrong,
  right,
  wrong,
}) => {
  const showIsCorrect = (option) => {
    if (correctAnswer === option) {
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Your Answer Is Correct",
        showConfirmButton: false,
        timer: 1500,
      });

      setRight(right + 1);
      localStorage.setItem("rightAnswer", right +1);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Not Correct..Try Again",
        timer: 1500,
      });

      setwrong(wrong + 1);
      localStorage.setItem("wrongAnswer", wrong + 1);
    }
  };
  return (
    <div
    onClick={() => showIsCorrect(option)}
     className="md:w-2/3 w-full h-22 mb-2 border border-violet-500 rounded-lg text-xl pt-2 bg-white hover:bg-violet-500 hover:text-white">
      <p>{option}</p>
    </div>
  );
};

export default Option;
