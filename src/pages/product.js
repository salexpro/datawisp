import React from 'react'
import { graphql } from 'gatsby'

import Product from '~containers/Product'

const ProductPage = ({ data }) => {
  const {
    heroSectionHeading,
    heroSectionText,
    heroSectionImage,
    heroButtonPrimaryText,
    heroButtonPrimaryLink,
    featuresSectionHeading,
    featuresSectionText,
    featuresSectionFeatures,
  } = data.datoCmsProductPage

  return (
    <Product
      hero={{
        heading: heroSectionHeading,
        text: heroSectionText,
        image: heroSectionImage,
        buttonText: heroButtonPrimaryText,
        buttonLink: heroButtonPrimaryLink.url,
      }}
      features={{
        heading: featuresSectionHeading,
        text: featuresSectionText,
        items: featuresSectionFeatures,
      }}
    />
  )
}

export const query = graphql`
  query ProductPage {
    datoCmsProductPage {
      heroSectionHeading
      heroSectionText {
        value
      }
      heroSectionImage {
        url
        format
        gatsbyImageData(
          width: 816
          placeholder: NONE
          sizes: "(max-width: 767.98px) calc(100vw - 24px * 2), (max-width: 1023.98px) calc(100vw - 40px * 2), (max-width: 1439.98px) calc(100vw - 424px - 40px * 2), 816px"
          breakpoints: [327, 720, 940, 1220, 1440, 1600]
          imgixParams: { fit: "crop", auto: "compress,format" }
        )
      }
      heroButtonPrimaryText
      heroButtonPrimaryLink {
        url
      }

      featuresSectionHeading
      featuresSectionText {
        value
      }
      featuresSectionFeatures {
        id
        iconName
        heading
        text
      }
    }
  }
`

export default ProductPage
