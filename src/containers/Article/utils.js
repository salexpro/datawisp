import { getRelatedArticles, getRelatedCases } from '~api'

export const updatePageContent = (
  originalId,
  isCaseStudy,
  setRelatedCases,
  setRelatedArticles,
  setRequestError
) => {
  const updateRelatedCases = () =>
    getRelatedCases(originalId)
      .then((res) => {
        setRelatedCases(res?.allArticles)
      })
      .catch((err) => setRequestError(err))

  const updatedRelatedArticles = () =>
    getRelatedArticles(originalId)
      .then((res) => {
        setRelatedArticles(res?.allArticles)
      })
      .catch((err) => setRequestError(err))

  if (isCaseStudy) {
    updateRelatedCases()
  } else {
    updatedRelatedArticles()
  }
}
