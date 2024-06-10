import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Signup from './login/Signup.jsx'
import Signin from './login/Signin.jsx'
import Layout from './Layout.jsx'
import Tweet from './foryou-following/Tweet.jsx'
import Home from './home/Home.jsx'
import Profile from './profile/Profile.jsx'
import Aisupport from './grok-support/Aisupport.jsx'
import UpgradeToPremium from './premium/UpgradeToPremium.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: 'sign-up',
        element: <Signup/>
      },
      {
        path: "sign-in",
        element: <Signin/>
      },
      {
        path: "home",
        element: <Home/>
      },
      {
        path: "home/tweet",
        element: <Tweet/>
      },
      {
        path: "profile",
        element: <Profile/>
      },
      {
        path: "grok",
        element: <Aisupport/>
      },
      {
        path: "upgrade",
        element: <UpgradeToPremium/>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
