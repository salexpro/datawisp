import React from 'react'

import Layout from '~components/Layout'
import SectionHowItWorks from '~components/SectionHowItWorks'

import SectionHero from './components/SectionHero'

const SignUp = ({ howItWorks }) => {
  return (
    <Layout>
      <SectionHero />
      <SectionHowItWorks {...howItWorks} buttonHide />
    </Layout>
  )
}

export default SignUp
