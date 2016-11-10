import 'babel-polyfill'
import React, { PropTypes, Component } from 'react'

class Options extends Component {

  constructor(props) {
    super(props)
    this.a0 = this.a0.bind(this)
    this.a1 = this.a1.bind(this)
    this.a2 = this.a2.bind(this)
    this.a3 = this.a3.bind(this)
    this.a4 = this.a4.bind(this)
    this.a5 = this.a5.bind(this)
    this.p0 = this.p0.bind(this)
    this.p1 = this.p1.bind(this)
    this.p2 = this.p2.bind(this)
    this.p3 = this.p3.bind(this)
    this.p4 = this.p4.bind(this)
    this.p5 = this.p5.bind(this)
  }

  a0(){ this.props.append(0) }
  a1(){ this.props.append(1) }
  a2(){ this.props.append(2) }
  a3(){ this.props.append(3) }
  a4(){ this.props.append(4) }
  a5(){ this.props.append(5) }
  p0(){ this.props.prepend(0) }
  p1(){ this.props.prepend(1) }
  p2(){ this.props.prepend(2) }
  p3(){ this.props.prepend(3) }
  p4(){ this.props.prepend(4) }
  p5(){ this.props.prepend(5) }

  render() {
    return (
      <div>
        <h2>Prepend</h2>
        <button onClick={this.p0}>Whire</button>
        <button onClick={this.p1}>Testimony</button>
        <button onClick={this.p2}>Pole Emploi</button>
        <button onClick={this.p3}>square</button>
        <button onClick={this.p4}>vertival box</button>
        <button onClick={this.p5}>horiz Box</button>
        <h2>append</h2>
        <button onClick={this.a0}>Whire</button>
        <button onClick={this.a1}>Testimony</button>
        <button onClick={this.a2}>Pole Emploi</button>
        <button onClick={this.a3}>square</button>
        <button onClick={this.a4}>vertival box</button>
        <button onClick={this.a5}>horiz Box</button>
      </div>
    )
  }
}

export default Options
