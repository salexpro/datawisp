import React from 'react'
import { graphql } from 'gatsby'

import Homepage from '~containers/Homepage'

const IndexPage = ({ data }) => {
  const {
    heroMessage,
    heroSectionHeading,
    heroSectionText,
    heroSectionImage,
    heroSectionCaption,
    heroButtonPrimaryText,
    heroButtonPrimaryLink,
    integrationsSectionHeading,
    integrationsList,
    integrationsSectionButtonText,
    integrationsSectionButtonLink,
    personaItems,
    howItWorksSectionHeading,
    howItWorksSectionText,
    howItWorksSectionImage,
    steps,
    featuresHeading,
    featuresText,
    featuresList,
    featuresButtons,
    featuresCaption,
    roadmapSectionHeading,
    roadmapSectionText,
    roadmapPhases,
    requestDemoHeading,
    emailInputLabel,
    emailInputPlaceholder,
    emailInputErrorMessage,
    emailInputRequiredErrorMessage,
    optionInputLabel,
    optionInputPlaceholder,
    textareaLabel,
    textareaPlaceholder,
    submitButtonText,
    footerText,
    footerLink,
    seo,
  } = data.datoCmsHomePage

  // const caseStudiesPage = data.datoCmsCaseStudiesPage

  return (
    <Homepage
      seo={seo}
      hero={{
        message: heroMessage,
        heading: heroSectionHeading,
        text: heroSectionText,
        caption: heroSectionCaption,
        button: {
          ...heroButtonPrimaryLink,
          text: heroButtonPrimaryText,
        },
        image: heroSectionImage,
      }}
      personas={personaItems}
      integrations={{
        heading: integrationsSectionHeading,
        list: integrationsList,
        buttonText: integrationsSectionButtonText,
        buttonLink: integrationsSectionButtonLink,
      }}
      howItWorks={{
        heading: howItWorksSectionHeading,
        text: howItWorksSectionText,
        image: howItWorksSectionImage,
        steps,
      }}
      features={{
        heading: featuresHeading,
        text: featuresText,
        items: featuresList,
        buttons: featuresButtons,
        caption: featuresCaption,
      }}
      roadmap={{
        heading: roadmapSectionHeading,
        text: roadmapSectionText,
        phases: roadmapPhases,
      }}
      popup={{
        heading: requestDemoHeading,
        emailLabel: emailInputLabel,
        emailPlaceholder: emailInputPlaceholder,
        emailError: emailInputErrorMessage,
        emailRequiredError: emailInputRequiredErrorMessage,
        optionLabel: optionInputLabel,
        optionPlaceholder: optionInputPlaceholder,
        textareaLabel,
        textareaPlaceholder,
        submitButtonText,
        footerText,
        footerLink,
      }}
    />
  )
}

export const query = graphql`
  fragment Buttons on DatoCmsButton {
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

  query Homepage {
    datoCmsHomePage {
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
      heroMessage {
        value
      }
      heroSectionHeading
      heroSectionText {
        value
      }
      heroSectionCaption
      heroSectionImage {
        format
        url
        gatsbyImageData(
          width: 1300
          sizes: "(max-width: 767.98px) calc(100vw - 24px * 2), (max-width: 1023.98px) 682px, (max-width: 1199.98px) 718px, 1030px"
          breakpoints: [327, 655, 682, 718, 982, 1140, 1363, 1435, 1794]
          forceBlurhash: true
          imgixParams: { fit: "crop", auto: "compress,format", q: 100 }
        )
      }

      heroButtonPrimaryText
      heroButtonPrimaryLink {
        ...LinkExternalData
      }

      integrationsSectionHeading
      integrationsList {
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
      integrationsSectionButtonText
      integrationsSectionButtonLink {
        url
      }

      personaItems {
        id
        title
        description {
          value
        }
        iconName
        link {
          url
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

      featuresHeading
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
        ...Buttons
      }
      featuresCaption

      roadmapSectionHeading
      roadmapSectionText {
        value
      }
      roadmapPhases {
        id
        variant
        title
        heading
        listLeft {
          value
        }
        listRight {
          value
        }
      }

      requestDemoHeading
      emailInputLabel
      emailInputPlaceholder
      emailInputErrorMessage
      emailInputRequiredErrorMessage
      optionInputLabel
      optionInputPlaceholder
      textareaLabel
      textareaPlaceholder
      submitButtonText
      footerText
      footerLink {
        text
        url
      }
    }
    datoCmsCaseStudiesPage {
      disableCaseStudiesPage
    }
  }
`

export default IndexPage
