import React from 'react'
import { graphql } from 'gatsby'

import SeoDatoCms from '~components/SeoDatoCms'
import SectionHero from '~components/SectionHero'
import SectionQuote from '~components/SectionQuote'
import SectionProblem from '~components/SectionProblem'
import SectionAgitation from '~components/SectionAgitation'
import SectionSolution from '~components/SectionSolution'
import SectionFeatures from '~components/SectionFeatures'
import SectionBackedBy from '~components/SectionBackedBy'
import SectionIntegrationsPreview from '~components/SectionIntegrationsPreview'
import SectionDeRisk from '~components/SectionDeRisk'
import SectionBanner from '~components/SectionBanner'

export const Head = ({ data }) => {
  const { seo } = data.datoCmsIntegrationsPage

  return <SeoDatoCms seo={seo} />
}

const IntegrationsPage = ({ data, utm }) => {
  const {
    heroHeading,
    heroLeadText,
    heroText,
    heroButtons,
    heroCaption,
    heroMedia,

    quoteText,
    quoteCite,
    quoteAuthor,

    problemContent,

    agitationTitle,
    agitationSubtitle,
    agitationFeaturesTitle,
    agitationFeatures,
    agitationContent,

    solutionHeading,
    solutionLeadText,
    solutionImage,
    solutionContent,
    solutionMedia,
    solutionButtons,

    featuresHeading,
    featuresText,
    featuresList,

    backedList,

    integrationsSectionHeading,
    integrationsList,
    integrationsButtons,

    deriskHeading,
    deriskContent,
    deriskButtons,

    featuresbottomHeading,
    featuresbottomText,
    featuresbottomList,

    bannerHeading,
    bannerText,
    bannerButtons,
    bannerNotification,
  } = data.datoCmsIntegrationsPage

  return (
    <>
      <SectionHero
        {...{
          heading: heroHeading,
          lead: heroLeadText,
          text: heroText,
          caption: heroCaption,
          buttons: heroButtons,
          image: heroMedia,
          utm,
        }}
      />
      <SectionQuote
        {...{
          text: quoteText,
          cite: quoteCite,
          author: quoteAuthor,
        }}
      />
      <SectionProblem content={problemContent} />
      <SectionAgitation
        {...{
          title: agitationTitle,
          subtitle: agitationSubtitle,
          featuresTitle: agitationFeaturesTitle,
          features: agitationFeatures,
          content: agitationContent,
        }}
      />
      <SectionSolution
        {...{
          heading: solutionHeading,
          lead: solutionLeadText,
          image: solutionImage,
          content: solutionContent,
          media: solutionMedia,
          buttons: solutionButtons,
          utm,
        }}
      />
      <SectionFeatures
        {...{
          heading: featuresHeading,
          text: featuresText,
          items: featuresList,
          utm,
        }}
        variant="long"
      />
      <SectionBackedBy list={backedList} />
      <SectionIntegrationsPreview
        {...{
          heading: integrationsSectionHeading,
          list: integrationsList,
          buttons: integrationsButtons,
          utm,
        }}
      />
      <SectionDeRisk
        {...{
          heading: deriskHeading,
          content: deriskContent,
          buttons: deriskButtons,
          utm,
        }}
      />
      <SectionFeatures
        heading={featuresbottomHeading}
        text={featuresbottomText}
        items={featuresbottomList}
        variant="short"
      />
      <SectionBanner
        {...{
          heading: bannerHeading,
          text: bannerText,
          buttons: bannerButtons,
          notificationText: bannerNotification,
          utm,
        }}
      />
    </>
  )
}

export const query = graphql`
  query IntegrationsPage {
    datoCmsIntegrationsPage {
      seo {
        ...SEO
      }

      heroHeading {
        value
      }
      heroLeadText {
        value
      }
      heroText {
        value
      }
      heroCaption
      heroMedia {
        ...MediaItem
      }
      heroButtons {
        ...Buttons
      }

      quoteText
      quoteCite
      quoteAuthor

      problemContent {
        value
        blocks {
          __typename
          ... on DatoCmsArticleImage {
            id: originalId
            image {
              alt
              basename
              ...ArticleImageData
            }
            imageCaption
            imagePosition
            imageWidth
            textWrapping
          }
        }
      }

      agitationTitle {
        value
      }
      agitationSubtitle
      agitationFeaturesTitle
      agitationFeatures {
        id
        iconName
        heading
      }
      agitationContent {
        value
      }

      solutionHeading {
        value
      }
      solutionLeadText
      solutionImage {
        ...MediaItem
      }
      solutionMedia {
        ...MediaItem
      }
      solutionContent {
        value
        blocks {
          id: originalId
          __typename
          list {
            ...PersonaItem
          }
        }
      }
      solutionButtons {
        ...Buttons
      }

      featuresHeading
      featuresText
      featuresList {
        id
        iconName
        heading
        text {
          value
        }
      }

      bannerHeading
      bannerText {
        value
      }
      bannerButtons {
        ...Buttons
      }
      bannerNotification

      backedList {
        name
        image {
          title
          alt
          format
          url
          gatsbyImageData(height: 56, placeholder: NONE)
        }
      }

      deriskHeading
      deriskContent {
        value
      }
      deriskButtons {
        ...Buttons
      }

      featuresbottomHeading
      featuresbottomText
      featuresbottomList {
        id
        heading
        text {
          value
        }
        iconName
      }

      integrationsSectionHeading
      integrationsList {
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
      integrationsButtons {
        ...Buttons
      }
    }
  }
`

export default IntegrationsPage
