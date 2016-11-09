import 'babel-polyfill'
import React, { PropTypes, Component } from 'react'
import { render } from 'react-dom'


const rootElement = document.getElementById('root')

class App extends Component {
  render() {
    return(
      <div> Mansonry test! </div>
    )
  }
}

render(
  <App />,
  rootElement
)
