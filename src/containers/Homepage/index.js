import React from 'react'

import SectionHowItWorks from '~components/SectionHowItWorks'
import SectionFeatures from '~components/SectionFeatures'
import SectionHero from '~components/SectionHero'
import SectionIntegrationsPreview from '~components/SectionIntegrationsPreview'
import SectionPersonas from '~components/SectionPersonas'

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
    utm,
  } = props

  return (
    <>
      <SectionHero {...hero} popup={popup} utm={utm} />
      <SectionIntegrationsPreview {...integrations} />
      <SectionPersonas personas={personas} variant="home" />
      <SectionHowItWorks {...howItWorks} />
      <SectionFeatures {...features} utm={utm} />
      <SectionRoadmap {...roadmap} />
    </>
  )
}

export default Homepage
