import React, { Component } from 'react'
import { browserHistory, Router } from 'react-router'
import './App.css'

class App extends Component {
  render () {
    return (
      <div style={{ height: '100%' }}>
        <Router history={browserHistory} children={this.props.routes} />
      </div>
    )
  }
}

export default App
