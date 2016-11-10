import 'babel-polyfill'
import React, { PropTypes, Component } from 'react'
import { render } from 'react-dom'
import OfferPE from './cards/offerPE'
import OfferWhire from './cards/offerWhire'
import SmallCard from './cards/square'
import TestimonyCard from './cards/testimony'
import Options from './options'

import Masonry from 'react-masonry-component'

var masonryOptions = {
    transitionDuration: 0,
    fitWidth: true,
    columnWidth : 200
};

const rootElement = document.getElementById('root')

const cardTypes = ['whire', 'testi', 'PE', 'square', 'box-vert', 'box-horiz']

class App extends Component {

  constructor(props) {
    super(props)
    this.prependCard = this.prependCard.bind(this)
    this.delCard = this.delCard.bind(this)
    this.appendCard = this.appendCard.bind(this)

    this.state = {
      schema : [
        'whire',
        'testi',
        'PE',
        'square',
        'square',
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

  prependCard(index = null) {
    const sch = this.state.schema
    if(index == null) sch.unshift(cardTypes[Math.floor(Math.random()*cardTypes.length)])
    else sch.unshift(cardTypes[index])
    this.setState({schema : sch})
  }

  appendCard(index = null) {
    const sch = this.state.schema
    if(index == null) sch.push(cardTypes[Math.floor(Math.random()*cardTypes.length)])
    else sch.push(cardTypes[index])
    this.setState({schema : sch})
  }

  delCard (index) {
    const sch = this.state.schema
    sch[index] = ''
    this.setState({schema: sch})
  }

  render() {
    const getElem = (item, index) => {
      switch (item) {
        case 'whire':
          return <OfferWhire delCard={this.delCard} index={index} key={index}/>
        case 'testi':
          return <TestimonyCard delCard={this.delCard} index={index} key={index}/>
        case 'PE':
          return <OfferPE delCard={this.delCard} index={index} key={index}/>
        case 'box-horiz':
          return <SmallCard type="box-horiz" delCard={this.delCard} index={index} key={index}/>
        case 'box-vert':
          return <SmallCard type="box-vert" delCard={this.delCard} index={index} key={index}/>
        case 'square':
          return <SmallCard type="square"delCard={this.delCard} index={index} key={index}/>
        default:
          return null
      }
    }
    const buildCards = this.state.schema.map((item, i) => {
        return getElem(item, i)
    })

    return(
    <div id="main-wrapper">
      <div> Mansonry test! </div>
      <Options append={this.appendCard} prepend={this.prependCard}/>
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
