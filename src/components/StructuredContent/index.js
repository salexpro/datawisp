import React from 'react'
import PropTypes from 'prop-types'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Container, Badge } from 'react-bootstrap'
import { StructuredText } from 'react-datocms'
import dayjs from 'dayjs'

import SEO from '~components/seo'

import Breadcrumbs from './components/Breadcrumbs'
import { renderBlock } from './utils'

import * as s from './StructuredContent.module.scss'

const StructuredContent = (props) => {
  // TODO: update props
  const { articleData, topLevelPage, ...rest } = props

  const {
    heading,
    badgeText,
    heroImage,
    content,
    meta,
    category,
    author,
    seo,
  } = articleData

  const { publishedAt, updatedAt } = meta

  const { title, description, image, twitterCard } = seo || {}

  const publishedAtDate = dayjs(publishedAt)

  const breadcrumbs = [
    topLevelPage,
    ...(category
      ? [{ text: category.name, url: `${topLevelPage.url}#${category.slug}` }]
      : []),
    { text: heading, isActive: true },
  ]

  const extraMeta = [
    { name: 'article:published_time', content: publishedAt },
    { name: 'article:modified_time', content: updatedAt },
  ]

  return (
    <Container {...rest}>
      <SEO
        title={title || heading}
        description={description}
        image={image?.fixed?.src || heroImage?.fixed?.src}
        twitterCard={twitterCard}
        meta={extraMeta}
        ogType="article"
      />
      <section className={s.article}>
        <Breadcrumbs className={s.navBlog} breadcrumbs={breadcrumbs} />
        {!!heroImage && <GatsbyImage alt="hero" image={getImage(heroImage)} />}
        <div className={s.rowPostData}>
          <time className={s.colorPrimary} dateTime={publishedAt}>
            {publishedAtDate.format('MMMM D, YYYY')}
          </time>
          {badgeText ? (
            <Badge bg="article">{badgeText}</Badge>
          ) : (
            !!author && (
              <span>
                Posted by: <span className={s.colorPrimary}>{author.name}</span>
              </span>
            )
          )}
        </div>
        <h1>{heading}</h1>
        <StructuredText data={content} renderBlock={renderBlock} />
      </section>
    </Container>
  )
}

StructuredContent.defaultProps = {
  className: undefined,
}

StructuredContent.propTypes = {
  className: PropTypes.string,
}

export default StructuredContent
