import React from 'react'
import PropTypes from 'prop-types'

import Layout from '~components/Layout'

import SectionHero from './component/SectionHero'
import SectionIntegrations from './component/SectionIntegrations'
import SectionBanner from './component/SectionBanner'
import SectionFeatures from './component/SectionFeatures'

const Product = (props) => {
  const { hero, features, integrations, banner, className, ...rest } = props

  return (
    <Layout {...rest} className={className}>
      <SectionHero {...hero} />
      <SectionFeatures {...features} />
      <SectionIntegrations {...integrations} />
      {!banner?.hide && <SectionBanner {...banner} />}
    </Layout>
  )
}

Product.defaultProps = {
  className: '',
}

Product.propTypes = {
  className: PropTypes.string,
}

export default Product
