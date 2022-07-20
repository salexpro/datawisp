import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import * as s from './LogoLink.module.scss'

const LogoLink = (props) => {
  const { image, link, siteTitle, ...rest } = props

  return (
    <Link
      {...rest}
      to={link?.url}
      className={s.logoLink}
      title={siteTitle}
      aria-label={link?.text}
    >
      <img
        src={image?.url}
        width={image?.width}
        height={image?.height}
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
  link: PropTypes.shape({ url: PropTypes.string, text: PropTypes.string }),
  className: PropTypes.string,
  siteTitle: PropTypes.string.isRequired,
}

export default LogoLink
