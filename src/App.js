import React from 'react'
import Header from './components/header/Header'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'
import { useContext } from 'react'
import {ThemeContext} from './contexts/theme'
import Contact from './components/contact/Contact'
import Footer from './components/Footer/Footer'
import "./App.css"



const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div id='top' className={`${themeName} app`}>
      <Header />

      <main>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App