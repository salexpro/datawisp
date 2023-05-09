import React from 'react'

import Layout from '~components/Layout'
import SectionHowItWorks from '~components/SectionHowItWorks'
import SectionFeatures from '~components/SectionFeatures'
import SectionIntegrations from '~components/SectionIntegrations'
import SectionBackedBy from '~components/SectionBackedBy'
import SectionBanner from '~components/SectionBanner'

import SectionHero from './components/SectionHero'

const SignUp = ({ howItWorks, features, integrations, banner }) => {
  return (
    <Layout>
      <SectionHero />
      <SectionBackedBy />
      <SectionHowItWorks {...howItWorks} buttonHide />
      <SectionFeatures features={{ ...features, buttonHide: true }} />
      <SectionIntegrations {...integrations} />
      <SectionBanner {...banner} withForm />
    </Layout>
  )
}

export default SignUp
