import React from 'react'
import { graphql } from 'gatsby'

import SignUp from '~containers/SignUp'
import SeoDatoCms from '~components/SeoDatoCms'

export const Head = ({ data }) => {
  const { seo } = data.datoCmsLeadGenerationPage

  return <SeoDatoCms seo={seo} />
}

const TryNowPage = ({ data, utm }) => {
  const { datoCmsHomePage, datoCmsLeadGenerationPage } = data

  const {
    heroSectionHeading,
    heroSectionText,
    heroCaption,
    heroButtonLink,
    heroButtonText,
    heroImage,

    howItWorksHeading,
    howItWorksText,

    featuresSectionHeading,
    featuresText,
    featuresButtons,

    integrationsHeading,
    integrationsText,
    integrations,
    bannerSectionHeadingSecondary,
    bannerSectionText,
    bannerSectionNotificationTextSecondary,
    bannerSectionButtonText,
    bannerSectionButtonLink,
  } = datoCmsLeadGenerationPage

  return (
    <SignUp
      utm={utm}
      hero={{
        message: datoCmsHomePage.heroMessage,
        heading: heroSectionHeading,
        text: heroSectionText,
        caption: heroCaption,
        button: {
          ...heroButtonLink,
          text: heroButtonText,
        },
        image: heroImage,
      }}
      howItWorks={{
        heading: howItWorksHeading,
        text: howItWorksText,
        steps: datoCmsHomePage.steps,
      }}
      features={{
        heading: featuresSectionHeading,
        text: featuresText,
        items: datoCmsHomePage.featuresList,
        buttons: featuresButtons,
        caption: datoCmsHomePage.featuresCaption,
      }}
      integrationsPreview={{
        heading: datoCmsHomePage.integrationsSectionHeading,
        list: datoCmsHomePage.integrationsList,
        // subheading: datoCmsHomePage.integrationsSectionSubheading,
        buttonText: datoCmsHomePage.integrationsSectionButtonText,
        buttonLink: datoCmsHomePage.integrationsSectionButtonLink,
      }}
      integrations={{
        heading: integrationsHeading,
        text: integrationsText,
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
      integrationsSectionButtonText
      integrationsSectionButtonLink {
        url
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

      heroButtonText
      heroButtonLink {
        ...LinkExternalData
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
  }
`

export default TryNowPage
