/*
  Pole Emploi Card
  size : 2*2 if 4 or 5 col.
*/

import React, { PropTypes, Component } from 'react'


class OfferPE extends Component {

  constructor(props) {
    super(props)
    this.delCard = this.delCard.bind(this)
  }

  delCard() {
    this.props.delCard(this.props.index)
  }

  render() {
    return(
      <div className="card card-width-2 card-height-2 offerPE">
        <button onClick={this.delCard}>delCard</button>
        <h3>Offre Pole Emloi</h3>
      </div>
    )
  }
}

export default OfferPE
