import React from 'react'
import PropTypes from 'prop-types'
import { NavLink as Link } from 'react-router-dom'
import 'bootstrap'
import '../../styles/styles.scss'

const HomeCard = ({title, text, linkTarget, imageLink}) =>
    <Link to={linkTarget} className="card home-card">
      <img className="card-img-top img-fluid" src={imageLink} alt={title} />
      <div className="card-block clearfix">
        <h4 className="card-title">{title}</h4>
        <p className="card-text fade">{text}</p>
      </div>
    </Link>

HomeCard.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  linkTarget: PropTypes.string.isRequired,
  imageLink: PropTypes.string.isRequired,
}

export default HomeCard
