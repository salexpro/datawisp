import React from 'react'
import { graphql } from 'gatsby'

import CaseStudies from '~containers/CaseStudies'

const CaseStudiesPage = ({ data }) => {
  const { heroSectionHeading, heroSectionText, heroSectionImage, seo } =
    data.datoCmsCaseStudiesPage
  const cases = data.allDatoCmsArticle

  return (
    <CaseStudies
      hero={{
        heading: heroSectionHeading,
        text: heroSectionText,
        image: heroSectionImage,
      }}
      cases={cases?.nodes}
      seo={seo}
    />
  )
}

export const query = graphql`
  query CasesPage {
    datoCmsCaseStudiesPage {
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
          width: 716
          placeholder: NONE
          sizes: "(max-width: 767.98px) calc(100vw - 24px * 2), (max-width: 1023.98px) 501px, (max-width: 1199.98px) 609px, 716px"
          breakpoints: [550, 740, 1218, 1040, 1440]
          imgixParams: { fit: "crop", auto: "compress,format" }
        )
      }
    }

    allDatoCmsArticle(
      filter: { postType: { eq: "caseStudy" } }
      sort: { meta: { createdAt: DESC } }
    ) {
      nodes {
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
        slug
      }
    }
  }
`

export default CaseStudiesPage
