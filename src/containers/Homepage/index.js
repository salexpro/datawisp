import React from 'react'

import Layout from '~components/Layout'
import S from '~components/seo'

import SectionHero from './components/SectionHero'

const Homepage = (props) => {
  // eslint-disable-next-line react/prop-types
  const { datoCmsData, ...rest } = props

  return (
    <Layout {...rest}>
      <S title="Home" />
      <SectionHero />
      <div style={{ height: '100vh' }} />
    </Layout>
  )
}

export default Homepage
