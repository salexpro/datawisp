import React from 'react'
import { graphql } from 'gatsby'

import Product from '~containers/Product'

const ProductPage = ({ data }) => {
  const {
    heroSectionHeading,
    heroSectionText,
    heroVideo,
    heroButtons,
    featuresSectionHeading,
    featuresText,
    featuresSectionFeatures,
    featuresButtons,
    featuresCaption,
    integrationsSectionHeading,
    integrationsSectionText,
    integrations,
    functionsSectionHeading,
    functionsSectionDescription,
    functions,
    seo,
  } = data.datoCmsProductPage

  return (
    <Product
      seo={seo}
      hero={{
        heading: heroSectionHeading,
        text: heroSectionText,
        video: heroVideo,
        buttons: heroButtons,
      }}
      functions={{
        heading: functionsSectionHeading,
        description: functionsSectionDescription,
        functions,
      }}
      integrations={{
        heading: integrationsSectionHeading,
        text: integrationsSectionText,
        integrations,
      }}
      features={{
        heading: featuresSectionHeading,
        text: featuresText,
        items: featuresSectionFeatures,
        buttons: featuresButtons,
        caption: featuresCaption,
      }}
    />
  )
}

export const query = graphql`
  query ProductPage {
    datoCmsProductPage {
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
      heroSectionHeading
      heroSectionText {
        value
      }
      heroVideo {
        url
        title
        provider
        providerUid
        thumbnailUrl
        image {
          childImageSharp {
            blurHash {
              base64Image
            }
            gatsbyImageData(
              placeholder: NONE
              outputPixelDensities: [1, 1.5, 2]
            )
          }
        }
      }
      heroButtons {
        ...Buttons
      }

      featuresSectionHeading
      featuresText
      featuresSectionFeatures {
        id
        iconName
        heading
        text {
          value
        }
      }
      featuresButtons {
        ...Buttons
      }
      featuresCaption

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
        supportsList {
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
      }

      functionsSectionHeading
      functionsSectionDescription {
        value
      }
      functions {
        id
        icon
        title
        description
        videoUrl
        image {
          gatsbyImageData(
            aspectRatio: 1.686
            placeholder: BLURRED
            sizes: "(max-width: 767.98px) calc(100vw - 24px * 2 - 16 * 2), (max-width: 1199.98px) calc((100vw - 40px * 2 - 24px) / 2), 344px"
            breakpoints: [295, 687, 885, 1300]
            imgixParams: { fit: "crop", auto: "compress,format" }
          )
        }
      }
    }
  }
`

export default ProductPage
