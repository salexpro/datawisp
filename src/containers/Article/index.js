import React from 'react'
import PropTypes from 'prop-types'

import Layout from '~components/Layout'
import S from '~components/seo'
import StructuredContent from '~components/StructuredContent'

import SectionRelatedArticles from './components/SectionRelatedArticles'
import { TOP_LEVEL_PAGE } from './constants'

const Article = (props) => {
  // eslint-disable-next-line react/prop-types
  const { dataCms, pageContext, data, ...rest } = props

  const { postType } = pageContext
  const { datoCmsArticle } = data

  const isCaseStudy = postType === 'caseStudy'

  const topLevelPage = TOP_LEVEL_PAGE[+isCaseStudy]

  return (
    <Layout {...rest}>
      <S title="Article" />
      <StructuredContent
        articleData={datoCmsArticle}
        topLevelPage={topLevelPage}
      />
      {/* TODO: related articles / cases */}
      {isCaseStudy ? null : <SectionRelatedArticles />}
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
