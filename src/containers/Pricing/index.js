import React from 'react'

import SectionHero from './components/SectionHero'
import PlansComparison from './components/PlansComparison'

const Pricing = ({
  heroSection,
  switchButton,
  pricingPlans,
  plansComparison,
}) => {
  return (
    <>
      <SectionHero heroSection={heroSection} />
      <PlansComparison
        switchButton={switchButton}
        pricingPlans={pricingPlans}
        plansComparison={plansComparison}
      />
    </>
  )
}

export default Pricing
