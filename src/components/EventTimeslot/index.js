import React from 'react'
import PropTypes from 'prop-types'
import { NavLink as Link } from 'react-router-dom'
import 'bootstrap'
import '../../styles/styles.scss'
/*
  Color legend:
    Red: Bachelor things
    Gray: Master things
    Green: For everyone
    Gold: The got to go events!
 */

const EventTimeslot = ({eventType, timeslot, text, externalEventLink}) =>
  <div className="d-block align-content-center event-timeslot text-center">
    <p className={'timeslot ' + eventType}>
      {timeslot}
    </p>
    {
      (externalEventLink) ?
        <Link to={externalEventLink}><p>{text}</p></Link>
        :
        <p>{text}</p>
    }
  </div>

EventTimeslot.defaultProps = {
  externalEventLink: null,
}

EventTimeslot.propTypes = {
  eventType: PropTypes.string,
  timeslot: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  externalEventLink: PropTypes.string,
}

export default EventTimeslot
