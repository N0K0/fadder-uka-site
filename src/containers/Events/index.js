import React from 'react'
import reactLogo from '../../static/images/react.svg'
import reduxLogo from '../../static/images/redux.svg'
import reactRouterLogo from '../../static/images/reactrouter.png'
import webpackLogo from '../../static/images/webpack.png'
import '../../styles/styles.scss'
import 'bootstrap'
import HomeCard from '../../components/HomeCard'
import {listOfDays, events} from "./constants"
import EventDayslot from "../../components/EventDayslot"

class Home extends React.Component {
  render () {
    return (
      <div className="container-fluid">
        <h1>Hva skjer i fadderuken?</h1>
        <div className="event-week">
          {listOfDays.map( dayKey => <EventDayslot key={dayKey} dayString={dayKey} events={events[dayKey]} /> )}
        </div>
      </div>
    )
  }
}

export default Home
