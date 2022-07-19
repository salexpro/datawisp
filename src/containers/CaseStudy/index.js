import React from 'react'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'

import S from '~components/seo'
import StructuredContent from '~components/StructuredContent'
import Layout from '~components/Layout'

import { ARTICLE_CONTENT, BREADCRUMBS } from './mocks'

const CaseStudy = (props) => {
  const { className, ...rest } = props

  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "img/cases/example.png" }) {
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
      <S title="Case Study" />
      <StructuredContent
        badgeText="Web3 Strategy Game"
        variant="caseStudy"
        content={ARTICLE_CONTENT}
        imgFile={data.file}
        breadcrumbs={BREADCRUMBS}
      />
    </Layout>
  )
}

CaseStudy.defaultProps = {
  className: undefined,
}

CaseStudy.propTypes = {
  className: PropTypes.string,
}

export default CaseStudy
