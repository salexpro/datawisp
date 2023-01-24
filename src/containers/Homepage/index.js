import React from 'react'

import Layout from '~components/Layout'
import SeoDatoCms from '~components/SeoDatoCms'

import SectionHero from './components/SectionHero'
import SectionHowItWorks from './components/SectionHowItWorks'
import SectionFeatures from './components/SectionFeatures'
import SectionCaseStudies from './components/SectionCaseStudies'
import SectionRoadmap from './components/SectionRoadmap'

const Homepage = (props) => {
  const { hero, howItWorks, features, cases, roadmap, seo, ...rest } = props

  return (
    <Layout {...rest}>
      <SeoDatoCms seo={seo} />
      <SectionHero {...hero} />
      <SectionHowItWorks {...howItWorks} />
      <SectionFeatures features={features} />
      <SectionCaseStudies {...cases} />
      <SectionRoadmap {...roadmap} />
    </Layout>
  )
}

export default Homepage
