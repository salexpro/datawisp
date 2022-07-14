import React from 'react'

import Layout from '~components/Layout'
import S from '~components/seo'

import SectionHero from './components/SectionHero'
import SectionHowItWorks from './components/SectionHowItWorks'
import SectionFeatures from './components/SectionFeatures'
import SectionCaseStudies from './components/SectionCaseStudies'
import SectionRoadmap from './components/SectionRoadmap'

const Homepage = (props) => {
  // eslint-disable-next-line react/prop-types
  const { datoCmsData, ...rest } = props

  return (
    <Layout {...rest}>
      <S title="Home" />
      <SectionHero />
      <SectionHowItWorks />
      <SectionFeatures />
      <SectionCaseStudies />
      <SectionRoadmap />
    </Layout>
  )
}

export default Homepage
