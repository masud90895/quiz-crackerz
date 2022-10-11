import React from "react";
import Lottie from "lottie-react";
import talk from "../assets/101831-mental-therapy.json";

const Contact = () => {
  return (
    <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-800 dark:text-gray-100">
      <div className="flex flex-col justify-between">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
            Let's talk!
          </h2>
          <div className="dark:text-gray-400">
          Mega Quiz app may not be working for you due to some issues that your device may have or your internet connection problem.  If you think that Mega Quiz app has an issue, please mail your issue using the comment box below and someone from our community may help you.
          </div>
        </div>
        <Lottie className=" h-64 md:h-64" animationData={talk} loop={true} />
      </div>
      <div
         noValidate=""
        className="space-y-6 ng-untouched ng-pristine ng-valid md:text-start text-center"
      >
        <div>
          <label htmlFor="name" className="text-sm">
            Full name
          </label>
          <input
            id="name"
            type="text"
            placeholder=""
            className="w-full p-3  rounded dark:bg-gray-800"
            style={{'border': "2px solid gray"}}
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full p-3 rounded "
            style={{'border': "2px solid gray"}}
          />
        </div>
        <div>
          <label htmlFor="message" className="text-sm">
            Message
          </label>
          <textarea
            id="message"
            rows="3"
            className="w-full p-3 rounded "
            style={{'border': "2px solid gray"}}
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-violet-400 dark:text-gray-900"
        >
          Send Message
        </button>
      </div>
    </div>
  );
};

export default Contact;
