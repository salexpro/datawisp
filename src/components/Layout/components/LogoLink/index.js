import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import * as s from './LogoLink.module.scss'

const LogoLink = (props) => {
  const { image, link, siteTitle, height, className, ...rest } = props

  const { width: imgWidth = 134, height: imgHeight = 24 } = image || {}

  return (
    <Link
      {...rest}
      to={link?.url}
      className={classNames(s.logoLink, className)}
      title={siteTitle}
      aria-label={link?.text}
    >
      <img
        src={image?.url}
        width={height * (imgWidth / imgHeight)}
        height={height}
        alt={siteTitle}
      />
    </Link>
  )
}

LogoLink.defaultProps = {
  image: undefined,
  link: { url: '', text: '' },
  className: undefined,
}

LogoLink.propTypes = {
  image: PropTypes.shape({
    url: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
  }),
  height: PropTypes.number.isRequired,
  link: PropTypes.shape({ url: PropTypes.string, text: PropTypes.string }),
  className: PropTypes.string,
  siteTitle: PropTypes.string.isRequired,
}

export default LogoLink
