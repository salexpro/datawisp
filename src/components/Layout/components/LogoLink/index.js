import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import RouteURL from '~routes'
import imgLogo from '~img/datawisp.svg'

import * as s from './LogoLink.module.scss'

const LogoLink = (props) => {
  const { siteTitle, ...rest } = props

  return (
    <Link
      {...rest}
      to={RouteURL.HOMEPAGE}
      className={s.logoLink}
      aria-label="Homepage"
    >
      <img src={imgLogo} width={134} height={24} alt={siteTitle} />
    </Link>
  )
}

LogoLink.defaultProps = {
  className: undefined,
}

LogoLink.propTypes = {
  className: PropTypes.string,
  siteTitle: PropTypes.string.isRequired,
}

export default LogoLink
