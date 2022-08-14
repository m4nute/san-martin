import React,{useEffect} from 'react'
import {Link} from 'react-router-dom'
import '../styles/Navbar.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

function Nabvar() {
  useEffect(() => {
    Aos.init({duration: 1200})
  })
  return (
    <nav className="navbar navbar-expand navbar-dark bg-primary" data-aos='fade-down' style={{padding: 12}}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Huergo  
        </Link>
        <div className="collapse navbar-collapse" id="navbarColor02">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/trivia">
                Trivia
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nabvar