import React from 'react'
import { graphql } from 'gatsby'

import Homepage from '~containers/Homepage'

const IndexPage = ({ data }) => {
  const {
    heroSectionHeading,
    heroSectionText,
    heroSectionImage,
    heroButtonPrimaryText,
    heroButtonPrimaryLink,
    heroButtonSecondaryText,
    heroButtonSecondaryLink,
    partnersSectionHeading,
    partners,
  } = data.datoCmsHomePage

  return (
    <Homepage
      hero={{
        heading: heroSectionHeading,
        text: heroSectionText,
        image: heroSectionImage,
        primaryButton: {
          text: heroButtonPrimaryText,
          url: heroButtonPrimaryLink.url,
        },
        secondaryButton: {
          text: heroButtonSecondaryText,
          url: heroButtonSecondaryLink.url,
        },
        partnersHeading: partnersSectionHeading,
        partners,
      }}
    />
  )
}

export const query = graphql`
  query Homepage {
    datoCmsHomePage {
      heroSectionHeading
      heroSectionText {
        value
      }
      heroSectionImage {
        url
      }

      heroButtonPrimaryText
      heroButtonPrimaryLink {
        url
      }
      heroButtonSecondaryText
      heroButtonSecondaryLink {
        url
      }

      partnersSectionHeading
      partners {
        id
        title
        logoImage {
          gatsbyImageData(
            height: 24
            placeholder: NONE
            outputPixelDensities: [1, 1.5, 2, 3]
            imgixParams: { fit: "crop", auto: "compress,format" }
          )
        }
      }
    }
  }
`

export default IndexPage
