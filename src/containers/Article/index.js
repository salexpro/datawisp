import React from 'react'

import StructuredContent from '~components/StructuredContent'

// import SectionRelatedArticles from './components/SectionRelatedArticles'
// import SectionRelatedCases from './components/SectionRelatedCases'
import { TOP_LEVEL_PAGE } from './constants'

const Article = ({ data, utm, isCaseStudy }) => {
  // const { dataCms, pageContext, data } = props

  // const { postType, originalId } = pageContext
  const {
    datoCmsArticle,
    // datoCmsCaseStudiesPage: { disableCaseStudiesPage },
    // datoCmsBlogPage: { disableBlogPage },
  } = data

  // const isCaseStudy = postType === 'caseStudy'
  // const isDisabled = isCaseStudy ? disableCaseStudiesPage : disableBlogPage

  // const topLevelPage = TOP_LEVEL_PAGE[(+isCaseStudy + 1) * +!isDisabled]

  // /* eslint-disable no-unused-vars */
  // const [relatedCases, setRelatedCases] = useState()
  // const [relatedArticles, setRelatedArticles] = useState()
  // const [requestError, setRequestError] = useState()
  // /* eslint-enable no-unused-vars */

  // useEffect(() => {
  //   import(/* webpackChunkName: "axios-requests" */ './utils').then(
  //     ({ updatePageContent }) =>
  //       updatePageContent(
  //         originalId,
  //         isCaseStudy,
  //         setRelatedCases,
  //         setRelatedArticles,
  //         setRequestError
  //       )
  //   )
  // }, [])

  return (
    <StructuredContent
      articleData={datoCmsArticle}
      topLevelPage={TOP_LEVEL_PAGE[isCaseStudy ? 2 : 1]}
      utm={utm}
      isCaseStudy={isCaseStudy}
    />
    // {isCaseStudy ? (
    //  <SectionRelatedCases
    //    relatedCases={relatedCases}
    //    requestError={requestError}
    //  />
    // ) : (
    //  <SectionRelatedArticles
    //    relatedArticles={relatedArticles}
    //    requestError={requestError}
    //  />
    // )}
  )
}

export default Article
