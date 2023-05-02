import React from 'react'
import { Nav } from 'react-bootstrap'
import PropTypes from 'prop-types'

import NavLink from '../NavLink'
import MenuDropdown from '../MenuDropdown'

const NavMenu = (props) => {
  const { navItems, variant, ...rest } = props

  return (
    <nav {...rest}>
      <Nav as="ul" variant={variant}>
        {navItems?.map((link) => {
          return !link?.subLinks ? (
            <Nav.Item key={link.id} as="li">
              <NavLink {...link} />
            </Nav.Item>
          ) : (
            <MenuDropdown key={link.id} {...link} />
          )
        })}
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
