import React from 'react'

import Layout from '~components/Layout'
import SectionHowItWorks from '~components/SectionHowItWorks'
import SectionFeatures from '~components/SectionFeatures'
import SectionIntegrations from '~components/SectionIntegrations'
import SectionBackedBy from '~components/SectionBackedBy'

import SectionHero from './components/SectionHero'

const SignUp = ({ howItWorks, features, integrations }) => {
  return (
    <Layout>
      <SectionHero />
      <SectionBackedBy />
      <SectionHowItWorks {...howItWorks} buttonHide />
      <SectionFeatures features={{ ...features, buttonHide: true }} />
      <SectionIntegrations {...integrations} />
    </Layout>
  )
}

export default SignUp
