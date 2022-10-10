import React, { useContext } from "react";
import "./Topics.css";
import image from "../Header/favicon.png";
import { QuizContext } from "../../LayOut/Main";
import QuizData from "../QuizData/QuizData";
import { Link } from "react-router-dom";
import quiz from "../assets/100943-perulogy.json";
import Lottie from "lottie-react";

const Topics = () => {
  const quizData = useContext(QuizContext);
  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div>
        <section className="dark:bg-gray-800 dark:text-gray-100">
          <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
            <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
              <Lottie animationData={quiz} loop={true} />
            </div>
            <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left mt-8 lg:mt-0">
              <h1 className="animate-charcter"> Mege Quiz</h1>
              <p className="mt-6 mb-8 text-lg sm:mb-12">
                Enjoy Mega quiz gaming!
                <br className="hidden md:inline lg:hidden" />
                Guess all the game quiz levels with over 720 video games that
                has been a trending until this year (2023).
              </p>
              <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                <Link
                  rel="noopener noreferrer"
                  to="/topics"
                  className="px-8 py-2  text-lg font-semibold rounded bg-violet-500 text-gray-100 hover:bg-violet-600 hover:text-white transition-all"
                >
                  Topics
                </Link>
                <Link
                  rel="noopener noreferrer"
                  to="blog"
                  className="px-8 py-2 text-lg font-semibold  rounded "
                >
                  <button className="learn-more">
                    <span className="circle bg-violet-500" aria-hidden="true">
                      <span className="icon arrow"></span>
                    </span>
                    <span className="button-text">Learn More</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {quizData.data.map((quizs) => (
          <QuizData key={quizs.id} quizs={quizs}></QuizData>
        ))}
      </div>
    </div>
  );
};

export default Topics;
