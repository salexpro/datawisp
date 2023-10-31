import React, { createElement } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import cn from 'clsx'
import dayjs from 'dayjs'
import { Image } from 'react-datocms'
import { Placeholder, Ratio } from 'react-bootstrap'
import { range } from 'lodash'

import RouteURL from '~routes'
import Icon from '~components/ui/Icon'

import * as s from './BlogItem.module.scss'

const BlogItem = (props) => {
  const {
    heading,
    headingAs,
    className,
    seo,
    meta,
    heroImage,
    slug,
    isPlaceholder,
    ...rest
  } = props
  const { description } = seo || {}
  const { createdAt } = meta || {}
  const { responsiveImage } = heroImage || {}

  const createdAtDate = dayjs(createdAt)

  const blogpostLink = `${RouteURL.BLOG}/${slug}`

  if (isPlaceholder)
    return (
      <div {...rest} className={cn('placeholder-glow', s.blogItem, className)}>
        <Ratio aspectRatio="4x3" className={s.imgWrapper}>
          <Placeholder />
        </Ratio>
        <Placeholder className={cn(s.date, s.placeholder)} />
        <div className={s.headingPlaceholderGrid}>
          {range(2).map((n) => (
            <Placeholder
              key={n}
              as={headingAs}
              className={cn('h4', s.heading)}
            />
          ))}
        </div>
        <div className={s.textPlaceholderGrid}>
          {range(3).map((n) => (
            <Placeholder key={n} as="p" className={s.text} />
          ))}
        </div>
        <div className={s.linkPlaceholderGrid}>
          {range(2).map((n) => (
            <Placeholder key={n} className={s.placeholder} />
          ))}
        </div>
      </div>
    )

  return (
    <div {...rest} className={cn(s.blogItem, className)}>
      <Link to={blogpostLink} className={s.imgWrapper} aria-label={heading}>
        {responsiveImage ? (
          <Image
            data={responsiveImage}
            objectFit="cover"
            className={s.blogImg}
          />
        ) : (
          <GatsbyImage
            alt={heading}
            image={getImage(heroImage)}
            className={s.blogImg}
          />
        )}
      </Link>
      <time className={s.date} dateTime={createdAt}>
        {createdAtDate.format('MMMM D, YYYY')}
      </time>
      <Link to={blogpostLink} className={s.link}>
        {createElement(headingAs, { className: cn('h4', s.heading) }, heading)}
      </Link>
      <p className={s.text}>{description}</p>
      <Link to={blogpostLink} className={cn(s.readMore, s.link)}>
        Read more <Icon name="icon-arrow-right" size={20} />
      </Link>
    </div>
  )
}

BlogItem.defaultProps = {
  className: '',
  headingAs: 'h2',
}

BlogItem.propTypes = {
  className: PropTypes.string,
  headingAs: PropTypes.string,
}

export default BlogItem
