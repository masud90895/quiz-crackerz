import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Topics from './components/Topics/Topics';
import Main from './LayOut/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      loader : ()=> fetch ('https://openapi.programming-hero.com/api/quiz'),
      children:[
        {
          path: '/',
          element: <Topics></Topics>,
        },
        {
          path: 'topics',
          element: <Topics></Topics>,
        },
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
