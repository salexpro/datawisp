import React from 'react'

import Layout from '~components/Layout'

import SectionHero from './components/SectionHero'
import PlansComparison from './components/PlansComparison'

const Pricing = ({
  heroSection,
  switchButton,
  pricingPlans,
  plansComparison,
}) => {
  return (
    <Layout>
      <SectionHero heroSection={heroSection} />
      <PlansComparison
        switchButton={switchButton}
        pricingPlans={pricingPlans}
        plansComparison={plansComparison}
      />
    </Layout>
  )
}

export default Pricing
