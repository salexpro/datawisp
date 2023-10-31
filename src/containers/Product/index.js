import React from 'react'
import PropTypes from 'prop-types'

import SeoDatoCms from '~components/SeoDatoCms'
import SectionIntegrations from '~components/SectionIntegrations'

import SectionFeatures from '~components/SectionFeatures'
import Layout from '../Layout'
import SectionHero from './components/SectionHero'
import SectionFunctions from './components/SectionFunctions'

const Product = (props) => {
  const { hero, features, integrations, functions, className, seo, ...rest } =
    props

  return (
    <Layout {...rest} className={className}>
      <SeoDatoCms seo={seo} />
      <SectionHero {...hero} />
      <SectionFunctions {...functions} />
      <SectionIntegrations {...integrations} />
      <SectionFeatures {...features} variant="long" />
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
