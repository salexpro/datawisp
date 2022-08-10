import React from 'react'
import About from '~containers/About'
import { graphql } from 'gatsby'

const AboutPage = ({ data }) => {
  const {
    heroSectionHeading,
    heroButtonText,
    heroButtonLink,
    missionSectionHeading,
    missionSectionText,
    missionImageDesktop,
    missionImageMobile,
    foundersSectionHeading,
    foundersSectionText,
    founders,
    bannerSectionHeading,
    bannerSectionText,
    bannerSectionButtonText,
    bannerSectionButtonLink,
  } = data.datoCmsAboutPage

  return (
    <About
      hero={{
        heading: heroSectionHeading,
        buttonText: heroButtonText,
        buttonLink: heroButtonLink,
      }}
      mission={{
        heading: missionSectionHeading,
        text: missionSectionText,
        imageDesktop: missionImageDesktop,
        imageMobile: missionImageMobile,
      }}
      founders={{
        heading: foundersSectionHeading,
        text: foundersSectionText,
        founders,
      }}
      banner={{
        heading: bannerSectionHeading,
        text: bannerSectionText,
        buttonText: bannerSectionButtonText,
        buttonLink: bannerSectionButtonLink,
      }}
    />
  )
}

export const query = graphql`
  query AboutPage {
    datoCmsAboutPage {
      heroSectionHeading {
        value
      }
      heroButtonText
      heroButtonLink

      missionSectionHeading
      missionSectionText {
        value
      }
      missionImageDesktop {
        format
        url
        gatsbyImageData(
          width: 943
          placeholder: BLURRED
          sizes: "(max-width: 1439.98px) calc(100vw - 40px * 2), min(calc(100vw - 40px * 2 - 400px - 64px), 720px)"
          breakpoints: [688, 720, 943, 1032, 1080, 1376, 1440, 1886]
          imgixParams: { fit: "crop", auto: "compress,format" }
        )
      }
      missionImageMobile {
        format
        url
        gatsbyImageData(
          width: 720
          placeholder: BLURRED
          sizes: "(max-width: 767.98px) calc(100vw - 24px * 2), 720px"
          breakpoints: [327, 654, 981, 1140]
          imgixParams: { fit: "crop", auto: "compress,format" }
        )
      }

      foundersSectionHeading
      foundersSectionText {
        value
      }
      founders {
        id
        name
        founderPosition
        image {
          gatsbyImageData(
            height: 160
            placeholder: BLURRED
            sizes: "(max-width: 767.98px) 120px, 160px"
            breakpoints: [120, 160, 240, 320, 360]
            imgixParams: { fit: "crop", auto: "compress,format" }
          )
        }
        text {
          value
        }
        socialLinks {
          id
          url
          socialLink {
            iconName
            hoverColor {
              hex
            }
          }
        }
      }

      bannerSectionHeading
      bannerSectionText {
        value
      }
      bannerSectionButtonText
      bannerSectionButtonLink {
        ...LinkExternalData
      }
    }
  }
`

export default AboutPage
