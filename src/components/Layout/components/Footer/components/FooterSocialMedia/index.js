import React from 'react'
import { Nav } from 'react-bootstrap'
import PropTypes from 'prop-types'

import Icon from '~components/Icon'
import NavSocialMedia from '~constants/navSocialMedia'

const FooterSocialMedia = (props) => {
  const { className, ...rest } = props

  return (
    <Nav {...rest} variant="footer-social" as="ul">
      {NavSocialMedia.map(({ iconName, title, href }) => (
        <Nav.Item key={title} as="li">
          <Nav.Link
            href={href}
            title={title}
            aria-label={title}
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <Icon name={iconName} size={20} />
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  )
}

FooterSocialMedia.defaultProps = {
  className: '',
}

FooterSocialMedia.propTypes = {
  className: PropTypes.string,
}

export default FooterSocialMedia
