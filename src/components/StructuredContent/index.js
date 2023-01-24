import React from 'react'
import PropTypes from 'prop-types'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Container, Badge } from 'react-bootstrap'
import { StructuredText } from 'react-datocms'
import dayjs from 'dayjs'

import SeoDatoCms from '~components/SeoDatoCms'

import Breadcrumbs from './components/Breadcrumbs'
import { renderBlock } from './utils'

import * as s from './StructuredContent.module.scss'

const StructuredContent = (props) => {
  // TODO: update props
  const { articleData, topLevelPage, ...rest } = props

  const {
    heading,
    detailedHeading,
    badgeText,
    heroImage,
    content,
    meta,
    category,
    author,
    seo,
  } = articleData

  const { createdAt } = meta

  const createdAtDate = dayjs(createdAt)

  const breadcrumbs = [
    topLevelPage,
    ...(category
      ? [{ text: category.name, url: `${topLevelPage.url}#${category.slug}` }]
      : []),
    { text: heading, isActive: true },
  ]

  return (
    <Container {...rest}>
      <SeoDatoCms seo={seo} meta={meta} isArticle />
      <section className={s.article}>
        <Breadcrumbs className={s.navBlog} breadcrumbs={breadcrumbs} />
        {!!heroImage && (
          <GatsbyImage
            alt={heroImage.alt || heroImage.basename}
            image={getImage(heroImage)}
          />
        )}
        <div className={s.rowPostData}>
          <time className={s.colorPrimary} dateTime={createdAt}>
            {createdAtDate.format('MMMM D, YYYY')}
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
        <h1>{detailedHeading || heading}</h1>
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
