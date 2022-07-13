import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import NavMenuStructure from '~constants/navMenuStructure'

const NavMenu = (props) => {
  const { variant, ...rest } = props

  return (
    <nav {...rest}>
      <Nav as="ul" variant={variant}>
        {NavMenuStructure.map(({ text, url }) => (
          <Nav.Item key={text} as="li">
            <Nav.Link as={Link} to={url}>
              {text}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
    </nav>
  )
}

NavMenu.defaultProps = {
  variant: 'header',
}

NavMenu.propTypes = {
  variant: PropTypes.oneOf(['header', 'footer']),
}

export default NavMenu
