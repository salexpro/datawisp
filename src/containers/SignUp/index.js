import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '~components/Layout'
import SectionHowItWorks from '~components/SectionHowItWorks'
import SectionFeatures from '~components/SectionFeatures'
import SectionIntegrations from '~components/SectionIntegrations'
import SectionBackedBy from '~components/SectionBackedBy'
import SectionBanner from '~components/SectionBanner'

import SectionHero from './components/SectionHero'

const SignUp = ({ howItWorks, features, integrations, banner }) => {
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
          id
          text
          url
          iconName
        }
      }

      datoCmsLeadGenerationPage {
        actionButtonLink {
          __typename
          id
          text
          anchor
          iconName
          ownerPage {
            url
          }
        }
      }
    }
  `)

  return (
    <Layout
      headerPageData={{
        ...data?.datoCmsHeader,
        ...data?.datoCmsLeadGenerationPage,
      }}
    >
      <SectionHero />
      <SectionBackedBy />
      <SectionHowItWorks {...howItWorks} buttonHide />
      <SectionFeatures features={{ ...features, buttonHide: true }} />
      <SectionIntegrations {...integrations} />
      <SectionBanner id="bookDemo" {...banner} withForm />
    </Layout>
  )
}

export default SignUp
