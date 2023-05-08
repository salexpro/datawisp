import React from 'react'
import PropTypes from 'prop-types'

import Layout from '~components/Layout'
import SectionBanner from '~components/SectionBanner'
import SeoDatoCms from '~components/SeoDatoCms'
import SectionIntegrations from '~components/SectionIntegrations'

import SectionHero from './component/SectionHero'
import SectionFeatures from './component/SectionFeatures'
import SectionFunctions from './component/SectionFunctions'

const Product = (props) => {
  const {
    hero,
    features,
    integrations,
    functions,
    banner,
    className,
    seo,
    ...rest
  } = props
  const { hide: bannerHide, ...bannerProps } = banner

  return (
    <Layout {...rest} className={className}>
      <SeoDatoCms seo={seo} />
      <SectionHero {...hero} />
      <SectionFeatures {...features} />
      <SectionFunctions {...functions} />
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
