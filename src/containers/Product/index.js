import React from 'react'
import PropTypes from 'prop-types'

import SectionIntegrations from '~components/SectionIntegrations'

import SectionFeatures from '~components/SectionFeatures'
import SectionHero from './components/SectionHero'
import SectionBlocks from './components/SectionBlocks'
import SectionHow from './components/SectionHow'

const Product = (props) => {
  const { hero, how, features, integrations, functions, utm } = props

  return (
    <>
      <SectionHero {...hero} utm={utm} />
      <SectionHow {...how} />
      <SectionBlocks {...functions} />
      <SectionIntegrations {...integrations} />
      <SectionFeatures {...features} utm={utm} variant="product" />
    </>
  )
}

Product.defaultProps = {
  className: '',
}

Product.propTypes = {
  className: PropTypes.string,
}

export default Product
