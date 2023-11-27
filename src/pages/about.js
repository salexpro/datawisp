import React from 'react'
import { graphql } from 'gatsby'

import About from '~containers/About'
import SeoDatoCms from '~components/SeoDatoCms'

export const Head = ({ data }) => {
  const { seo } = data.datoCmsAboutPage

  return <SeoDatoCms seo={seo} />
}

const AboutPage = ({ data, utm }) => {
  const {
    heroSectionHeading,
    heroButtons,

    missionSectionHeading,
    missionSectionText,
    missionImageDesktop,
    missionImageMobile,

    foundersSectionHeading,
    foundersSectionText,
    founders,

    bannerSectionHeading,
    bannerSectionText,
    bannerButtons,
  } = data.datoCmsAboutPage

  return (
    <About
      utm={utm}
      hero={{
        heading: heroSectionHeading,
        buttons: heroButtons,
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
        buttons: bannerButtons,
      }}
    />
  )
}

export const query = graphql`
  query AboutPage {
    datoCmsAboutPage {
      seo {
        ...SEO
      }
      heroSectionHeading {
        value
      }
      heroButtons {
        ...Buttons
      }

      missionSectionHeading
      missionSectionText {
        value
      }
      missionImageDesktop {
        format
        url
        gatsbyImageData(
          width: 943
          forceBlurhash: true
          sizes: "(max-width: 1439.98px) calc(100vw - 40px * 2), min(calc(100vw - 40px * 2 - 400px - 64px), 720px)"
          breakpoints: [688, 720, 943, 1032, 1080, 1376, 1440, 1886]
          imgixParams: { fit: "crop", auto: "format" }
        )
      }
      missionImageMobile {
        format
        url
        gatsbyImageData(
          width: 720
          forceBlurhash: true
          sizes: "(max-width: 767.98px) calc(100vw - 24px * 2), 720px"
          breakpoints: [327, 654, 981, 1140]
          imgixParams: { fit: "crop", auto: "format" }
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
            forceBlurhash: true
            sizes: "(max-width: 767.98px) 120px, 160px"
            breakpoints: [120, 160, 240, 320, 360]
            imgixParams: { fit: "crop", auto: "format" }
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
      bannerButtons {
        ...Buttons
      }
    }
  }
`

export default AboutPage
