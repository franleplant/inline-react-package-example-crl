import React, { Component } from 'react'

import ExampleComponent from 'inline-react-package-example-crl'

export default class App extends Component {
  render () {
    return (
      <div>
        <ExampleComponent name='Luke Skywalker' />
      </div>
    )
  }
}
