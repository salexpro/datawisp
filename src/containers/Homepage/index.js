import React from 'react'

import Layout from '~components/Layout'
import SeoDatoCms from '~components/SeoDatoCms'
import SectionHowItWorks from '~components/SectionHowItWorks'
import SectionFeatures from '~components/SectionFeatures'

import SectionHero from './components/SectionHero'
import SectionCaseStudies from './components/SectionCaseStudies'
import SectionRoadmap from './components/SectionRoadmap'
import SectionUseCases from './components/SectionUseCases'

const Homepage = (props) => {
  const { hero, howItWorks, features, useCases, cases, roadmap, seo, ...rest } =
    props

  return (
    <Layout {...rest}>
      <SeoDatoCms seo={seo} />
      <SectionHero {...hero} />
      <SectionHowItWorks variant="home" {...howItWorks} />
      <SectionFeatures features={features} />
      <SectionUseCases {...useCases} />
      <SectionCaseStudies {...cases} />
      <SectionRoadmap {...roadmap} />
    </Layout>
  )
}

export default Homepage
