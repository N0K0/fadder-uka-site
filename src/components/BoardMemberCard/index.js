import React from 'react'
import PropTypes from 'prop-types'
import { NavLink as Link } from 'react-router-dom'
import 'bootstrap'
import '../../styles/styles.scss'

const BoardMemberCard = ({name, title, imageLink}) =>
    <div className="board-card align-content-center text-center">
      <img className="card-img-top" src={imageLink} alt={name} />
      <div className="card-block clearfix">
        <h4 className="card-title">{name}</h4>
        <p className="card-text">{title}</p>
      </div>
    </div>

BoardMemberCard.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imageLink: PropTypes.string.isRequired,
}

export default BoardMemberCard
