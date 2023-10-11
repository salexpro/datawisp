import React from 'react'
import PropTypes from 'prop-types'
import cn from 'clsx'

import Icon from '~components/Icon'

import * as s from './FooterSocialMedia.module.scss'

const FooterSocialMedia = (props) => {
  const { socialLinks, className, ...rest } = props

  return (
    <div {...rest} className={cn(s.social, className)}>
      {socialLinks?.map(({ id, iconName, hoverColor, tooltip, url }) => (
        <a
          key={id}
          href={url}
          title={tooltip}
          aria-label={tooltip}
          target="_blank"
          rel="nofollow noopener noreferrer"
          style={{ color: hoverColor.hex }}
          className={s.socialLink}
        >
          <Icon name={iconName} size={20} />
        </a>
      ))}
    </div>
  )
}

FooterSocialMedia.defaultProps = {
  socialLinks: undefined,
  className: '',
}

FooterSocialMedia.propTypes = {
  socialLinks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      iconName: PropTypes.string,
      url: PropTypes.string,
      tooltip: PropTypes.string,
    })
  ),
  className: PropTypes.string,
}

export default FooterSocialMedia
