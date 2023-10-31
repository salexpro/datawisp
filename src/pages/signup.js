import React from 'react'

import SignUp from '~containers/SignUp'
import { graphql } from 'gatsby'

const TryNowPage = ({ data }) => {
  const {
    seo,
    howItWorksSectionHeading,
    howItWorksSectionText,
    steps,
    featuresSectionHeading,
    featuresText,
    featuresList,
    featuresButtons,
    featuresCaption,
    integrationsSectionHeading,
    integrationsSectionText,
    integrations,
    bannerSectionHeadingSecondary,
    bannerSectionText,
    bannerSectionNotificationTextSecondary,
    bannerSectionButtonText,
    bannerSectionButtonLink,
  } = data.datoCmsLeadGenerationPage

  return (
    <SignUp
      seo={seo}
      howItWorks={{
        heading: howItWorksSectionHeading,
        text: howItWorksSectionText,
        steps,
      }}
      features={{
        heading: featuresSectionHeading,
        text: featuresText,
        items: featuresList,
        buttons: featuresButtons,
        caption: featuresCaption,
      }}
      integrationsPreview={{
        heading: data.datoCmsHomePage.integrationsSectionHeading,
        list: data.datoCmsHomePage.integrationsList,
        // subheading: data.datoCmsHomePage.integrationsSectionSubheading,
        buttonText: data.datoCmsHomePage.integrationsSectionButtonText,
        buttonLink: data.datoCmsHomePage.integrationsSectionButtonLink,
      }}
      integrations={{
        heading: integrationsSectionHeading,
        text: integrationsSectionText,
        integrations,
      }}
      banner={{
        heading: bannerSectionHeadingSecondary,
        text: bannerSectionText,
        notificationText: bannerSectionNotificationTextSecondary,
        buttonText: bannerSectionButtonText,
        buttonLink: bannerSectionButtonLink,
      }}
    />
  )
}

export const query = graphql`
  query SignUpPage {
    datoCmsLeadGenerationPage {
      seo {
        title
        description
        twitterCard
        image {
          fixed(
            width: 1200
            height: 630
            imgixParams: { fit: "crop", auto: "compress,format" }
          ) {
            src
          }
        }
      }
      howItWorksSectionHeading
      howItWorksSectionText {
        value
      }
      steps {
        id
        heading
        image {
          format
          url
          gatsbyImageData(
            sizes: "(max-width: 767.98px) calc(100vw - 24px * 2 - 14px * 2), (max-width: 1023.98px) calc((100vw - 188px) / 3), (max-width: 1439.98px) calc((100vw - 288px) / 3), 352px"
            breakpoints: [200, 352, 528, 654, 700, 1400]
            placeholder: BLURRED
            imgixParams: { fit: "crop", auto: "compress,format" }
          )
        }
      }

      featuresSectionHeading
      featuresText
      featuresList {
        id
        heading
        text {
          value
        }
        iconName
      }
      featuresButtons {
        id
        link {
          ... on DatoCmsLinkInternal {
            url
            internal {
              type
            }
          }
          ... on DatoCmsLinkExternal {
            url
            internal {
              type
            }
          }
          ... on DatoCmsLinkAnchor {
            anchor
            internal {
              type
            }
          }
        }
        label
        variant
      }
      featuresCaption

      integrationsSectionHeading
      integrationsSectionText {
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
        supportsList {
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
      }

      bannerSectionHeadingSecondary
      bannerSectionText {
        value
      }
      bannerSectionNotificationTextSecondary {
        value
      }
      bannerSectionButtonText
      bannerSectionButtonLink {
        url
        rel
        target
        linkId
      }
    }

    datoCmsHomePage {
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
      integrationsSectionButtonText
      integrationsSectionButtonLink {
        url
      }
    }
  }
`

export default TryNowPage
