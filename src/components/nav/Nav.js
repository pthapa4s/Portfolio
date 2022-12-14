import React from 'react'
import "./nav.css"

function Nav() {
  return (
    
    <header className="nav">
      <nav className="nav container">
        <div className='nav__menu'>
          <ul className="nav__list grid">
          <li className="nav__item">
              <a href="#contact" className="nav__link">
              <i className="uil uil-message nav__icon"></i>Contact
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link">
              <i className="uil uil-file-alt nav__icon"></i>Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#projects" className="nav__link">
              <i className="uil uil-scenery nav__icon"></i>Projects
              </a>
            </li>
          </ul>

        </div>
      </nav>
    </header>
  )
}

export default Nav