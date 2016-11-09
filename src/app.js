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

const cardTypes = ['whire', 'testi', 'PE', 'square', 'box-vert', 'box-horiz', ['square', 'square']]

class App extends Component {

  constructor(props) {
    super(props)
    this.prependCard = this.prependCard.bind(this)
    this.appendCard = this.appendCard.bind(this)

    this.state = {
      schema : [
        'whire',
        'testi',
        'PE',
        ['square', 'square'],
        'box-horiz',
        'PE',
        'PE',
        'box-vert',
        'box-horiz',
        'whire',
        'testi',
        'whire',
        'box-horiz',
        'square',
        'square'
      ]
    }
  }

  prependCard() {
    const randomCard = cardTypes[Math.floor(Math.random()*cardTypes.length)];
    const sch = this.state.schema
    sch.unshift(randomCard)
    this.setState({schema: sch})
  }

  appendCard() {
    const sch = this.state.schema
    const randomCard = cardTypes[Math.floor(Math.random()*cardTypes.length)];
    sch.push(randomCard)
    this.setState({schema: sch})
  }

  render() {
    const getElem = (item) => {
      switch (item) {
        case 'whire':
          return <OfferWhire />
        case 'testi':
          return <TestimonyCard />
        case 'PE':
          return <OfferPE />
        case 'box-horiz':
          return <SmallCard type="box-horiz" />
        case 'box-vert':
          return <SmallCard type="box-vert" />
        case 'square':
          return <SmallCard type="square"/>
        default:
          return null
      }
    }
    const buildCards = this.state.schema.map((item, i) => {
      if (Array.isArray(item)) {
        const subMount = item.map((subItem) => {
          return getElem(subItem)
        })
        return(
          <div className="card card-height-2">
            {subMount}
          </div>
        )
      }
      else {
        return getElem(item)
      }
    })

    return(
    <div id="main-wrapper">
      <div> Mansonry test! </div>
      <button onClick={this.prependCard}>prepend card</button>
      <button onClick={this.appendCard}>append card</button>
      <Masonry className={'grid'} options={masonryOptions}>
        {buildCards}
      </Masonry>
    </div>
    )
  }
}

render(
  <App />,
  rootElement
)
