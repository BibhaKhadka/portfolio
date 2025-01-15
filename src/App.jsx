import React from 'react'
import Header from './Components/Header'
import Home from './Components/Home'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import About from './Components/About'
import Skills from './Components/Skills'
import './App.css'
import {Routes, Route } from "react-router-dom";

//  const router = createBrowserRouter(
// [
//   {
//     path:'/',
//     element: <Home/>,
//   },
//   {
//     path:'/about',
//     element: <About/>, 
//   },
//   {
//     path:'/Skills',
//     element: <Skills/>, 
//   },
//   {
//     path:'/Contact',
//     element: <Contact/>, 
//   },
// ]
//  );

const App = () => {
  return (
    <>
       <Header />
       <Home/>
      <About/>
      <Skills/>
      <Contact/>
      <Footer />
      {/* <RouterProvider router= {router}/> */}
    </> 
  )
}

export default App
