import React, { PropTypes } from 'react'
import style from '../../styles/styles.scss'
class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render () {
    return (
      <div className="main-container">
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired,
}

export default App
