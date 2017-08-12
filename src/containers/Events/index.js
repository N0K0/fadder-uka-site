import React from 'react'
import '../../styles/styles.scss'
import 'bootstrap'
import {listOfDays, events, dayTranslateEnum} from "./constants"
import EventDayslot from "../../components/EventDayslot"

class Home extends React.Component {
  render () {
    return (
      <div className="container-fluid">
        <h1>Hva skjer i fadderuken?</h1>
        <div className="event-week">
          {listOfDays.map( dayKey => <EventDayslot key={dayKey} dayString={dayTranslateEnum[dayKey]} events={events[dayKey]} /> )}
        </div>
      </div>
    )
  }
}

export default Home
