import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Landing from './components/Landing'
import Home from './components/Home'
import Phishing from './components/Phishing'
import Email from './components/Email'
import Password from './components/Password'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import Chatbot from './components/Chatbot'

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <>
        <div className='flex flex-col min-h-screen'>
          <Navbar />
          <div className='flex flex-1'>
            <Landing />
          </div>
          <Footer />
        </div>
      </>
    },
    {
      path: "/home",
      element: <>
        <div className='flex flex-col min-h-screen'>
          <Navbar />
          <div className='flex flex-1'>
            <Chatbot />
            <Home />
          </div>
          <Footer />
        </div>
      </>
    },
    {
      path: "/phishing",
      element: <>
        <div className='flex flex-col min-h-screen'>
          <Navbar />
          <div className='flex flex-1'>
            <Phishing />
          </div>
          <Footer />
        </div>
      </>
    },
    {
      path: "/mailbreach",
      element: <>
        <div className='flex flex-col min-h-screen'>
          <Navbar />
          <div className='flex flex-1'>
            <Email />
          </div>
          <Footer />
        </div>
      </>
    },
    {
      path: "/passbreach",
      element: <>
        <div className='flex flex-col min-h-screen'>
          <Navbar />
          <div className='flex flex-1'>
            <Password />
          </div>
          <Footer />
        </div>
      </>
    },
    {
      path: "/login",
      element: <>
        <Login />
      </>
    },
    {
      path: "/register",
      element: <>
        <Register />
      </>
    },
    {
      path: "/profile",
      element: <>
        <div className='flex flex-col min-h-screen'>
          <Navbar />
          <div className='flex flex-1'>
            <Profile />
          </div>
          <Footer />
        </div>
      </>
    },
  ],
    {
      basename: "/CalibreCops",
    })
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App