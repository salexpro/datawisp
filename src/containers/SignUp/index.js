import React from 'react'

import Layout from '~components/Layout'
import SectionHowItWorks from '~components/SectionHowItWorks'
import SectionFeatures from '~components/SectionFeatures'

import SectionHero from './components/SectionHero'

const SignUp = ({ howItWorks, features }) => {
  return (
    <Layout>
      <SectionHero />
      <SectionHowItWorks {...howItWorks} buttonHide />
      <SectionFeatures features={{ ...features, buttonHide: true }} />
    </Layout>
  )
}

export default SignUp
