import React from "react";

const QuizData = ({quizs}) => {
    const {id,name,logo,total} = quizs;
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure className="shadow p-2 rounded-md">
        <img src={logo} alt="Shoes" />
      </figure>
      <div className="card-body text-left">
        <h2 className="card-title">{name}</h2>
        <h3>Total Quiz : {total}</h3>       
          <button className="btn btn-primary">Let's practice</button>
      </div>
    </div>
  );
};

export default QuizData;
