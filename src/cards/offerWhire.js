/*
  Whire offer Card
  size : 3*2 if 5 col.
         2*2 if 4 col.
*/

import React, { PropTypes, Component } from 'react'

class OfferWhire extends Component {

  constructor(props) {
    super(props)
    this.delCard = this.delCard.bind(this)
  }
  delCard() {
    this.props.delCard(this.props.index)
  }
  render() {
    return(
      <div className="card card-width-3 card-height-2 offerWhire">
        <button onClick={this.delCard}>delCard</button>
        <h3>Offre Whire</h3>
      </div>
    )
  }
}

export default OfferWhire
