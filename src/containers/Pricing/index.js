import React from 'react'

import SectionHero from './components/SectionHero'
import PlansComparison from './components/PlansComparison'

const Pricing = ({
  heroSection,
  switchButton,
  pricingPlans,
  pricingFeatures,
  utm,
}) => {
  return (
    <>
      <SectionHero heroSection={heroSection} utm={utm} />
      <PlansComparison
        switchButton={switchButton}
        pricingPlans={pricingPlans}
        pricingFeatures={pricingFeatures}
      />
    </>
  )
}

export default Pricing
