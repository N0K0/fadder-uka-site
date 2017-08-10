import React from 'react'
import { NavLink as Link } from 'react-router-dom'
import 'bootstrap'
import '../../styles/styles.scss'

const NavigationBar = () => (
  <nav className="navbar navbar-toggleable-xl bg-faded">
    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link activeClassName='nav-link active' className='nav-link' exact to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link activeClassName='nav-link active' className='nav-link' exact to="/example">
            Example
          </Link>
        </li>
        <li className="nav-item">
          <Link activeClassName='nav-link active' className='nav-link' exact to="/notfound" />
        </li>
      </ul>
    </div>
  </nav>
)

export default NavigationBar
