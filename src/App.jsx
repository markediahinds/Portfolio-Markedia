import React from 'react'
import './App.css'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <div className='app'>
      <Home />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
