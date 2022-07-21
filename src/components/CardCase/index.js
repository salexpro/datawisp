import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { Link } from 'gatsby'
import { Button, Placeholder } from 'react-bootstrap'

import RouteURL from '~routes'
import Icon from '~components/Icon'
import ImageFormat from '~components/ImageFormat'

import * as s from './CardCase.module.scss'

const CardCase = (props) => {
  const {
    className,
    heading,
    badgeText,
    postIcon,
    slug,
    isPlaceholder,
    ...rest
  } = props

  if (isPlaceholder)
    return (
      <div
        {...rest}
        className={cn('placeholder-glow', s.cardCase, s.placeholder, className)}
      >
        <Placeholder className={s.placeholderImg} />
        <Placeholder as="h3" className={cn('h4', s.placeholderHeader)} />
        <Placeholder as="p" className={s.placeholderText} />
        <Placeholder className={s.placeholderBtn} />
      </div>
    )

  const linkTitle = `Learn more about ${heading}`

  return (
    <Link
      {...rest}
      className={cn(s.cardCase, className)}
      to={`${RouteURL.CASE_STUDIES}/${slug}`}
      aria-label={linkTitle}
      title={linkTitle}
    >
      <span className={s.imgWrapper}>
        <ImageFormat width={40} height={40} alt={heading} file={postIcon} />
      </span>
      <h3 className="h4">{heading}</h3>
      <p>{badgeText}</p>
      <Button variant="primary" className={s.arrowLink} aria-label={linkTitle}>
        <Icon name="icon-arrow-link" size={20} className={s.arrowIcon} />
      </Button>
    </Link>
  )
}

CardCase.defaultProps = {
  className: undefined,
  heading: undefined,
  badgeText: undefined,
  postIcon: undefined,
  slug: undefined,
  isPlaceholder: false,
}

CardCase.propTypes = {
  className: PropTypes.string,
  heading: PropTypes.string,
  badgeText: PropTypes.string,
  postIcon: PropTypes.object,
  slug: PropTypes.string,
  isPlaceholder: PropTypes.bool,
}

export default CardCase
