/*
  eslint import/no-unresolved: 0, global-require: 0, import/no-extraneous-dependencies: 0
*/
/*
  As we are hot loading in routes when they are used, we have to require them inline.
*/

import React, { PropTypes } from 'react'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter as Router } from 'react-router-redux'
import { Provider } from 'react-redux'
import App from './containers/App'
import NavigationBar from './components/NavigationBar'
import Home from './containers/Home'
import Example from './containers/Example'
import Contact from './containers/Contact'
import NotFound from './containers/NotFound'

const Routing = ({ store, history }) => (
  <Provider store={store}>
    <Router history={history}>
      <App>
        <NavigationBar />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/example" component={Example} />
            <Route exact path="/contact" component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </App>
    </Router>
  </Provider>
)

Routing.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
}

export default Routing
