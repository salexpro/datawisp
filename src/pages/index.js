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
    integrationsSectionHeading,
    integrationsList,
    integrationsSectionSubheading,
    integrationsSectionButtonText,
    integrationsSectionButtonLink,
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
    useCasesSectionHeading,
    useCasesSectionText,
    useCasesSectionUseCases,
    roadmapSectionHeading,
    roadmapSectionText,
    roadmapPhases,
    caseStudiesSectionHeading,
    caseStudiesSectionText,
    cases,
    caseStudiesButtonText,
    caseStudiesButtonLink,
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
    seo,
  } = data.datoCmsHomePage

  const caseStudiesPage = data.datoCmsCaseStudiesPage

  return (
    <Homepage
      seo={seo}
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
          ...heroButtonSecondaryLink,
          text: heroButtonSecondaryText,
          hide: heroButtonSecondaryHide,
        },
        partnersHeading: partnersSectionHeading,
        partners,
      }}
      integrations={{
        heading: integrationsSectionHeading,
        list: integrationsList,
        subheading: integrationsSectionSubheading,
        buttonText: integrationsSectionButtonText,
        buttonLink: integrationsSectionButtonLink,
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
      useCases={{
        heading: useCasesSectionHeading,
        text: useCasesSectionText,
        useCases: useCasesSectionUseCases,
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
  query Homepage {
    datoCmsHomePage {
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
        ...LinkExternalData
      }
      heroButtonSecondaryHide

      integrationsSectionHeading
      integrationsSectionList {
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
      integrationsList {
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
      integrationsSectionSubheading
      integrationsSectionButtonText
      integrationsSectionButtonLink {
        url
      }

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
        image {
          format
          url
          gatsbyImageData(
            width: 691
            placeholder: NONE
            sizes: "(max-width: 767.98px) calc(100vw - 24px * 2 - 24px * 2), (max-width: 1023.98px) calc((100vw - 40px * 2 - 16px - 24px * 2 * 2) / 2), (max-width: 1199.98px) calc((100vw - 40px * 2 - 16px * 2 - 24px * 2 * 3) / 3), (max-width: 1320px) calc((100vw - 40px * 2 - 32px * 2 - 24px * 2 * 3) / 3), 344px"
            breakpoints: [299, 344, 448, 516, 598, 688, 897, 1056, 1382]
            imgixParams: { fit: "crop", auto: "compress,format" }
          )
        }
      }

      useCasesSectionHeading
      useCasesSectionText {
        value
      }
      useCasesSectionUseCases {
        id
        iconName
        heading
        text {
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
    datoCmsCaseStudiesPage {
      disableCaseStudiesPage
    }
  }
`

export default IndexPage
