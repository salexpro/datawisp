import React from 'react'

import Partners from '~containers/Partners'
import { graphql } from 'gatsby'

const PartnersPage = ({ data }) => {
  const {
    heroSectionTitle,
    heroSectionDescription,
    heroSectionImage,
    becomePartnerButtonText,
    partners,
  } = data.datoCmsPartnersPage
  return (
    <Partners
      hero={{
        title: heroSectionTitle,
        description: heroSectionDescription,
        image: heroSectionImage,
        buttonText: becomePartnerButtonText,
      }}
      partners={partners}
    />
  )
}

export const query = graphql`
  query PartnersPage {
    datoCmsPartnersPage {
      heroSectionTitle
      heroSectionDescription
      becomePartnerButtonText
      heroSectionImage {
        format
        url
        gatsbyImageData(
          width: 720
          placeholder: NONE
          sizes: "(max-width: 767.98px) calc(100vw - 24px * 2), (max-width: 1199.98px) 532px, 604px"
          breakpoints: [327, 491, 532, 654, 719, 798, 981, 1079, 1210, 1438]
          imgixParams: { fit: "crop", auto: "compress,format" }
        )
      }

      partners {
        id
        title
        name
        link
        description {
          value
        }
        logo {
          format
          url
          gatsbyImageData(
            placeholder: NONE
            sizes: "(max-width: 767.98px) calc(100vw - 24px * 2 - 24px * 2), (max-width: 1199.98px) 288px, 400px"
            breakpoints: [288, 432, 576, 671, 864, 1007, 1342]
            imgixParams: { fit: "crop", auto: "compress,format" }
          )
        }
      }
    }
  }
`

export default PartnersPage
