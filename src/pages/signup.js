import React from 'react'
import { graphql } from 'gatsby'

import SeoDatoCms from '~components/SeoDatoCms'
import SectionHero from '~components/SectionHero'
import SectionIntegrationsPreview from '~components/SectionIntegrationsPreview'
import SectionHowItWorks from '~components/SectionHowItWorks'
import SectionFeatures from '~components/SectionFeatures'
import SectionPrices from '~components/SectionPrices'
import SectionIntegrations from '~components/SectionIntegrations'
import SectionBanner from '~components/SectionBanner'

export const Head = ({ data }) => {
  const { seo } = data.datoCmsLeadGenerationPage

  return <SeoDatoCms seo={seo} />
}

const SignUpPage = ({ data, utm }) => {
  const {
    datoCmsHomePage,
    datoCmsLeadGenerationPage,
    allDatoCmsPricingPlan,
    allDatoCmsPricingFeaturesCategory,
  } = data

  const {
    heroSectionHeading,
    heroSectionText,
    heroCaption,
    heroButtons,
    heroImage,

    howItWorksHeading,
    howItWorksText,

    featuresSectionHeading,
    featuresText,
    featuresButtons,

    pricingHeading,
    pricingText,
    pricingButtons,
    pricingCaption,

    integrationsHeading,
    integrationsText,
    integrations,

    bannerSectionHeadingSecondary,
    bannerSectionText,
    bannerButtons,
    bannerSectionNotificationTextSecondary,
  } = datoCmsLeadGenerationPage

  const plans = allDatoCmsPricingPlan.nodes
  const features = allDatoCmsPricingFeaturesCategory.nodes

  return (
    <>
      <SectionHero
        {...{
          message: datoCmsHomePage.heroMessage,
          heading: heroSectionHeading,
          text: heroSectionText,
          caption: heroCaption,
          buttons: heroButtons,
          image: heroImage,
          utm,
        }}
      />
      <SectionIntegrationsPreview
        {...{
          heading: datoCmsHomePage.integrationsSectionHeading,
          list: datoCmsHomePage.integrationsList,
          buttons: datoCmsHomePage.integrationsButtons,
        }}
      />
      <SectionHowItWorks
        id="howItWorks"
        {...{
          heading: howItWorksHeading,
          text: howItWorksText,
          steps: datoCmsHomePage.steps,
        }}
      />
      <SectionFeatures
        id="features"
        {...{
          heading: featuresSectionHeading,
          text: featuresText,
          items: datoCmsHomePage.featuresList,
          buttons: featuresButtons,
          caption: datoCmsHomePage.featuresCaption,
          utm,
        }}
      />
      <SectionPrices
        {...{
          heading: pricingHeading,
          text: pricingText,
          buttons: pricingButtons,
          caption: pricingCaption,
          plans,
          features,
          utm,
        }}
      />
      <SectionIntegrations
        id="privacy"
        variant="signUp"
        {...{
          heading: integrationsHeading,
          text: integrationsText,
          integrations,
        }}
      />
      <SectionBanner
        id="bookDemo"
        {...{
          heading: bannerSectionHeadingSecondary,
          text: bannerSectionText,
          notificationText: bannerSectionNotificationTextSecondary,
          buttons: bannerButtons,
          utm,
        }}
      />
    </>
  )
}

export const query = graphql`
  query SignUpPage {
    datoCmsHomePage {
      heroMessage {
        value
      }

      integrationsSectionHeading
      integrationsList {
        icon {
          alt
          format
          url
          gatsbyImageData(
            width: 40
            placeholder: NONE
            outputPixelDensities: [1, 1.5, 2, 3]
            imgixParams: { fit: "crop", auto: "compress,format" }
          )
        }
        name
      }
      integrationsButtons {
        ...Buttons
      }

      steps {
        id
        heading
        image {
          format
          url
          gatsbyImageData(
            sizes: "(max-width: 767.98px) 300px, 400px"
            placeholder: BLURRED
            forceBlurhash: true
            imgixParams: { fit: "crop", auto: "compress,format" }
          )
        }
        description {
          value
        }
      }

      featuresList {
        id
        heading
        text {
          value
        }
        iconName
      }
      featuresCaption
    }

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
        ...LinkAnchorData
      }

      seo {
        ...SEO
      }

      heroSectionHeading
      heroSectionText {
        value
      }
      heroButtons {
        ...Buttons
      }
      heroCaption
      heroImage {
        format
        url
        gatsbyImageData(
          width: 1300
          placeholder: NONE
          sizes: "(max-width: 767.98px) calc(100vw - 24px * 2), (max-width: 1023.98px) 682px, (max-width: 1199.98px) 718px, 1030px"
          breakpoints: [327, 655, 682, 718, 982, 1140, 1363, 1435, 1794]
          imgixParams: { fit: "crop", auto: "compress,format", q: 100 }
        )
      }

      howItWorksHeading
      howItWorksText {
        value
      }

      featuresSectionHeading
      featuresText
      featuresButtons {
        ...Buttons
      }

      pricingHeading
      pricingText
      pricingButtons {
        ...Buttons
      }
      pricingCaption

      integrationsHeading
      integrationsText {
        links {
          id: originalId
          text
          url
        }
        value
      }
      integrations {
        id
        heading
        iconName
        text {
          value
        }
      }

      bannerSectionHeadingSecondary
      bannerSectionText {
        value
      }
      bannerSectionNotificationTextSecondary {
        value
      }
      bannerButtons {
        ...Buttons
      }
    }

    allDatoCmsPricingPlan(sort: { position: ASC }) {
      ...PricingPlan
    }

    allDatoCmsPricingFeaturesCategory(sort: { position: ASC }) {
      ...PricingFeatures
    }
  }
`

export default SignUpPage
