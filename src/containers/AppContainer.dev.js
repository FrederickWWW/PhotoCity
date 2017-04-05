/**
 * Created by Frederick on 2017/4/4.
 */
import React, { Component, PropTypes } from 'react'
import { browserHistory, Router } from 'react-router'
import { Provider } from 'react-redux'
import DevTools from './DevTools'

class AppContainer extends Component {

  shouldComponentUpdate () {
    return false
  }

  render () {
    const { routes, store } = this.props

    return (
      <Provider store={store}>
        <div style={{ height: '100%' }}>
          <Router history={browserHistory} children={routes} />
          <DevTools />
        </div>
      </Provider>
    )
  }
}

export default AppContainer
