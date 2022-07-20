import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

const NavMenu = (props) => {
  const { navItems, variant, ...rest } = props

  return (
    <nav {...rest}>
      <Nav as="ul" variant={variant}>
        {navItems?.map(({ id, text, url }) => (
          <Nav.Item key={id} as="li">
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
  navItems: undefined,
}

NavMenu.propTypes = {
  variant: PropTypes.oneOf(['header', 'footer']),
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      text: PropTypes.string,
      url: PropTypes.string,
    })
  ),
}

export default NavMenu
