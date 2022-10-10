import React from "react";

const Blog = () => {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
      <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
        <h2 className="animate-charcter text-2xl font-semibold sm:text-4xl">
          Blog Section & Most Asked Questions
        </h2>
        <br />
        <div className="space-y-4">
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 text-left font-bold">
              what is the purpose of the react router?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400 text-left">
              ReactJS Router is mainly used for developing Single Page Web
              Applications. React Router is used to define multiple routes in
              the application.React Router is a standard library for routing in
              React. It enables the navigation among views of various components
              in a React Application, allows changing the browser URL, and keeps
              the UI in sync with the URL.{" "}
            </p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 text-left font-bold">
              How does context api work?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400 text-left">
              The React Context API is a way for a React app to effectively
              produce global variables that can be passed around. This is the
              alternative to "prop drilling" or moving props from grandparent to
              child to parent, and so on. Context is also touted as an easier,
              lighter approach to state management using Redux.
            </p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 text-left font-bold">
              What is Use Ref Hook in React JS?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400 text-left">
              The useRef hook is the new addition in React 16.8. Before
              proceeding to this article there is a prerequisite to know about
              the ref in react. <br /> The useRef is a hook that allows to directly
              create a reference to the DOM element in the functional component.
              <br />
              <span className="font-bold">Syntax:</span> <br /> <span className="h-8  bg-gray-600 text-white md:p-5  rounded-md">const refContainer = useRef(initialValue);</span>
              <br /><br /> The useRef
              returns a mutable ref object. This object has a property called
              .current. The value is persisted in the refContainer.current
              property. These values are accessed from the current property of
              the returned object. The .current property could be initialised to
              the passed argument initialValue e.g. useRef(initialValue). The
              object can persist a value for a full lifetime of the component.
              <br />
              <span className="font-bold">Example:</span> How to access the DOM using useRef hook.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
};

export default Blog;
