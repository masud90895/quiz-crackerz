import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import QuizContainer from "./components/QuizContainer/QuizContainer";
import Statistics from "./components/Statistics/Statistics";
import Topics from "./components/Topics/Topics";
import Main from "./LayOut/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
      children: [
        {
          path: "/",
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Topics></Topics>,
        },
        {
          path: "home",
          element: <Topics></Topics>,
        },
        {
          path: "topics/:id",
          loader: ({params}) => {
           return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`);
          },
          element: <QuizContainer></QuizContainer>,
        },
        {
          path: "blog",
          element:<Blog/>
        },
        {
          path: "statistics",
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
          element:<Statistics/>
        },
        {
          path: "contact",
          element:<Contact/>
        }
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
