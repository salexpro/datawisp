import React from 'react'

import SignUp from '~containers/SignUp'
import { graphql } from 'gatsby'

const SignUpPage = ({ data }) => {
  const {
    seo,
    howItWorksSectionHeading,
    howItWorksSectionText,
    steps,
    featuresSectionHeading,
    featuresSectionText,
    featuresList,
    integrationsSectionHeading,
    integrationsSectionText,
    integrations,
    bannerSectionHeading,
    bannerSectionText,
    bannerSectionNotificationText,
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
        text: featuresSectionText,
        featuresList,
      }}
      integrationsPreview={{
        heading: data.datoCmsHomePage.integrationsSectionHeading,
        list: data.datoCmsHomePage.integrationsSectionList,
        subheading: data.datoCmsHomePage.integrationsSectionSubheading,
        buttonText: data.datoCmsHomePage.integrationsSectionButtonText,
        buttonLink: data.datoCmsHomePage.integrationsSectionButtonLink,
      }}
      integrations={{
        heading: integrationsSectionHeading,
        text: integrationsSectionText,
        integrations,
      }}
      banner={{
        heading: bannerSectionHeading,
        text: bannerSectionText,
        notificationText: bannerSectionNotificationText,
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
      featuresSectionText {
        value
      }
      featuresList {
        id
        heading
        text {
          value
        }
        iconName
        image {
          format
          url
          gatsbyImageData(
            width: 691
            placeholder: NONE
            sizes: "(max-width: 767.98px) calc(100vw - 24px * 2 - 24px * 2), (max-width: 1023.98px) calc((100vw - 40px * 2 - 16px - 24px * 2 * 2) / 2), (max-width: 1199.98px) calc((100vw - 40px * 2 - 16px * 2 - 24px * 2 * 3) / 3), (max-width: 1320px) calc((100vw - 40px * 2 - 32px * 2 - 24px * 2 * 3) / 3), 344px"
            breakpoints: [299, 344, 448, 516, 598, 688, 897, 1056, 1382]
            imgixParams: { fit: "crop", auto: "compress,format" }
          )
        }
      }

      integrationsSectionHeading
      integrationsSectionText {
        value
      }
      integrations {
        id
        heading
        iconName
        text {
          value
        }
        supports {
          id
          text
        }
        image {
          format
          url
          gatsbyImageData(
            width: 160
            placeholder: NONE
            outputPixelDensities: [1, 1.5, 2, 3]
            imgixParams: { fit: "crop", auto: "compress,format" }
          )
        }
      }

      bannerSectionHeading
      bannerSectionText {
        value
      }
      bannerSectionNotificationText {
        value
      }

      emailInputPlaceholder
      emailInputErrorMessage
      emailInputRequiredErrorMessage
      submitButtonText
    }

    datoCmsHomePage {
      integrationsSectionHeading
      integrationsSectionList {
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
      integrationsSectionSubheading
      integrationsSectionButtonText
      integrationsSectionButtonLink {
        url
      }
    }
  }
`

export default SignUpPage
