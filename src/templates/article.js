import React from 'react'

import Article from '~containers/Article'
import { graphql } from 'gatsby'

const ArticleTemplate = (props) => <Article {...props} />

export default ArticleTemplate

export const pageQuery = graphql`
  fragment ArticleImageData on DatoCmsFileField {
    gatsbyImageData(
      sizes: "(max-width: 767.98px) calc(100vw - 24px * 2), (max-width: 820px) calc(100vw - 40px * 2), 740px"
      breakpoints: [327, 654, 740, 981, 1110, 1376, 1480]
      placeholder: BLURRED
      forceBlurhash: true
      imgixParams: { fit: "crop", auto: "compress,format" }
    )
  }

  fragment ArticleData on DatoCmsArticle {
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
      }
    }
  }

  query Article($id: String) {
    datoCmsArticle(id: { eq: $id }) {
      ...ArticleData
    }
    datoCmsCaseStudiesPage {
      disableCaseStudiesPage
    }
    datoCmsBlogPage {
      disableBlogPage
    }
  }
`
