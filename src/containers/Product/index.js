import React from 'react'
import PropTypes from 'prop-types'

import Layout from '~components/Layout'

import SectionIntegrations from './component/SectionIntegrations'

const Product = (props) => {
  const { className, ...rest } = props

  return (
    <Layout {...rest} className={className}>
      <SectionIntegrations />
      <div style={{ minHeight: '100vh' }} />
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
