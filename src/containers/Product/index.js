import React from 'react'
import PropTypes from 'prop-types'

import Layout from '~components/Layout'
import SectionBanner from '~components/SectionBanner'
import SeoDatoCms from '~components/SeoDatoCms'

import SectionHero from './component/SectionHero'
import SectionIntegrations from './component/SectionIntegrations'
import SectionFeatures from './component/SectionFeatures'

const Product = (props) => {
  const { hero, features, integrations, banner, className, seo, ...rest } =
    props
  const { hide: bannerHide, ...bannerProps } = banner

  return (
    <Layout {...rest} className={className}>
      <SeoDatoCms seo={seo} />
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
