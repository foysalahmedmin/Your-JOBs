import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './components/Home/Home';
import Applied from './components/Applied/Applied';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import JobDetails from './components/JobDetails/JobDetails';
import JobDetailsLoader from './utilities/Loader';
import ErrorPage from './components/ErrorPage/ErrorPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "Applied",
        element: <Applied />
      },
      {
        path: "Statistics",
        element: <Statistics />
      },
      {
        path: "Blog",
        element: <Blog />
      },
      {
        path: "jobDetails/:id",
        element: <JobDetails />,
        loader: ({params}) => JobDetailsLoader(params.id)
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
