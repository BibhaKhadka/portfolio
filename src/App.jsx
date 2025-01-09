import React from 'react'
import Header from './Components/Header'
import Home from './Components/Home'
import { Routes, Route, BrowserRouter } from 'react-router'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import About from './Components/About'
import Skills from './Components/Skills'

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='#Contact' element={<Contact />} />

        </Routes>
      </main>
      <About/>
      <Skills/>
      <Contact />
      <Footer />
    </>
  )
}

export default App
