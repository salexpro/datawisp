import React from 'react'
import PropTypes from 'prop-types'

import Icon from '~components/Icon'
import NavSocialMedia from '~constants/navSocialMedia'

import * as s from './FooterSocialMedia.module.scss'

const FooterSocialMedia = (props) => {
  const { className, ...rest } = props

  return (
    <div {...rest} className={s.social}>
      {NavSocialMedia.map(({ iconName, title, href }) => (
        <a
          key={title}
          href={href}
          title={title}
          aria-label={title}
          target="_blank"
          rel="nofollow noopener noreferrer"
          className={s.socialLink}
        >
          <Icon name={iconName} size={20} />
        </a>
      ))}
    </div>
  )
}

FooterSocialMedia.defaultProps = {
  className: '',
}

FooterSocialMedia.propTypes = {
  className: PropTypes.string,
}

export default FooterSocialMedia
