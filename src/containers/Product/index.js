import React from 'react'
import PropTypes from 'prop-types'

import SectionIntegrations from '~components/SectionIntegrations'

import SectionFeatures from '~components/SectionFeatures'
import SectionHero from './components/SectionHero'
import SectionBlocks from './components/SectionBlocks'

const Product = (props) => {
  const { hero, features, integrations, functions, utm } = props

  return (
    <>
      <SectionHero {...hero} utm={utm} />
      <SectionBlocks {...functions} />
      <SectionIntegrations {...integrations} />
      <SectionFeatures {...features} utm={utm} variant="long" />
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
