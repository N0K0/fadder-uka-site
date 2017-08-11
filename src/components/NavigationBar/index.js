import React from 'react'
import { NavLink as Link } from 'react-router-dom'
import 'bootstrap'
const NavigationBar = () => (
  <div className="d-block header-bar">
    <div className="container">
      <nav className="navbar navbar-toggleable navbar-inverse bg-faded" role="navigation">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"/>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav nav">
            <Link activeClassName='active' className='nav-link' exact to="/">
              <li className="nav-item">
                Hjem
              </li>
            </Link>
            <Link activeClassName='nav-link active' className='nav-link' exact to="/events">
              <li className="nav-item">
                  Timeplan
              </li>
            </Link>
            <Link activeClassName='nav-link active' className='nav-link' exact to="/links">
              <li className="nav-item">
                  Nyttige Lenker
              </li>
            </Link>
            <Link activeClassName='nav-link active' className='nav-link' exact to="/findBuddy">
              <li className="nav-item">
                  Mistet faddergruppen din?
              </li>
            </Link>
            <Link activeClassName='nav-link active' className='nav-link' exact to="/board">
              <li className="nav-item">
                  Om fadderstyret
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  </div>
)

import '../../styles/styles.scss'

export default NavigationBar
