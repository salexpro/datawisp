import React from 'react'

import SectionHero from '~components/SectionHero'
import SectionHowItWorks from '~components/SectionHowItWorks'
import SectionFeatures from '~components/SectionFeatures'
import SectionIntegrations from '~components/SectionIntegrations'
import SectionBanner from '~components/SectionBanner'
import SectionIntegrationsPreview from '~components/SectionIntegrationsPreview'
import SectionPrices from './components/SectionPrices'

const SignUp = ({
  hero,
  howItWorks,
  features,
  integrations,
  banner,
  integrationsPreview,
  utm,
}) => {
  return (
    <>
      <SectionHero {...hero} utm={utm} />
      <SectionIntegrationsPreview {...integrationsPreview} />
      <SectionHowItWorks id="howItWorks" {...howItWorks} />
      <SectionFeatures id="features" {...features} utm={utm} />
      <SectionPrices utm={utm} isSecondaryLP />
      <SectionIntegrations id="privacy" variant="signUp" {...integrations} />
      <SectionBanner id="bookDemo" {...banner} utm={utm} />
    </>
  )
}

export default SignUp
