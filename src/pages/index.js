import React from 'react'
import { graphql } from 'gatsby'

import Homepage from '~containers/Homepage'
import SeoDatoCms from '~components/SeoDatoCms'

export const Head = ({ data }) => {
  const { seo } = data.datoCmsHomePage

  return <SeoDatoCms seo={seo} />
}

const IndexPage = ({ data, utm }) => {
  const {
    heroMessage,
    heroSectionHeading,
    heroSectionText,
    heroSectionImage,
    heroSectionCaption,
    heroButtons,

    integrationsSectionHeading,
    integrationsList,
    integrationsButtons,

    personaItems,
    howItWorksSectionHeading,
    howItWorksSectionText,
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
  } = data.datoCmsHomePage

  // const caseStudiesPage = data.datoCmsCaseStudiesPage

  return (
    <Homepage
      utm={utm}
      hero={{
        message: heroMessage,
        heading: heroSectionHeading,
        text: heroSectionText,
        caption: heroSectionCaption,
        buttons: heroButtons,
        image: heroSectionImage,
      }}
      personas={personaItems}
      integrations={{
        heading: integrationsSectionHeading,
        list: integrationsList,
        buttons: integrationsButtons,
      }}
      howItWorks={{
        heading: howItWorksSectionHeading,
        text: howItWorksSectionText,
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
      ...LinkInternalData
      ...LinkExternalData
      ...LinkAnchorData
    }
    label
    variant
  }

  fragment SEO on DatoCmsSeoField {
    title
    description
    twitterCard
    image {
      fixed(
        width: 1200
        height: 630
        imgixParams: { fit: "crop", auto: "format" }
      ) {
        src
        width
        height
      }
    }
  }

  fragment personaItem on DatoCmsPersona {
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

  query Homepage {
    datoCmsHomePage {
      seo {
        ...SEO
      }
      heroMessage {
        value
      }
      heroSectionHeading
      heroSectionText {
        value
      }
      heroButtons {
        ...Buttons
      }
      heroSectionCaption
      heroSectionImage {
        format
        url
        gatsbyImageData(
          width: 1300
          placeholder: NONE
          sizes: "(max-width: 767.98px) calc(100vw - 24px * 2), (max-width: 1023.98px) 682px, (max-width: 1199.98px) 718px, 1030px"
          breakpoints: [327, 655, 682, 718, 982, 1140, 1363, 1435, 1794]
          imgixParams: { fit: "crop", auto: "format" }
        )
        video {
          muxPlaybackId
          streamingUrl
          mp4High: mp4Url(res: high)
          mp4Med: mp4Url(res: medium)
          mp4Low: mp4Url(res: low)
          duration
          frameRate
          # thumbJpg: thumbnailUrl(format: jpg)
          # thumbPng: thumbnailUrl(format: png)
          # thumbGif: thumbnailUrl(format: gif)
        }
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
      integrationsButtons {
        ...Buttons
      }

      personaItems {
        ...personaItem
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
    # datoCmsCaseStudiesPage {
    #   disableCaseStudiesPage
    # }
  }
`

export default IndexPage
