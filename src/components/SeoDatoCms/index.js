import React from 'react'
import PropTypes from 'prop-types'

import SEO from '~components/seo'

const SeoDatoCms = ({ seo = {}, meta = {}, isArticle = false }) => {
  const { createdAt, updatedAt } = meta

  const { title, description, image, twitterCard } = seo || {}

  return (
    <SEO
      title={title}
      description={description}
      image={image?.fixed}
      twitterCard={twitterCard}
      ogType={isArticle ? 'article' : null}
    >
      {createdAt && <meta name="article:published_time" content={createdAt} />}
      {updatedAt && <meta name="article:modified_time" content={updatedAt} />}
    </SEO>
  )
}

SeoDatoCms.defaultProps = {
  seo: {
    title: '',
    description: '',
    image: {},
    twitterCard: '',
  },
  meta: {
    createdAt: '',
    updatedAt: '',
  },
  isArticle: false,
}

SeoDatoCms.propTypes = {
  seo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.object,
    twitterCard: PropTypes.string,
  }),
  meta: PropTypes.shape({
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string,
  }),
  isArticle: PropTypes.bool,
}

export default SeoDatoCms
