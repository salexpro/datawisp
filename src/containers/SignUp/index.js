import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '~containers/Layout'
import SeoDatoCms from '~components/SeoDatoCms'
import SectionHero from '~components/SectionHero'
import SectionHowItWorks from '~components/SectionHowItWorks'
import SectionFeatures from '~components/SectionFeatures'
import SectionIntegrations from '~components/SectionIntegrations'
import SectionBanner from '~components/SectionBanner'
import SectionIntegrationsPreview from '~components/SectionIntegrationsPreview'
import SectionPrices from './components/SectionPrices'

const SignUp = ({
  seo,
  hero,
  howItWorks,
  features,
  integrations,
  banner,
  integrationsPreview,
}) => {
  const data = useStaticQuery(graphql`
    query SignUp {
      datoCmsHeader {
        logoImage {
          url
          width
          height
        }
        logoDesiredHeight
        logoLink {
          ...LinkInternalData
        }
      }

      datoCmsFooter {
        logoImage {
          url
          width
          height
        }
        logoDesiredHeight
        logoLink {
          ...LinkInternalData
        }
        socialLinks {
          id
          iconName
          tooltip
          url
          hoverColor {
            hex
          }
        }
        termsConditionsLink {
          ...LinkExternalData
        }
        privacyPolicyLink {
          ...LinkExternalData
        }
      }

      datoCmsLeadGenerationPage {
        actionButtonLink {
          __typename
          ...LinkAnchorData
        }

        actionButtonLinkSecondary {
          __typename
          ...LinkExternalData
        }

        navMenuItems {
          __typename
          ... on DatoCmsLinkAnchor {
            ...LinkAnchorData
          }
        }
      }
    }
  `)

  return (
    <Layout
      headerPageData={{
        ...data?.datoCmsHeader,
        actionButtonLink:
          data?.datoCmsLeadGenerationPage?.actionButtonLinkSecondary,
      }}
      footerPageData={{
        ...data?.datoCmsFooter,
        navMenuItems: data?.datoCmsLeadGenerationPage?.navMenuItems,
      }}
    >
      <SeoDatoCms seo={seo} />
      <SectionHero {...hero} />
      <SectionIntegrationsPreview {...integrationsPreview} />
      <SectionHowItWorks id="howItWorks" {...howItWorks} />
      <SectionFeatures id="features" {...features} />
      <SectionPrices isSecondaryLP />
      <SectionIntegrations id="privacy" variant="signUp" {...integrations} />
      <SectionBanner id="bookDemo" {...banner} />
    </Layout>
  )
}

export default SignUp
