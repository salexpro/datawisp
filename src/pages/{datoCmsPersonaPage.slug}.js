import React from 'react'
import { graphql } from 'gatsby'

import Persona from '~containers/Persona'
import SeoDatoCms from '~components/SeoDatoCms'

export const Head = ({ data }) => {
  const { seo } = data.datoCmsPersonaPage

  return <SeoDatoCms seo={seo} />
}

const PersonaTemplate = (props) => <Persona {...props} />

export default PersonaTemplate

export const pageQuery = graphql`
  query Persona($id: String) {
    datoCmsPersonaPage(id: { eq: $id }) {
      seo {
        ...SEO
      }

      heroHeading
      heroDescription {
        value
      }
      heroButtons {
        ...Buttons
      }
      heroBg {
        gatsbyImageData(
          width: 2560
          aspectRatio: 2.25
          placeholder: BLURRED
          forceBlurhash: true
          imgixParams: { fit: "crop", auto: "format" }
        )
      }

      featuresHeading
      featuresText
      featuresList {
        id
        heading
        text {
          value
        }
        iconName
      }

      videoHeading
      videoText
      video {
        url
        title
        provider
        providerUid
        thumbnailUrl
        image {
          childImageSharp {
            blurHash {
              base64Image
            }
            gatsbyImageData(
              placeholder: NONE
              outputPixelDensities: [1, 1.5, 2]
              quality: 100
            )
          }
        }
      }
      videoButtons {
        ...Buttons
      }
      videoCaption

      moreHeading
      moreText
      moreItems {
        ...personaItem
      }
    }
  }
`
