import React from "react";
import { Link } from "react-router-dom";

const QuizData = ({ quizs }) => {
  const { id, name, logo, total } = quizs;
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure className="shadow p-2 rounded-md">
        <img src={logo} alt="Shoes" />
      </figure>
      <div className="card-body text-left">
        <h2 className="card-title">{name}</h2>
        <h3>Total Quiz : {total}</h3>
        <Link to={`topics/${id}`}>
        <button className="learn-more">
          <span className="circle bg-violet-500" aria-hidden="true">
            <span className="icon arrow"></span>
          </span>
          <span className="button-text">Let's practice</span>
        </button>
        </Link>
      </div>
    </div>
  );
};

export default QuizData;
