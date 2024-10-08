import React from 'react'
import { graphql } from 'gatsby'

import Product from '~containers/Product'
import SeoDatoCms from '~components/SeoDatoCms'

export const Head = ({ data }) => {
  const { seo } = data.datoCmsProductPage

  return <SeoDatoCms seo={seo} />
}

const ProductPage = ({ data, utm }) => {
  const {
    heroSectionHeading,
    heroSectionText,
    heroVideo,
    heroButtons,
    howSectionHeading,
    howSectionDescription,
    howSectionImage,
    howSectionImageMobile,
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
  } = data.datoCmsProductPage

  return (
    <Product
      utm={utm}
      hero={{
        heading: heroSectionHeading,
        text: heroSectionText,
        video: heroVideo,
        buttons: heroButtons,
      }}
      how={{
        heading: howSectionHeading,
        description: howSectionDescription,
        image: howSectionImage,
        imageMobile: howSectionImageMobile,
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
        ...SEO
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
              quality: 100
            )
          }
        }
      }
      heroButtons {
        ...Buttons
      }

      howSectionHeading
      howSectionDescription {
        value
      }
      howSectionImage {
        format
        url
        gatsbyImageData(
          placeholder: NONE
          sizes: "(max-width: 767.98px) calc(100vw - 24px * 2), (max-width: 1319.98px) calc(100vw - 40px * 2), 1240"
          breakpoints: [295, 687, 885, 1300]
          imgixParams: { fit: "crop", auto: "format" }
        )
      }
      howSectionImageMobile {
        format
        url
        gatsbyImageData(
          placeholder: NONE
          sizes: "calc(100vw - 24px * 2)"
          breakpoints: [295, 687]
          imgixParams: { fit: "crop", auto: "format" }
        )
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
            placeholder: NONE
            sizes: "(max-width: 767.98px) calc(100vw - 24px * 2 - 16 * 2), (max-width: 1199.98px) calc((100vw - 40px * 2 - 24px) / 2), 344px"
            breakpoints: [295, 687, 885, 1300]
            imgixParams: { fit: "crop", auto: "format" }
          )
        }
      }
    }
  }
`

export default ProductPage
