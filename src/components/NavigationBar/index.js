import React from 'react'
import { NavLink as Link } from 'react-router-dom'
import 'bootstrap'
import '../../styles/styles.scss'

const NavigationBar = () => (
  <div className="container-fluid">
  <nav className="navbar navbar-toggleable-sm navbar-light bg-faded" role="navigation">
    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"/>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav nav">
        <li className="nav-item">
          <Link activeClassName='active' className='nav-link' exact to="/">
            Hjem
          </Link>
        </li>
        <li className="nav-item">
          <Link activeClassName='nav-link active' className='nav-link' exact to="/events">
            Timeplan
          </Link>
        </li>
        <li className="nav-item">
          <Link activeClassName='nav-link active' className='nav-link' exact to="/links">
            Nyttige Lenker
          </Link>
        </li>
        <li className="nav-item">
          <Link activeClassName='nav-link active' className='nav-link' exact to="/findBuddy">
            Mistet faddergruppen din?
          </Link>
        </li>
        <li className="nav-item">
          <Link activeClassName='nav-link active' className='nav-link' exact to="/board">
            Om fadderstyret
          </Link>
        </li>
      </ul>
    </div>
  </nav>
  </div>
)

export default NavigationBar
