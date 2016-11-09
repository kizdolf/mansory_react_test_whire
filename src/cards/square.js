/*
  small Card, form
  size : 1*1 if 4 or 5 col.
*/

import React, { PropTypes, Component } from 'react'


class SmallCard extends Component {

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
        <h3>Small Card</h3>
      </div>
    )
  }
}

export default SmallCard
