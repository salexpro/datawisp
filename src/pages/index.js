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
    heroButtonPrimaryHide,
    heroButtonSecondaryText,
    heroButtonSecondaryLink,
    heroButtonSecondaryHide,
    partnersSectionHeading,
    partners,
    howItWorksSectionHeading,
    howItWorksSectionText,
    howItWorksSectionImage,
    howItWorksButtonText,
    howItWorksButtonLink,
    howItWorksButtonHide,
    steps,
    featuresSectionHeading,
    featuresSectionText,
    featuresSectionImage,
    featuresButtonText,
    featuresButtonLink,
    featuresButtonHide,
    featuresList,
    roadmapSectionHeading,
    roadmapSectionText,
    roadmapPhases,
    caseStudiesSectionHeading,
    caseStudiesSectionText,
    cases,
    caseStudiesButtonText,
    caseStudiesButtonLink,
  } = data.datoCmsHomePage

  const caseStudiesPage = data.datoCmsCaseStudiesPage

  return (
    <Homepage
      hero={{
        heading: heroSectionHeading,
        text: heroSectionText,
        image: heroSectionImage,
        primaryButton: {
          ...heroButtonPrimaryLink,
          text: heroButtonPrimaryText,
          hide: heroButtonPrimaryHide,
        },
        secondaryButton: {
          text: heroButtonSecondaryText,
          url: heroButtonSecondaryLink.url,
          hide: heroButtonSecondaryHide,
        },
        partnersHeading: partnersSectionHeading,
        partners,
      }}
      howItWorks={{
        heading: howItWorksSectionHeading,
        text: howItWorksSectionText,
        image: howItWorksSectionImage,
        buttonText: howItWorksButtonText,
        buttonLink: howItWorksButtonLink.url,
        buttonHide: howItWorksButtonHide,
        steps,
      }}
      features={{
        heading: featuresSectionHeading,
        text: featuresSectionText,
        image: featuresSectionImage,
        buttonText: featuresButtonText,
        buttonLink: featuresButtonLink.url,
        buttonHide: featuresButtonHide,
        featuresList,
      }}
      cases={{
        heading: caseStudiesSectionHeading,
        text: caseStudiesSectionText,
        cases,
        buttonText: caseStudiesButtonText,
        buttonLink: caseStudiesButtonLink.url,
        buttonHide: caseStudiesPage.disableCaseStudiesPage,
      }}
      roadmap={{
        heading: roadmapSectionHeading,
        text: roadmapSectionText,
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
        format
        url
        gatsbyImageData(
          width: 897
          placeholder: NONE
          sizes: "(max-width: 767.98px) calc(100vw - 24px * 2), (max-width: 1023.98px) 682px, (max-width: 1199.98px) 718px, 897px"
          breakpoints: [327, 655, 682, 718, 982, 1140, 1363, 1435, 1794]
          imgixParams: { fit: "crop", auto: "compress,format" }
        )
      }

      heroButtonPrimaryText
      heroButtonPrimaryLink {
        ...LinkExternalData
      }
      heroButtonPrimaryHide
      heroButtonSecondaryText
      heroButtonSecondaryLink {
        url
      }
      heroButtonSecondaryHide

      partnersSectionHeading
      partners {
        id
        title
        logoImage {
          format
          url
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
      steps {
        id
        heading
        image {
          format
          url
          gatsbyImageData(
            sizes: "(max-width: 767.98px) calc(100vw - 24px * 2 - 14px * 2), (max-width: 1023.98px) calc((100vw - 188px) / 3), (max-width: 1439.98px) calc((100vw - 288px) / 3), 352px"
            breakpoints: [200, 352, 528, 654, 700, 1400]
            placeholder: BLURRED
            imgixParams: { fit: "crop", auto: "compress,format" }
          )
        }
      }
      howItWorksButtonText
      howItWorksButtonLink {
        url
      }
      howItWorksButtonHide

      featuresSectionHeading
      featuresSectionText {
        value
      }
      featuresSectionImage {
        format
        url
        gatsbyImageData(
          width: 940
          sizes: "(max-width: 767.98px) calc(100vw - 24px * 2), (max-width: 1023.98px) calc(100vw - 40px * 2), 620px"
          breakpoints: [327, 620, 654, 930, 981, 1240, 1376, 1880]
          imgixParams: { fit: "crop", auto: "compress,format" }
        )
      }
      featuresButtonText
      featuresButtonLink {
        url
      }
      featuresButtonHide
      featuresList {
        id
        heading
        text {
          value
        }
        iconName
      }

      caseStudiesSectionHeading
      caseStudiesSectionText {
        value
      }
      cases {
        id
        heading
        postIcon {
          format
          url
          gatsbyImageData(
            width: 40
            height: 40
            placeholder: NONE
            imgixParams: { fit: "crop", auto: "compress,format" }
          )
        }
        seo {
          description
        }
        comingSoon
        slug
      }
      caseStudiesButtonText
      caseStudiesButtonLink {
        url
      }

      roadmapSectionHeading
      roadmapSectionText {
        value
      }
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
    }
    datoCmsCaseStudiesPage {
      disableCaseStudiesPage
    }
  }
`

export default IndexPage
