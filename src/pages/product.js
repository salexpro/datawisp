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
    heroButtonSecond,
    featuresSectionHeading,
    featuresText,
    featuresSectionFeatures,
    integrationsSectionHeading,
    integrationsSectionText,
    integrations,
    functionsSectionHeading,
    functionsSectionDescription,
    functions,
    bannerSectionHeading,
    bannerSectionText,
    bannerSectionButtonText,
    bannerSectionButtonLink,
    bannerSectionImage,
    bannerHide,
    seo,
  } = data.datoCmsProductPage

  return (
    <Product
      seo={seo}
      hero={{
        heading: heroSectionHeading,
        text: heroSectionText,
        image: heroSectionImage,
        buttonText: heroButtonPrimaryText,
        buttonLink: heroButtonPrimaryLink,
        buttonSecond: heroButtonSecond,
      }}
      features={{
        heading: featuresSectionHeading,
        text: featuresText,
        items: featuresSectionFeatures,
      }}
      integrations={{
        heading: integrationsSectionHeading,
        text: integrationsSectionText,
        integrations,
      }}
      functions={{
        heading: functionsSectionHeading,
        description: functionsSectionDescription,
        functions,
      }}
      banner={{
        heading: bannerSectionHeading,
        text: bannerSectionText,
        buttonText: bannerSectionButtonText,
        buttonLink: bannerSectionButtonLink,
        image: bannerSectionImage,
        hide: bannerHide,
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
        rel
        target
      }

      heroButtonSecond {
        ...LinkExternalData
      }

      featuresSectionHeading
      featuresText
      featuresSectionFeatures {
        id
        iconName
        heading
        text
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

      bannerSectionHeading
      bannerSectionText {
        value
      }
      bannerSectionButtonText
      bannerSectionButtonLink {
        url
      }
      bannerHide
    }
  }
`

export default ProductPage
