import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import cn from 'classnames'
import dayjs from 'dayjs'
import { Image } from 'react-datocms'
import { Placeholder, Ratio } from 'react-bootstrap'
import { range } from 'lodash'

import RouteURL from '~routes'
import Icon from '~components/Icon'
import getImgWithBlurHash from '~utils/getImgWithBlurHash'

import * as s from './BlogItem.module.scss'

const BlogItem = (props) => {
  const {
    date, // mock data
    heading,
    file,
    text, // mock data
    href, // mock data
    className,
    seo,
    meta,
    heroImage,
    slug,
    isPlaceholder,
    ...rest
  } = props
  const { description } = seo || {}
  const { publishedAt } = meta || {}
  const { responsiveImage } = heroImage || {}

  const publishedAtDate = dayjs(publishedAt)

  const blogpostLink = `${RouteURL.BLOG}/${slug || href}`

  if (isPlaceholder)
    return (
      <div {...rest} className={cn('placeholder-glow', s.blogItem, className)}>
        <Ratio aspectRatio="4x3" className={s.imgWrapper}>
          <Placeholder />
        </Ratio>
        <Placeholder className={cn(s.date, s.placeholder)} />
        <div className={s.headingPlaceholderGrid}>
          {range(2).map((n) => (
            <Placeholder key={n} as="h4" className={s.heading} />
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
      <Link to={blogpostLink} className={s.imgWrapper}>
        {responsiveImage ? (
          <Image data={responsiveImage} objectFit="cover" />
        ) : (
          <GatsbyImage
            alt={heading}
            image={getImgWithBlurHash(file)}
            className={s.blogImg}
          />
        )}
      </Link>
      <time className={s.date} dateTime={publishedAt}>
        {publishedAtDate.format('MMMM D, YYYY')}
      </time>
      <Link to={blogpostLink} className={s.link}>
        <h4 className={s.heading}>{heading}</h4>
      </Link>
      <p className={s.text}>{description || text}</p>
      <Link to={blogpostLink} className={cn(s.readMore, s.link)}>
        Read more <Icon name="icon-arrow-right" size={20} />
      </Link>
    </div>
  )
}

BlogItem.defaultProps = {
  className: '',
}

BlogItem.propTypes = {
  className: PropTypes.string,
}

export default BlogItem
