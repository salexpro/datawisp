import React from 'react'
import { graphql } from 'gatsby'

import SeoDatoCms from '~components/SeoDatoCms'
import SectionHero from '~components/SectionHero'
import SectionIntegrationsPreview from '~components/SectionIntegrationsPreview'
import SectionFeatures from '~components/SectionFeatures'
import SectionPrices from '~components/SectionPrices'
import SectionIntegrations from '~components/SectionIntegrations'
import SectionBanner from '~components/SectionBanner'

export const Head = ({ data }) => {
  const { seo } = data.datoCmsLandingPage

  return <SeoDatoCms seo={seo} />
}

const Landing = ({ data, utm }) => {
  const {
    heroHeading,
    heroText,
    heroButtons,
    heroCaption,
    heroImage,

    integrationsHeading,
    integrationsItems,
    integrationsButtons,

    featuresHeading,
    featuresText,
    featuresItems,

    pricingHeading,
    pricingText,
    pricingButtons,
    pricingCaption,

    fHeading,
    fText,
    fItems,

    bannerHeading,
    bannerText,
    bannerButtons,
    bannerNotification,
  } = data.datoCmsLandingPage

  const plans = data.allDatoCmsPricingPlan.nodes
  const features = data.allDatoCmsPricingFeaturesCategory.nodes

  return (
    <>
      <SectionHero
        {...{
          heading: heroHeading,
          text: heroText,
          caption: heroCaption,
          buttons: heroButtons,
          image: heroImage,
          utm,
        }}
      />
      <SectionIntegrationsPreview
        {...{
          heading: integrationsHeading,
          list: integrationsItems,
          buttons: integrationsButtons,
        }}
      />
      <SectionFeatures
        {...{
          heading: featuresHeading,
          text: featuresText,
          items: featuresItems,
        }}
        variant="short"
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
        {...{
          heading: fHeading,
          text: fText,
          integrations: fItems,
        }}
        id="privacy"
        variant="signUp"
      />
      <SectionBanner
        {...{
          heading: bannerHeading,
          text: bannerText,
          buttons: bannerButtons,
          notificationText: bannerNotification,
          utm,
        }}
      />
    </>
  )
}

export const query = graphql`
  query LandingPage($id: String) {
    datoCmsLandingPage(id: { eq: $id }) {
      seo {
        ...SEO
      }

      heroHeading
      heroText {
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
          imgixParams: { fit: "crop", auto: "format" }
        )
      }

      integrationsHeading
      integrationsItems {
        icon {
          alt
          format
          url
          gatsbyImageData(
            width: 32
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

      featuresHeading
      featuresText
      featuresItems {
        id
        iconName
        heading
        text {
          value
        }
      }

      pricingHeading
      pricingText
      pricingButtons {
        ...Buttons
      }
      pricingCaption

      fHeading
      fText {
        links {
          id: originalId
          text
          url
        }
        value
      }
      fItems {
        id
        heading
        iconName
        text {
          value
        }
      }

      bannerHeading
      bannerText {
        value
      }
      bannerButtons {
        ...Buttons
      }
      bannerNotification
    }

    allDatoCmsPricingPlan(sort: { position: ASC }) {
      ...PricingPlan
    }

    allDatoCmsPricingFeaturesCategory(sort: { position: ASC }) {
      ...PricingFeatures
    }
  }
`

export default Landing
