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

    testimonials,

    featuresHeading,
    featuresText,
    featuresList,
    featuresButtons,
    featuresCaption,

    advantagesHeading,
    advantagesText,
    advantagesList,

    faqTitle,
    faqList,

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
      testimonials={testimonials}
      features={{
        heading: featuresHeading,
        text: featuresText,
        items: featuresList,
        buttons: featuresButtons,
        caption: featuresCaption,
      }}
      advantages={{
        heading: advantagesHeading,
        text: advantagesText,
        items: advantagesList,
      }}
      faq={{
        heading: faqTitle,
        items: faqList,
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

  fragment PersonaItem on DatoCmsPersona {
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

  fragment MediaItem on DatoCmsFileField {
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
        ...MediaItem
      }

      testimonials {
        id
        photo {
          gatsbyImageData(
            placeholder: BLURRED
            forceBlurhash: true
            width: 128
            height: 128
            imgixParams: { fit: "crop", auto: "format" }
          )
        }
        text
        author
        companyPosition
      }

      featuresHeading
      featuresText {
        value
      }
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

      advantagesHeading
      advantagesText
      advantagesList {
        id
        image {
          gatsbyImageData(
            placeholder: BLURRED
            forceBlurhash: true
            sizes: "(max-width: 767.98px) calc(100vw - 24px * 2 - 24 * 2), (max-width: 1199.98px) 304px, 344px"
            breakpoints: [295, 687, 885, 1300]
            imgixParams: { fit: "crop", auto: "format", ar: "7:4" }
          )
        }
        icon
        title
        description
      }

      faqTitle
      faqList {
        id
        question
        answer {
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
  }
`

export default IndexPage
