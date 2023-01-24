import React from 'react'

import SEO from '~components/seo'

const SeoDatoCms = ({ seo, meta, isArticle = false }) => {
  const { createdAt, updatedAt } = meta || {}

  const { title, description, image, twitterCard } = seo || {}

  const articleTimeMeta = [
    { name: 'article:published_time', content: createdAt },
    { name: 'article:modified_time', content: updatedAt },
  ]

  return (
    <SEO
      title={title}
      description={description}
      image={image?.fixed?.src}
      twitterCard={twitterCard}
      meta={isArticle ? articleTimeMeta : undefined}
      ogType={isArticle ? 'article' : null}
    />
  )
}

export default SeoDatoCms
