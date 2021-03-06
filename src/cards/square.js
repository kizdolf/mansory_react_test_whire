/*
  small Card, form
  size : 1*1 if 4 or 5 col.
*/

import React, { PropTypes, Component } from 'react'


class SmallCard extends Component {
  constructor(props) {
    super(props)
    this.delCard = this.delCard.bind(this)
  }

  delCard() {
    this.props.delCard(this.props.index)
  }

  render() {
    let classCard = 'card'
    if (this.props.type == 'square')
      classCard += ' squareCard'
    else if (this.props.type == 'box-vert')
      classCard += ' card-height-2 boxCardVert'
    else
      classCard += ' card-width-2 boxCardHoriz'
    return(
      <div className={classCard}>
        <button onClick={this.delCard}>delCard</button>
        <h3>Small Card {this.props.type}</h3>
      </div>
    )
  }
}

export default SmallCard
