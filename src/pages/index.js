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
    howItWorksSectionHeading,
    howItWorksSectionText,
    howItWorksSectionImage,
    howItWorksButtonText,
    howItWorksButtonLink,
    steps,
    featuresSectionHeading,
    featuresSectionText,
    featuresSectionImage,
    featuresButtonText,
    featuresButtonLink,
    featuresList,
    roadmapSectionHeading,
    roadmapPhases,
    caseStudiesSectionHeading,
    caseStudiesSectionText,
    cases,
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
      howItWork={{
        heading: howItWorksSectionHeading,
        text: howItWorksSectionText,
        image: howItWorksSectionImage,
        buttonText: howItWorksButtonText,
        buttonLink: howItWorksButtonLink.url,
        steps,
      }}
      features={{
        heading: featuresSectionHeading,
        text: featuresSectionText,
        image: featuresSectionImage,
        buttonText: featuresButtonText,
        buttonLink: featuresButtonLink.url,
        featuresList,
      }}
      cases={{
        heading: caseStudiesSectionHeading,
        text: caseStudiesSectionText,
        cases,
      }}
      roadmap={{
        heading: roadmapSectionHeading,
        phases: roadmapPhases,
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

      howItWorksSectionHeading
      howItWorksSectionText {
        value
      }
      howItWorksSectionImage {
        gatsbyImageData(
          width: 992
          placeholder: NONE
          sizes: "(max-width: 767.98px) calc(100vw - 24px * 2), (max-width: 1439.98px) calc((100vw - 40px * 2) * 0.8), 992px"
          breakpoints: [327, 654, 992, 1100, 1308, 1488, 1984]
          imgixParams: { fit: "crop", auto: "compress,format" }
        )
      }
      howItWorksButtonText
      howItWorksButtonLink {
        url
      }
      steps {
        id
        heading
        image {
          gatsbyImageData(
            width: 352
            placeholder: BLURRED
            sizes: "(max-width: 767.98px) 37vw, (max-width: 1023.98px) 197px, (max-width: 1199.98px) 281px, 352px"
            breakpoints: [135, 197, 270, 352, 405, 528, 704]
            imgixParams: { fit: "crop", auto: "compress,format" }
          )
        }
      }

      featuresSectionHeading
      featuresSectionText {
        value
      }
      featuresSectionImage {
        gatsbyImageData(
          sizes: "(max-width: 767.98px) calc(100vw - 24px * 2), (max-width: 1023.98px) calc(100vw - 40px * 2), (max-width: 1439.98px) calc((100vw - 40px * 2) * 0.6), 780px"
          breakpoints: [327, 688, 780, 981, 1170, 1376, 1560]
          imgixParams: { fit: "crop", auto: "compress,format" }
        )
      }
      featuresButtonText
      featuresButtonLink {
        url
      }
      featuresList {
        id
        heading
        text {
          value
        }
        iconName
      }

      roadmapSectionHeading
      roadmapPhases {
        id
        variant
        heading
        listLeft {
          value
        }
        listRight {
          value
        }
      }

      caseStudiesSectionHeading
      caseStudiesSectionText {
        value
      }
      cases {
        id
        heading
        badgeText
        postIcon {
          url
        }
        slug
      }
    }
  }
`

export default IndexPage
