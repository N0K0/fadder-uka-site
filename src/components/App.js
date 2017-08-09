import React from 'react'
import { browserHistory, Router } from 'react-router'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import { loadTranslations, setLocale, syncTranslationWithStore, I18n } from 'react-redux-i18n'

class App extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    routes: PropTypes.object.isRequired,
  };

  constructor (props) {
    super(props)
    const translationsObject = require('../i18n.json')
    this.props.store.dispatch(loadTranslations(translationsObject))
    syncTranslationWithStore(this.props.store)
    const myHandleMissingTranslation = (key, replacements) => `Missing translation: ${key}`
    I18n.setHandleMissingTranslation(myHandleMissingTranslation)
    this.props.store.dispatch(setLocale('nb'))
  }

  shouldComponentUpdate () {
    return false
  }

  render () {
    return (
      <Provider store={this.props.store}>
        <div style={{ height: '100%' }}>
          <Router history={browserHistory} children={this.props.routes} />
        </div>
      </Provider>
    )
  }
}

export default App
