import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import Layout from '~components/Layout'
import S from '~components/seo'
import StructuredContent from '~components/StructuredContent'

import SectionRelatedArticles from './components/SectionRelatedArticles'
import SectionRelatedCases from './components/SectionRelatedCases'
import { TOP_LEVEL_PAGE } from './constants'

const Article = (props) => {
  // eslint-disable-next-line react/prop-types
  const { dataCms, pageContext, data, ...rest } = props

  const { postType, originalId } = pageContext
  const { datoCmsArticle } = data

  const isCaseStudy = postType === 'caseStudy'

  const topLevelPage = TOP_LEVEL_PAGE[+isCaseStudy]

  // eslint-disable-next-line no-unused-vars
  const [relatedCases, setRelatedCases] = useState()
  const [relatedArticles, setRelatedArticles] = useState()
  const [requestError, setRequestError] = useState()

  useEffect(() => {
    import(/* webpackChunkName: "axios-requests" */ './utils').then(
      ({ updatePageContent }) =>
        updatePageContent(
          originalId,
          isCaseStudy,
          setRelatedCases,
          setRelatedArticles,
          setRequestError
        )
    )
  }, [])

  return (
    <Layout {...rest}>
      <S title="Article" />
      <StructuredContent
        articleData={datoCmsArticle}
        topLevelPage={topLevelPage}
      />
      {isCaseStudy ? (
        <SectionRelatedCases
          relatedCases={relatedCases}
          requestError={requestError}
        />
      ) : (
        <SectionRelatedArticles
          relatedArticles={relatedArticles}
          requestError={requestError}
        />
      )}
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
