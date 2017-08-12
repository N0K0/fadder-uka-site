import React from 'react'
import PropTypes from 'prop-types'
import { NavLink as Link } from 'react-router-dom'
import 'bootstrap'
import '../../styles/styles.scss'
import EventTimeslot from '../EventTimeslot'

const EventDayslot = ({dayString, events}) =>
  <div className="event-day">
    <h4 className="event-day-title">
      {dayString}
    </h4>

    <div className="event-list">
      {events.map( event => <EventTimeslot key={event.timeslot} {...event} />)}
    </div>
  </div>


EventDayslot.propTypes = {
  dayString: PropTypes.string.isRequired,
  events: PropTypes.arrayOf(PropTypes.shape()),
}

export default EventDayslot
