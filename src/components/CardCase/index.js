import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { Link } from 'gatsby'
import { Button } from 'react-bootstrap'

import RouteURL from '~routes'
import Icon from '~components/Icon'

import * as s from './CardCase.module.scss'

const CardCase = (props) => {
  const { className, heading, badgeText, postIcon, slug, ...rest } = props

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
        <img alt={heading} src={postIcon?.url} width={40} height={40} />
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
}

CardCase.propTypes = {
  className: PropTypes.string,
  heading: PropTypes.string.isRequired,
  badgeText: PropTypes.string.isRequired,
  postIcon: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired,
}

export default CardCase
