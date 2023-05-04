import React from 'react'

import SignUp from '~containers/SignUp'
import { graphql } from 'gatsby'

const SignUpPage = ({ data }) => {
  const { howItWorksSectionHeading, howItWorksSectionText, steps } =
    data.datoCmsLeadGenerationPage

  return (
    <SignUp
      howItWorks={{
        heading: howItWorksSectionHeading,
        text: howItWorksSectionText,
        steps,
      }}
    />
  )
}

export const query = graphql`
  query SignUpPage {
    datoCmsLeadGenerationPage {
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
    }
  }
`

export default SignUpPage
