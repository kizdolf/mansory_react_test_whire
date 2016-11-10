/*
  Testimony Card
  size : 2*2 if 4 or 5 col.
*/

import React, { PropTypes, Component } from 'react'


class TestimonyCard extends Component {
  constructor(props) {
    super(props)
    this.delCard = this.delCard.bind(this)
  }
  delCard() {
    this.props.delCard(this.props.index)
  }
  render() {
    return(
      <div className="card-width-2 card-height-2 card testimonyCard">
        <button onClick={this.delCard}>delCard</button>
        <h3>Testimony (video or so)</h3>
      </div>
    )
  }
}

export default TestimonyCard
