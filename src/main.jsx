import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import Statistics from './components/Statistics'
import AppliedJobs from './components/AppliedJobs'
import Blog from './components/Blog'
import ErrorPage from './components/ErrorPage'
import JobDetails from './components/JobDetails'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Home/>,
        loader: () => fetch('jobFeatured.json')
      },
      {
        path: '/job/:Id',
        element: <JobDetails />,
        loader: ({params}) => fetch('/jobFeatured.json') 
      },
      
      {
        path: 'statistics',
        element: <Statistics/>
      },
      {
        path: 'applied-jobs',
        element: <AppliedJobs/>
      },
      {
        path: 'blog',
        element: <Blog/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
