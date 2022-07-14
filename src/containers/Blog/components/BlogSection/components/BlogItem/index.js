import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import cn from 'classnames'

import Icon from '~components/Icon'
import getImgWithBlurHash from '~utils/getImgWithBlurHash'

import * as s from './BlogItem.module.scss'

const BlogItem = (props) => {
  const { date, heading, file, text, href, className, ...rest } = props

  return (
    <div {...rest} className={cn(s.blogItem, className)}>
      <Link to={href} className={s.imgWrapper}>
        <GatsbyImage
          alt={heading}
          image={getImgWithBlurHash(file)}
          className={s.blogImg}
        />
      </Link>
      <p className={s.date}>{date}</p>
      <Link to={href}>
        <h4 className={s.link}>{heading}</h4>
      </Link>
      <p className={s.text}>{text}</p>
      <Link to={href} className={cn(s.readMore, s.link)}>
        Read more <Icon name="icon-arrow-right" size={20} />
      </Link>
    </div>
  )
}

BlogItem.defaultProps = {
  className: '',
}

BlogItem.propTypes = {
  date: PropTypes.string.isRequired,
  file: PropTypes.object.isRequired,
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default BlogItem
