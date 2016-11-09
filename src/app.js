import 'babel-polyfill'
import React, { PropTypes, Component } from 'react'
import { render } from 'react-dom'
import OfferPE from './cards/offerPE'
import OfferWhire from './cards/offerWhire'
import SmallCard from './cards/square'
import TestimonyCard from './cards/testimony'

import Masonry from 'react-masonry-component'

var masonryOptions = {
    transitionDuration: 0,
    fitWidth: true,
    columnWidth : 200
};

const rootElement = document.getElementById('root')

class App extends Component {
  render() {
    return(
    <div id="main-wrapper">
      <div> Mansonry test! </div>
      <Masonry
        className={'grid'}
        options={masonryOptions}
      >
        <OfferWhire />
        <TestimonyCard />
        <OfferPE />
        {/* <div className="card card-height-2"> */}
        <SmallCard type="square"/>
        <SmallCard type="square"/>
        {/* </div> */}
        <SmallCard type="box-horiz"/>
        <OfferPE />
        <OfferPE />
        <SmallCard type="box-vert"/>
        <SmallCard type="box-horiz"/>
        <OfferWhire />
        <TestimonyCard />
        <OfferWhire />
      </Masonry>
    </div>
    )
  }
}

render(
  <App />,
  rootElement
)
