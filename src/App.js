import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Topics from './components/Topics/Topics';
import Main from './layouts/Main';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import Quiz from './components/Quiz/Quiz';
// import ReactQuiz from './components/Quiz/ReactQuiz';
import AllQuiz from './components/AllQuiz/AllQuiz';
import { ToastContainer } from 'react-toastify';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children:
        [
          {
            path: '/',
            loader:  () => {
              return fetch('https://openapi.programming-hero.com/api/quiz')
            },
            element: <Home></Home>
          },
          {
            path: '/home',
            // loader:  () => {
            //   return fetch('https://openapi.programming-hero.com/api/quiz')
            // },
            element: <Home></Home>
          },
          {
            path: '/quiz/:id',
            loader: ({params}) => {
              return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`) 
          },
            element: <AllQuiz></AllQuiz>
          },
         
          {
            path: '/topics',
            element: <Topics></Topics>
          },
          {
            path: '/statistics',
            element: <Statistics></Statistics>
          },
          {
            path: '/blog',
            element: <Blog></Blog>
          },
          {
            path: '*',
            element: <p className='text-blck text-3xl'>Sorry, Something goes wrong</p>
          }
        ]

    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}>
      
      </RouterProvider>
    </div>
  );
}

export default App;
