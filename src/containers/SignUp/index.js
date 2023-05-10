import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '~components/Layout'
import SeoDatoCms from '~components/SeoDatoCms'
import SectionHowItWorks from '~components/SectionHowItWorks'
import SectionFeatures from '~components/SectionFeatures'
import SectionIntegrations from '~components/SectionIntegrations'
import SectionBackedBy from '~components/SectionBackedBy'
import SectionBanner from '~components/SectionBanner'

import SectionHero from './components/SectionHero'

const SignUp = ({ seo, howItWorks, features, integrations, banner }) => {
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
        actionButtonLink: data?.datoCmsLeadGenerationPage?.actionButtonLink,
      }}
      footerPageData={{
        ...data?.datoCmsFooter,
        navMenuItems: data?.datoCmsLeadGenerationPage?.navMenuItems,
      }}
    >
      <SeoDatoCms seo={seo} />
      <SectionHero />
      <SectionBackedBy />
      <SectionHowItWorks id="howItWorks" {...howItWorks} buttonHide />
      <SectionFeatures
        id="features"
        features={{ ...features, buttonHide: true }}
      />
      <SectionIntegrations id="privacy" {...integrations} />
      <SectionBanner id="bookDemo" {...banner} withForm />
    </Layout>
  )
}

export default SignUp
