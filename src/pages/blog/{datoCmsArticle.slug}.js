import React from 'react'
import { graphql } from 'gatsby'

import Article from '~containers/Article'
import SeoDatoCms from '~components/SeoDatoCms'

export const Head = ({ data }) => {
  const { seo, meta } = data.datoCmsArticle

  return <SeoDatoCms seo={seo} meta={meta} />
}

const ArticleTemplate = (props) => <Article {...props} />

export default ArticleTemplate

export const pageQuery = graphql`
  fragment ArticleImageData on DatoCmsFileField {
    gatsbyImageData(
      placeholder: BLURRED
      forceBlurhash: true
      imgixParams: { fit: "crop", auto: "format" }
    )
  }

  fragment ArticleData on DatoCmsArticle {
    seo {
      ...SEO
    }
    meta {
      createdAt
      updatedAt
    }
    category {
      name
      slug
    }
    heading
    detailedHeading
    author {
      name
    }
    badgeText
    heroImage {
      alt
      basename
      gatsbyImageData(
        width: 740
        sizes: "(max-width: 767.98px) calc(100vw - 24px * 2), (max-width: 820px) calc(100vw - 40px * 2), 740px"
        breakpoints: [327, 654, 740, 981, 1110, 1376, 1480]
        placeholder: BLURRED
        forceBlurhash: true
        imgixParams: { fit: "crop", auto: "compress,format" }
      )
      fixed(width: 1200, height: 630) {
        src
      }
    }
    content {
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
        ... on DatoCmsArticleCard {
          id: originalId
          content {
            value
          }
        }
        ... on DatoCmsArticleColumnsCard {
          id: originalId
          columns {
            id
            content {
              value
            }
          }
        }
        ... on DatoCmsArticleTable {
          id: originalId
          tableCaption {
            value
          }
          tableRows {
            cells {
              cell {
                value
              }
            }
          }
        }
        ... on DatoCmsArticleHtmlEmbed {
          id: originalId
          htmlEmbed
        }
      }
    }
  }

  query Article($id: String) {
    datoCmsArticle(id: { eq: $id }) {
      ...ArticleData
    }
    # datoCmsCaseStudiesPage {
    #   disableCaseStudiesPage
    # }
    datoCmsBlogPage {
      disableBlogPage
    }
  }
`
