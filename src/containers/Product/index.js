import React from 'react'
import PropTypes from 'prop-types'

import Layout from '~components/Layout'
import S from '~components/seo'
import SectionBanner from '~components/SectionBanner'

import SectionHero from './component/SectionHero'
import SectionIntegrations from './component/SectionIntegrations'
import SectionFeatures from './component/SectionFeatures'

const Product = (props) => {
  const { hero, features, integrations, banner, className, ...rest } = props
  const { hide: bannerHide, ...bannerProps } = banner

  return (
    <Layout {...rest} className={className}>
      <S title="Product" />
      <SectionHero {...hero} />
      <SectionFeatures {...features} />
      <SectionIntegrations {...integrations} />
      {!bannerHide && <SectionBanner {...bannerProps} />}
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
