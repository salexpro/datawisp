import React from 'react'

import SeoDatoCms from '~components/SeoDatoCms'
import SectionHowItWorks from '~components/SectionHowItWorks'
import SectionFeatures from '~components/SectionFeatures'
import SectionHero from '~components/SectionHero'
import SectionIntegrationsPreview from '~components/SectionIntegrationsPreview'
import Layout from '../Layout'

import SectionPersonas from './components/SectionPersonas'
import SectionRoadmap from './components/SectionRoadmap'

const Homepage = (props) => {
  const {
    hero,
    popup,
    integrations,
    personas,
    howItWorks,
    features,
    roadmap,
    seo,
    utm,
    ...rest
  } = props

  return (
    <Layout {...rest}>
      <SeoDatoCms seo={seo} />
      <SectionHero {...hero} popup={popup} />
      <SectionIntegrationsPreview {...integrations} />
      <SectionPersonas personas={personas} />
      <SectionHowItWorks {...howItWorks} />
      <SectionFeatures {...features} />
      <SectionRoadmap {...roadmap} />
    </Layout>
  )
}

export default Homepage
