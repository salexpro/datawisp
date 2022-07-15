import React from 'react'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '~components/Layout'
import S from '~components/seo'
import StructuredContent from '~components/StructuredContent'

import SectionRelatedArticles from './components/SectionRelatedArticles'
import { ARTICLE_CONTENT, BREADCRUMBS } from './mocks'

const Article = (props) => {
  // eslint-disable-next-line react/prop-types
  const { dataCms, ...rest } = props

  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "img/article/example.png" }) {
        id
        relativePath
        childImageSharp {
          gatsbyImageData(
            quality: 80
            width: 740
            formats: [JPG, WEBP, AVIF]
            placeholder: NONE
            sizes: "(max-width: 767.98px) calc(100vw - 24px * 2), (max-width: 820px) calc(100vw - 40px * 2), 740px"
            breakpoints: [327, 654, 740, 981, 1110, 1376, 1480]
          )
          blurHash {
            base64Image
          }
        }
      }
    }
  `)

  return (
    <Layout {...rest}>
      <S title="Article" />
      <StructuredContent
        content={ARTICLE_CONTENT}
        imgFile={data.file}
        breadcrumbs={BREADCRUMBS}
      />
      <SectionRelatedArticles />
    </Layout>
  )
}

Article.defaultProps = {
  className: undefined,
}

Article.propTypes = {
  className: PropTypes.string,
}

export default Article
