import React from 'react'
import { graphql } from 'gatsby'

import CaseStudies from '~containers/CaseStudies'

const CaseStudiesPage = ({ data }) => {
  const { heroSectionHeading, heroSectionText, heroSectionImage, cases } =
    data.datoCmsCaseStudiesPage

  return (
    <CaseStudies
      hero={{
        heading: heroSectionHeading,
        text: heroSectionText,
        image: heroSectionImage,
      }}
      cases={cases}
    />
  )
}

export const query = graphql`
  query CasesPage {
    datoCmsCaseStudiesPage {
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
          sizes: "(max-width: 767.98px) calc(100vw - 24px * 2), (max-width: 1439.98) calc((100vw - 40px * 2) * 0.66), 716px"
          breakpoints: [720, 1080, 1440]
          imgixParams: { fit: "crop", auto: "compress,format" }
        )
      }
      cases {
        id
        heading
        badgeText
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
        slug
      }
    }
  }
`

export default CaseStudiesPage
