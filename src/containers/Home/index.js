import React from 'react'
import reactLogo from '../../static/images/react.svg'
import reduxLogo from '../../static/images/redux.svg'
import reactRouterLogo from '../../static/images/reactrouter.png'
import webpackLogo from '../../static/images/webpack.png'
import '../../styles/styles.scss'
import 'bootstrap'
import HomeCard from '../../components/HomeCard'

class Home extends React.Component {
  render () {
    return (
      <div className="container-fluid">
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <img className="d-block" src={require('../../static/images/ifi/ifi-2-001.jpg')} />
            </div>
            <div className="carousel-item">
              <img className="d-block" src={require('../../static/images/ifi/ifi-2-002.jpg')} />
            </div>
            <div className="carousel-item">
              <img className="d-block" src={require('../../static/images/ifi/ifi-2-003.jpg')} />
            </div>
            <div className="carousel-item">
              <img className="d-block" src={require('../../static/images/ifi/ifi-2-004.jpg')} />
            </div>
            <div className="carousel-item">
              <img className="d-block" src={require('../../static/images/ifi/ifi-2-005.jpg')} />
            </div>
          </div>
        </div>
        <div className="main-text">
          <div className="d-block text-center">
            <h1>
              Velkommen til Fadderuka 2017!
            </h1>
          </div>
        </div>
        <div className="container-fluid">
          <div className="home-text-area">
            <HomeCard imageLink={require("../../static/images/eventer.jpg")} linkTarget="/events" title="Hva skjer i fadderuken?" text="Det er utrolig mye kult som skjer i løpet av fadderuken, sjekk timeplanen her!"/>
            <HomeCard imageLink={require("../../static/images/eventer.jpg")} linkTarget="/buddyContact" title="Mistet faddergruppen din?" text="En gang i ny og ne så forsvinner man fra gruppa, men frykt ei! Vi har selvfølegelig en kontaktliste"/>
            <HomeCard imageLink={require("../../static/images/eventer.jpg")} linkTarget="/board" title="Om fadderstyret" text="Hvem er fjesene bak fadderuken ved IFI?"/>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
